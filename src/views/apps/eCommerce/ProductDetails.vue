<script setup lang="ts">
import { ref } from 'vue';
import ProductDetail from '@/components/apps/ecommrece/detail/ProductDetail.vue';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import RelatedProducts from '../../../components/apps/ecommrece/detail/RelatedProducts.vue';

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
  <v-card elevation="0" variant="outlined" class="withbg">
    <v-card-text><ProductDetail /> </v-card-text>
  </v-card>
  <RelatedProducts />
</template>
