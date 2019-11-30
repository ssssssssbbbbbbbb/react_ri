import {Home,Mess,Center,Shopping,Mine,Login} from "pages"

export const TabBarRoute=[
    {
        path:"/home",
        component:Home,
        meta:{
            flag:true
        },
        icon:"\ue626",
        text:"首页"
    },
    {
        path:"/mess",
        component:Mess,
        meta:{
            flag:false
        },
        icon:"\ue6a6",
        text:"客服"
    },
    {
        path:"/center",
        component:Center,
        meta:{
            flag:true
        },
        icon:"\ue7d6",
        text:"食间煮语"
    },
    {
        path:"/shopping",
        component:Shopping,
        meta:{
            flag:true
        },
        icon:"\ue6a2",
        text:"购物篮"
    }, {
        path:"/mine",
        component:Mine,
        meta:{
            flag:true,
            requireAuth:true
        },
        icon:"\ue657",
        text:"我的"
    }
]
export const NoTabBarRoute=[
    {
        path:"/login",
        component:Login,
        meta:{
            flag:false
        },
        icon:"",
        text:"登录"
    }
]

export const RouteConfig=TabBarRoute.concat(NoTabBarRoute)