<script setup lang="ts">
import { ref, watch } from "vue";
import sidebarItems from "./sidebarItem";
import LogoDark from "../logo/LogoDark.vue";

const sidebarMenu = ref(sidebarItems);
</script>

<template>
  <div>
    
    <div class="pa-4">
      <LogoDark />
    </div>
   
    <div class="scrollnavbar">
      <v-list class="pa-4" color="transparent">
       
        <template v-for="(item, i) in sidebarMenu" :key="i">
       
          <v-list-item :to="item.to" rounded="lg" class="mb-1">
            <v-list-item-avatar start class="v-list-item-avatar--start">
              <v-icon class="feather-sm v-icon v-icon--size-default">{{
                item.icon
              }}</v-icon>
            </v-list-item-avatar>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item>
        </template>
      </v-list>
    </div>
  </div>
</template>
