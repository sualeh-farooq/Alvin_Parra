<script setup >
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

const checkbox = ref(false);
const valid = ref(false);
const show1 = ref(false);
//const logform = ref();
const password = ref(null);
const username = ref(null);
const passwordRules = ref([
  (v) => !!v || 'Password is required',
  (v) => (v && v.length <= 10) || 'Password must be less than 10 characters'
]);
const emailRules = ref([(v) => !!v || 'E-mail is required']);

function validate(values, { setErrors }) {
  const authStore = useAuthStore();
  return authStore.login(username.value, password.value).catch((error) => setErrors({ apiError: error }));
}

</script>

<template>
 
  <v-row>
    
  </v-row>
  <Form @submit="validate" class="mt-14 loginForm" v-slot="{ errors, isSubmitting }">
    <v-text-field
        :rules="emailRules"
        label="Email Address "
        class="mt-4 mb-8"
        required
        density="comfortable"
        hide-details="auto"
        variant="outlined"
        color="primary"
        v-model="username"
    ></v-text-field>
    <v-text-field
        :rules="passwordRules"
        label="Password"
        required
        density="comfortable"
        variant="outlined"
        color="primary"
        hide-details="auto"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show1 ? 'text' : 'password'"
        @click:append="show1 = !show1"
        class="pwdInput"
        v-model="password"
    ></v-text-field>


    <div class="d-sm-flex align-center mt-2 mb-7 mb-sm-0">
      <v-checkbox
        v-model="checkbox"
        :rules="[(v) => !!v || 'You must agree to continue!']"
        label="Remember me?"
        required
        color="primary"
        class="ms-n2"
        hide-details
      ></v-checkbox>
      <div class="ml-auto">
        <a href="javascript:void(0)" class="text-primary text-decoration-none">Forgot password?</a>
      </div>
    </div>
    <v-btn color="primary" :loading="isSubmitting" block class="mt-2" variant="flat" size="large" :disabled="valid" type="submit">
      Sign In
    </v-btn>
    <div v-if="errors.apiError" class="mt-2">
      <v-alert color="error">{{ errors.apiError }}</v-alert>
    </div>
  </Form>
  <div class="mt-5 text-right">
    <v-divider />
    <v-btn variant="plain" to="/register" class="mt-2 text-capitalize mr-n2">Don't Have an account?</v-btn>
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
.loginForm {
  .v-text-field .v-field--active input {
    font-weight: 500;
  }
}
</style>
