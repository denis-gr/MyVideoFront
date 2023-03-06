import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "../views/MainPage.vue";
import VideoPage from "../views/VideoPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage,
    },
    {
      path: '/video',
      name: 'video',
      component: VideoPage,
    },
  ]
})

export default router
