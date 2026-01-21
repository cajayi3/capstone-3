import { useEffect, useState } from "react";
import { fetchEvents, createEvent, updateEvent, deleteEvent } from "../API/EventService";
import { EventData } from "./Datatable";
import Profiles from "./Profiles";

type Sports = {
    countries?: any[];
    leagues?: any[];
    teams?: any[];
    events?: any[];
};


export const EventManager = () => {
    const [events, setEvents] = useState<EventData[]>([]);
    const [sports, setSportsData] = useState<Sports | null>(null);

    const loadEvents = async () => {
        try {
            const data = await fetchEvents();
            console.log('Fetched events:', data);
            setEvents(data);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    useEffect(() => {
        const fetchSportsData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/sports');
                const data: Sports = await response.json();
                console.log('Fetched sports data:', data);
                setSportsData(data);
            } catch (error) {
                console.error('Error fetching sports data:', error);
            }
        };

        fetchSportsData();
        loadEvents();
    }, []);

    const handleAddorUpdate = async (event: EventData) => {
        try {
            if (event.id) {
                await updateEvent(event.id, event);
            } else {
                await createEvent(event);
            }
            await loadEvents();
        } catch (error) {
            console.error('Error adding or updating event:', error);
        }
    };

    const handleDelete = async (event: EventData) => {
        try {
            await deleteEvent(event.id);
            await loadEvents();
        } catch (error) {
            console.error('Error deleting event:', error);
        };
    };


    return (
        <div>
            <Profiles list={events} sports={sports || { countries: [], leagues: [], teams: [], events: [] }} onSubmitClickHnd={handleAddorUpdate} onDeleteBtn={handleDelete} />
        </div>
    );
};