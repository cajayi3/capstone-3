import { useState } from "react";
import Background from '../assets/images/flame.jpg';
import { dummyEventList, PageEnum, type Event } from "../components/Event.type";
import { Datatable } from "../components/Datatable";
import type { EventData } from "../components/Datatable"; 

const Dashboard: React.FC = () => {
    const [eventList, setEventList] = useState(dummyEventList as Event[]);
    const [shownPage, setShownPage] = useState(PageEnum.list);

    const toEvent = (data: EventData): Event => ({
        ...data,
        date: typeof data.date === "string" ? new Date(data.date) : data.date
    });

    const AddorUpdateEvent = (data: EventData) => {
        const existingEvent = eventList.find(item => item.id === data.id);
        if (existingEvent) {
            const updatedList = eventList.map(item => item.id === data.id ? toEvent(data) : item);
            setEventList(updatedList);
        } else {
            setEventList([...eventList, { ...toEvent(data), id: Date.now() }]);
        };

        setShownPage(PageEnum.list);
    };

    const deleteEvent = (data: EventData) => {
        const newList = eventList.filter(item => item.id !== data.id);
        setEventList(newList);
    }


    return (
        <div className="container mt-5">
            <div style={{ backgroundImage: `url(${Background})` }}><h1 className="text-capitalize text-center fst-italic fw-bold text-light rounded shadow-lg text-opacity-50">
                Dashboard
            </h1>
            </div>
            <p className="fst-italic fw-bold text-primary text-center text-capitalize">Welcome to the Dashboard! Here you can manage your events, view statistics, and access various features.</p>
            <section className="section-content">
                {shownPage === PageEnum.list && (

                    <Datatable list={eventList} onSubmitClickHnd={AddorUpdateEvent} onDeleteBtn={deleteEvent} />
                )}
            </section>
        </div>
    );
};

export default Dashboard;