import type {RouteRecordRaw} from "vue-router"
import { Home } from "../pages/Home"
export const routes:RouteRecordRaw[]=[
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    }

]