<script setup lang="ts">
import Appbar from './Components/Appbar.vue';
import HomeBanner from './Components/HomeBanner.vue';
import Features from './Components/Features.vue';
import Demos from './Components/Demos.vue';
import KeyFeatures from './Components/KeyFeatures.vue';
import Timeline from './Components/Timeline.vue';
import Subscribe from './Components/Subscribe.vue';
import Footer from './Components/Footer.vue';
import 'aos/dist/aos.css';
import { onMounted } from 'vue';
import AOS from 'aos';

onMounted(() => {
  AOS.init();
});
</script>

<template>
  <v-layout>
    <Appbar />
    <v-main class="ma-0">
      <v-container class="maxWidth">
        <HomeBanner />
        <Features />
        <Demos />
        <Timeline />
        <KeyFeatures />
      </v-container>
      <Subscribe />
      <Footer />
    </v-main>
  </v-layout>
</template>
