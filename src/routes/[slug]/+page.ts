import { req } from '$lib/utils/request';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
	return {
		article: await req(`/learn-sveltekit/${params.slug}`, {}, fetch)
	};
};
