import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import LoginPage from "./pages/LoginPage.vue";
import ProfileEddittingPage from "./pages/ProfileEddittingPage.vue";
import SearchPage from "./pages/SearchPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/profile/edit",
    name: "editprofile",
    component: ProfileEddittingPage,
  },
  {
    path: "/search_result",
    name: "search_result",
    component: SearchPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export { router };
