import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const RES = await fetch('http://localhost:5173/learn-sveltekit');

	const RET = await RES.json();

	return {
		articles: RET
	};
};
