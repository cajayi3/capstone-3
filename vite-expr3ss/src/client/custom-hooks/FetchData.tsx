import { useState, useEffect } from "react";
import { server_calls } from "../API/server";


export const useGetData = () => {
    const [EventData, setData] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    async function handleDataFetch() {
        try {
            const result = await server_calls.get();
            setData(result.events || []);
        } catch (err) {
            console.error("Failed to fetch data:", err);
            setError("Failed to fetch data. Please try again later.");
        }
    }

    useEffect(() => {
        handleDataFetch();
    }, []);

    return { EventData, getData: handleDataFetch, error };
};