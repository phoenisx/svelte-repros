
<script>
// @ts-nocheck

   export let id;
   export let value;
   export let onUpdate;

   const handleChange = (e) => {
      e.preventDefault();
      onUpdate && onUpdate(id);
   }
</script>

<div>
   <p>{value}</p>
   <button on:click={handleChange}>
      Click
   </button>
</div>
