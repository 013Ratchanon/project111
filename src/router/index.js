import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BeginnersView from "../views/BeginnersView.vue"; // เพิ่มการนำเข้า
import TopicsView from "../views/TopicsView.vue"; // เพิ่มการนำเข้า
import ProductsView from "../views/ProductsView.vue"; // เพิ่มการนำเข้า
import EventsView from "../views/EventsView.vue"; // เพิ่มการนำเข้า
import CardlistView from "../views/CardlistView.vue"; // เพิ่มการนำเข้า
import RulesView from "../views/RulesView.vue"; // เพิ่มการนำเข้า

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/beginners", // เพิ่มเส้นทางนี้
      name: "beginners",
      component: BeginnersView, // เพิ่ม component ที่เกี่ยวข้อง
    },
    {
      path: "/topics", // เพิ่มเส้นทางนี้
      name: "topics",
      component: TopicsView, // เพิ่ม component ที่เกี่ยวข้อง
    },
    {
      path: "/products", // เพิ่มเส้นทางนี้
      name: "products",
      component: ProductsView, // เพิ่ม component ที่เกี่ยวข้อง
    },
    {
      path: "/events", // เพิ่มเส้นทางนี้
      name: "events",
      component: EventsView, // เพิ่ม component ที่เกี่ยวข้อง
    },
    {
      path: "/cardlist", // เพิ่มเส้นทางนี้
      name: "cardlist",
      component: CardlistView, // เพิ่ม component ที่เกี่ยวข้อง
    },
    {
      path: "/rules", // เพิ่มเส้นทางนี้
      name: "rules",
      component: RulesView, // เพิ่ม component ที่เกี่ยวข้อง
    },
  ],
});

export default router;
