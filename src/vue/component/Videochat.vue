<template>
	<div class="videochat">
		<h1>Videochat</h1>
		<h2>{{ $route.params.roomName }}</h2>
	</div>
</template>

<script>
export default {
	name: 'Videochat',
	props: {
		roomName: {
			required: true,
			type: String
		}
	},
	data: () => ({}),
	methods: {}
	// LifeCycle Hooks
}
</script>
