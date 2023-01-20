<script>
  import { onMount } from "svelte";


  /** @type {string[]}*/
  export let srcsets = [];
  /** @type {string[]}*/
  export let sizes = [];
  /** @type {string[]}*/
  export let types = [];

  /** @type {HTMLElement} */
  let ref$;

  const onLoad = () => {
    console.log("Load Called");
  };

  const testLoad = (/** @type {HTMLElement}*/ node) => {
    const handler = () => console.log("Use:Directive onLoad");
    node.addEventListener("load", handler);

    console.log("Ref not available: ", ref$);

    return {
      destroy() {
        node.removeEventListener("load", handler);
      },
    };
  };

  onMount(() => {
   console.log("Ref available on Mount: ", ref$);
  })
</script>

<div class="lazy-image" style:width="100%">
   <div style:padding="66.67% 0 0" style:width="100%" />
   <picture>
     {#each srcsets as srcset, index}
       <source {srcset} sizes={sizes[index]} type={types[index]} />
     {/each}
     <img bind:this={ref$} on:load={onLoad} use:testLoad loading="lazy" alt="" />
   </picture>
</div>

<style>
   .lazy-image {
      display: flex;
      position: relative;
   }

   picture {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
   }
   img {
      width: 100%;
   }
</style>
