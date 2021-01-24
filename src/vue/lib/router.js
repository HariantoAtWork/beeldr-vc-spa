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
		component: require('../component/page/PageStart'),
		meta: {
			title: 'Beeldr VC Tool'
		}
	}, {
		path: '/room',
		name: 'Room',
		component: require('../component/page/PageRoom'),
		meta: {
			title: 'Room'
		},
		children: [{
			path: ':roomName',
			name: 'PageRoom',
			component: require('../component/page/PageRoom')
		}]
	}]
})

router.beforeEach((to, from, next) => {
	const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)
	if (nearestWithTitle) document.title = nearestWithTitle.meta.title
	next()
})

router.afterEach((to, from) => {})

export default router
