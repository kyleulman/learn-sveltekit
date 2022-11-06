import { error } from '@sveltejs/kit';

type Input = RequestInfo | URL;
type Init = RequestInit | undefined;

export const req = async (
	input: Input,
	init: Init,
	fetch: (input: Input, init: Init) => Promise<Response>
) => {
	try {
		if (typeof input === 'string' && input.startsWith('/')) {
			input = `${import.meta.env.VITE_API_URL}${input}`;
		}

		const options: RequestInit = {
			method: init?.method || 'GET',
			headers: {
				'content-type': 'application/json',
				accept: 'application/json',
				...init?.headers
			}
		};

		if (init?.body) options.body = init?.body;

		const RES = await fetch(input, init);

		return await RES.json();
	} catch (err) {
		throw error(400, { message: err?.toString() || 'Fetch unsuccessful.' });
	}
};
