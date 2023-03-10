import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage.vue';
import TeamPage1 from '@/views/TeamPage1.vue';
import MainBanner from '@/components/MainBanner';
import LeagueRules from '@/views/LeagueRules.vue';
import LeaguePhotos from '@/views/LeaguePhotos';
import TeamPage2 from '@/views/TeamPage2.vue';
import coachAccess from '@/views/coachAccess.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: HomePage
  },
  {
    path: "/TeamPage1",
    component: TeamPage1
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
  },
  {
    path: "/TeamPage2",
    component: TeamPage2
  },
  {
    path: "/coachAccess",
    component: coachAccess
  }
]

const router = new VueRouter({
  routes
})

export default router
