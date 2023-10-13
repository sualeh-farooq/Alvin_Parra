<template>
  <div class="logo">
    <RouterLink to="/">
        <img class="w-100" alt="Logo" src="../../../assets/images/logos/logo3.png" />
    </RouterLink>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const primary = ref('rgb(var(--v-theme-primary))');
const secondary = ref('rgb(var(--v-theme-secondary))');
</script>
