import { Request, Response } from "express";
import { db } from "../config/db.ts";
import { events } from "../db/schema.ts";
import { InferModel, eq } from "drizzle-orm";

export type Event = InferModel<typeof events>;
export type NewEvent = InferModel<typeof events, "insert">;

// const getAllevents = async (): Promise<Event[]> => {
//     return await db.select().from(events);
// };


const formattedDate = (input: string): string => {
    const d = new Date(input);
    return d.toISOString().split('T')[0];
};

const createNewEvent = async (data: Partial<Event>) => {
    console.log("Creating event with data:", data);
    const [newEvent] = await db.insert(events).values({
        country: data.country!,
        team: data.team!,
        league: data.league!,
        date: data.date ? formattedDate(data.date) : formattedDate(new Date().toISOString()),
    })
        .returning();

    return newEvent;
};

const updateExistingEvent = async (id: number, data: Partial<Event>) => {
    console.log("Updating event with ID:", id, "and data:", data);
    const [updatedEvent] = await db.update(events)
        .set({
            country: data.country,
            team: data.team,
            league: data.league,
            date: data.date ? formattedDate(data.date) : formattedDate(new Date().toISOString()),
        })
        .where(eq(events.id, id))
        .returning();
    return updatedEvent;
};

const deleteEventsById = async (id: string): Promise<void> => {
    await db.delete(events).where(eq(events.id, Number(id)));
};

export const getEvents = async (req: Request, res: Response) => {
    try {
        const allEvents = await db.select().from(events);
        res.json(allEvents);
    } catch (error) {
        console.error("Error fetching events:", error);
        res.status(500).json({ error: "Failed to fetch events" });
    }
};

export const createEvent = async (req: Request, res: Response) => {
    try {
        console.log("Request body:", req.body);
        const newEvent = await createNewEvent(req.body);
        res.json(newEvent);
    } catch (error) {
        console.error("Error when creating event:", error);
        res.status(500).json({ error: "Failed to create event", details: error instanceof Error ? error.message : error });
    }
};

export const updateEvent = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const updatedEvent = await updateExistingEvent(Number(id), req.body);
        if (!updatedEvent) {
            return res.json({ error: "Event not found" });
        }
        res.status(200).json(updatedEvent);
    } catch (error) {
        console.log("Error when updating event:", error);
        res.json({ error: "Failed to update event" });
    }
};

export const deleteEvent = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await deleteEventsById(id);
        res.send();
    } catch (error) {
        console.error("Error when deleting event:", error);
        res.json({ error: "Failed to delete event" });
    }
};