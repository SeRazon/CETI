import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Quiz from '@/pages/Quiz.vue'
import Result from '@/pages/Result.vue'
import Types from '@/pages/Types.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/quiz', name: 'Quiz', component: Quiz },
  { path: '/result', name: 'Result', component: Result },
  { path: '/types', name: 'Types', component: Types },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
