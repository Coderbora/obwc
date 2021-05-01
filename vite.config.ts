import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    server: {
        port: 8000,
        strictPort: true,
        proxy: {
            '/api/': 'http://localhost:3000',
        },
    },
    build: {
        outDir: 'dist/public',
    },
});
