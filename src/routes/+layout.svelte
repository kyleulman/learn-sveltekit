<script>
	import '$lib/app.css';
</script>

<header class="my-8">
	<h1 class="text-2xl">
		<a href="/" class="dark:text-emerald-200">learnsveltekit</a>
	</h1>
</header>
<main class="grow">
	<slot />
</main>
<footer class="my-4 mt-12">
	&copy; {new Date().getFullYear()} Kyle Ulman
</footer>
