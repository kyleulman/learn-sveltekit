<script lang="ts">
	import type { PageData } from './$types';
	import Head from '$lib/Head.svelte';

	export let data: PageData;

	let articles = data.articles;
	let timeout: NodeJS.Timeout;

	interface Article {
		title: string;
		description: string;
		slug: string;
	}

	function handleSubmit(this: HTMLFormElement) {
		clearTimeout(timeout);

		timeout = setTimeout(async () => {
			const query = this.query.value;

			articles = data.articles.filter((article: Article) => {
				if (article.title.includes(query)) return article;
				if (query === '') return data.articles;
				return null;
			});

			// const data = new FormData(this);
			// await fetch(this.action, {
			// 	method: 'POST',
			// 	body: data
			// });
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
