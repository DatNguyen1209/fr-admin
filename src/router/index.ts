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
          name: "Customers",
          path: "ui-components/customers",
          component: () => import("@/views/ui-components/Customers.vue"),
        },
        {
          name: "Blog",
          path: "ui-components/blog",
          component: () => import("@/views/ui-components/Blogs.vue"),
        },

        {
          name: "Hotels",
          path: "ui-components/hotels",
          component: () => import("@/views/ui-components/Hotels.vue"),
        },
        {
          name: "Admins",
          path: "ui-components/admins",
          component: () => import("@/views/ui-components/Admin.vue"),
        },
        {
          name: "Orders",
          path: "ui-components/orders",
          component: () => import("@/views/ui-components/Orders.vue"),
        },
        {
          path: "ui-components/hotels/:id",
          name: "Hotel",
          component: () => import("@/views/ui-components/Room/RoomIndex.vue"),
        },
        {
          path: "ui-components/user",
          name: "Room",
          component: () => import("@/views/ui-components/Admin/AdminIndex.vue"),
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
