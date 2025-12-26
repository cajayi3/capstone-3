import axios from 'axios';
import { EventData } from '../components/Datatable';


const API_BASE_URL = 'http://localhost:3000/api/events';

export const fetchEvents = async (): Promise<EventData[]> => {
    const response = await axios.get<EventData[]>(API_BASE_URL);
    return response.data.map((event) => ({
        ...event,
        date: new Date(event.date),
    }));
};

export const createEvent = async (event: Omit<EventData, 'id'>): Promise<EventData> => {
    const response = await axios.post<EventData>(API_BASE_URL, event);
    return response.data;
};

export const updateEvent = async (id: number, event: Omit<EventData, 'id'>): Promise<EventData> => {
    const response = await axios.put<EventData>(`${API_BASE_URL}/${id}`, event);
    return response.data;
};  

export const deleteEvent = async (id: number): Promise<void> => {
    await axios.delete(`${API_BASE_URL}/${id}`);
};

