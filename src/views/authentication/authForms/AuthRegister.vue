<script setup lang="ts">
import { ref } from "vue";
import Google from "@/assets/images/auth/social-google.svg";
const checkbox = ref(false);
const valid = ref(true);
const show1 = ref(false);
const password = ref("");
const email = ref("");
const Regform = ref();
const firstname = ref("");
const lastname = ref("");
const passwordRules = ref([
  (v: string) => !!v || "Password is required",
  (v: string) => (v && v.length <= 10) || "Password must be less than 10 characters",
]);
const emailRules = ref([
  (v: string) => !!v || "E-mail is required",
  (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid",
]);

function validate() {
  Regform.value.validate();
}
data: () => ({
  rules: [
    value => {
      return !value || !value.length || value[0].size < 2000000 || 'Avatar size should be less than 2 MB!'
    },
  ],
})
</script>

<template>
  <h5 class="text-h5 text-left mt-1 mb-8">Sign up with Email address</h5>
  <v-form ref="Regform" lazy-validation action="/dashboards/analytical" class="mt-7 loginForm">
    <v-row>
      <v-col cols="12" sm="12" md="6" lg="4">
        <v-text-field density="comfortable" hide-details="auto" variant="outlined" color="primary"
          label="First Name"></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="4">
        <v-text-field density="comfortable" hide-details="auto" variant="outlined" color="primary"
          label="Last Name"></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="4">
        <v-text-field type="number" density="comfortable" hide-details="auto" variant="outlined" color="primary"
          label="Phone"></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="4">
        <v-text-field density="comfortable" hide-details="auto" variant="outlined" color="primary"
          label="Social Security"></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="4">
        <v-text-field density="comfortable" hide-details="auto" variant="outlined" color="primary"
          label="City"></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="4">
        <v-text-field density="comfortable" hide-details="auto" variant="outlined" color="primary"
          label="Email"></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="4">
        <v-text-field density="comfortable" hide-details="auto" variant="outlined" color="primary"
          label="License Number"></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="4">
        <v-text-field type="password" density="comfortable" hide-details="auto" variant="outlined" color="primary"
          label="Password"></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="4">
        <v-text-field type="password" density="comfortable" hide-details="auto" variant="outlined" color="primary"
          label="Confirm Password"></v-text-field>
      </v-col>
      <v-col cols="12" sm="12">
        <v-file-input :rules="rules" accept="image/png, image/jpeg, image/bmp" placeholder="Upload License Image"
          prepend-icon="mdi-camera" label="Upload License Image"></v-file-input>
      </v-col>
    </v-row>


    <v-btn color="primary" block class="mt-2" size="large" @click="validate()">Sign Up</v-btn>
  </v-form>
  <div class="mt-1 text-right">
    <v-divider />
    <v-btn variant="plain" to="/login" class="mt-2 text-capitalize mr-n2">Already have an account?</v-btn>
  </div>
</template>
<style lang="scss">
.custom-devider {
  border-color: rgba(0, 0, 0, 0.08) !important;
}

.googleBtn {
  border-color: rgba(0, 0, 0, 0.08);
  margin: 30px 0 20px 0;
}

.outlinedInput .v-field {
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: none;
}

.orbtn {
  padding: 2px 40px;
  border-color: rgba(0, 0, 0, 0.08);
  margin: 20px 15px;
}

.pwdInput {
  position: relative;

  .v-input__append {
    position: absolute;
    right: 10px;
  }
}
</style>
