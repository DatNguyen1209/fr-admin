<script setup>
import { onMounted, ref } from "vue";
// import { userInfo } from "@/views/Login.vue";
// import { profile } from "./data";
import { useRouter } from "vue-router";
const router = useRouter();
const userProfile = ref();
const logOut = () => {
  router.push("login");
  window.localStorage.removeItem("userInfo");
};
onMounted(() => {
  userProfile.value = JSON.parse(localStorage.getItem("user"));
});
</script>

<template>
  <div>
    <!-- ---------------------------------------------- -->
    <!-- User Profile -->
    <!-- ---------------------------------------------- -->
    <v-menu anchor="bottom end" origin="auto" min-width="300">
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          class="pa-0 px-1"
          elevation="0"
          color="transparent"
          plain
          :ripple="false"
        >
          <v-avatar size="45">
            <img src="@/assets/images/users/user2.jpg" alt="Julia" />
          </v-avatar>
        </v-btn>
      </template>

      <v-list class="pa-6" elevation="10" rounded="lg" @submit.prevent="logOut">
        <v-list-item class="pa-3 mb-2" rounded="lg"> </v-list-item>
        <v-list-item class="pa-3 mb-2" rounded="lg"> </v-list-item>
        <v-btn
          @click="logOut"
          type="submit"
          block
          color="secondary"
          variant="contained"
          class="mt-4 py-4"
          >Logout</v-btn
        >
      </v-list>
    </v-menu>
  </div>
</template>
