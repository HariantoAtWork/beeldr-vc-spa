<template>
	<div class="videochat u-flex u-flex--column">
		<h1 class="videochat__title">Room: {{ $route.params.roomName }}</h1>
		<section class="u-relative u-flex-cell">
			<div ref="meet" class="u-absolute-full"></div>
		</section>
	</div>
</template>

<script>
const room = require('../lib/store/room')
export default {
	name: 'Videochat',
	props: {
		roomName: {
			required: true,
			type: String
		}
	},
	computed: {
		form: {
			get() {
				return room.state
			}
		}
	},
	data: () => ({
		api: null,
		show: {
			password: false
		}
	}),
	methods: {
		start(params) {
			const options = {
				parentNode: this.$refs.meet,
				roomName: this.roomName,
				width: '100%',
				height: '100%',
				...params
			}
			this.api = new JitsiMeetExternalAPI('meet.squares.live', options)
			this.addEventListeners()
			this.executeCommand()
		},
		executeCommand() {
			const { api, form } = this
			if (form.displayName !== '') {
				api.executeCommand('displayName', form.displayName)
			}
		},
		addEventListeners() {
			const { api, form } = this
			api.addEventListener('participantRoleChanged', event => {
				if (event.role === 'moderator') {
					console.log(' ####### I am the MODERATOR!')
					if (form.password !== '') {
						api.executeCommand('password', form.password)
						console.log('ROOM PASSWORD IS NOW:', form.password)
					}
				}
			})
		}
	},
	// LifeCycle Hooks
	mounted() {
		this.start()
	}
}
</script>

<style lang="scss">
.videochat {
	&__title {
		font-family: 'Fredoka One', cursive;
		font-weight: normal;
		margin-top: unset;
		margin-bottom: unset;
	}
}
#meet {
	background-color: rgb(27, 27, 27);
}
</style>