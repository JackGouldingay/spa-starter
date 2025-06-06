import { defineConfig } from 'vite';
import path from 'node:path';
import react from '@vitejs/plugin-react';
import terser from '@rollup/plugin-terser';
import { visualizer } from 'rollup-plugin-visualizer';
import tailwindcss from '@tailwindcss/vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
    build: {
        minify: true,
        outDir: path.resolve(__dirname, 'dist'),
        lib: {
            entry: path.resolve(__dirname, './src/index.tsx'),
            name: 'Starter',
            fileName: (format) => `starter.${format}.js`
        },
        cssCodeSplit: false,
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: [],
            input: "src/index.tsx",
            output: {
                format: "system",
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                }
            },
            plugins: [terser()],
            preserveEntrySignatures: "strict"
        }
    },
    server: {
        host: true,
        server: "127.0.0.1",
        port: 3000
    },
    plugins: [
        react(),
        visualizer(),
        basicSsl(),
        tailwindcss()
    ],
    define: { }
})