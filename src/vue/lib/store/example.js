const state = Vue.observable({
	list: [],
	note: 'Ping!'
})

const methods = {
	onAddItem() {
		state.list.push('You’ve added me')
	},
	onPong() {
		state.note = 'Pong!!!'
	}
}

export {
	state,
	methods
}
