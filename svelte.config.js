import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		// csp: {
		// 	mode: 'auto',
		// 	directives: {
		// 		'default-src': ['self'],
		// 		'img-src': ['self', 'data:'],
		// 		'script-src': ['self', 'localhost', 'unsafe-inline'],
		// 		'connect-src': ['self'],
		// 		'style-src': ['self', 'unsafe-inline', 'fonts.googleapis.com'],
		// 		'font-src': ['self', 'fonts.gstatic.com'],
		// 		'base-uri': ['self'],
		// 	}
		// },
	}
};

export default config;
