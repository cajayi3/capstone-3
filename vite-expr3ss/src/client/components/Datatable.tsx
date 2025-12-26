import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';

export type EventData = {
    id: number;
    country: string;
    team: string;
    league: string;
    date: Date | string;
};

type Props = {
    list: EventData[];
    onSubmitClickHnd: (data: EventData) => void;
    onDeleteBtn: (data: EventData) => void;
}

export const Datatable = (props: Props) => {
    const [showAdd, setShowAdd] = useState(false);
    const handleClose = () => setShowAdd(false);
    const handleAddShow = () => setShowAdd(true);

    const [showUpdate, setShowUpdate] = useState(false);
    const handleupdateClose = () => setShowUpdate(false);
    const [dataToUpdate, setDataToUpdate] = useState<EventData | null>(null);

    const handleUpdateShow = (event: EventData) => {
        setDataToUpdate(event);
        setShowUpdate(true);
    };

    const [dataToShow, setDataToShow] = useState<EventData | null>(null);
    const [showView, setShowView] = useState(false);
    const handleViewClose = () => setShowView(false);

    const handleViewShow = (event: EventData) => {
        setDataToShow(event);
        setShowView(true);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const newEvent: EventData = {
            id: Math.floor(Math.random() * 1000), 
            country: formData.get('country') as string,
            team: formData.get('team') as string,
            league: formData.get('league') as string,
            date: formData.get('date') as string,

        };

        props.onSubmitClickHnd(newEvent);
        setShowAdd(false);
    };

    const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        if (!dataToUpdate) return;

        const updatedEvent: EventData = {
            ...dataToUpdate,
            country: formData.get('country') as string,
            team: formData.get('team') as string,
            league: formData.get('league') as string,
            date: formData.get('date') as string,
        };

        props.onSubmitClickHnd(updatedEvent);
        setShowUpdate(false);
    };

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'country',
            headerName: 'Country',
            width: 150,
            editable: true,
        },
        {
            field: 'team',
            headerName: 'Team',
            width: 150,
            editable: true,
        },
        {
            field: 'league',
            headerName: 'League',
            width: 150,
            editable: true,
        },
        {
            field: 'date',
            headerName: 'Date',
            type: 'date',
            width: 150,
            editable: true,
        },
        {
            field: 'view',
            headerName: 'View',
            width: 100,
            renderCell: (params) => (
                <Button variant="primary" onClick={() => handleViewShow(params.row)}>
                    View
                </Button>
            ),
        },
        {
            field: 'edit',
            headerName: 'Edit',
            width: 100,
            renderCell: (params) => (
                <Button variant="warning" onClick={() => handleUpdateShow(params.row)}>
                    Edit
                </Button>
            ),
        },
        {
            field: 'delete',
            headerName: 'Delete',
            width: 100,
            renderCell: (params) => (
                <Button variant="danger" onClick={() => props.onDeleteBtn(params.row)}>
                    Delete
                </Button>
            ),
        },

    ];

    return (
        <>
            <Button variant="success" className='m-5' onClick={handleAddShow}>
                Add New Event
            </Button>

            <Modal show={showView} onHide={handleViewClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-center fst-italic fw-bold text-primary'>Event Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {dataToShow && (
                        <form>
                            <div>
                                <div>
                                    <label>Location: {dataToShow.country}</label>
                                </div>
                                <div>
                                    <label>Team: {dataToShow.team}</label>
                                </div>
                                <div>
                                    <label>League: {dataToShow.league}</label>
                                </div>
                                <div>
                                    <label>Date: {dataToShow.date instanceof Date ? dataToShow.date.toLocaleDateString() : dataToShow.date}</label>
                                </div>
                            </div>
                            <Modal.Footer>
                                <Button variant="danger" onClick={handleViewClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </form>
                    )}
                </Modal.Body>
            </Modal>

            <Modal show={showAdd} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-center fst-italic fw-bold text-success'>Add New Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="location" className="form-label shadow-lg fst-italic fw-bold text-capitalize text-success">Country</label>
                            <input type="text" className="form-control shadow-lg rounded" required id="location1" name="country" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="team" className="form-label shadow-lg fst-italic fw-bold text-capitalize text-success">Team</label>
                            <input type="text" className="form-control shadow-lg rounded" required id="team1" name="team" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="league" className="form-label shadow-lg fst-italic fw-bold text-capitalize text-success">League</label>
                            <input type="text" className="form-control shadow-lg rounded" required id="league1" name="league" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="date" className="form-label shadow-lg fst-italic fw-bold text-capitalize text-success">Date</label>
                            <input
                                type="date"
                                className="form-control shadow-lg rounded"
                                id="date1"
                                name="date"
                                required
                                onChange={(e) => {
                                    const dateValue = e.target.value;
                                    const dateObject = new Date(dateValue);
                                    e.target.value = dateObject.toISOString().split('T')[0];
                                }}
                            />

                        </div>
                        <Modal.Footer>
                            <section>
                                <Button type="submit" className="rounded fst-italic fw-bold" variant='success' value="Add New Event">Add New Event</Button>
                            </section>
                            <Button variant="danger" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal.Body>
            </Modal>

            <Modal show={showUpdate} onHide={handleupdateClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-warning fst-italic fw-bold'>Update Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleUpdate}>
                        <div className="mb-3">
                            <label htmlFor="country" className="form-label shadow-lg text-capitalize fst-italic fw-bold text-warning">Country</label>
                            <input type="text" className="form-control shadow-lg rounded" required id="country" name="country" defaultValue={dataToUpdate?.country}/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="team" className="form-label shadow-lg text-capitalize fst-italic fw-bold text-warning">Team</label>
                            <input type="text" className="form-control shadow-lg rounded" required id="team" name="team" defaultValue={dataToUpdate?.team}/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="league" className="form-label shadow-lg text-capitalize fst-italic fw-bold text-warning">League</label>
                            <input type="text" className="form-control shadow-lg rounded" required id="league" name="league"defaultValue={dataToUpdate?.league} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="date" className="form-label shadow-lg text-capitalize fst-italic fw-bold text-warning">Date</label>
                            <input type="date" className="form-control shadow-lg rounded" id="date" name="date" required defaultValue={dataToUpdate?.date ? typeof dataToUpdate.date === "string" ? dataToUpdate.date : new Date(dataToUpdate.date).toISOString().split("T")[0] : ""}/>
                        </div>

                        <Modal.Footer>
                            <section>
                                <button type="submit" className="rounded text-warning fst-italic fw-bold" value="Update Event">Update</button>
                            </section>
                            <Button variant="danger" onClick={handleupdateClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal.Body >
            </Modal >

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={props.list}
                    columns={columns}
                    pageSizeOptions={[5]}
                    initialState={{
                        pagination: {
                            paginationModel: { pageSize: 5, page: 0 },
                        },
                    }}
                    checkboxSelection
                />
            </div>
        </>
    );
}

