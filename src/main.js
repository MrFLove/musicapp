import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Page01 from './components/page01.vue'
import Page02 from './components/page02.vue'

Vue.use(VueRouter)//全局安装路由功能
//定义路径
const routes = [
  { path: '/', component: Page01 },
  { path: '/02', component: Page02 },
]
//创建路由对象
const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
