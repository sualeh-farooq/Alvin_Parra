<script setup lang="ts">
import { ref } from 'vue';

// icons
import { AlertCircleIcon } from 'vue-tabler-icons';

const textcpass = ref('textcmpass');
const textnpass = ref(' 2345');
const textcmpass = ref('12345');
</script>

<template>
  <div>
    <v-row class="mt-1" >
      <v-col cols="12" lg="4">
        <v-text-field type="password"  label="Current Password" variant="outlined" hide-details>
        </v-text-field>
      </v-col>
      <v-col cols="12" lg="4">
        <v-text-field type="password"  label="New Password" variant="outlined" hide-details>
        </v-text-field>
      </v-col>
      <v-col cols="12" lg="4">
        <v-text-field type="password"  label="Confirm Password" variant="outlined" hide-details>
        </v-text-field>
      </v-col>
    </v-row>
    <v-btn color="primary"  size="large" class="text-subtitle-1 mt-4">Change Password</v-btn>
  </div></template>
