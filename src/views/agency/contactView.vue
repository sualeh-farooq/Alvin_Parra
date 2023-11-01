<script >
export default {
  name: 'Account-View',
  data() {
    return {
      contactTab: null,
      radios: 'one',
      martialStatus: 'married',
      employment: 'employed',
      spouseClient: 'yes' ,
      fName: 'John',
      lName: 'Doe',
      email : 'johndoe2@mail.com' ,
      backupEmail : 'davidJohn@gmail.com',
      mobile: 830927323 ,
      workMobile: 328329752,
      dob: '2002-02-10',
      age: 22,
      city:'Harlow',
      state: 'Essex',
      zipcode: 'SJF-3293',
      children: ['Henry Clark'],
      address : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quidem dolor vel nisi est mollitia excepturi debitis suscipit dicta. Voluptatibus saepe incidunt nihil dignissimos eveniet molestiae sit, magni tenetur ea.\n' +
          '\n' ,
      ssn: 3819 ,
      medicareNo: 'HS-2932-1',
      medicarePartA: 'HS-3729-A',
      medicarePartB: 'HS-7837-B' ,
      spouseName: 'Jordan Howard' ,
      spouseDob: '1998-03-29',
      child1: 'Alex Fay' ,
      child2: 'Henry Clark',
      occupation: 'Software Developer' ,
      companyName: 'Strategic Choices' ,
      companyCity: 'Pasadena' ,
      companyState: 'California',
      companyZipCode: 'CA 91030',
      companyAddress: '1445 Huntington Dr #325, S Pasadena, CA 91030, United States'



  }
  },
  methods: {
    addChild() {
      this.children.push('');
    },
    getChildLabel(index) {
      return `Child ${index + 1} - Full Name`;
    },
    goBack(){
      window.history.back(-1)
    }
  },
}


</script>

<template>

  <v-row>
    <v-col cols="12">
      <v-card variant="outlined" elevation="0" class="withbg">
        <v-card-item>
          <div class="d-sm-flex align-center justify-space-between">
            <h3 class="text-h3">Contact Details</h3>
            <v-btn  @click="goBack" color="primary" ><ArrowNarrowLeftIcon /> Go Back </v-btn>

          </div>
        </v-card-item>
        <v-divider></v-divider>
        <v-card-text>

          <v-row>
            <v-col cols="12">
              <v-tabs v-model="contactTab" color="primary">
                <v-tab value="basic">
                  <UserIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                  Basic
                </v-tab>
                <v-tab value="details">
                  <ListDetailsIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                  Details
                </v-tab>
                <v-tab value="family">
                  <UsersIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                  Family
                </v-tab>
                <v-tab value="company">
                  <BuildingIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                  Company
                </v-tab>
              </v-tabs>

              <v-window v-model="contactTab">
                <v-window-item value="basic">
                  <v-row class="mt-3">

                    <v-col cols="12">
                      <div>
                        <v-radio-group label="Contact Category" v-model="radios" inline>
                          <v-radio label="Main Contact" value="one"></v-radio>
                          <v-radio label="Google Contact" value="google"></v-radio>
                          <v-radio label="Lead Bucket" value="lead"></v-radio>
                          <v-radio label="Referral Partner" value="ref_partner"></v-radio>
<!--                          <v-radio label="Business" value="2"></v-radio>-->
                        </v-radio-group>
                        <!-- <p class="mt-3">Selected: {{ selectedRadioValues }}</p> -->
                      </div>

                    </v-col>

                    <v-col cols="12" md="6" lg="3">
                      <v-text-field v-model="fName" type="text" label="First Name" variant="outlined"
                                    ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="3">
                      <v-text-field type="text" v-model="lName" label="Last Name" variant="outlined"
                                    ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="3">
                      <v-text-field type="email" label="Email" v-model="email" variant="outlined"
                                    ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="3">
                      <v-text-field type="email" label="Backup Email" v-model="backupEmail" variant="outlined"
                                    ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6" lg="3">
                      <v-text-field type="number" label="Mobile Number" variant="outlined" v-model="mobile"
                                    ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6" lg="3">
                      <v-text-field type="number" label="Work Number" variant="outlined" v-model="workMobile"
                                    ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="3">
                      <v-text-field type="date" label="DOB" variant="outlined" v-model="dob"
                                    ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="3">
                      <v-text-field disabled type="text" label="Age" variant="outlined" v-model="age"
                                    ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="3">
                      <v-text-field type="text" label="City" variant="outlined" v-model="city"
                                    ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="3">
                      <v-text-field type="text" label="State" variant="outlined" v-model="state"
                                    ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="3">
                      <v-text-field type="text" label="Zip Code" variant="outlined" v-model="zipcode"
                                    ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea filled auto-grow label="Street Address" rows="4" v-model="address"
                                  row-height="20" color="primary" variant="outlined"></v-textarea>
                    </v-col>

                  </v-row>

                </v-window-item>

                <v-window-item value="details">
                  <v-row class="mt-3">

                    <v-col cols="12" md="6" lg="3">
                      <v-text-field v-model="ssn" type="text" label="SSN #" placeholder="###-##-####" variant="outlined"
                                    ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="3">
                      <v-text-field type="text" v-model="medicareNo" label="Medicare #" variant="outlined"
                                    ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="3">
                      <v-text-field type="text" v-model="medicarePartA" label="Medicare Part A" variant="outlined"
                                    ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="3">
                      <v-text-field type="text"  v-model="medicarePartB" label="Medicare Part B" variant="outlined"
                                    ></v-text-field>
                    </v-col>
                  </v-row>
                </v-window-item>

                <v-window-item value="family">
                  <v-row class="mt-3">


                    <v-col cols="12" md="6" lg="6">
                      <v-radio-group label="Martial Status" v-model="martialStatus" inline>
                        <v-radio label="Married" value="married"></v-radio>
                        <v-radio label="Single" value="single"></v-radio>
                        <v-radio label="Divorced" value="divorced"></v-radio>
                        <v-radio label="Widow" value="widow"></v-radio>
                      </v-radio-group>

                    </v-col>

                    <v-col cols="12" md="6">
                      <v-radio-group label="Is Spouse a Client too ?" v-model="spouseClient" inline>
                        <v-radio label="Yes" value="yes"></v-radio>
                        <v-radio label="No" value="no"></v-radio>
                      </v-radio-group>
                      <!-- <p class="mt-3">Selected: {{ selectedRadioValues }}</p> -->

                    </v-col>

                    <v-col cols="12" md="6" lg="3">
                      <v-text-field type="text" v-model="spouseName" label="Spouse Name" variant="outlined"
                                    class="mb-3" ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="3">
                      <v-text-field type="date" label="Spouse DOB" v-model="spouseDob" variant="outlined"
                                    ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6" lg="3">
                      <v-text-field type="text" v-model="child1" label="Child 1 - Full Name" variant="outlined"
                                    ></v-text-field>
                    </v-col>
                    <v-col v-for="(child, index) in children" :key="index" cols="12" md="6" lg="3">
                      <v-text-field type="text" v-model="children[index]" :label="getChildLabel(index)" variant="outlined" ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-btn color="primary" variant="outlined" @click="addChild">Add Child +</v-btn>
                    </v-col>
                  </v-row>
                </v-window-item>

                <v-window-item value="company">
                  <v-row class="mt-3" >
                    <v-col cols="12" >
                      <v-radio-group label="Employment Status" v-model="employment" inline>
                        <v-radio label="Employed" value="employed"></v-radio>
                        <v-radio label="Self Employed" value="selfemployed"></v-radio>
                        <v-radio label="Retired" value="retired"></v-radio>
                        <v-radio label="Unemployed" value="unemployed"></v-radio>
                      </v-radio-group>
                      <!-- <p class="mt-3">Selected: {{ selectedRadioValues }}</p> -->

                    </v-col>

                    <v-col cols="12" md="6" lg="3">
                      <v-text-field v-model="occupation" type="text" label="Occupation" variant="outlined"
                                    ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="3">
                      <v-text-field v-model="companyName" type="text" label="Company Name" variant="outlined"
                                    ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="3">
                      <v-text-field type="text"  v-model="companyCity" label="Business City" variant="outlined"
                                    ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="3">
                      <v-text-field type="text" label="Business State" v-model="companyState" variant="outlined"
                                    ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="3">
                      <v-text-field type="text" label="Business Zip Code" variant="outlined" v-model="companyZipCode"
                                    ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea filled auto-grow label="Business Street Address" rows="4" v-model="companyAddress"
                                  row-height="20" color="primary" variant="outlined"></v-textarea>
                    </v-col>

                  </v-row>
                </v-window-item>

                <v-col style="padding: 0px;" class=" mt-2" cols="12" md="6">
                  <v-btn  color="primary">Update Contact Details
                  </v-btn>
                </v-col>
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