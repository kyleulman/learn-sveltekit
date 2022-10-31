import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
	const RES = await fetch(
		`http://localhost:5173/learn-sveltekit/${params.slug}`
	);

	const RET = await RES.json();

	return {
		article: RET
	};
};
