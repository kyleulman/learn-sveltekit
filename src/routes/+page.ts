import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const modules = import.meta.glob('../lib/articles/*.md');

	let articles: Array<object> = [];

	for (const path in modules) {
		const slug = path.replace(/\.\.\/lib\/articles\/|\.md/gm, '');

		// TODO: Type this more correctly
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const mod: any = await modules[path]();

		articles = [
			...articles,
			{
				metadata: { ...mod.metadata, slug }
			}
		];
	}

	return {
		articles
	};
};
