<script lang="ts">
	import Head from '$lib/Head.svelte';
	import './syntax-highlighting.css';

	export let data;

	const Article = data.Article;
	const metadata = data.metadata;
</script>

<Head
	page={{
		title: metadata.title,
		description: metadata.description,
		url: `${import.meta.env.VITE_CLIENT_URL}/${metadata.slug}`
	}}
/>

<article
	class="prose prose-zinc prose-code:rounded prose-code:bg-emerald-200 prose-code:p-1 prose-code:before:hidden prose-code:after:hidden dark:prose-invert dark:prose-code:bg-emerald-900"
>
	<Article />
</article>
