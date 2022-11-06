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

	function handleSearch(this: HTMLFormElement) {
		clearTimeout(timeout);

		timeout = setTimeout(async () => {
			const query = this.query.value.toLowerCase();

			articles = data.articles.filter((article: Article) => {
				if (article.title.toLowerCase().includes(query)) return article;
				if (query === '') return data.articles;
				return null;
			});
		}, 250);
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
	<form on:input|preventDefault={handleSearch}>
		<div class="flex items-center gap-3">
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
