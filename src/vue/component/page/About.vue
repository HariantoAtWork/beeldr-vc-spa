<template>
	<div class="page-about">
		<h1>{{ msg }}</h1>
		<h2>About</h2>
	</div>
</template>

<script>
export default {
	name: 'PageAbout',
	data() {
		return {
			msg: 'Sylo Vue :)'
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
	font-weight: normal;
}

ul {
	list-style-type: none;
	padding: 0;
}

li {
	display: inline-block;
	margin: 0 10px;
}

a {
	color: #42b983;
}
</style>
