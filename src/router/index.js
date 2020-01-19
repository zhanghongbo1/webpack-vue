import Vue from 'vue'
import VueRouter from 'vue-router'

import Add from '../add.vue'
import App from '../App.vue'
Vue.use(VueRouter)
const routes=[
    {
        path:'/add',
        name:Add,
        component: Add
    },
    {
        path:'/',
        name:App,
        component: App
    }
]


const router = new VueRouter({
    // mode: 'history',
    // base: "/",
    routes
})

export default router