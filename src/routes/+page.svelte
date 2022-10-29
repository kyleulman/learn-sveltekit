<script lang="ts">
	export let data;

	const articles = data.articles;
</script>

<h1>learnsveltekit</h1>
<ul>
	{#each articles as a}
		<li>
			<a href={a.metadata.slug}>{a.metadata.title}</a>
		</li>
	{/each}
</ul>
