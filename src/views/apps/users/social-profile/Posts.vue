<script setup lang="ts">
import { ref } from 'vue';
import Banner from '../../../../components/apps/socialprofile/Banner.vue';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import PostListing from '@/components/apps/socialprofile/PostListing.vue';
import About from './About.vue';
import WritePost from './WritePost.vue';

const page = ref({ title: 'Social Profile' });
const breadcrumbs = ref([
  {
    text: 'Dashboard',
    disabled: false,
    href: '/'
  },
  {
    text: 'Social Profile',
    disabled: true,
    href: '#'
  }
]);
</script>

<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
  <Banner />
  <v-row class="mt-4">
    <v-col lg="4" md="4">
      <About />
    </v-col>
    <v-col lg="8" md="8">
      <WritePost />
      <PostListing />
    </v-col>
  </v-row>
</template>
