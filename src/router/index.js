import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage.vue';
import TeamPage from '@/views/TeamPage.vue';
import MainBanner from '@/components/MainBanner';
import LeagueRules from '@/views/LeagueRules.vue';
import LeaguePhotos from '@/views/LeaguePhotos'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: HomePage
  },
  {
    path: "/TeamPage",
    component: TeamPage
  },
  {
    path: "/components/MainBanner",
    component: MainBanner 
  },
  {
    path: "/LeagueRules",
    component: LeagueRules
  },
  {
    path: "/LeaguePhotos",
    component: LeaguePhotos
  }
]

const router = new VueRouter({
  routes
})

export default router
