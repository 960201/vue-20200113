/*
 * @Author: 作者：LIN
 * @Date: 2020-01-08 09:02:06
 * @LastEditors  : 最后编写者
 * @LastEditTime : 2020-01-12 02:34:57
 * @Description: 文件描述
 */
import Vue from "vue"
import VueRouter from "vue-router"
import Mian from "../views/Mian.vue"
import Home from "../views/Home.vue"
import Article from "../views/Article.vue"
import Hero from "../views/Hero"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "mian",
    component: Mian,
    children: [
      { path: "/", name: "home", component: Home },
      { path: "/articles/:id", name: "article", component: Article , props: true}
    ]
  },
  { path: "/heroes/:id", name: "hero", component: Hero, props: true}

];

const router = new VueRouter({
  routes
})

export default router
