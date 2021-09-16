import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'

//createApp(App).mount('#app')

createApp(App).use(router).use(store).mount('#app')
