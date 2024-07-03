<script>
	import SideMenu from '$lib/SideMenu.svelte';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<SideMenu nub="🚀" theme="dark" />
<SideMenu
	nub="🚀"
	top="40vh"
	theme="light"
	links={[
		{ text: 'Test' },
		{
			path: '/please',
			text: 'Please'
		},
		{ text: 'Test' },
		{ text: 'Test' }
	]}
>
	<div class="menu-content" />
	<p>
		This is just extra content to push it out of view. This helps you see how this thing reacts when
		it's close to the bottom or filled with too much good stuff.
	</p>
</SideMenu>

<style>
	.menu-content {
		height: 60vh;
	}
</style>
