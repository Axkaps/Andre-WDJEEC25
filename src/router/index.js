import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/sheep',
      name: 'sheep',
      component: () => import('../views/SheepMemeView.vue')
    }
  ]
})

export default router
