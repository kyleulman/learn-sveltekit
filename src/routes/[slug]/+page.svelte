<script lang="ts">
	import Head from '$lib/Head.svelte';
	export let data;

	import '$lib/highlight.css';

	const metadata = data?.article.metadata;
	const body = data?.article.body;
</script>

<Head
	page={{
		title: metadata.title,
		description: metadata.description,
		url: `${import.meta.env.VITE_CLIENT_URL}/${metadata.slug}`
	}}
/>

<article
	class="prose prose-zinc prose-blockquote:border-emerald-900 prose-code:p-1 prose-code:before:hidden prose-code:after:hidden prose-li:marker:text-emerald-900 dark:prose-invert dark:prose-blockquote:border-emerald-200 dark:prose-li:marker:text-emerald-200"
>
	{@html body}
</article>
