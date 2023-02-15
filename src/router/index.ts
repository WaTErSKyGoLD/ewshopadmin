import {createRouter,createWebHistory} from "vue-router";
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'


// 2.定义一些路由
//每个路由都需要映射到一个组件
//嵌套路由
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/login',
        component: Login
    }
]

//3.创建路由实例并传递`routes` 配置
//在这里可以输入更多配置
const router = createRouter({
    //4.内部提供了history模式的实现。 为了简单，这里使用hash模式
    history: createWebHistory(),
    routes,    //`routes: routes`的缩写
})

export default router