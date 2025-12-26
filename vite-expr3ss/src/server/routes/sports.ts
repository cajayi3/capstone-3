import axios from "axios";
import express from "express";

const sportsRouter = express.Router();

sportsRouter.get('/', async (req, res) => {
    console.log("Received request for sports data");
    const apiKey = process.env.FOOTBALL_API_KEY || '';

    try {
        const headers = {
            'x-apisports-key': apiKey!,
            'x-rapidapi-host': 'v3.football.api-sports.io',
        };
    
    const [countriesResponse, leaguesResponse, teamResponse, eventsResponse] = await Promise.all([
        axios.get('https://v3.football.api-sports.io/countries', { headers  }),
        axios.get('https://v3.football.api-sports.io/leagues', { headers }),
        axios.get('https://v3.football.api-sports.io/teams', { headers, params: { country: 'England', },  }),
        axios.get('https://v3.football.api-sports.io/fixtures', { headers, params: { live: 'all', }, }),
    ]);

    res.json({
        countries: countriesResponse.data.response,
        leagues: leaguesResponse.data.response,
        teams: teamResponse.data.response,
        events: eventsResponse.data.response,
    });

    } catch (error) {
        console.error('Error fetching sports data:', error);
        res.status(500).json({ error: 'Failed to fetch sports data' });
    }
});

export default sportsRouter;