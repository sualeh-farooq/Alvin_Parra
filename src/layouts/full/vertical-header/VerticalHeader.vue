<script setup lang="ts">
import { ref, watch } from "vue";
import { useCustomizerStore } from "../../../stores/customizer";
// Icon Imports
import {
  AccessPointIcon,
  BellIcon,
  SettingsIcon,
  LanguageIcon,
  SearchIcon,
  Menu2Icon, XIcon,
} from "vue-tabler-icons";

// dropdown imports
import LanguageDD from "./LanguageDD.vue";
import NotificationDD from "./NotificationDD.vue";
import ProfileDD from "./ProfileDD.vue";
import MegaMenuDD from "./MegaMenuDD.vue";
import Searchbar from "./Searchbar.vue";

const customizer = useCustomizerStore();
const showSearch = ref(false);
const priority = ref(customizer.setHorizontalLayout ? 0 : 0);
function searchbox() {
  showSearch.value = !showSearch.value;
}
watch(priority, (newPriority) => {
  // yes, console.log() is a side effect
  priority.value = newPriority;
});
</script>

<template>
  <v-app-bar class="top_header bg-black" elevation="0" :priority="priority" height="80">
    <v-btn
      class="hidden-md-and-down text-secondary pa-1"
      color="darkText"
      icon
      rounded="sm"
      variant="flat"
      @click.stop="customizer.SET_MINI_SIDEBAR(!customizer.mini_sidebar)"
      size="small"
    >
      <Menu2Icon class="text-white" size="20" stroke-width="1.5" />
    </v-btn>
    <v-btn
      class="hidden-lg-and-up text-secondary ms-3"
      color="lightsecondary"
      icon
      rounded="sm"
      variant="flat"
      @click.stop="customizer.SET_SIDEBAR_DRAWER"
      size="small"
    >
      <Menu2Icon size="20" stroke-width="1.5" />
    </v-btn>

    <v-sheet style="border-radius: 15px "  class="universal_search w-25 ml-3 d-none d-lg-block " >
      <v-text-field  persistent-placeholder placeholder="Search" class="rounded-md p-0" color="primary" variant="outlined" hide-details>
        <template v-slot:prepend-inner>
          <SearchIcon stroke-width="1.5" size="17" class="text-lightText SearchIcon" />
        </template>
      </v-text-field>
    </v-sheet>


    <!-- search mobile -->
    <v-btn
      class="hidden-lg-and-up text-secondary ml-3"
      color="lightsecondary"
      icon
      rounded="sm"
      variant="flat"
      size="small"
      @click="searchbox"
    >
      <SearchIcon size="17" stroke-width="1.5" />
    </v-btn>

    <v-sheet v-if="showSearch" class="search-sheet v-col-12">
      <Searchbar :closesearch="searchbox" />
    </v-sheet>

    <!-- ---------------------------------------------- -->
    <!-- Search part -->
    <!-- ---------------------------------------------- -->
    <!-- <v-sheet class="mx-3 v-col-3 v-col-xl-2 v-col-lg-4 d-none d-lg-block">
      <Searchbar />
    </v-sheet> -->

    <!---/Search part -->

    <v-spacer />

    <!-- <v-menu :close-on-content-click="false">
      <template v-slot:activator="{ props }">
        <v-btn
          icon
          class="text-secondary hidden-sm-and-down"
          color="lightsecondary"
          rounded="sm"
          size="small"
          variant="flat"
          v-bind="props"
        >
          <AccessPointIcon stroke-width="1.5" size="22" />
        </v-btn>
      </template>
      <v-sheet width="900" height="395" elevation="12" rounded="md" class="pa-4">
        <MegaMenuDD />
      </v-sheet>
    </v-menu> -->

    <!-- <v-menu :close-on-content-click="false" location="bottom">
      <template v-slot:activator="{ props }">
        <v-btn icon class="text-primary ml-3" color="lightprimary" rounded="sm" size="small" variant="flat" v-bind="props">
          <LanguageIcon stroke-width="1.5" size="22" />
        </v-btn>
      </template>
      <v-sheet rounded="md" width="200" elevation="12">
        <LanguageDD />
      </v-sheet>
    </v-menu> -->

    <!-- ---------------------------------------------- -->
    <!-- Notification -->
    <!-- ---------------------------------------------- -->

    <v-btn class="bg-darkText mx-1 d-none d-lg-block"  >Quotes +</v-btn>
    <v-btn class="bg-darkText mx-1 d-none d-lg-block" >Add +</v-btn>
    <v-btn class="bg-darkText mx-1 d-none d-lg-block" >Products +</v-btn>
    <v-btn class="bg-darkText mx-1 d-none d-lg-block" >University +</v-btn>
    <v-menu :close-on-content-click="false">
      <template v-slot:activator="{ props }">
        <v-btn
          icon
          class="text-darkText mx-3"
          color="white"
          rounded="sm"
          size="small"
          variant="flat"
          v-bind="props"
        >
          <BellIcon stroke-width="1.5" size="22" />
        </v-btn>
      </template>
      <v-sheet rounded="md" width="330" elevation="12">
        <NotificationDD />
      </v-sheet>
    </v-menu>

    <!-- ---------------------------------------------- -->
    <!-- User Profile -->
    <!-- ---------------------------------------------- -->
    <v-menu :close-on-content-click="false">
      <template v-slot:activator="{ props }">
        <v-btn
          class="profileBtn text-primary"
          color="lightprimary"
          variant="flat"
          rounded="pill"
          v-bind="props"
        >
          <v-avatar size="30" class="mr-2 py-2">
            <img src="@/assets/images/profile/user-round.svg" alt="Julia" />
          </v-avatar>
          <SettingsIcon stroke-width="1.5" />
        </v-btn>
      </template>
      <v-sheet rounded="md" width="330" elevation="12">
        <ProfileDD />
      </v-sheet>
    </v-menu>
  </v-app-bar>
</template>
