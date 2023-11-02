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
      socialSecurity : 'US-E02-185',
      levelAnn: '90%',
      levelLife: '80%',
      levelHealth: '100%',
      mediCare: '80%',
      percentage: ['100%', '90%', '80%', '70', '60%', '50%'],
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


    <v-row class="mt-1">
      <v-col cols="12" md="6" lg="4" sm="12" >
        <v-autocomplete  v-model="levelAnn" :items="percentage"   label="Level-ANN" variant="outlined" ></v-autocomplete>
      </v-col>
      <v-col cols="12" md="6" lg="4" sm="12" >
        <v-autocomplete v-model="levelLife" :items="percentage"   label="Level-Life" variant="outlined" ></v-autocomplete>
      </v-col>
      <v-col cols="12" md="6" lg="4" sm="12" >
        <v-autocomplete v-model="levelHealth" :items="percentage"   label="Level-Health" variant="outlined" ></v-autocomplete>
      </v-col>
      <v-col cols="12" md="6" lg="4" sm="12" >
        <v-autocomplete v-model="mediCare" :items="percentage"   label="Medicare" variant="outlined" ></v-autocomplete>
      </v-col>
    </v-row>

    <div class="py-4  text-left">
      <v-btn color="primary" size="large" class="text-subtitle-1 mt-2">Update Commision Settings</v-btn>
    </div>
  </div>
</template>
