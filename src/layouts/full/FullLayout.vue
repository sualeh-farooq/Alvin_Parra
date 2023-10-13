<script setup lang="ts">
import { RouterView } from 'vue-router';
import VerticalSidebarVue from './vertical-sidebar/VerticalSidebar.vue';
import VerticalHeaderVue from './vertical-header/VerticalHeader.vue';
import { useCustomizerStore } from '../../stores/customizer';
const customizer = useCustomizerStore();
</script>

<template>
  <v-locale-provider>
    <v-app :theme="customizer.actTheme" :class="[
      customizer.actTheme,
      customizer.fontTheme,
      customizer.mini_sidebar ? 'mini-sidebar' : '',
      customizer.setHorizontalLayout ? 'horizontalLayout' : 'verticalLayout',
      customizer.inputBg ? 'inputWithbg' : ''
    ]">
      <!-- <Customizer /> -->
      <VerticalSidebarVue v-if="!customizer.setHorizontalLayout" />
      <VerticalHeaderVue v-if="!customizer.setHorizontalLayout" />

      <v-main>
        <v-container fluid class="page-wrapper m-3">
          <div :class="customizer.boxed ? 'maxWidth' : ''">
            <RouterView />

          </div>
        </v-container>
      </v-main>
    </v-app>
  </v-locale-provider>
</template>
