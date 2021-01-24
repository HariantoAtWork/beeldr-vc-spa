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
		name: 'Start',
		component: require('../component/page/Start')
	},
	{
		path: '/about',
		name: 'About',
		component: require('../component/page/About')
	}]
})

router.beforeEach((route, redirect, next) => {
	next()
})

router.afterEach((to, from) => {
})

export default router
