<script lang="ts">
	import Head from '$lib/Head.svelte';

	export let data;

	const articles = data.articles;

	let timeout: NodeJS.Timeout;

	function handleSubmit(this: HTMLFormElement) {
		clearTimeout(timeout);

		timeout = setTimeout(async () => {
			const data = new FormData(this);

			await fetch(this.action, {
				method: 'POST',
				body: data
			});
		}, 1000);
	}
</script>

<Head
	page={{
		title: 'Home',
		description: "Explore what's possible with SvelteKit.",
		url: `${import.meta.env.VITE_CLIENT_URL}`
	}}
/>

<section id="search">
	<form method="POST" on:input|preventDefault={handleSubmit}>
		<div class="flex items-center gap-1">
			<label for="query"> Search </label>
			<input type="text" name="query" id="query" class="grow bg-zinc-800" />
		</div>
	</form>
</section>

<section id="articles">
	<ul class="space-y-4">
		{#each articles as a}
			<li>
				<a
					data-sveltekit-prefetch
					class="-ml-2 block rounded p-2 underline transition hover:bg-zinc-900 hover:text-zinc-50  dark:hover:bg-emerald-200 dark:hover:text-zinc-900"
					href={a.slug}>{a.title}</a
				>
			</li>
		{/each}
	</ul>
</section>
