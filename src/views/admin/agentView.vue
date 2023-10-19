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
      licenseStatus : ['Active' , 'About to expire' , 'Expired' , 'Inactive' , 'Unlicensed'],
      lifeLicenseType: ['LH(52 Hrs)','Life Only (32 Hrs)' , 'Health Only(32 Hrs)'],
      hourCE: ['Completed' , 'Incomplete'],
      limraReview: ['Expired (every Jan 16 and July 15)' , 'Expired (every Jan 16 and July 15)' ],
      agencyManager: ['Agent Access Only' , 'Agency Manager Only'],
      agencyTeam: ['Strategic Choices' , 'Alegria Financial' , 'Level 5 Wealth'],
      payTo: ['Company (EIN 1099)' , 'Individual (SSN 1099)'],
      companyType: ['Corporation' , 'DBA Sole Proprietor' , 'LLC'],
      accountType: ['Business Account' , 'Personal Account'],
      percentage: ['100%' , '90%' , '80%' , '70' ,'60%' , '50%']
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
                  <BriefcaseIcon stroke-width="1.5" width="20" class="v-icon--start" /> Licensing
                </v-tab>
                <v-tab value="education">
                  <BriefcaseIcon stroke-width="1.5" width="20" class="v-icon--start" /> Education
                </v-tab>
                <v-tab value="agentCode">
                  <BriefcaseIcon stroke-width="1.5" width="20" class="v-icon--start" /> Agent Code
                </v-tab>

                <v-tab value="banking">
                  <BriefcaseIcon stroke-width="1.5" width="20" class="v-icon--start" /> Banking Info
                </v-tab>
                <v-tab value="commision">
                  <BriefcaseIcon stroke-width="1.5" width="20" class="v-icon--start" /> Commision Level
                </v-tab>
              </v-tabs>

              <v-window v-model="tab2" >
                <v-window-item value="personal" >
                <v-row class="my-2" >
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
                </v-window-item>


                <v-window-item value="licensing" >
                  <v-row class="my-2" >
                    <v-col cols="12" lg="4" md="6" sm="12" >
                      <v-text-field  label="National Producer #" variant="outlined" class="mb-3"></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="4" md="6" sm="12" >
                      <v-text-field  label="Resident State" variant="outlined" class="mb-3"></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="4" md="6" sm="12" >
                      <v-autocomplete :items="lifeLicenseType" label="Life License Type" variant="outlined" class="mb-3"></v-autocomplete>
                    </v-col>
                    <v-col cols="12" lg="4" md="6" sm="12" >
                      <v-text-field  label="Resident License #" variant="outlined" class="mb-3"></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="4" md="6" sm="12" >
                      <v-text-field type="date" label="Resident License Issue Date" variant="outlined" class="mb-3"></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="4" md="6" sm="12" >
                      <v-text-field type="date" label=" License Expiration" variant="outlined" class="mb-3"></v-text-field>
                    </v-col>

                    <v-col cols="12" lg="4" md="6" sm="12" >
                      <v-autocomplete label="License Status"
                                      :items="licenseStatus"
                                      color="primary" variant="outlined" hide-details></v-autocomplete>
                    </v-col>
                    <v-col cols="12" lg="4" md="6" sm="12" >
                      <v-text-field  label="NonResident State" variant="outlined" class="mb-3"></v-text-field>
                    </v-col>

                    <v-col cols="12" lg="4" md="6" sm="12" >
                      <v-autocomplete :items="lifeLicenseType"  label="Non Resident Life License Type" variant="outlined" class="mb-3"></v-autocomplete>
                    </v-col>
                    <v-col cols="12" lg="4" md="6" sm="12" >
                      <v-text-field  label="Non Resident License #" variant="outlined" class="mb-3"></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="4" md="6" sm="12" >
                      <v-text-field  type="date" label="Non Resident License Issued" variant="outlined" class="mb-3"></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="4" md="6" sm="12" >
                      <v-text-field  type="date" label="Non Resident License Expiration Date" variant="outlined" class="mb-3"></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="4" md="6" sm="12" >
                      <v-autocomplete label="None Resident License Status"
                                      :items="licenseStatus"
                                      color="primary" variant="outlined" hide-details></v-autocomplete>
                    </v-col>
                  </v-row>
                </v-window-item>

                <v-window-item value="education" >

                  <v-row class="my-2" >
                    <v-col cols="12" md="6" lg="4" sm="12" >
                      <v-text-field  label="Online School" variant="outlined" class="mb-3"></v-text-field>

                    </v-col>
                    <v-col cols="12" md="6" lg="4" sm="12" >
                      <v-text-field  label=" School User" variant="outlined" class="mb-3"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="4" sm="12" >
                      <v-text-field  label=" School Password" variant="outlined" class="mb-3"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="4" sm="12" >
                      <v-autocomplete label="24 hr CE'ss"
                                      :items="hourCE"
                                      color="primary" variant="outlined" hide-details></v-autocomplete>
                    </v-col>
                    <v-col cols="12" md="6" lg="4" sm="12" >
                      <v-text-field type="date"  label="Res License Start" variant="outlined" class="mb-3"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="4" sm="12" >
                      <v-text-field type="date"  label="License Term" variant="outlined" class="mb-3"></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6" lg="4" sm="12" >
                      <v-autocomplete label="LIMRA Annual Review"
                                      :items="limraReview"
                                      color="primary" variant="outlined" hide-details></v-autocomplete>
                    </v-col>
                    <v-col cols="12" md="6" lg="4" sm="12" >
                      <v-text-field  label="LIMRA URL" variant="outlined" class="mb-3"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="4" sm="12" >
                      <v-text-field  label="LIMRA User (NPN)" variant="outlined" class="mb-3"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="4" sm="12" >
                      <v-text-field  label="LIMRA Password" type="password" variant="outlined" class="mb-3"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="4" sm="12" >
                      <v-text-field  label="Hours Required" variant="outlined" class="mb-3"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="4" sm="12" >
                      <v-text-field  label="Hours Applied" variant="outlined" class="mb-3"></v-text-field>
                    </v-col>

                  </v-row>
                </v-window-item>

                <v-window-item value="agentCode" >
                  <v-row class="my-2" >
                    <v-col cols="12" md="6" lg="4" sm="12" >
                      <v-text-field   label="Agent Code" variant="outlined" class="mb-3"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="4" sm="12" >
                      <v-text-field   label="Upline Code" variant="outlined" class="mb-3"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="4" sm="12" >
                      <v-text-field   label="Recruiter Code" variant="outlined" class="mb-3"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="4" sm="12" >
                      <v-text-field   label="Gen Agency" variant="outlined" class="mb-3"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="4" sm="12" >
                      <v-autocomplete :items="agencyManager"   label="Agency Manager" variant="outlined" class="mb-3"></v-autocomplete>
                    </v-col>
                    <v-col cols="12" md="6" lg="4" sm="12" >
                      <v-autocomplete :items="agencyTeam"   label="Agency Team" variant="outlined" class="mb-3"></v-autocomplete>
                    </v-col>
                  </v-row>
                </v-window-item>

                <v-window-item value="banking" >
                  <v-row class="my-2" >
                    <v-col cols="12" md="6" lg="4" sm="12" >
                      <v-autocomplete :items="payTo"  label="Pay To" variant="outlined" class="mb-3"></v-autocomplete>
                    </v-col>
                    <v-col cols="12" md="6" lg="4" sm="12" >
                      <v-text-field   label="Company Name" variant="outlined" class="mb-3"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="4" sm="12" >
                      <v-autocomplete :items="companyType"  label="Company Type" variant="outlined" class="mb-3"></v-autocomplete>
                    </v-col>
                    <v-col cols="12" md="6" lg="4" sm="12" >
                      <v-text-field   label="Company EN" variant="outlined" class="mb-3"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="4" sm="12" >
                      <v-text-field   label="Bank Name" variant="outlined" class="mb-3"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="4" sm="12" >
                      <v-autocomplete :items="accountType"  label="Account Type" variant="outlined" class="mb-3"></v-autocomplete>
                    </v-col>
                    <v-col cols="12" md="6" lg="4" sm="12" >
                      <v-text-field   label="Bank Routing Number" variant="outlined" class="mb-3"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="4" sm="12" >
                      <v-text-field   label="Bank Account Number" variant="outlined" class="mb-3"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="4" sm="12" >
                      <v-text-field  label="Payment Certification" variant="outlined" class="mb-3"></v-text-field>
                    </v-col>
                  </v-row>
                </v-window-item>


                <v-window-item value="commision" >
                  <v-row class="my-2" >
                    <v-col cols="12" md="6" lg="4" sm="12" >
                      <v-autocomplete :items="percentage"   label="Level-ANN" variant="outlined" class="mb-3"></v-autocomplete>
                    </v-col>
                    <v-col cols="12" md="6" lg="4" sm="12" >
                      <v-autocomplete :items="percentage"   label="Level-Life" variant="outlined" class="mb-3"></v-autocomplete>
                    </v-col>
                    <v-col cols="12" md="6" lg="4" sm="12" >
                      <v-autocomplete :items="percentage"   label="Level-Health" variant="outlined" class="mb-3"></v-autocomplete>
                    </v-col>
                    <v-col cols="12" md="6" lg="4" sm="12" >
                      <v-autocomplete :items="percentage"   label="Medicare" variant="outlined" class="mb-3"></v-autocomplete>
                    </v-col>

                  </v-row>
                </v-window-item>
              </v-window>


            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">

</style>