<template>
	<div class="room">
		<h1>Room</h1>
		<div class="form-row u-flex" v-for="(value, name) in form">
			<span class="form-label" v-text="name" /><input class="form-input u-flex-cell" v-model="form[name]" :label="name" /></span>
		</div>
		<div class="u-flex u-flex--justify-flex-end">
			<router-link :to="`/room/${form.room}`">Enter</router-link>
		</div>
	</div>
</template>

<script>
const room = require('../lib/store/room')
export default {
	name: 'Room',
	data: () => ({}),
	computed: {
		form: {
			get() {
				return room.state
			}
		}
	}
}
</script>

<style lang="scss">
.form {
	&-row {
		margin-bottom: 1px;
	}
	&-label {
		width: 120px;
	}
}
</style>