import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'about', component: () => import('@/components/About.vue')},
    { path: '/experience', name: 'experience', component: () => import('@/components/Experience.vue')},
    { path: '/links', name: 'links', component: () => import('@/components/Links.vue')},
    { path: '/blog', name: 'blog', component: () => import('@/components/blogs/Blog.vue')},
    { path: '/blog/:id(\\d+)', name: 'bloginfo', component: () => import('@/components/blogs/BlogInformation.vue'), props: { default: true }},
  ]
})

export default router
