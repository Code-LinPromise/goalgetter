import type {RouteRecordRaw} from "vue-router"
import { Home } from "../pages/Home"
import { Find } from "../pages/Find"
import { Search } from "../pages/Search"
import { Advice } from "../pages/Advice"
import { Chat } from "../pages/Chat"
import { Add } from "../pages/Add"
export const routes:RouteRecordRaw[]=[
    {
        path:'/',
        redirect:'/home/find'
    },
    {
        path:'/home',
        component:Home,
        children:[
            {
                path:'find',
                component:Find,
            },
            {
                path:'search',
                component:Search,
            },
            {
                path:'advice',
                component:Advice,
            },
            {
                path:'chat',
                component:Chat,
            },
            {
                path:'add',
                component:Add,
            },
        ]
    }

]