<script lang="ts">
	export let data;

	const articles = data.articles;
</script>

<section id="articles">
	<ul class="space-y-4">
		{#each articles as a}
			<li>
				<a
					class="-ml-2 block rounded p-2 underline hover:bg-emerald-200 dark:hover:bg-emerald-900"
					href={a.metadata.slug}>{a.metadata.title}</a
				>
			</li>
		{/each}
	</ul>
</section>
