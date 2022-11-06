import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const query = data.get('query');

		console.log(query);
	}
};
