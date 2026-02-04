import { integer, pgTable, varchar, date } from "drizzle-orm/pg-core";
export const events = pgTable("events", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    country: varchar("country", { length: 255 }).notNull(),
    team: varchar("team", { length: 50 }).notNull(),
    league: varchar("league", { length: 50 }).notNull(),
    date: date("date").notNull(),
});
