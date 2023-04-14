import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  //history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
      component: () => import("@/layouts/full/FullLayout.vue"),

      children: [
        {
          name: "Dashboard",
          path: "/dashboard",
          component: () => import("@/views/dashboard/Dashboard.vue"),
        },
        {
          name: "Alerts",
          path: "ui-components/alert",
          component: () => import("@/views/ui-components/Alerts.vue"),
        },
        {
          name: "Buttons",
          path: "ui-components/buttons",
          component: () => import("@/views/ui-components/Buttons.vue"),
        },
        {
          name: "Customers",
          path: "ui-components/customers",
          component: () => import("@/views/ui-components/Customers.vue"),
        },
        {
          name: "Cards",
          path: "ui-components/cards",
          component: () => import("@/views/ui-components/Cards.vue"),
        },
        {
          name: "Menus",
          path: "ui-components/menus",
          component: () => import("@/views/ui-components/Menus.vue"),
        },
        {
          name: "Tables",
          path: "ui-components/tables",
          component: () => import("@/views/ui-components/Tables.vue"),
        },
        {
          name: "Hotels",
          path: "ui-components/hotels",
          component: () => import("@/views/ui-components/Hotels.vue"),
        },
        {
          path: "ui-components/hotels/:id",
          name: "Room",
          component: () => import("@/views/ui-components/Room/RoomIndex.vue"),
        },
      ],
    },
    {
      name: "Login",
      path: "/login",
      component: () => import("@/views/Login.vue"),
    },
  ],
});
router.beforeEach(async (to, from) => {
  const isAuthenticated = localStorage.getItem("token");
  console.log(isAuthenticated);

  if (
    // make sure the user is authenticated
    !isAuthenticated &&
    // Avoid an infinite redirect
    to.name !== "Login"
  ) {
    // redirect the user to the login page
    return { name: "Login" };
  }
});
export default router;
