import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        open: true,
        port: 9001,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3000',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, ''),
            },
        },
        watch: {
            usePolling: true, // 修复HMR热更新失效
        },
        host: true,
    },
});
