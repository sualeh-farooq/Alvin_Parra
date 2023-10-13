<script setup lang="ts">
import { ref } from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';

// icons
import { AccessPointIcon } from 'vue-tabler-icons';

// theme breadcrumb
const page = ref({ title: 'Checkboxes' });
const breadcrumbs = ref([
  {
    text: 'Dashboard',
    disabled: false,
    href: '#'
  },
  {
    text: 'Checkboxes',
    disabled: true,
    href: '#'
  }
]);

const checkbox = ref(false);
const checkbox2 = ref(true);
const checkbox3 = ref(false);
const checkbox4 = ref(true);
const checked = ref(true);
const unchecked = ref(false);
const colorChecked = ref(true);
const includeFiles = ref(true);
const enabled = ref(false);

// checks color data
const checksColor = ref(['primary', 'secondary', 'success', 'error', 'warning']);
</script>

// ===============================|| Ui Checkbox ||=============================== //
<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
  <v-row>
    <v-col cols="12">
      <UiParentCard title="Checkbox">
        <v-row>
          <!-- Basic checkboxes -->
          <v-col cols="12" lg="4">
            <UiChildCard title="Basic Checkboxes">
              <div class="d-flex gap-3 align-center flex-column flex-sm-row">
                <v-checkbox-btn color="success" hide-details v-model="checkbox"></v-checkbox-btn>
                <v-checkbox-btn color="primary" hide-details v-model="checkbox2"></v-checkbox-btn>
                <v-checkbox-btn v-model="checkbox3" hide-details></v-checkbox-btn>
                <v-checkbox-btn color="secondary" hide-details v-model="checkbox4"></v-checkbox-btn>
              </div>
            </UiChildCard>
          </v-col>
          <!-- With label -->
          <v-col cols="12" lg="4">
            <UiChildCard title="With label">
              <div class="d-flex gap-3 align-center flex-column flex-sm-row">
                <v-checkbox-btn color="primary" hide-details v-model="checked" label="Checked"></v-checkbox-btn>
                <v-checkbox-btn color="primary" disabled hide-details v-model="unchecked" label="Unchecked"></v-checkbox-btn>
              </div>
            </UiChildCard>
          </v-col>
          <!-- With Colors -->
          <v-col cols="12" lg="4">
            <UiChildCard title="With Colors">
              <div class="d-flex gap-3 align-center flex-column flex-sm-row">
                <v-checkbox-btn v-for="btn in checksColor" :key="btn" :color="btn" hide-details v-model="colorChecked"></v-checkbox-btn>
              </div>
            </UiChildCard>
          </v-col>
          <!-- With Inline Textfield -->
          <v-col cols="12">
            <UiChildCard title="With Inline Textfield">
              <div class="d-flex">
                <v-checkbox-btn v-model="includeFiles" class="pr-2"></v-checkbox-btn>
                <v-text-field variant="outlined" label="Include files" hide-details></v-text-field>
              </div>
              <div class="d-flex mt-3">
                <v-checkbox-btn v-model="enabled" class="pr-2"></v-checkbox-btn>
                <v-text-field variant="outlined" :disabled="!enabled" hide-details label="I only work if you check the box"></v-text-field>
              </div>
            </UiChildCard>
          </v-col>
        </v-row>
      </UiParentCard>
    </v-col>
  </v-row>
</template>
