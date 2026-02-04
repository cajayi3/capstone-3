import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import errorhandler from "errorhandler";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import eventsRouter from './routes/event.ts';
import sportsRouter from './routes/sports.ts';
import { matchedData, validationResult, query } from "express-validator";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({
    path: path.resolve(__dirname, '.env'),
});
const app = express();
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Too many requests, please try again later.",
    standardHeaders: true,
    legacyHeaders: false,
});
const corsOptions = {
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(helmet());
app.use(limiter);
app.use(errorhandler());
app.use('/api/events', eventsRouter);
app.use('/api/sports', sportsRouter);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error: Malfunction has Occured...');
});
app.get("/", (req, res) => {
    res.send("Welcome to the Vite Express Server!");
});
app.get("/profiles", (req, res) => {
    res.json({ message: "This is the profiles endpoint." });
});
app.get("/hello", [query("person").optional().notEmpty()], (req, res) => {
    const result = validationResult(req);
    const data = matchedData(req);
    if (result.isEmpty()) {
        return res.send(`Hello, ${data.person || "Guest"}!`);
    }
    res.status(400).send({ errors: result.array() });
});
app.get('/live', async (req, res) => {
    try {
        const { fetchLiveFixtures } = await import('./services/liveFixtures.ts');
        const liveFixtures = await fetchLiveFixtures();
        res.status(200).json(liveFixtures);
    }
    catch (error) {
        console.error("Error fetching live fixtures:", error);
        res.status(500).json({ error: "Failed to fetch live fixtures" });
    }
});
app.use((req, res) => {
    res.status(404).send({
        error: "Not Found",
        message: "The requested resource could not be found.",
    });
});
const port = process.env.PORT || 3000;
const RunServer = async () => {
    try {
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    }
    catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};
RunServer();
