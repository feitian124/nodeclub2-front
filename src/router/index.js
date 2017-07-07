import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Topics from '@/components/Topics'
import Bar from '@/components/Bar'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Hello', component: Hello },
    { path: '/topics', component: Topics },
    { path: '/bar', component: Bar }
  ]
})
