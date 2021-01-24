// Polyfills
import 'babel-polyfill'
import Vue from './vue/init/Vue'
import App from './vue/component/App'
import './scss/main.scss'

// Vue instance as eventbus
// Event.$emit('EXAMPLE')
// Event.$on('EXAMPLE, () => {})
window.Event = new Vue()

const app = new Vue(App)
app.$mount('vue')
