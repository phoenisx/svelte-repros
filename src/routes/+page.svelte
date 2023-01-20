<script>
//   import type { PageData } from "./$types";
  import Image from "./Image.svelte";
</script>

<div style:width="300px">
	<Image
	  srcsets={[
		 "https://picsum.photos/300/200.webp 300w, https://picsum.photos/600/400.webp 600w",
		 "https://picsum.photos/200/200.avif 300w, https://picsum.photos/600/400.avif 600w",
	  ]}
	  sizes={["(min-width: 600px) 600w, 300w", "(min-width: 600px) 600w, 300w"]}
	  types={["image/webp", "image/avif"]}
	/>
</div>
