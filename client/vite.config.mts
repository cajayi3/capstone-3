import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
            },
        },
    },
    preview: {
        port: 10000,
        host: '0.0.0.0',
        allowedHosts: [
            'capstone-client-1yaf.onrender.com',
            'localhost',
            '127.0.0.1',
        ],
    },
    build: {
        outDir: '../server/public',
    },
})
