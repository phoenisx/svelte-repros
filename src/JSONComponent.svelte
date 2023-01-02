<script>
// @ts-nocheck

  import JsonIssue from "./JSONIssue.svelte";
  import { page } from "$app/stores";

  let activeId = "1";
  const onUpdate = (id) => {
    activeId =
      id === "1" ? "2" : activeId === "2" ? "3" : activeId === "3" ? "1" : "1";
    console.log("Is Failing?");
  };
  $: {
    console.log(
      "Date: ",
      $page.data.data.find((i) => i.id === activeId)
    );
  }
</script>

{#if !!activeId}
  <JsonIssue {...$page.data.data.find((i) => i.id === activeId)} {onUpdate} />
{/if}
