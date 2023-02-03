import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Lessons from "../views/AboutLessons.vue";
import Teachers from "../views/AboutTeachers.vue";
import About from "../views/AboutView.vue";
import Shop from "../views/Shop.vue";
import Opportunity from "../views/Opportunity.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      alias: "/home",
      component: HomeView,
    },
  ],
});

router.addRoute({ path: "/about", component: About });
router.addRoute({
  path: "/lessons",
  name: "lessons",
  component: () => Lessons,
});

router.addRoute({
  path: "/teachers",
  name: "teachers",
  component: () => Teachers,
});
router.addRoute({
  path: "/shop",
  name: "shop",
  // route level code-splitting
  // this generates a separate chunk (About.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => Shop,
});

router.addRoute({
  path: "/opportunity",
  name: "opportunity",
  // route level code-splitting
  // this generates a separate chunk (About.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => Opportunity,
});


export default router;
