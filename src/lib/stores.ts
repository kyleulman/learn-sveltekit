import type { Metadata } from '$lib/types';

export const site: Metadata = {
	title: 'Learn SvelteKit',
	description: `Documenting what's possible with SvelteKit.`,
	url: import.meta.env.VITE_CLIENT_URL,
	image_src: `${import.meta.env.VITE_CLIENT_URL}/card-1440x720.png`,
	image_alt: 'Banner logo.',
	twitter_card: 'summary_large_image',
	twitter_handle: 'kyleulman',
	type: 'website'
};
