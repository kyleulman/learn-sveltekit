import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const module = await import(`../../lib/articles/${params.slug}.md`);

	return {
		metadata: { ...module.metadata, slug: params.slug },
		Article: module.default
	};
};
