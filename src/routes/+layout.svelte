<script>
	import '$lib/app.css';
</script>

<header class="my-8">
	<h1 class="text-2xl"><a href="/">learnsveltekit</a></h1>
</header>
<main class="grow">
	<slot />
</main>
<footer class="my-4">
	&copy; {new Date().getFullYear()} Kyle Ulman
</footer>
