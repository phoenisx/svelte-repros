<script lang="ts">
   export let id: string;
   export let value: string;
   export let onUpdate: (id: string) => void;

   const handleChange = (e: Event) => {
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
