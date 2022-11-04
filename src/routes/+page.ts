import { req } from '$lib/utils/request';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	return {
		articles: await req(`/learn-sveltekit`, {}, fetch)
	};
};
