import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const modules = import.meta.glob('../../lib/articles/*.md');

	for (const path in modules) {
		const slug = path.replace(/\.\.\/\.\.\/lib\/articles\/|\.md/gm, '');

		if (slug === params.slug) {
			const module = await import(`../../lib/articles/${params.slug}.md`);

			return {
				metadata: { ...module.metadata, slug: params.slug },
				Article: module.default
			};
		}
	}

	const static_mods = import.meta.glob('../../../static/*');

	for (const path in static_mods) {
		const slug = path.replace(/\.\.\/\.\.\/\.\.\/static\/|\.md/gm, '');

		if (slug === params.slug) return undefined;
	}

	throw error(404);
};
