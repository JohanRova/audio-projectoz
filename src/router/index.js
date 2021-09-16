import { createRouter, createWebHistory } from "vue-router"
import HelloWorld from '/src/components/HelloWorld.vue'

const routes = [
    {
        path: '/HelloWorld',
        name: 'Hello world!',
        component: HelloWorld,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router