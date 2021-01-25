import Vue from 'vue'

const state = Vue.observable({
	room: 'harianto',
	password: ''
})

const methods = {
	onEnter() {
		console.log('Enter')
	}
}

export {
	state,
	methods
}
