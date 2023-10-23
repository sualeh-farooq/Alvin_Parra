<script >
import { ref } from 'vue';

// icons
import { AlertCircleIcon } from 'vue-tabler-icons';

const textlname = ref('Schorl');
const textfname = ref('Delaney');
const textemail = ref('demo@company.com');
const textphone = ref('000-00-00000');
const textcompany = ref('company.ltd');
const textsite = ref('www.company.com');




export default {
  data() {
    return {
      imageUrl: "/src/assets/images/logos/logo2.png",
    fName: 'John' , 
    lName: 'Doe' ,
    email: 'johndoe@gmail.com',
    phone: 1432423232,
    license: 'HSDK-3628',
    socialSecurity : 'US-E02-185'
    };
  },
  methods: {
    openFileInput() {
      // Trigger the file input field
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        // Assuming you have a method to limit the file size
        if (this.isFileSizeValid(file)) {
          this.imageUrl = URL.createObjectURL(file);
        } else {
          // Handle file size error
          alert("File size exceeds the limit.");
        }
      }
    },
    removeImage() {
      this.imageUrl = null;
      // Optionally, you can clear the file input as well
      this.$refs.fileInput.value = "";
    },
    isFileSizeValid(file) {
      // Implement your logic to check if the file size is within the limit
      return file.size <= 1500000; // 1.5MB in bytes
    },
  }
}

</script>

<template>
  <div>
    <div class="d-flex flex-row ">
      <div style="height: 120px; width:150px" >
        <img style="height: 100%" :src="imageUrl" class="w-100" alt="user-img" />
      </div>
      <div
        class="ml-4 d-flex flex-column align-start justify-space-between text-subtitle-2 text-medium-emphasis font-weight-medium">
        <div class="d-flex align-center">
          <AlertCircleIcon width="20" stroke-width="1.5" class="mx-2" /> Logo size Limit should be 1.5mb Max.
          <AlertCircleIcon width="20" stroke-width="1.5" class="mx-2" /> The Proposed size is 512 * 512px.
        </div>
        <div class="d-flex flex-wrap gap-3">
          <v-btn color="primary" @click="openFileInput">Change</v-btn>
          <v-btn color="error" @click="removeImage">Remove</v-btn>
        </div>
      </div>
    </div>
    <input type="file" ref="fileInput" style="display: none" @change="handleFileChange" accept="image/*" />
    <v-row class="mt-6">
      <v-col cols="12" lg="6">
        <v-text-field type="text" color="primary" v-model="fName" label="First Name" variant="outlined" hide-details>
        </v-text-field>
      </v-col>
      <v-col cols="12" lg="6">
        <v-text-field type="text" color="primary" v-model="lName" label="Last Name" variant="outlined" hide-details>
        </v-text-field>
      </v-col>
      <v-col cols="12" lg="6">
        <v-text-field type="email" color="primary" v-model="email" label="Email Address" variant="outlined"
          hide-details>
        </v-text-field>
      </v-col>
      <v-col cols="12" lg="6">
        <v-text-field type="number" color="primary" v-model="phone" label="Phone Number" variant="outlined"
          hide-details> </v-text-field>
      </v-col>
      <v-col cols="12" lg="6">
        <v-text-field type="text" color="primary" v-model="license" label="License Number" variant="outlined"
          hide-details>
        </v-text-field>
      </v-col>
      <v-col cols="12" lg="6">
        <v-text-field type="url" color="primary" v-model="socialSecurity" label="Social Security" variant="outlined"
          hide-details>
        </v-text-field>
      </v-col>
    </v-row>

    <div class="py-4   text-left">
      <v-btn color="primary" variant="outlined" size="large" class="text-subtitle-1 mt-2">Update Profile Settings</v-btn>
          </div>
  </div>
</template>
