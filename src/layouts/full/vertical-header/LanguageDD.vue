<script setup lang="ts">
import { ref } from 'vue';

const languageDD = ref([
  { title: 'English', subtext: 'UK', value: 'en' },
  { title: 'français', subtext: 'French', value: 'fr' },
  { title: 'Română', subtext: 'Romanian', value: 'ro' },
  { title: '中国人', subtext: 'Chinese', value: 'zh' }
]);
</script>

<template>
  <!-- ---------------------------------------------- -->
  <!-- language DD -->
  <!-- ---------------------------------------------- -->
  <v-list>
    <v-list-item
      v-for="(item, index) in languageDD"
      :key="index"
      active-color="secondary"
      :active="$i18n.locale == item.value"
      class="d-flex align-center"
      @click="() => ($i18n.locale = item.value)"
    >
      <v-list-item-title class="text-subtitle-1 font-weight-regular">
        {{ item.title }}
        <span class="text-disabled text-subtitle-1 pl-2">({{ item.subtext }})</span>
      </v-list-item-title>
    </v-list-item>
  </v-list>
</template>
