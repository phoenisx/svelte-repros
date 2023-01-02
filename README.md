# Issues with SvelteKit


## Issue I:

**SvelteKit is not able to render the scripts in <svelte:head> when CSP is enabled**

- Uncomment the CSP config in svelte.config.js
- Build/Compile the project and serve.
- The Scripts in the header won't run

## Issue 2

**Mixes Component props inside to passed JSON data in from +page.server.ts**

- Keep prerender=true, and import a JSON data and return from page.server load function
- If this data is immediately used by a component which has non-serializable props like a function,
  the ssr compilation fails

