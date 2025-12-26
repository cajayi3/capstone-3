CREATE TABLE "events" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "events_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"country" varchar(255) NOT NULL,
	"team" varchar(50) NOT NULL,
	"league" varchar(50) NOT NULL,
	"date" date NOT NULL
);
