<script setup>
import { ref } from 'vue';
import { SettingsIcon, LogoutIcon, UserIcon } from 'vue-tabler-icons';
import { useAuthStore } from '@/stores/auth';

const swt1 = ref(true);
const swt2 = ref(false);
const authStore = useAuthStore();

const userRole = JSON.parse(localStorage.getItem('user'))
setInterval(()=>{
    console.log(userRole)
},2000)

const person = userRole.role === 'admin'  ? 'Alvin Parra' : userRole.role === 'agent' ? 'Laura' : 'Agency Owner'
const router = userRole.role === 'admin' ? '/admin/settings' : userRole.role === 'agent' ? '/agent/settings' : '/agency/settings'
</script>

<template>
  <!-- ---------------------------------------------- -->
  <!-- profile DD -->
  <!-- ---------------------------------------------- -->
  <div class="pa-4">
    <h4 class="mb-n1">Good Morning, <span class="font-weight-regular">{{person}}</span></h4>
    <span class="text-subtitle-2 text-medium-emphasis">Strategic Financial Choices </span>

 

    <!-- <perfect-scrollbar style="height: calc(100vh - 300px); max-height: 515px"> -->
    <perfect-scrollbar >
     


      <v-divider></v-divider>

      <v-list class="mt-3">
        <v-list-item :to="router" active-color="primary" rounded="md">
          <template v-slot:prepend>
            <SettingsIcon size="20" class="mr-2" />
          </template>

          <v-list-item-title class="text-subtitle-2"> Account Settings</v-list-item-title>
        </v-list-item>

        <!-- <v-list-item to="/profie" active-color="secondary" rounded="md">
          <template v-slot:prepend>
            <UserIcon size="20" class="mr-2" />
          </template>

          <v-list-item-title class="text-subtitle-2"> Social Profile</v-list-item-title>

          <template v-slot:append>
            <v-chip color="warning" class="text-white" text="02" variant="flat" size="small" />
          </template>
        </v-list-item> -->

        <v-list-item @click="authStore.logout()" active-color="secondary" rounded="md">
          <template v-slot:prepend>
            <LogoutIcon size="20" class="mr-2" />
          </template>

          <v-list-item-title class="text-subtitle-2"> Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </perfect-scrollbar>
  </div>
</template>
