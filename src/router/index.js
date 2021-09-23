import { createRouter, createWebHistory } from "vue-router"
import HelloWorld from '/src/components/HelloWorld.vue'
import home from '/src/views/home.vue'
import MediaController from '/src/components/MediaController.vue'

const routes = [
    {
        path: '/HelloWorld',
        name: 'Hello world!',
        component: HelloWorld,
    },
    {
        path: '/',
        name: 'Home',
        component: home,
    },
    {
        path: '/song/:videoId',
        name: 'Song Share',
        component: home,
    },
    {
        path: '/artist/:artistId',
        name: 'Artist Share',
        component: home,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router