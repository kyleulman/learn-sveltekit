import { req } from '$lib/utils/request';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	return {
		article: await req(`/learn-sveltekit/${params.slug}`)
	};
};
