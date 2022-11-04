import { error } from '@sveltejs/kit';

export const req = async (
	url: RequestInfo | URL,
	options?: RequestInit | undefined,
	fetch?: any
) => {
	try {
		if (typeof url === 'string' && url.startsWith('/')) {
			url = `${import.meta.env.VITE_API_URL}${url}`;
		}

		options = {
			...options,
			method: options?.method || 'GET',
			headers: {
				'content-type': 'application/json',
				accept: 'application/json',
				...options?.headers
			}
		};

		console.log(options);

		const RES = await fetch(url, options);

		console.log(RES);

		return await RES.json();
	} catch (err) {
		throw error(400, { message: err?.toString() || 'Fetch unsuccessful.' });
	}
};
