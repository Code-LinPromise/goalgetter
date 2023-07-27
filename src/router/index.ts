import type {RouteRecordRaw} from "vue-router"
import { Home } from "../pages/Home"
import { Find } from "../pages/Find"
export const routes:RouteRecordRaw[]=[
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home,
        children:[
            {
                path:'find',
                component:Find,
            }
        ]
    }

]