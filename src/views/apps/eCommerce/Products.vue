<script setup lang="ts">
import { ref } from 'vue';

import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import Products from '@/components/apps/ecommrece/listing/Products.vue';

const page = ref({ title: 'Products' });
const breadcrumbs = ref([
  {
    text: 'Ecommerce',
    disabled: false,
    href: '#'
  },
  {
    text: 'product Page',
    disabled: true,
    href: '#'
  }
]);
</script>

<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
  <Products />
</template>
