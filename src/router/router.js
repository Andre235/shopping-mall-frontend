//导入插件
import Vue from "vue"
import VueRouter from "vue-router";

//使用插件
Vue.use(VueRouter)

//创建vueRouter对象
const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: () => import("../views/home/Home")
    },
    {
      path: "/category",
      component: () => import("../views/category/Category")
    },
    {
      path: "/cart",
      component: () => import("../views/cart/ShopCart")
    },
    {
      path: "/profile",
      component: () => import("../views/profile/Profile")
    }
  ],
  mode: "history"
})

//导出router对象
export default router
