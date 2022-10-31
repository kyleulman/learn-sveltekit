import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
	const RES = await fetch(
		`${import.meta.env.VITE_API_URL}/learn-sveltekit/${params.slug}`
	);

	const RET = await RES.json();

	return {
		article: RET
	};
};
