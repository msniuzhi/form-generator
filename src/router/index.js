import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/index/Home.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'home',
  component: Home
},
{
  path: '/parser',
  name: 'parser',
  component: () => import(/* webpackChunkName: "parser-example" */ '@/components/parser/example/Index.vue')
},
{
  path: '/parserEditTable',
  name: 'parserEditTable',
  component: () => import(/* webpackChunkName: "parser-example" */ '@/components/parser/example/editTable.vue')
},
{
  path: '/qjt',
  name: 'qjt',
  component: () => import(/* webpackChunkName: "parser-example" */ '@/components/parser/example/qjt.vue')
},
{
  path: '/cat',
  name: 'cat',
  component: () => import(/* webpackChunkName: "parser-example" */ '@/components/parser/example/cat.vue')
},
{
  path: '/tinymce',
  name: 'tinymce',
  component: () => import(/* webpackChunkName: "tinymce-example" */ '@/components/tinymce/example/Index.vue')
},
{
  path: '/photoWallTest',
  name: 'photoWallTest',
  component: () => import(/* webpackChunkName: "tinymce-example" */ '@/components/parser/example/photoWallTest.vue')
}
]

const router = new VueRouter({
  routes
})

export default router
