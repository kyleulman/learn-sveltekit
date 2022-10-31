import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	/*
	 * handle(): runs on every server request
	 * event: represents the request
	 * resolve(): renders the route, generates Response
	 */

	console.log(event.params);

	event.locals = {
		info: 'Some information to be passed to server-only routes'
	};

	// console.log('Event:', event);

	const response = await resolve(event);

	// Set headers on the response
	response.headers.set('x-custom-header', 'potato');

	return response;
};
