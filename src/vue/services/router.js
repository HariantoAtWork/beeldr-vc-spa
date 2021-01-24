import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	base: __dirname,
	transitionOnLoad: true,
	linkActiveClass: 'active',
	routes: [{
		path: '/',
		name: 'Hello',
		component: require('../component/route/Hello')
	},
	{
		path: '/about',
		name: 'About',
		component: require('../component/route/About')
	}]
})

router.beforeEach((route, redirect, next) => {
	next()
})

router.afterEach((to, from) => {
})

export default router
