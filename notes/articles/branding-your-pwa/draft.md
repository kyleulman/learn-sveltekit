---
title: Branding Your PWA
description: Branding a Progressive Web App can be a bit of a challenge. Luckily, there are steps you can take to ensure your PWA looks great on every platform.
---

# {title}

{description}

> For your PWA to be operational, you must also set up a service worker and extend it to include offline functionality. To add a worker to your app, simply create an empty JavaScript file in the `src` directory and name it `service-worker.js`. To learn how to include offline functionality, please read the companion article <a data-sveltekit-reload href="/service-workers-offline">Make Your SvelteKit app available offline</a>.

The brand information for your app comes from the web manifest file. This file contains app metadata, including the details that appear in the title bar, the url from which the app will start, styling for a splash screen, display options, and icons, which often represent the face of your app.

## Setting up the Web Manifest File

In the `static` folder, create a file and name it `manifest.json`. Navigate to `app.html` and add a link to the file in the `head` of the document. Be sure to include `manifest` in the relationship attribute.

<!-- prettier-ignore -->
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        ...
        <link rel="manifest" href="/manifest.json" />
        ...
        %sveltekit.head%
    </head>
    <body>
        <div id="svelte">%sveltekit.body%</div>
    </body>
</html>
```

> Common convention dictates that this file should be named either `manifest.json` or `app.webmanifest`, but it can take any name as long as the file contains a JSON object. For clarity and consistency, I'll be using `manifest.json` throughout this tutorial.

Return to `manifest.json` and add the following:

```json
{
    "name": "Learn SvelteKit",
    "short_name": "Learn SvelteKit",
    "description": "Articles, tutorials, and updates revolving around the SvelteKit framework.",
    "start_url": ".",
    "icons": [
        // We'll handle icons in the next section of this article
    ],
    "theme_color": "#ff8c66",
    "background_color": "#ffffff",
    "orientation": "portrait",
    "display": "standalone"
}
```
