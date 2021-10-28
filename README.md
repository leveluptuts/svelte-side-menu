# Svelte Side Menu

A small tab pinned to the side of your browser window to add quick links for admin uis

![Slide Menu](./side-menu.png)

## Demo

https://svelte.dev/repl/d7d81d10ada74b83a574492964c3e5d0?version=3.44.0

`npm install @leveluptuts/svelte-side-menu`

```
<script>
	import SideMenu from '@leveluptuts/svelte-side-menu'
</script>

<SideMenu
	top="15%"
	theme="dark"
	links={[
		{
			text: 'Admin' // without a path, makes a heading
		},
		{
			text: 'Dashboard',
			path: '/admin'
		},
		{
			text: 'Custom Service',
			path: '/admin/service'
		},
		{
			text: 'Sales',
			path: '/admin/sales'
		}
	]}
/>

```

## Props

links: array
nub: string - should be emoji
top: string - '10px' (default)
theme: - 'dark' || '' (default)
slot: - Custom html in the side menu

## Sponsors

### Level Up Tutorials

https://www.leveluptutorials.com

Cutting-edge, focused & high quality video tutorials for web developers and designers
Syntax

Learn Svelte!

### https://syntax.fm/

A Tasty Treats Podcast for Web Developers. Ft Wes Bos & Scott Tolinski

Thank you!
