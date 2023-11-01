<script >
import NotesCard from '../../components/shared/notesCard.vue'

export default {
  name: 'Account-View',
  data() {
    return {
      contactTab: null,
      children: ['Henry Clark'],
      notesDialog: null,
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
      companyAddress: '1445 Huntington Dr #325, S Pasadena, CA 91030, United States',

      notesList: [
        {
          id: 1, date: '10-05-2023', time: '05:35pm', editText: 'Edit' ,deleteText: 'Delete' ,  note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quidem dolor vel nisi est mollitia excepturi debitis suscipit dicta. Voluptatibus saepe incidunt nihil dignissimos eveniet molestiae sit, magni tenetur ea.\n' +
              '\n'
        },
        {
          id: 2, date: '15-05-2023', time: '05:35pm', editText: 'Edit' ,deleteText: 'Delete' , note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quidem dolor vel nisi est mollitia excepturi debitis suscipit dicta. Voluptatibus saepe incidunt nihil dignissimos eveniet molestiae sit, magni tenetur ea.\n' +
              '\n'
        }
      ],

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
  components: {
    NotesCard: NotesCard
  }
}


</script>

<template>

  <v-row>
    <v-col cols="12">
      <v-card variant="outlined" elevation="0" class="withbg">
        <v-card-item>
          <div class="d-sm-flex align-center justify-space-between">
            <h3 class="text-h3">Account Overview</h3>
    <div>
      <v-dialog width="600" v-model="notesDialog">
        <template v-slot:activator="{ props }">
          <v-btn  @click="goBack" color="primary" ><ArrowNarrowLeftIcon /> Go Back </v-btn>

          <v-btn v-if="contactTab === 'notes' " v-bind="props" color="primary" class="mx-1">Add Note +</v-btn>
        </template>
        <v-card class="overflow-auto w-100">
          <div class="d-flex border w-100">
            <v-card-title class="pa-5 border w-100 d-flex align-center justify-space-between">
              Add Note
            </v-card-title>

          </div>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field type="date" label=" Note Date" variant="outlined" ></v-text-field>
                </v-col>
                <v-col md="6" cols="12">
                  <v-text-field type="time" label="Note Time" variant="outlined"
                                class="text-input"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea filled auto-grow label="Notes Description" rows="4" row-height="20" color="primary"
                              variant="outlined"></v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" text @click="notesDialog = false"> Close
            </v-btn>
            <v-btn color="success" text @click="notesDialog = false"> Save </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </div>
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
                <v-tab value="notes">
                  <BuildingIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                  Notes
                </v-tab>
                <v-tab value="pipeline">
                  <BuildingIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                  Pipeline
                </v-tab>
              </v-tabs>


              <v-window v-model="contactTab">
                <v-window-item value="basic">
                  <v-row class="mt-3">

                    <v-col cols="12">
                      <div>
                        <v-radio-group label="Account Type" v-model="radios" inline>
                          <v-radio  label="Individual" value="one"></v-radio>
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
                                     ></v-text-field>
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

                <v-window-item value="pipeline" >


                  <v-row class="mt-1" >


                    <v-col cols="12" md="6" lg="3">
                      <v-text-field type="text" label="Opportunity Name" variant="outlined"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="3">
                      <v-autocomplete label="Product"
                                      :items="product"
                                      color="primary" variant="outlined" hide-details></v-autocomplete>
                    </v-col>

                    <v-col cols="12" md="6" lg="3">
                      <v-autocomplete label="Select Pipeline Stage" v-model="pipelineStage"
                                      :items="pipelineStages" color="primary" variant="outlined"
                                      hide-details></v-autocomplete>

                    </v-col>

                    <v-col cols="12" md="6" lg="3">
                      <v-autocomplete label="Lead Status" v-model="statusValue" :items="leadStatus"
                                      color="primary" variant="outlined" hide-details></v-autocomplete>
                    </v-col>

                    <v-col cols="12" md="6" lg="3">
                      <div @click="followUpDate = true" v-if="!followUpDate">
                        <v-text-field type="text" label="Next Follow up" variant="outlined"
                        ></v-text-field>

                      </div>
                      <div v-else>
                        <v-text-field type="date" label="Next Follow up" variant="outlined"
                        ></v-text-field>
                      </div>
                    </v-col>

                    <v-col cols="12" md="6" lg="3">
                      <div @click="closingTarget = true" v-if="!closingTarget">
                        <v-text-field type="text" label="Est Closing Target" variant="outlined"
                        ></v-text-field>

                      </div>
                      <div v-else>
                        <v-text-field type="date" label="Est Closing Target" variant="outlined"
                        ></v-text-field>
                      </div>
                    </v-col>


                    <v-col cols="12" md="6" lg="3">
                      <v-autocomplete label="Tempera" v-model="tempVal"
                                      :items="Temprature" color="primary" variant="outlined"
                                      hide-details></v-autocomplete>

                    </v-col>

                    <v-col cols="12" md="6" lg="3">
                      <v-autocomplete label="Existing Source of Opportunity" v-model="opportunitySourceVal"
                                      :items="opportunitySources"
                                      color="primary" variant="outlined" hide-details></v-autocomplete>
                    </v-col>


                    <v-col cols="12" md="6" lg="3">
                      <v-text-field type="text" label="Writing Agent" variant="outlined"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6" lg="3">
                      <v-autocomplete label="Writing Agent Split"
                                      :items="writingAgentSplit"
                                      color="primary" variant="outlined" hide-details></v-autocomplete>
                    </v-col>

                    <v-col cols="12" md="6" lg="3">
                      <v-text-field type="text" label="Agent 2" color="primary" variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="3">
                      <v-autocomplete label="Agent 2 Split"
                                      :items="agent2Split"
                                      color="primary" variant="outlined" hide-details></v-autocomplete>
                    </v-col>
                    <v-col cols="12" md="6" lg="3">
                      <v-autocomplete label="Service Type"
                                      :items="serviceType"
                                      color="primary" variant="outlined" hide-details></v-autocomplete>
                    </v-col>
                    <v-col cols="12" md="6" lg="3">
                      <v-autocomplete label="Carrier"
                                      :items="carrier"
                                      color="primary" variant="outlined" hide-details></v-autocomplete>
                    </v-col>

                    <v-col cols="12" md="6" lg="3">
                      <v-text-field type="text" label="Est Annual Premium" color="primary" variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="3">
                      <v-text-field type="select" :items="agent2Split" label="Opportunity Income" color="primary" variant="outlined"></v-text-field>
                    </v-col>



                  </v-row>



                </v-window-item>

                <v-window-item value="notes" >
                  <v-row class="mt-1">
                    <v-col v-for="item in notesList" class="p-0" :key="item.id" cols="12 ">
                      <NotesCard :editText="item.editText"  :deleteText="item.deleteText" :time="item.time" :edit-note="editNote" :date="item.date"
                                 :note-description="item.note" />
                    </v-col>
                  </v-row>
                </v-window-item>

                <v-col style="padding: 0px;" class=" mt-2" cols="12" md="6">
                  <v-btn  v-if="contactTab === 'family' || contactTab === 'basic' || contactTab === 'details' || contactTab === 'company' ||contactTab === 'pipeline' "  color="primary">Update Settings
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