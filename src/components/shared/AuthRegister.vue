<script lang="ts">
import {ref} from "vue";


const regType = ref(['I am personal producer', 'I have a team of agents & I want to register'])
const experience = ref(['0-1 Year', '2-5 Years', '6-10 Years', '11+ Years'])
const licenseType = ref(['Life & Health License (52 hrs)', 'Life-Only License (32 hrs)', 'Health-Only License (32 hrs)', 'Securities License', 'Not currently licensed'])


const states = ref([
  "Alabama", "Alaska", "Arizona", "Arkansas", "California",
  "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
  "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
  "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
  "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
])

export default {
  data() {
    return {
      states, regType, licenseType, experience,
      confirmationMessage: false,
    }
  },
  methods: {
    toggleConfirmation() {
      this.confirmationMessage = !this.confirmationMessage
    }
  }
}

</script>

<template>
  <div   >
    <div class="register_form" v-if="!confirmationMessage" >
      <h2 class="text-primary text-h2">Join our General Agency Today</h2>
      <h5 class="text-h5 text-left mt-1 mb-8">Get ready to be captivated by our amazing CRM and Agent Management Office</h5>
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
                          label="Email"></v-text-field>
          </v-col>

          <v-col cols="12" sm="12" md="6" lg="4">
            <v-text-field type="password" density="comfortable" hide-details="auto" variant="outlined" color="primary"
                          label="Password"></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="4">
            <v-text-field type="password" density="comfortable" hide-details="auto" variant="outlined" color="primary"
                          label="Confirm Password"></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="4">
            <v-autocomplete label="Primary License" :items="licenseType" color="primary" variant="outlined"
                            hide-details></v-autocomplete>
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="4">
            <v-text-field type="password" density="comfortable" hide-details="auto" variant="outlined" color="primary"
                          label="Reffered by Agent (Leave blank if none)"></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="4">
            <v-autocomplete label="Resident State" :items="states" color="primary" variant="outlined"
                            hide-details></v-autocomplete>
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="4">
            <v-autocomplete label="Industry Experience" :items="experience" color="primary" variant="outlined"
                            hide-de tails></v-autocomplete>
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="4">
            <v-text-field density="comfortable" hide-details="auto" variant="outlined" color="primary"
                          label="License # or CRD"></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="4">
            <v-autocomplete label="Registration Type" :items="regType" color="primary" variant="outlined"
                            hide-details></v-autocomplete>
          </v-col>
        </v-row>


        <v-btn @click="toggleConfirmation" color="primary" block class="mt-2" size="large" >Sign Up</v-btn>
      </v-form>
      <div class="mt-1 text-right">
        <v-divider/>
        <v-btn variant="plain" to="/login" class="mt-2 text-capitalize mr-n2">Already have an account?</v-btn>
      </div>
    </div>


    <div v-if="confirmationMessage" >
      <v-row>
        <v-col cols="12" sm="12" >
          <div class="d-flex  justify-center " >
            <CircleCheckIcon size="100" class="text-primary"/>
          </div>
          <div class="my-2 px-3 py-3 d-flex justify-center" >
            <div class="w-75  " >
              <p class="confirm_message" >Thank you for your application.Please allow for upto 24 hours for the team to review and approve your application. We will email you with the instructions to login and how to start using your Agent BackOffice and State of the Art Life and Health CRM.</p>
            </div>
          </div>
          <div class="my-2 d-flex justify-center" >
            <v-btn @click="toggleConfirmation" color="primary" >Back to Register</v-btn>
          </div>
        </v-col>
      </v-row>

    </div>
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

.confirm_message {
  line-height: 30px;
  word-spacing: 5px;
  text-align: center;
  font-size: 18px;
}
</style>
