import { createApp } from 'vue'
import './style.scss'
import App from './App.tsx'
import 'vant/lib/index.css';
import { routes } from './router/index.ts'
import {createRouter,createWebHashHistory} from 'vue-router'


const router=createRouter({
    history:createWebHashHistory(),
    routes:routes
})
createApp(App).use(router).mount('#app')
