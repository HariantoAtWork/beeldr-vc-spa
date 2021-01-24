<template>
	<div id="app">
		<header class="layout u-absolute">
			<ul class="u-flex menu">
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/room">Room</router-link></li>
			</ul>
		</header>
		<img src="../../assets/logo.svg" id="logo" />
		<router-view></router-view>
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

	border-top: 1px dashed #2cb5e8;
	padding-top: 40px;
	position: relative;
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
	#logo {
		width: 200px;
	}
}
</style>
