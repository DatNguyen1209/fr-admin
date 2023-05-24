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
    console.log(res.data);
    if (res != null) {
      router.push("/");
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
      <div class="bg-grey-lighten-5 bg-login-form">
        <h1 class="title">Login to Admin</h1>
        <div class="mt-3 mb-3">
          <img
            class="img-login"
            src="https://dailysuzukihadong.com/wp-content/uploads/2020/03/unnamed.jpg"
            alt=""
          />
        </div>
        <v-form
          validate-on
          fast-fail
          style="width: 100%"
          @submit.prevent="login"
        >
          <v-text-field
            v-model="username"
            label="User Name"
            bg-color="purple"
            icon="mdi-account"
            validate
            class="bg-grey-lighten-1"
          ></v-text-field>

          <v-text-field
            v-model="password"
            label="Password"
            bg-color="purple"
            type="Password"
          ></v-text-field>
          <v-btn type="submit" color="primary" block class="mt-2"
            >Sign in</v-btn
          >
        </v-form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg-img {
  background-color: #f5d2bb;
}
.bg-login-form {
  border-radius: 10px;
  // width: 300px;
  padding: 20px;
  width: 360px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.img-login {
  width: 80px;
  align-items: center;
  border-radius: 50%;
  margin-left: 36%;
}
.title {
  color: #ee8a6a;
  text-align: center;
  margin-bottom: 20px;
}
</style>
