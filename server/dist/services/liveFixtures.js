import axios from 'axios';
export const fetchLiveFixtures = async () => {
    const options = {
        method: 'get',
        url: 'https://v3.football.api-sports.io/fixtures?live=all',
        headers: {
            'x-apisports-key': process.env.FOOTBALL_API_KEY || '',
        },
    };
    try {
        const response = await axios.request(options);
        return response.data;
    }
    catch (error) {
        console.error("Error fetching live fixtures:", error);
        throw new Error("Failed to fetch live fixtures");
    }
};
