<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from "axios";

const desserts: any = ref([]);
const page: any = ref(0);

onMounted(() => {
  getData();
});
const getData = async () => {
  try {
    const res = await axios.get(
      "http://localhost:8081/api/v1/user/getAllUser?page=1&size=10"
    );
    desserts.value = res.data.content;
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Fixed Header -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <h2 class="text-center text-uppercase">Thông tin người dùng</h2>
    <div class="mt-4">
      <v-table fixed-header height="300px">
        <thead>
          <tr>
            <th class="text-center">STT</th>
            <th class="text-center">Tài khoản</th>
            <th class="text-center">Họ và tên</th>
            <th class="text-center">Điện thoại</th>
            <th class="text-center">Địa chỉ</th>
            <th class="text-center">Ngày tạo</th>
            <th class="text-center">Ngày sửa</th>
            <th class="text-center">Chúc năng</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.id">
            <td class="text-center">{{ item.id }}</td>
            <td class="text-center">{{ item.userName }}</td>
            <td class="text-center">{{ item.fullName }}</td>
            <td class="text-center">{{ item.phone }}</td>
            <td class="text-center">{{ item.address }}</td>
            <td class="text-center">{{ item.createdDate }}</td>
            <td class="text-center">{{ item.modifiedDate }}</td>
            <td>
              <v-btn
                icon="mdi-pencil"
                color="warning"
                class="mr-1"
                size="small"
              ></v-btn>
              <v-btn icon="mdi-delete" color="errorr" size="small"></v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
    <div class="text-center">
      <v-pagination
        v-model="page"
        :length="4"
        color="success"
        rounded="circle"
      ></v-pagination>
    </div>
  </div>
</template>
<style scoped>
.text-uppercase {
  text-transform: uppercase;
}
</style>
