<script  lang="ts">
export default  {

  data(){
    return {
      tab2: null,
      agentStatus: [
        'Active',
        'Limited',
        'Inactive',
        'Suspended'
      ],
      licenseStatus: ['Active', 'About to expire', 'Expired', 'Inactive', 'Unlicensed'],
      lifeLicenseType: ['LH(52 Hrs)', 'Life Only (32 Hrs)', 'Health Only(32 Hrs)'],
      hourCE: ['Completed', 'Incomplete'],
      limraReview: ['Expired (Jan 16-July 15)', 'Expired (Aug 15-Dec 15)'],
      agencyManager: ['Agent Access Only', 'Agency Manager Only'],
      agencyTeam: ['Strategic Choices', 'Algeria Financial', 'Level 5 Wealth'],
      payTo: ['Company (EIN 1099)', 'Individual (SSN 1099)'],
      companyType: ['Corporation', 'DBA Sole Proprietor', 'LLC'],
      accountType: ['Business Account', 'Personal Account'],
      percentage: ['100%', '90%', '80%', '70', '60%', '50%'],
      firstName: 'John',
      lastName: 'Doe',
      preferredName: 'John Doe',
      agentStatusVal: 'Limited',
      phoneNumber: '4201730212',
      email: 'johnDoe@gmail.com',
      dob: '18-03-22',
      socialSecurity: 'USK-2839',
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
      limraAnnualRevVal: 'Expired (Jan 16-July 15)',
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
      mediCare: '80%'



    }
  },
  methods: {
    goBack(){
      window.history.back()
    }
  }
}
</script>
<template>
  <v-row>
    <v-col col="12">
      <v-card variant="outlined" elevation="0" class="withbg">
        <v-card-item>
          <div class="d-sm-flex align-center justify-space-between">
            <h3 class="text-h3">Agent Details</h3>
            <v-btn  @click="goBack" color="primary" ><ArrowNarrowLeftIcon /> Go Back </v-btn>


          </div>
        </v-card-item>
        <v-divider></v-divider>
        <v-card-text>

          <!-- Content Goes Here -->
          <v-row>
            <v-col>
              <v-tabs v-model="tab2" color="primary">
                <v-tab value="personal">
                  <UserIcon stroke-width="1.5" width="20" class="v-icon--start" /> Personal Info
                </v-tab>
                <v-tab value="licensing">
                  <BrandMastercardIcon stroke-width="1.5" width="20" class="v-icon--start" /> Licensing
                </v-tab>
                <v-tab value="education">
                  <SchoolIcon stroke-width="1.5" width="20" class="v-icon--start" /> Education
                </v-tab>
                <v-tab value="agentCode">
                  <KeyIcon stroke-width="1.5" width="20" class="v-icon--start" /> Agent Code
                </v-tab>

                <v-tab value="banking">
                  <CreditCardIcon stroke-width="1.5" width="20" class="v-icon--start" /> Banking Info
                </v-tab>
                <v-tab value="commision">
                  <PercentageIcon stroke-width="1.5" width="20" class="v-icon--start" /> Commision Level
                </v-tab>
              </v-tabs>

              <v-window v-model="tab2" >
                <v-window-item value="personal" >
                  <v-row class="my-2" >
                    <v-col cols="12" lg="3" md="6" sm="12" >
                      <v-text-field v-model="firstName" label="First Name" variant="outlined" ></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="3" md="6" sm="12" >
                      <v-text-field v-model="lastName" label="Last Name" variant="outlined" ></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="3" md="6" sm="12" >
                      <v-text-field v-model="preferredName" label="Preffered Name" variant="outlined" ></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="3" md="6" sm="12" >
                      <v-autocomplete v-model="agentStatusVal" label="Agent Status" :items="agentStatus"  color="primary" variant="outlined" hide-details></v-autocomplete>
                    </v-col>
                    <v-col cols="12" lg="3" md="6" sm="12" >
                      <v-text-field v-model="phoneNumber"  label="Phone Number" variant="outlined" ></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="3" md="6" sm="12" >
                      <v-text-field v-model="phoneNumber" label="2nd Phone Number" variant="outlined" ></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="3" md="6" sm="12" >
                      <v-text-field  v-model="email" label="Email" variant="outlined" ></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="3" md="6" sm="12" >
                      <v-text-field v-model="dob" type="date" label="Date of Birth" variant="outlined" ></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="3" md="6" sm="12" >
                      <v-text-field v-model="socialSecurity" label="Social Security " variant="outlined" ></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="3" md="6" sm="12" >
                      <v-text-field v-model="spouseName" label="Spouse Name" variant="outlined" ></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="3" md="6" sm="12" >
                      <v-text-field  v-model="spouseEmail" label="Spouse Email" variant="outlined" ></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="3" md="6" sm="12" >
                      <v-text-field v-model="spousePhone" label="Spouse Phone " variant="outlined" ></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="3" md="6" sm="12" >
                      <v-text-field v-model="city"  label="City" variant="outlined" ></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="3" md="6" sm="12" >
                      <v-text-field v-model="state" label="State" variant="outlined" ></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="3" md="6" sm="12" >
                      <v-text-field v-model="zipCode" label="Zipcode " variant="outlined" ></v-text-field>
                    </v-col>
                    <v-col cols="12" >
                      <v-textarea v-model="streetAddress" filled auto-grow label="Street Address" rows="2" row-height="20" color="primary" variant="outlined"></v-textarea>
                    </v-col>
                  </v-row>
                </v-window-item>


                <v-window-item value="licensing" >
                  <v-row class="my-2" >
                    <v-col cols="12" lg="3" md="6" sm="12" >
                      <v-text-field v-model="nationalProdNumVal" label="National Producer #" variant="outlined" ></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="3" md="6" sm="12" >
                      <v-text-field  v-model="residentState" label="Resident State" variant="outlined" ></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="3" md="6" sm="12" >
                      <v-autocomplete v-model="lifeLicenseTypeVal" :items="lifeLicenseType" label="Life License Type" variant="outlined" ></v-autocomplete>
                    </v-col>
                    <v-col cols="12" lg="3" md="6" sm="12" >
                      <v-text-field  v-model="residentLicenseVal" label="Resident License #" variant="outlined" ></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="3" md="6" sm="12" >
                      <v-text-field type="date" label="Resident License Issue Date" variant="outlined" ></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="3" md="6" sm="12" >
                      <v-text-field type="date" label=" License Expiration" variant="outlined" ></v-text-field>
                    </v-col>

                    <v-col cols="12" lg="3" md="6" sm="12" >
                      <v-autocomplete v-model="licenseStatusVal" label="License Status"
                                      :items="licenseStatus"
                                      color="primary" variant="outlined" hide-details></v-autocomplete>
                    </v-col>
                    <v-col cols="12" lg="3" md="6" sm="12" >
                      <v-text-field  v-model="nonResidentState" label="NonResident State" variant="outlined" ></v-text-field>
                    </v-col>

                    <v-col cols="12" lg="3" md="6" sm="12" >
                      <v-autocomplete v-model="lifeLicenseTypeVal" :items="lifeLicenseType"  label="Non Resident Life License Type" variant="outlined" ></v-autocomplete>
                    </v-col>
                    <v-col cols="12" lg="3" md="6" sm="12" >
                      <v-text-field  v-model="nonResidentLicenseVal" label="Non Resident License #" variant="outlined" ></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="3" md="6" sm="12" >
                      <v-text-field  type="date" label="Non Resident License Issued" variant="outlined" ></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="3" md="6" sm="12" >
                      <v-text-field  type="date" label="Non Resident License Expiration Date" variant="outlined" ></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="3" md="6" sm="12" >
                      <v-autocomplete  v-model="nonResidentLicenseStatusVal" label="None Resident License Status"
                                       :items="licenseStatus"
                                       color="primary" variant="outlined" hide-details></v-autocomplete>
                    </v-col>
                  </v-row>
                </v-window-item>

                <v-window-item value="education" >

                  <v-row class="my-2" >
                    <v-col cols="12" md="6" lg="3" sm="12" >
                      <v-text-field v-model="schoolUser"  label="Online School" variant="outlined" ></v-text-field>

                    </v-col>
                    <v-col cols="12" md="6" lg="3" sm="12" >
                      <v-text-field v-model="schoolUser" label=" School User" variant="outlined" ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="3" sm="12" >
                      <v-text-field v-model="schoolPass" label=" School Password" variant="outlined" ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="3" sm="12" >
                      <v-autocomplete v-model="hourCEVal" label="24 hr CE'ss"
                                      :items="hourCE"
                                      color="primary" variant="outlined" hide-details></v-autocomplete>
                    </v-col>
                    <v-col cols="12" md="6" lg="3" sm="12" >
                      <v-text-field type="date"  label="Res License Start" variant="outlined" ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="3" sm="12" >
                      <v-text-field type="date"  label="License Term" variant="outlined" ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6" lg="3" sm="12" >
                      <v-autocomplete v-model="limraAnnualRevVal" label="LIMRA Annual Review"
                                      :items="limraReview"
                                      color="primary" variant="outlined" hide-details></v-autocomplete>
                    </v-col>
                    <v-col cols="12" md="6" lg="3" sm="12" >
                      <v-text-field v-model="limraURL" label="LIMRA URL" variant="outlined" ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="3" sm="12" >
                      <v-text-field  v-model="limraUser" label="LIMRA User (NPN)" variant="outlined" ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="3" sm="12" >
                      <v-text-field v-model="limraPass" label="LIMRA Password"  variant="outlined" ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="3" sm="12" >
                      <v-text-field v-model="hoursRequired" label="Hours Required" variant="outlined" ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="3" sm="12" >
                      <v-text-field v-model="hoursApplied" label="Hours Applied" variant="outlined" ></v-text-field>
                    </v-col>

                  </v-row>
                </v-window-item>

                <v-window-item value="agentCode" >
                  <v-row class="my-2" >
                    <v-col cols="12" md="6" lg="3" sm="12" >
                      <v-text-field v-model="agentCode"  label="Agent Code" variant="outlined" ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="3" sm="12" >
                      <v-text-field v-model="uplineCode"  label="Upline Code" variant="outlined" ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="3" sm="12" >
                      <v-text-field v-model="recruiterCode"  label="Recruiter Code" variant="outlined" ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="3" sm="12" >
                      <v-text-field   label="Gen Agency" v-model="genAgency" variant="outlined" ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="3" sm="12" >
                      <v-autocomplete v-model="managerVal" :items="agencyManager"   label="Agency Manager" variant="outlined" ></v-autocomplete>
                    </v-col>
                    <v-col cols="12" md="6" lg="3" sm="12" >
                      <v-autocomplete  v-model="agencyTeamVal" :items="agencyTeam"   label="Agency Team" variant="outlined" ></v-autocomplete>
                    </v-col>
                  </v-row>
                </v-window-item>

                <v-window-item value="banking" >
                  <v-row class="my-2" >
                    <v-col cols="12" md="6" lg="3" sm="12" >
                      <v-autocomplete v-model="payToVal" :items="payTo"  label="Pay To" variant="outlined" ></v-autocomplete>
                    </v-col>
                    <v-col cols="12" md="6" lg="3" sm="12" >
                      <v-text-field  v-model="companyNameVal" label="Company Name" variant="outlined" ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="3" sm="12" >
                      <v-autocomplete v-model="companyTypeVal" :items="companyType"  label="Company Type" variant="outlined" ></v-autocomplete>
                    </v-col>
                    <v-col cols="12" md="6" lg="3" sm="12" >
                      <v-text-field v-model="companyEN"  label="Company EN" variant="outlined" ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="3" sm="12" >
                      <v-text-field  v-model="bankName" label="Bank Name" variant="outlined" ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="3" sm="12" >
                      <v-autocomplete v-model="accountTypeVal" :items="accountType"  label="Account Type" variant="outlined" ></v-autocomplete>
                    </v-col>
                    <v-col cols="12" md="6" lg="3" sm="12" >
                      <v-text-field v-model="bankRoutingNum"  label="Bank Routing Number" variant="outlined" ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="3" sm="12" >
                      <v-text-field  v-model="bankAccountNum" label="Bank Account Number" variant="outlined" ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="3" sm="12" >
                      <v-text-field v-model="paymentCer" label="Payment Certification" variant="outlined" ></v-text-field>
                    </v-col>
                  </v-row>
                </v-window-item>


                <v-window-item value="commision" >
                  <v-row class="my-2" >
                    <v-col cols="12" md="6" lg="3" sm="12" >
                      <v-autocomplete  v-model="levelAnn" :items="percentage"   label="Level-ANN" variant="outlined" ></v-autocomplete>
                    </v-col>
                    <v-col cols="12" md="6" lg="3" sm="12" >
                      <v-autocomplete v-model="levelLife" :items="percentage"   label="Level-Life" variant="outlined" ></v-autocomplete>
                    </v-col>
                    <v-col cols="12" md="6" lg="3" sm="12" >
                      <v-autocomplete v-model="levelHealth" :items="percentage"   label="Level-Health" variant="outlined" ></v-autocomplete>
                    </v-col>
                    <v-col cols="12" md="6" lg="3" sm="12" >
                      <v-autocomplete v-model="mediCare" :items="percentage"   label="Medicare" variant="outlined" ></v-autocomplete>
                    </v-col>

                  </v-row>
                </v-window-item>
              </v-window>

              <v-row>
                <v-col >
                  <v-btn color="primary" >
                    Update Agent Info
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">

</style>