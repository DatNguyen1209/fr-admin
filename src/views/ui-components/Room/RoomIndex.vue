<script setup>
import { onMounted, ref, watch } from "vue";
import axios from "axios";
import moment from "moment";
import RoomAdd from "./RoomAdd.vue";
import { useRoute } from "vue-router";
const desserts = ref([]);
const page = ref(1);
const isOpenAdd = ref(false);
const totalPage = ref(0);
const totalRecords = ref(0);
const route = useRoute();

onMounted(() => {
  console.log(route.params.id);
  getData();
});
watch(page, () => {
  getData();
});
const getData = async () => {
  try {
    const res = await axios.get(
      `http://localhost:8080/api/v1/room/getallroom?page=${page.value}&size=5`
    );
    desserts.value = res.data.data;
    totalPage.value = res.data.totalPages;
    totalRecords.value = res.data.totalRecords;
  } catch (e) {
    console.error(e);
  }
};
const openDialogAdd = (data) => {
  console.log(data);
  isOpenAdd.value = true;
};
const handleAdd = () => {
  console.log("run");
  isOpenAdd.value = false;
  getData();
};
const handleClose = () => {
  isOpenAdd.value = false;
};
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Dencity -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <div class="mt-4">
      <h2 class="heading-tb mb-3">Thông tin phòng</h2>
      <div>
        <v-btn @click="openDialogAdd(item)" class="mb-4" color="secondary"
          >Thêm mới</v-btn
        >
      </div>
      <v-table>
        <thead>
          <tr>
            <th
              class="text-subtitle-1 font-weight-bold text-center font-weight-black"
            >
              STT
            </th>
            <th
              class="text-subtitle-1 font-weight-bold text-center font-weight-black"
            >
              Tên phòng
            </th>
            <th
              class="text-subtitle-1 font-weight-bold text-center font-weight-black"
            >
              Giá phòng
            </th>
            <th
              class="text-subtitle-1 font-weight-bold text-center font-weight-black"
            >
              Diện tích
            </th>
            <th
              class="text-subtitle-1 font-weight-bold text-center font-weight-black"
            >
              Loại phòng
            </th>
            <th
              class="text-subtitle-1 font-weight-bold text-center font-weight-black"
            >
              Hình ảnh
            </th>
            <th
              class="text-subtitle-1 font-weight-bold text-center font-weight-black"
            >
              Trạng thái
            </th>
            <th
              class="text-subtitle-1 font-weight-bold text-center font-weight-black"
            >
              Ngày tạo
            </th>
            <th
              class="text-subtitle-1 font-weight-bold text-center font-weight-black"
            >
              Cập nhật
            </th>
            <th
              class="text-subtitle-1 font-weight-bold text-center font-weight-black"
            >
              Chức năng
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.id">
            <td class="text-center">{{ item.id }}</td>
            <td class="text-center">{{ item.roomName }}</td>
            <td class="text-center">{{ item.price }} VNĐ</td>
            <td class="text-center">{{ item.capacity }}</td>
            <td class="text-center">{{ item.bedType }}</td>
            <td class="text-center">
              <img
                style="height: 100px; width: 80px; border-radius: 4px"
                :src="`${item.image}`"
                alt=""
              />
            </td>
            <td class="text-center">
              {{
                moment(item.createdDate).format("dddd, MMMM Do YYYY, h:mm:ss a")
              }}
            </td>
            <td class="text-center">{{ item.status }}</td>
            <td class="text-center">
              {{
                moment(item.modifiedDate).format(
                  "dddd, MMMM Do YYYY, h:mm:ss a"
                )
              }}
            </td>
            <td style="min-width: 160px; text-align: center">
              <v-btn
                icon="mdi-pencil"
                color="warning"
                class="mr-1"
                size="small"
              ></v-btn>
              <v-btn
                icon="mdi-delete"
                @click="openDialogDelete(item)"
                color="errorr"
                size="small"
              ></v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </div>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="totalPages"
      color="success"
      rounded="circle"
    ></v-pagination>
  </div>
  <RoomAdd
    :isOpen="isOpenAdd"
    @close="handleClose"
    @add="handleAdd"
    :data="dataAdd"
  />
</template>
<style>
.heading-tb {
  text-align: center;
  text-transform: uppercase;
}
</style>
