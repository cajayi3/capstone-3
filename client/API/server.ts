const BASE_URL = `http://localhost:3000/events`;  

export const server_calls = {
    get: async () => {
        try {
            const response = await fetch(`${BASE_URL}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Failed to fetch data:", error);
            throw error;
        }
    },

    create: async (data: any) => {
        try {
            const response = await fetch(`${BASE_URL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error(`Failed to create: ${response.status} ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            console.error("Failed to create data:", error);
            throw error;
        }
    },

    update: async (id: string, data: any) => {
        try {
            const response = await fetch(`${BASE_URL}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error(`failed to update: ${response.status} ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            console.error("Failed to update data:", error);
            throw error;
        }
    },

    delete: async (id: string) => {
        try {
            const response = await fetch(`${BASE_URL}/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error(`Failed to delete: ${response.status} ${response.statusText}`);
            }
        } catch (error) {
            console.error("Failed to delete data:", error);
            throw error;
        }
    },
};