<script setup lang="ts">
import { ref } from 'vue';
import { useDisplay } from 'vuetify';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import MailSidebar from '@/components/apps/mail/MailSidebar.vue';
import MailListing from '@/components/apps/mail/MailListing.vue';

const page = ref({ title: 'Mail Page' });
const { lgAndUp } = useDisplay();
const breadcrumbs = ref([
  {
    text: 'Dashboard',
    disabled: false,
    href: '#'
  },
  {
    text: 'Mail Page',
    disabled: true,
    href: '#'
  }
]);
const toggleSide = ref(false);
const sDrawer = ref(false);
</script>
<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>

  <v-row>
    <v-col v-if="!toggleSide && lgAndUp" class="d-flex align-stretch mailSidebar">
      <v-card variant="outlined" class="withbg">
        <perfect-scrollbar style="height: calc(100vh - 300px)">
          <v-card-text class="pa-5">
            <MailSidebar />
          </v-card-text>
        </perfect-scrollbar>
      </v-card>
    </v-col>
    <v-col class="d-flex align-stretch overflow-auto">
      <v-card variant="outlined" class="withbg">
        <!---Toggle Button For mobile-->
        <v-btn icon @click="sDrawer = !sDrawer" variant="text" class="d-lg-none d-md-flex d-sm-flex">
          <Menu2Icon size="20" />
        </v-btn>

        <div class="overflow-auto">
          <MailListing @s-Toggle="toggleSide = !toggleSide" />
        </div>
      </v-card>
    </v-col>
  </v-row>

  <v-navigation-drawer temporary v-model="sDrawer" width="300" top v-if="!lgAndUp">
    <perfect-scrollbar style="height: calc(100vh - 100px)">
      <v-card-text class="pa-5"> <MailSidebar /> </v-card-text>
    </perfect-scrollbar>
  </v-navigation-drawer>
</template>
<style lang="scss">
.custom-main {
  margin: 0;
}
.mailSidebar {
  max-width: 350px;
}
</style>
