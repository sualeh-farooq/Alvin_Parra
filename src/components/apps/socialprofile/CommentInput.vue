<script setup lang="ts">
import { usePostsStore } from '@/stores/apps/posts';

const store = usePostsStore();
const props = defineProps({
  userComment: Object || Array,
  searchValue: String
});
</script>

<template>
  <div class="d-flex gap-3 align-center mb-5">
    <img :src="userComment?.profile.avatar" width="40" class="flex-shrink-0" alt="avatar" />
    <v-text-field variant="outlined" color="primary"  label="Write Comment" hide-details></v-text-field>
    <v-btn color="secondary" variant="flat" size="large" @click="$emit('addComment')"> Comment </v-btn>
  </div>
</template>
