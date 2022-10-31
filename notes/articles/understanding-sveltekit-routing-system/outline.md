# Understanding the SvelteKit Routing System

At the end of July, [Rich Harris announced](https://github.com/sveltejs/kit/discussions/5748) that SvelteKit would be undergoing some significant changes to its routing system and the way the `load` function works. These new design changes would make it clearer regarding which files do what as well as how and where data is loaded. In this article, I'll be breaking down the routing system.

## First Things First...

If you happen to have project that runs a version of SvelteKit from before the update, Rich also posted a [migration guide](https://github.com/sveltejs/kit/discussions/5774) which contains everything you need to get up to speed, including a handy script that will convert your project files to the new convention.

## A Clean Slate

Throughout this guide, I'll be using a bare SvelteKit project to illustrate where things go. To follow along, run `npm create svelte@latest routing-throwaway`, select `Skeleton project`, and `No` for each of the add-ons.

The file structure will include `src` and `static` directories, along with config files, `package.json`, and a `README.md` file.

## Working With Routes

Inside the `src` directory, you will find a `routes` directory. This is the heart of the routing system. Inside `routes` is a single `+page.svelte` file. This defines a page component, and is akin to `index.html` in a vanilla JavaScript project.

```md
- routing-throwaway
  - src
    - routes
      - +page.svelte
    - app.html
  - static
  - ...project files
```

### Adding Routes

For additional pages, add a directory with the name that you'd like the page to be called, and include a `+page.svelte` inside the directory.

```md
- routes
  - +page.svelte (your.website/)
  - /about
    - +page.svelte (your.website/about)
```

> Remember, page components are denoted with `+page.svelte` and their parent directory determines their route name. This allows for a file structure where different route file types to be grouped together in a logical way.

## Route File Types

Along with the standard page component `+page.svelte`, SvelteKit offers specialized page components and script files that help control when and how to display certain pages and manage data, respectively.

### +layout.svelte

### +error.svelte

### Server/Client Data Loading

`+page.js` and `+layout.js` can run on the server and the client, making them ideal for loading data from an external API or pulling down request properties, like page params or information about the url.

### Server-side Only

> To differentiate route files from regular components and script files, prepend their file name with a "+".

### Non-page Components
