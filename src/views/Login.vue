<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const username = ref("");
const password = ref("");
const login = async () => {
  try {
    const res = await axios.post(`http://localhost:8080/api/auth/signin`, {
      username: username.value,
      password: password.value,
    });
  console.log(res.data)
    if (res != null) {
      router.push("/")
      localStorage.setItem(`token`, res.data.accessToken);
        }
    
  } catch (error) {
    console.log(error);
  }
};

</script>

<template>
  <div class="bg-img">
    <div class="d-flex align-center justify-center" style="height: 100vh">
      <v-sheet min-width="300" class="mx-auto">
        <h1 class="title">Đăng nhập hệ thống</h1>
        <v-form fast-fail style="width: 100%" @submit.prevent="login">
          <v-text-field
            variant="outlined"
            v-model="username"
            label="User Name"
          ></v-text-field>

          <v-text-field
            variant="outlined"
            v-model="password"
            label="Password"
            type="Password"
          ></v-text-field>
          <v-btn type="submit" color="primary" block class="mt-2"
            >Sign in</v-btn
          >
        </v-form>
      </v-sheet>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg-img {
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: right top;
  background-image: linear-gradient(
    to right,
    rgba(88, 37, 123, 0),
    rgba(88, 37, 123, 1)
  );
}
.title {
  text-transform: uppercase;
  color: #ee8a6a;
  text-align: center;
  margin-bottom: 20px;
}
</style>