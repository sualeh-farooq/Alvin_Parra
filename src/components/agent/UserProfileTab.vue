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
      imageUrl: "/src/assets/images/license.jpg",
    fName: 'Strategic Financial Algeria' ,
    lName: 'John Doe' ,
    email: 'strategicAlgeria@gmail.com',
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

    <input type="file" ref="fileInput" style="display: none" @change="handleFileChange" accept="image/*" />
    <v-row class="">
      <v-col cols="12" lg="4" md="6" sm="12" >
        <v-text-field  label="First Name" variant="outlined" class="mb-3"></v-text-field>
      </v-col>
      <v-col cols="12" lg="4" md="6" sm="12" >
        <v-text-field  label="Last Name" variant="outlined" class="mb-3"></v-text-field>
      </v-col>
      <v-col cols="12" lg="4" md="6" sm="12" >
        <v-text-field  label="Preffered Name" variant="outlined" class="mb-3"></v-text-field>
      </v-col>
      <v-col cols="12" lg="4" md="6" sm="12" >
        <v-autocomplete label="Agent Status" :items="agentStatus"  color="primary" variant="outlined" hide-details></v-autocomplete>
      </v-col>
      <v-col cols="12" lg="4" md="6" sm="12" >
        <v-text-field  label="Phone Number" variant="outlined" class="mb-3"></v-text-field>
      </v-col>
      <v-col cols="12" lg="4" md="6" sm="12" >
        <v-text-field  label="2nd Phone Number" variant="outlined" class="mb-3"></v-text-field>
      </v-col>
      <v-col cols="12" lg="4" md="6" sm="12" >
        <v-text-field  label="Email" variant="outlined" class="mb-3"></v-text-field>
      </v-col>
      <v-col cols="12" lg="4" md="6" sm="12" >
        <v-text-field type="date" label="Date of Birth" variant="outlined" class="mb-3"></v-text-field>
      </v-col>
      <v-col cols="12" lg="4" md="6" sm="12" >
        <v-text-field  label="Social Security " variant="outlined" class="mb-3"></v-text-field>
      </v-col>
      <v-col cols="12" lg="4" md="6" sm="12" >
        <v-text-field  label="Spouse Name" variant="outlined" class="mb-3"></v-text-field>
      </v-col>
      <v-col cols="12" lg="4" md="6" sm="12" >
        <v-text-field label="Spouse Email" variant="outlined" class="mb-3"></v-text-field>
      </v-col>
      <v-col cols="12" lg="4" md="6" sm="12" >
        <v-text-field  label="Spouse Phone " variant="outlined" class="mb-3"></v-text-field>
      </v-col>
      <v-col cols="12" lg="4" md="6" sm="12" >
        <v-text-field  label="City" variant="outlined" class="mb-3"></v-text-field>
      </v-col>
      <v-col cols="12" lg="4" md="6" sm="12" >
        <v-text-field label="State" variant="outlined" class="mb-3"></v-text-field>
      </v-col>
      <v-col cols="12" lg="4" md="6" sm="12" >
        <v-text-field  label="Zipcode " variant="outlined" class="mb-3"></v-text-field>
      </v-col>
      <v-col cols="12" >
        <v-textarea filled auto-grow label="Street Address" rows="2" row-height="20" color="primary" variant="outlined"></v-textarea>
      </v-col>
    </v-row>

    <div class="py-4  mt-2 text-left">
      <v-btn color="primary" variant="outlined" size="large" class="text-subtitle-1 mt-4">Update Settings</v-btn>
          </div>
  </div>
</template>
