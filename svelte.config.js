import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

// FIX: this is bad and shouldn't be done in that way
let galleryEntries = [];

for (let i = 0; i < 49; i++) {
	galleryEntries.push(`/gallery/${i+1}`);
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		prerender: {
			crawl: true,
			entries: [
				"/",
				"/gallery",
				...galleryEntries,
			]
		},
		paths: {
			base: ""
		}
	}
};

export default config;
