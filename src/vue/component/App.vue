<template>
	<div id="app" class="u-flex u-flex--column">
		<header>
			<ul class="u-flex menu">
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/room">Room</router-link></li>
			</ul>
		</header>
		<router-view class="u-flex-cell content"></router-view>
	</div>
</template>

<script>
import router from '../lib/router'

export default {
	name: 'App',
	router
}
</script>

<style lang="scss">
@import '../../scss/init/variables';
@import '../../scss/init/mixin';

body {
	font-family: 'Artifika', serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	position: relative;
	// min-height: 100vh;
	overflow: hidden;
}

.menu {
	list-style: none;
	margin: 0;

	li {
		margin-right: 10px;

		a {
			color: grey;
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}

			&.router-link-exact-active {
				color: black;
			}
		}
	}
}

#app {
	text-align: center;
	color: #2c3e50;
	min-height: 100vh;
	#logo {
		width: 200px;
	}
}
</style>
