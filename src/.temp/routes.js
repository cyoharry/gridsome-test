export default [
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "component--home" */ "/Users/harryhorton/playground/gridsome-blog/src/pages/Index.vue"),
    meta: { isStatic: true }
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "component--404" */ "/Users/harryhorton/playground/gridsome-blog/node_modules/gridsome/app/pages/404.vue"),
    meta: { isStatic: true, isIndex: false }
  },
  {
    name: "blogPost",
    path: "/blog/:slug",
    component: () => import(/* webpackChunkName: "component--blog-post" */ "/Users/harryhorton/playground/gridsome-blog/src/templates/BlogPost.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "component--404" */ "/Users/harryhorton/playground/gridsome-blog/node_modules/gridsome/app/pages/404.vue"),
    meta: { isStatic: true, isIndex: false }
  }
]

