import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 3000,
	},
	resolve: {
		alias: [
			{ find: '@/icons', replacement: path.resolve(__dirname, 'src', 'assets', 'icons') },
			{ find: '@/images', replacement: path.resolve(__dirname, 'src', 'assets', 'images') },
			{ find: '@', replacement: path.resolve(__dirname, 'src') },
		]
	},
	plugins: [react(), svgr()],
});
