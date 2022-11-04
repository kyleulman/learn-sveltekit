import { error } from '@sveltejs/kit';

export const req = async (
	url: RequestInfo | URL,
	opts?: RequestInit | undefined,
	fetch?: any
) => {
	try {
		if (typeof url === 'string' && url.startsWith('/')) {
			url = `${import.meta.env.VITE_API_URL}${url}`;
		}

		const options: RequestInit = {
			method: opts?.method || 'GET',
			headers: {
				'content-type': 'application/json',
				accept: 'application/json',
				...opts?.headers
			}
		};

		if (opts?.body) options.body = opts?.body;

		const RES = await fetch(url, opts);
		return await RES.json();
	} catch (err) {
		throw error(400, { message: err?.toString() || 'Fetch unsuccessful.' });
	}
};
