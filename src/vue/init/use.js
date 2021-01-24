// file: vue/init/use.js

// doc: https://vuejs.org/v2/guide/plugins.html

module.exports = Vue => {
	Vue.prototype.loadJSON = function (file) {
		return require(`../data/${file}.json`)
	}

	return Vue
}
