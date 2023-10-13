<script setup>
import { ref } from 'vue';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import { maska } from 'maska';
import UiChildCard from '@/components/shared/UiChildCard.vue';

const page = ref({ title: 'Mask Page' });
const customMask = ref(['#*']);
const breadcrumbs = ref([
  {
    text: 'Dashboard',
    disabled: false,
    href: '#'
  },
  {
    text: 'Mask Page',
    disabled: true,
    href: '#'
  }
]);
</script>
<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
  <v-row>
    <v-col cols="12" md="12">
      <UiParentCard title="Mask Input">
        <v-row>
          <!-- Base Buttons -->
          <v-col cols="12" lg="6">
            <UiChildCard title="Phone">
              <v-text-field
                color="primary"
                label="Phone with Code"
                variant="outlined"
                v-maska="['+1 (###) ##-##-##', '+1 (###) ###-##-##']"
              />
              <v-text-field color="primary" label="Contact Number" variant="outlined" v-maska="'+91 #### ###-###'" />
              <v-text-field
                color="primary"
                label="Hex color: #121113"
                variant="outlined"
                v-maska="{
                  mask: '!#HHHHHH',
                  tokens: { H: { pattern: /[0-9a-fA-F]/, uppercase: true } }
                }"
              />
              <v-text-field color="primary" label="Date Mask" variant="outlined" v-maska="'##/##/####'" />
            </UiChildCard>
          </v-col>
          <v-col cols="12" lg="6">
            <UiChildCard title="Network">
              <v-text-field color="primary" label="Ip Address" variant="outlined" v-maska="'###.###.###.###'" />
              <v-text-field color="primary" label="Ipv4 Address" variant="outlined" v-maska="'####.####.####.####'" />
              <v-text-field color="primary" label="Ipv6 Address" variant="outlined" v-maska="'####.####.####.####.####.####'" />
            </UiChildCard>
          </v-col>
          <v-col cols="12" lg="12">
            <UiChildCard title="Custom">
              <v-text-field color="primary" label="Make Mask to apply bottom input" variant="outlined" v-model="customMask" />
              <v-text-field color="primary" label="Maksed Input" variant="outlined" v-maska="customMask" />
            </UiChildCard>
          </v-col>
        </v-row>
      </UiParentCard>
    </v-col>
  </v-row>
</template>
