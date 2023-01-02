<script lang="ts">
	import JsonIssue from './JsonIssue.svelte';
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	let activeId = '1';

	const onUpdate = (id: string) => {
		activeId = id === '1' ? '2' : activeId === '2' ? '3' : activeId === '3' ? '1' : '1';
		console.log('Is Failing?');
	};

	$: {
		console.log(
			'Date: ',
			$page.data.data.find((i) => i.id === activeId)
		);
	}
</script>

{#if !!activeId}
	<JsonIssue {...$page.data.data.find((i) => i.id === activeId)} {onUpdate} />
{/if}
