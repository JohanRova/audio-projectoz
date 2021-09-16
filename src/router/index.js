import { createRouter, createWebHistory } from "vue-router"
import HelloWorld from '/src/components/HelloWorld.vue'
import home from '/src/views/home.vue'

const routes = [
    {
        path: '/HelloWorld',
        name: 'Hello world!',
        component: HelloWorld,
    },
    {
        path: '/home',
        name: 'Home',
        component: home,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router