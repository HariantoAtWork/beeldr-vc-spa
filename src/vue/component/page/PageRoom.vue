<template>
	<Videochat v-if="$route.params.roomName" :roomName="$route.params.roomName" />
	<Room v-else />
</template>

<script>
import Room from '../Room'
import Videochat from '../Videochat'

export default {
	name: 'PageRoom',
	title: 'Hello',
	components: {
		Room,
		Videochat
	}
}
</script>
