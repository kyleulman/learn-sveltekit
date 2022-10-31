import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const RES = await fetch(`${import.meta.env.VITE_API_URL}/learn-sveltekit`, {
		headers: {
			accept: 'application/json'
		}
	});

	const RET = await RES.json();

	return {
		articles: RET
	};
};
