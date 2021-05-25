import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";

const routes = [
  { path: "/", name: "home", component: Home, props: true, },
  { path: "/about", name: "about", component: About, props: true, }
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
