import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'About', component: () => import('@/components/ElementAbout.vue')},
    { path: '/experience', name: 'Experience', component: () => import('@/components/ElementExperience.vue')},
    { path: '/links', name: 'Links', component: () => import('@/components/ElementLinks.vue')},
    { path: '/blog', name: 'Blog', component: () => import('@/components/ElementBlog.vue')},
    { path: '/blog/:id', component: () => import('@/components/BlogInformation.vue')}
  ]
})

export default router
