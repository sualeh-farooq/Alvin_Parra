<script setup lang="ts">
const props = defineProps({
  name: String,
  destination: String,
  building: String,
  street: String,
  city: String,
  state: String,
  country: String,
  post: String,
  phone: String,
  isDefault: Boolean,
  showBtn: Boolean
});
</script>
<template>
  <v-card variant="outlined">
    <v-card-text>
      <div class="d-flex align-center gap-2">
        <h6 class="text-h5">{{ name }}</h6>
        <small class="text-medium-emphasis">({{ destination }})</small>
        <v-chip color="primary" size="small" class="ml-auto" v-if="isDefault">Default</v-chip>
      </div>
      <div class="my-4 text-body1">
        <p>{{ building }}, {{ street }}, {{ city }}, {{ state }}, {{ country }} - {{ post }}</p>
        <p>{{ phone }}</p>
      </div>
      <div class="d-sm-flex align-center gap-2" v-if="showBtn">
        <v-btn variant="outlined" flat color="primary">Deliver to This Address</v-btn>
        <div class="ml-auto d-flex gap-1">
          <v-btn icon flat size="small"><PencilIcon size="18" /></v-btn>
          <v-btn icon flat size="small"><TrashIcon size="18" /></v-btn>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>
