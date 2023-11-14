import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'About', component: () => import('@/components/About.vue')},
    { path: '/experience', name: 'Experience', component: () => import('@/components/Experience.vue')},
    { path: '/links', name: 'Links', component: () => import('@/components/Links.vue')},
    { path: '/blog', name: 'Blog', component: () => import('@/components/Blog.vue')},
    { path: '/blog/:id(\\d+)', name: 'blog', component: () => import('@/components/BlogInformation.vue'), props: { default: true }},
  ]
})

export default router
