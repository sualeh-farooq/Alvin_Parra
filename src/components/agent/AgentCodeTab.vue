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
      firstName: 'John',
      lastName: 'Doe',
      preferredName: 'John Doe',
      agentStatusVal: 'Limited',
      phoneNumber: '4201730212',
      dob: '18-03-22',
      spouseName: 'Henry Clark',
      spouseEmail: 'henry@gmail.com',
      spousePhone: '4129302029',
      city: 'Pasadena',
      state: 'California',
      zipCode: 'CA 91030',
      streetAddress: '1445 Huntington Dr #325, S Pasadena, CA 91030, United States',
      nationalProdNumVal: 'SDHA-38323',
      residentState: 'California',
      lifeLicenseTypeVal: 'Health Only(32 Hrs)',
      residentLicenseVal: 'ALS-27828-E',
      licenseStatusVal: 'About to expire',
      nonResidentState: 'Kentucky',
      nonResidentlifeLicenseTypeVal: 'Life Only (32 Hrs)',
      nonResidentLicenseVal: 'CLS-6872-SA',
      nonResidentLicenseStatusVal: 'Active',
      onlineSchool: 'School of Business Administration',
      schoolUser: 'Alex Fay',
      schoolPass: '17910282',
      hourCEVal: 'Completed',
      limraAnnualRevVal: 'Expired (every Jan 16 and July 15)',
      limraURL: 'https://www.limraUrl.com',
      limraUser: 'David Jone',
      limraPass: '729272',
      hoursRequired: '10 hrs',
      hoursApplied: '8 hrs',
      agentCode: 'AJS-292',
      uplineCode: '21311',
      recruiterCode: '38120',
      genAgency: 'DK Agency',
      managerVal: 'Agent Access Only',
      agencyTeamVal: 'Algeria Financial',
      payToVal: 'Company (EIN 1099)',
      companyNameVal: 'Microsoft',
      companyTypeVal: 'LLC',
      companyEN: 'MC-292-EE-2',
      bankName:'Union Bank',
      accountTypeVal: 'Business Account',
      bankRoutingNum: 'UB-232',
      bankAccountNum: '2822 8292 29292 036',
      paymentCer: 'Payment certification input received and verified',
      levelAnn: '90%',
      levelLife: '80%',
      levelHealth: '100%',
      mediCare: '80%',
      licenseStatus: ['Active', 'About to expire', 'Expired', 'Inactive', 'Unlicensed'],
      lifeLicenseType: ['LH(52 Hrs)', 'Life Only (32 Hrs)', 'Health Only(32 Hrs)'],
      hourCE: ['Completed', 'Incomplete'],
      limraReview: ['Expired (every Jan 16 and July 15)', 'Expired (every Jan 16 and July 15)'],
      agencyManager: ['Agent Access Only', 'Agency Manager Only'],
      agencyTeam: ['Strategic Choices', 'Algeria Financial', 'Level 5 Wealth'],
      payTo: ['Company (EIN 1099)', 'Individual (SSN 1099)'],
      companyType: ['Corporation', 'DBA Sole Proprietor', 'LLC'],
      accountType: ['Business Account', 'Personal Account'],
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
        <v-text-field v-model="agentCode"  label="Agent Code" variant="outlined" class="mb-3"></v-text-field>
      </v-col>
      <v-col cols="12" md="6" lg="4" sm="12" >
        <v-text-field v-model="uplineCode"  label="Upline Code" variant="outlined" class="mb-3"></v-text-field>
      </v-col>
      <v-col cols="12" md="6" lg="4" sm="12" >
        <v-text-field v-model="recruiterCode"  label="Recruiter Code" variant="outlined" class="mb-3"></v-text-field>
      </v-col>
      <v-col cols="12" md="6" lg="4" sm="12" >
        <v-text-field   label="Gen Agency" v-model="genAgency" variant="outlined" class="mb-3"></v-text-field>
      </v-col>
      <v-col cols="12" md="6" lg="4" sm="12" >
        <v-autocomplete v-model="managerVal" :items="agencyManager"   label="Agency Manager" variant="outlined" class="mb-3"></v-autocomplete>
      </v-col>
      <v-col cols="12" md="6" lg="4" sm="12" >
        <v-autocomplete  v-model="agencyTeamVal" :items="agencyTeam"   label="Agency Team" variant="outlined" class="mb-3"></v-autocomplete>
      </v-col>
    </v-row>

    <div class="py-4   text-left">
      <v-btn color="primary" variant="outlined" size="large" class="text-subtitle-1 mt-2">Update Agent Code Settings</v-btn>
    </div>
  </div>
</template>
