import { createRouter, createWebHistory } from "vue-router"
import HelloWorld from '/src/components/HelloWorld.vue'
import home from '/src/views/home.vue'
import MediaController from '/src/components/MediaController.vue'
import SongResult from '/src/components/SongResult.vue'

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
        path: '/song/:songId',
        name: 'Song result',
        component: SongResult,
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