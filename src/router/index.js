import { createRouter, createWebHistory } from 'vue-router'
import Customer from '../views/Customer.vue'

const routes = [
  {
    path: "/",
    name: "Customer",
    component: Customer,
  },
  {
    path: "/interview",
    name: "Interview",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Interview.vue"),
  },
  {
    path: "/consultation",
    name: "Consultation",
    // route level code-splitting
    // this generates a separate chunk (consultation.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "consultation" */ "../views/Consultation.vue"
      ),
  },
  {
    path: "/confirmation",
    name: "Confirmation",
    // route level code-splitting
    // this generates a separate chunk (consultation.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "consultation" */ "../views/Confirmation.vue"
      ),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
