import { useState, useEffect } from "react";
import { Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Background from '../assets/images/business.jpg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { EventData } from "./Datatable";

type Sports = {
    countries?: any[];
    leagues?: any[];
    teams?: any[];
    events?: any[];
};

type Props = {
    list: EventData[];
    sports: Sports;
    onSubmitClickHnd: (data: EventData) => void;
    onDeleteBtn: (data: EventData) => void;
};

const baseUrl = 'http://localhost:3000/api/sports';

const Profiles = ({ list, sports, onSubmitClickHnd, onDeleteBtn }: Props) => {

    useEffect(() => {
        fetch('/api/sports')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched sports data:', data);
            })

        console.log('Profiles rendered with list:', list);
        console.log('countries:', sports.countries);
        console.log('leagues:', sports.leagues);
        console.log('teams:', sports.teams);
        console.log('events:', sports.events);
    }, [list, sports]);

    const createForm = useForm<EventData>()
    const updateForm = useForm<EventData>()

    const [showAdd, setShowAdd] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);
    const [dataToUpdate, setDataToUpdate] = useState<EventData | null>(null);

    const handleCreateSubmit = (formData: EventData) => {
        onSubmitClickHnd(formData);
        setShowAdd(false);
    };

    const handleUpdateSubmit = async (formData: EventData) => {
        if (!dataToUpdate?.id) return;
        onSubmitClickHnd({ ...formData, id: dataToUpdate.id });
        setShowUpdate(false);
    };

    return (
        <div
            style={{
                backgroundImage: `url(${Background})`,
                height: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',

            }}>
            <div>
                <h1 className="text-light mb-5 text-center align-items-center">
                    <AccountCircleIcon fontSize='large' className='me-2' />Profiles</h1>
            </div>
            <div className="text-center ms-5 p-5">
                <p className="text-light border rounded shadow-lg border-success w-50">Here you can view and manage profiles for the month...</p>
            </div>

            <div className="container mb-4 shadow-lg">
                <Button variant="success" onClick={() => setShowAdd(true)} type="button" className="text-light text-center ">
                    Add Event
                </Button>
                <Modal show={showAdd} onHide={() => setShowAdd(false)} aria-labelledby="form-dialog-title shadow-lg">
                    <Modal.Header closeButton>
                        <Modal.Title className="text-center text-primary">Add Event</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={createForm.handleSubmit(handleCreateSubmit)}>
                            <input {...createForm.register('country')} name='country' className='rounded primary' required placeholder='Country' />
                            <input {...createForm.register('team')} name='team' className='rounded primary' required placeholder='Team' />
                            <input {...createForm.register('league')} name='league' className='rounded primary' required placeholder='League' />
                            <input {...createForm.register('date')} name='date' className='rounded primary' required type='Date' />
                            <Modal.Footer>
                                <Button onClick={() => setShowAdd(false)} variant="dark" className="mt-3">
                                    Cancel
                                </Button>
                                <Button type="submit" variant="primary" className="mt-3 ms-4 rounded text-center">
                                    Submit
                                </Button>
                            </Modal.Footer>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>

            <Modal show={showUpdate} onHide={() => setShowUpdate(false)} aria-labelledby="form-dialog-title">
                <Modal.Header closeButton>
                    <Modal.Title>Update Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={updateForm.handleSubmit(handleUpdateSubmit)}>
                        <div className="mb-3">
                            <input {...updateForm.register('country')} name='country' className='rounded warning' required placeholder='Country' />
                            <input {...updateForm.register('team')} name='team' className='rounded warning' required placeholder='Team' />
                            <input {...updateForm.register('league')} name='league' className='rounded warning' required placeholder='League' />
                            <input {...updateForm.register('date')} name='date' className='rounded warning' required type='Date' />
                        </div>
                        <Modal.Footer>
                            <Button onClick={() => setShowUpdate(false)} variant="dark" className="mt-3">
                                Cancel
                            </Button>
                            <Button type="submit" variant="success" className="mt-3 ms-4 rounded text-center">
                                Submit
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal.Body>
            </Modal>
            <div className="d-flex flex-wrap gap-3 text-center justify-content-start p-4 shadow">
                {(list ?? []).map((event) => (
                    <div key={event.id} className="card shadow-lg" style={{ width: '22rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">{event.country}</h5>
                            <p className="card-text">Team: {event.team}</p>
                            <p className="card-text">League: {event.league}</p>
                            <p className="card-text">Date: {event.date instanceof Date ? event.date.toLocaleDateString() : event.date}</p>
                            <Button variant="warning" onClick={() => {
                                setDataToUpdate(event);
                                updateForm.reset(event);
                                setShowUpdate(true);
                            }} className="rounded me-2">Update</Button>
                            <Button onClick={() => onDeleteBtn(event)} className="btn btn-danger">Delete</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};
export default Profiles;


