<script>
  import { deserialize } from "$app/forms";
  import { impureModification } from "$lib/utils";

  let submitting = false;
  let error = { hasError: false };

  async function handleSubmit(e) {
    submitting = true;
    const location = e.currentTarget.action;
    const response = await fetch(location, {
      method: "POST",
      body: new FormData(),
    });

    const result = deserialize(await response.text());
    submitting = false;

    if (result.type === "success") {
      alert("Success");
    }

    // impureModification(result, error);
    error = { hasError: true };
  }
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<form method="post" action="/" on:submit|preventDefault={handleSubmit}>
  <button>Submit</button>
  <span>I am visible&nbsp;&nbsp;&nbsp;&nbsp;</span>
  {#if error.hasError}
    <span>Some Error</span>
  {/if}
</form>
