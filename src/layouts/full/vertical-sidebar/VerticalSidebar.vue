<script setup >
import { shallowRef } from 'vue';
import { useCustomizerStore } from '../../../stores/customizer';
import sidebarItems from './sidebarItem';
import agencySidebar from './agencySidebar'
import NavGroup from './NavGroup/index.vue';
import NavItem from './NavItem/index.vue';
import NavCollapse from './NavCollapse/NavCollapse.vue';
import Logo from '../logo/Logo.vue';
import agentSidebar from './agentSidebar';

const customizer = useCustomizerStore();
// const sidebarMenu = shallowRef(sidebarItems);
const agencySidebarMenu = shallowRef(agencySidebar)
const agentSidebarMenu = shallowRef(agentSidebar)



const userData = JSON.parse(localStorage.getItem('user'))
const   sidebarMenu = userData.role === 'admin' ? shallowRef(sidebarItems) : userData.role === 'agent' ? shallowRef(agentSidebar) : shallowRef(agencySidebar)

</script>

<template>
  <v-navigation-drawer  left v-model="customizer.Sidebar_drawer" elevation="0" rail-width="75" mobile-breakpoint="960" app
    class="leftSidebar bg-dark" :rail="customizer.mini_sidebar" expand-on-hover>
    <!---Logo part -->

    <div class="pa-5">
      <Logo />
    </div>
    <!-- ---------------------------------------------- -->
    <!---Navigation -->
    <!-- ---------------------------------------------- -->
    <perfect-scrollbar class="scrollnavbar">
      <v-list class="pa-4">
        <!---Menu Loop -->
        <template v-for="(item, i) in sidebarMenu">
          <!---Item Sub Header -->
          <NavGroup :item="item" v-if="item.header" :key="item.title" />
          <!---Item Divider -->
          <v-divider class="my-3" v-else-if="item.divider" />
          <!---If Has Child -->
          <NavCollapse class="leftPadding" :item="item" :level="0" v-else-if="item.children" />
          <!---Single Item-->
          <NavItem :item="item" v-else class="leftPadding" />
          <!---End Single Item-->
        </template>
      </v-list>
      <div class="pa-4">
        <!-- <ExtraBox /> -->
      </div>
      <!-- <div class="pa-4 text-center">
        <v-chip color="inputBorder" size="small">
            v1.1.0
        </v-chip>
      </div> -->
    </perfect-scrollbar>
  </v-navigation-drawer>
</template>
