import { Router } from 'express';
import { db } from "../config/db";
import { events } from '../db/schema';
import { eq } from 'drizzle-orm';

export const eventsRouter = Router();

eventsRouter.get('/', async (req, res) => {
    const all = await db.select().from(events);
    res.json(all);
});

eventsRouter.post('/', async (req, res) => {
    const { country, team, league, date } = req.body;
    const [newEvent] = await db.insert(events).values({ country, team, league, date }).returning();
    res.status(201).json(newEvent);
});

eventsRouter.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { country, team, league, date } = req.body;
    const [updatedEvent] = await db.update(events).set({ country, team, league, date }).where(eq(events.id, Number(id))).returning();
    res.json(updatedEvent);
});

eventsRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await db.delete(events).where(eq(events.id, Number(id)));
    res.status(204).send();
});

export default eventsRouter;