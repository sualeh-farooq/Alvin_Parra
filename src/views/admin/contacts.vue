<script setup>
import {ref} from 'vue';
import 'vue3-easy-data-table/dist/style.css';
import NotesCard from "@/components/shared/notesCard.vue";
import Files from "@/components/shared/files.vue";
import TaskCard from "@/components/shared/taskCard.vue";


const searchField = ref(['fName', 'email', 'source', 'phone', 'date']);
const searchValue = ref('');

const headers = [
  {text: 'Name', value: 'fName', sortable: true, colspan: 3},
  {text: 'Email', value: 'email', sortable: true},
  {text: 'Source', value: 'source', sortable: true},
  {text: 'Phone', value: 'phone', sortable: true},
  {text: 'DOB', value: 'date', sortable: true},
  {text: 'Action', value: 'action'}
];

const themeColor = ref('rgb(var(--v-theme-secondary))');
const itemsSelected = ref([]);

const items = ref([
  {
    fName: 'Joseph',
    lName: ' William 1',
    email: 'user@mail.com',
    phone: '+44 20 1234 5678',
    date: '12.07.2018',
    source: 'Exsiting',
    status: 3
  },
  {
    fName: 'Joseph',
    lName: ' William 1',
    email: 'user@mail.com',
    phone: '+44 20 1234 5678',
    source: 'Referral',
    addedBy: 'John Doe',
    date: '12.07.2018',
    status: 3
  },
  {
    fName: 'Anshan',
    lName: ' Handgun 2',
    email: 'user@mail.com',
    phone: '+44 20 1234 5678',
    source: 'Exsiting',
    addedBy: 'John Doe',
    date: '12.07.2018',
    status: 2
  },
  {
    fName: 'Larry',
    lName: ' Doe 3',
    email: 'user@mail.com',
    phone: '+44 20 1234 5678',
    addedBy: 'John Doe',
    source: 'Others',
    date: '12.07.2018',
    status: 1
  },
  {
    fName: 'Sara',
    lName: ' Soudan 4',
    email: 'user@mail.com',
    phone: '+44 20 1234 5678',
    addedBy: 'John Doe',
    source: 'Others',
    date: '12.07.2018',
    status: 1
  },
  {
    fName: 'Joseph',
    lName: ' William 5',
    email: 'user@mail.com',
    phone: '+44 20 1234 5678',
    source: 'Referral',
    addedBy: 'John Doe',
    date: '12.07.2018',
    status: 2
  },
  {
    fName: 'Anshan',
    lName: ' Handgun 6',
    email: 'user@mail.com',
    phone: '+44 20 1234 5678',
    addedBy: 'John Doe',
    source: 'Other',

    date: '12.07.2018',
    status: 3
  },
  {
    fName: 'Larry',
    lName: ' Doe 7',
    email: 'user@mail.com',
    phone: '+44 20 1234 5678',
    source: 'Existing',
    addedBy: 'John Doe',
    date: '12.07.2018',
    status: 3
  },
  {
    fName: 'Sara',
    lName: ' Soudan 8',
    email: 'user@mail.com',
    phone: '+44 20 1234 5678',
    source: 'Existing',

    addedBy: 'John Doe',
    date: '12.07.2018',
    status: 2
  },
  {
    fName: 'Sara',
    lName: ' Soudan 20',
    email: 'user@mail.com',
    phone: '+44 20 1234 5678',
    source: 'Other',

    addedBy: 'John Doe',
    date: '12.07.2018',
    status: 1
  },
  {
    fName: 'Joseph',
    lName: ' William 9',
    email: 'user@mail.com',
    phone: '+44 20 1234 5678',
    source: 'Referral',

    addedBy: 'John Doe',
    date: '12.07.2018',
    status: 1
  },
  {
    fName: 'Anshan',
    lName: ' Handgun 10',
    email: 'user@mail.com',
    phone: '+44 20 1234 5678',
    source: 'Referral',

    addedBy: 'John Doe',
    date: '12.07.2018',
    status: 1
  },
  {
    fName: 'Larry',
    lName: ' Doe 11',
    email: 'user@mail.com',
    source: 'Existing',
    phone: '+44 20 1234 5678',
    addedBy: 'John Doe',
    date: '12.07.2018',
    status: 2
  },
  {
    fName: 'Sara',
    lName: ' Soudan 12',
    email: 'user@mail.com',
    phone: '+44 20 1234 5678',
    addedBy: 'John Doe',
    source: 'Referral',
    date: '12.07.2018',
    status: 3
  },
  {
    fName: 'Joseph',
    lName: ' William 13',
    email: 'user@mail.com',
    phone: '+44 20 1234 5678',
    addedBy: 'John Doe',
    source: 'Referral',
    date: '12.07.2018',
    status: 3
  },
  {
    fName: 'Anshan',
    lName: ' Handgun 14',
    email: 'user@mail.com',
    phone: '+44 20 1234 5678',
    addedBy: 'John Doe',
    source: 'Existing',
    date: '12.07.2018',
    status: 2
  },
  {
    fName: 'Larry',
    lName: ' Doe 15',
    email: 'user@mail.com',
    source: 'Existing',

    phone: '+44 20 1234 5678',
    addedBy: 'John Doe',
    date: '12.07.2018',
    status: 2
  },
  {
    fName: 'Sara',
    lName: ' Soudan 16',
    email: 'user@mail.com',
    source: 'Existing',

    phone: '+44 20 1234 5678',
    addedBy: 'John Doe',
    date: '12.07.2018',
    status: 1
  },
  {
    fName: 'Joseph',
    lName: ' William 17',
    email: 'user@mail.com',
    source: 'Referral',

    phone: '+44 20 1234 5678',
    addedBy: 'John Doe',
    date: '12.07.2018',
    status: 2
  },
  {
    fName: 'Anshan',
    lName: ' Handgun 18',
    source: 'Others',
    email: 'user@mail.com',
    phone: '+44 20 1234 5678',
    addedBy: 'John Doe',
    date: '12.07.2018',
    status: 3
  },
  {
    fName: 'Larry',
    lName: ' Doe 19',
    email: 'user@mail.com',
    source: 'Existing',

    phone: '+44 20 1234 5678',
    addedBy: 'John Doe',
    date: '12.07.2018',
    status: 2
  }
]);
const pendingDialog = ref(false);
const acceptedDialog = ref(false);
const rejectedDialog = ref(false);
const dobDate = ref(false)
const desserts = ref([
  {
    name: 'Frozen Opportunity 1-life-121212rt',
    contact: 'John Doe',
    type: 'Individual',
    pipeline: 'Life',
    status: 'Lead',
    stage: 'Stage 1 - Interest',
    estIncome: '$100',
    estCloseDate: '12/12/2023',
    wrtAgentSplit: 'John Doe (100%)',
  },
  {
    name: 'Ice Opportunity 1-life-121212am sandwich',
    contact: 'John Doe',
    type: 'Individual',
    pipeline: 'Life',
    status: 'Lead',
    stage: 'Stage 1 - Interest',
    estIncome: '$100',
    estCloseDate: '12/12/2023',
    wrtAgentSplit: 'John Doe (100%)',
  },
  {
    name: 'Opportunity 1-life-121212',
    contact: 'John Doe',
    type: 'Individual',
    pipeline: 'Life',
    status: 'Lead',
    stage: 'Stage 1 - Interest',
    estIncome: '$100',
    estCloseDate: '12/12/2023',
    wrtAgentSplit: 'John Doe (100%)',
  },
  {
    name: 'Opportunity 1-life-121212',
    contact: 'John Doe',
    type: 'Individual',
    pipeline: 'Life',
    status: 'Lead',
    stage: 'Stage 1 - Interest',
    estIncome: '$100',
    estCloseDate: '12/12/2023',
    wrtAgentSplit: 'John Doe (100%)',
  },
  {
    name: 'Opportunity 1-life-121212',
    contact: 'John Doe',
    type: 'Individual',
    pipeline: 'Life',
    status: 'Lead',
    stage: 'Stage 1 - Interest',
    estIncome: '$100',
    estCloseDate: '12/12/2023',
    wrtAgentSplit: 'John Doe (100%)',
  }
]);

const page = ref({title: 'Tabs'});
const tab = ref(null);
const contacts = ref(null);
const tab3 = ref(null);
const tab4 = ref(null);
const tab5 = ref(null);
const tab6 = ref(null);
const tab7 = ref(null)
const drawer = ref(false)
const contactTab = ref(null)
const notesDialog = ref(false)
const addContactDrawer = ref(false)
const taskDialog = ref(false)
const contactCategory = ref(null)
const fileDialog = ref(false)
const contactType = ref('ind')
const contactsInd = ref(null)
const contactsBus = ref(null)


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


const notesList = ref([
  {
    id: 1,
    date: '10-05-2023',
    time: '05:35pm',
    note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quidem dolor vel nisi est mollitia excepturi debitis suscipit dicta. Voluptatibus saepe incidunt nihil dignissimos eveniet molestiae sit, magni tenetur ea.\n' +
        '\n'
  },
  {
    id: 2,
    date: '15-05-2023',
    time: '05:35pm',
    note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quidem dolor vel nisi est mollitia excepturi debitis suscipit dicta. Voluptatibus saepe incidunt nihil dignissimos eveniet molestiae sit, magni tenetur ea.\n' +
        '\n'
  }
])
const taskList = ref([
  {
    id: 1,
    createdDate: '10-05-2023',
    dueDate: '12-07-2023',
    color: 'warning',
    status: 'In Process',
    assignTo: 'John Doe',
    taskTitle: 'Task Title 01',
    taskDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quidem dolor vel nisi est mollitia excepturi debitis suscipit dicta. Voluptatibus saepe incidunt nihil dignissimos eveniet molestiae sit, magni tenetur ea.\n' +
        '\n'
  },
  {
    id: 2,
    createdDate: '10-05-2023',
    dueDate: '12-07-2023',
    color: 'warning',
    status: 'In Process',
    assignTo: 'John Doe',
    taskTitle: 'Task Title 01',
    taskDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quidem dolor vel nisi est mollitia excepturi debitis suscipit dicta. Voluptatibus saepe incidunt nihil dignissimos eveniet molestiae sit, magni tenetur ea.\n' +
        '\n'
  },
])
const headersEmp = ref([{text: 'Full Name', value: 'fName', sortable: true, colspan: 3},
  {text: 'Email', value: 'email', sortable: true},
  {text: 'Mobile Number', value: 'mobile', sortable: true},
  {text: 'State', value: 'state', sortable: true},
  {text: 'Zipcode', value: 'zipcode', sortable: true},
  {text: 'Designation', value: 'designation'},
])

const itemsEmp = ref([
  {
    fName: 'John Smith',
    email: ' john@gmai.com',
    mobile: '+1-224-2095',
    state: 'Texas',
    zipcode: '28393',
    designation: 'Account Manager',
  },
  {
    fName: 'Corina Carmen',
    email: ' corina@gmail.com',
    mobile: '+1-910-2729',
    state: 'Alaska',
    zipcode: '27292',
    designation: 'Regional Director',
  },
  {
    fName: 'Methew Karl',
    email: ' methew@gmai.com',
    mobile: '+1-032-0129',
    state: 'Albama',
    zipcode: '192729',
    designation: 'Director Executive',
  },
  {
    fName: 'Rohat Emre',
    email: ' rohat@gmai.com',
    mobile: '+1-728-2829',
    state: 'Kentucky',
    zipcode: '272873',
    designation: 'Sales Manager',
  },
  {
    fName: 'John Smith',
    email: ' john@gmai.com',
    mobile: '+1-224-2095',
    state: 'Texas',
    zipcode: '28393',
    designation: 'Account Manager',
  },
  {
    fName: 'Corina Carmen',
    email: ' corina@gmail.com',
    mobile: '+1-910-2729',
    state: 'Alaska',
    zipcode: '27292',
    designation: 'Regional Director',
  },
  {
    fName: 'Methew Karl',
    email: ' methew@gmai.com',
    mobile: '+1-032-0129',
    state: 'Albama',
    zipcode: '192729',
    designation: 'Director Executive',
  },
  {
    fName: 'Rohat Emre',
    email: ' rohat@gmai.com',
    mobile: '+1-728-2829',
    state: 'Kentucky',
    zipcode: '272873',
    designation: 'Sales Manager',
  },

])


</script>


<template>
  <v-row>
    <v-col col="12">
      <v-card variant="outlined" elevation="0" class="withbg">
        <v-card-item>
          <div class="d-sm-flex align-center justify-space-between">
            <h3 class="text-h3">Contacts</h3>

            <div class="d-flex justify-end align-center w-100" >

            <div class="w-25 mx-2">
              <v-text-field class="my-2 " type="text" variant="outlined" persistent-placeholder
                            placeholder="Search Contacts" v-model="searchValue" density="compact" hide-details
                            prepend-inner-icon="mdi-magnify"/>
            </div>
              <v-btn @click="addContactDrawer = !addContactDrawer" color="primary">Add Contact +</v-btn>
            </div>


          </div>
        </v-card-item>
        <v-divider></v-divider>
        <v-card-text>


          <div style="justify-content:space-between; align-items:center;" class="d-flex">
            <div>
              <v-tabs v-model="contactCategory" color="primary">
                <v-tab value="individual">
                  <UserIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                  Individual
                </v-tab>
                <v-tab value="business">
                  <BriefcaseIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                  Business
                </v-tab>
              </v-tabs>
            </div>
          </div>


          <v-window v-model="contactCategory">
            <v-window-item class="" value="individual">
              <!-- Content Goes Here -->
              <v-row>
                <v-col>
                  <div style="justify-content:space-between; align-items:center;" class="d-flex">
                    <div>
                      <v-tabs v-model="contactsInd" color="primary">
                        <v-tab value="main">
                          <AddressBookIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                          Main Contacts
                        </v-tab>
                        <v-tab value="google">
                          <BrandGoogleIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                          Google Contacts
                        </v-tab>
                        <v-tab value="lead">
                          <ArchiveIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                          Lead Buckets
                        </v-tab>
                        <v-tab value="ref">
                          <HeartHandshakeIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                          Referral Partners
                        </v-tab>
                      </v-tabs>
                    </div>

                  </div>


                  <v-window v-model="contactsInd">
                    <v-window-item class="my-2" value="main">

                      <EasyDataTable :headers="headers" :items="items" table-class-name="customize-table"
                                     :theme-color="themeColor" :search-field="searchField" :search-value="searchValue"
                                     :rows-per-page="5" v-model:items-selected="itemsSelected">

                        <template #item-fName="item">
                          <div class="operation-wrapper">
                            <p @click="drawer = !drawer"
                               class="text-primary cursor-pointer text-decoration-none font-weight-bold ">
                              <span class="text-primary ">    {{ item.fName }}</span>
                            </p>

                          </div>
                        </template>

                        <template #item-action="item">

                          <v-btn icon color="error" variant="text">
                            <TrashIcon size="20"/>
                          </v-btn>
                        </template>
                      </EasyDataTable>
                    </v-window-item>

                    <v-window-item class="my-2" value="google">

                      <EasyDataTable :headers="headers" :items="items" table-class-name="customize-table"
                                     :theme-color="themeColor" :search-field="searchField" :search-value="searchValue"
                                     :rows-per-page="5" v-model:items-selected="itemsSelected">
                        <template #item-fName="item">
                          <div class="operation-wrapper">
                            <p @click="drawer = !drawer"
                               class="text-primary cursor-pointer text-decoration-none font-weight-bold ">
                              <span class="text-primary ">    {{ item.fName }}</span>
                            </p>

                          </div>
                        </template>
                        <template #item-action="item">

                          <v-btn icon color="error" variant="text">
                            <TrashIcon size="20"/>
                          </v-btn>
                        </template>
                      </EasyDataTable>
                    </v-window-item>
                    <v-window-item class="my-2" value="ref">

                      <EasyDataTable :headers="headers" :items="items" table-class-name="customize-table"
                                     :theme-color="themeColor" :search-field="searchField" :search-value="searchValue"
                                     :rows-per-page="5" v-model:items-selected="itemsSelected">
                        <template #item-fName="item">
                          <div class="operation-wrapper">
                            <p @click="drawer = !drawer"
                               class="text-primary cursor-pointer text-decoration-none font-weight-bold ">
                              <span class="text-primary ">    {{ item.fName }}</span>
                            </p>

                          </div>
                        </template>
                        <template #item-action="item">

                          <v-btn icon color="error" variant="text">
                            <TrashIcon size="20"/>
                          </v-btn>
                        </template>
                      </EasyDataTable>
                    </v-window-item>
                    <v-window-item class="my-2" value="lead">

                      <EasyDataTable :headers="headers" :items="items" table-class-name="customize-table"
                                     :theme-color="themeColor" :search-field="searchField" :search-value="searchValue"
                                     :rows-per-page="5" v-model:items-selected="itemsSelected">
                        <template #item-fName="item">
                          <div class="operation-wrapper">
                            <p @click="drawer = !drawer"
                               class="text-primary cursor-pointer text-decoration-none font-weight-bold ">
                              <span class="text-primary ">    {{ item.fName }}</span>
                            </p>

                          </div>
                        </template>
                        <template #item-action="item">

                          <v-btn icon color="error" variant="text">
                            <TrashIcon size="20"/>
                          </v-btn>
                        </template>
                      </EasyDataTable>
                    </v-window-item>

                  </v-window>
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item value="business" >
              <!-- Content Goes Here -->
              <v-row>
                <v-col>
                  <div style="justify-content:space-between; align-items:center;" class="d-flex">
                    <div>
                      <v-tabs v-model="contactsBus" color="primary">
                        <v-tab value="main">
                          <AddressBookIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                          Main Contacts
                        </v-tab>
                        <v-tab value="google">
                          <BrandGoogleIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                          Google Contacts
                        </v-tab>
                        <v-tab value="lead">
                          <ArchiveIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                          Lead Buckets
                        </v-tab>
                        <v-tab value="ref">
                          <HeartHandshakeIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                          Referral Partners
                        </v-tab>
                      </v-tabs>
                    </div>

                  </div>


                  <v-window v-model="contactsBus">
                    <v-window-item class="my-2" value="main">

                      <EasyDataTable :headers="headers" :items="items" table-class-name="customize-table"
                                     :theme-color="themeColor" :search-field="searchField" :search-value="searchValue"
                                     :rows-per-page="5" v-model:items-selected="itemsSelected">

                        <template #item-fName="item">
                          <div class="operation-wrapper">
                            <p @click="drawer = !drawer"
                               class="text-primary cursor-pointer text-decoration-none font-weight-bold ">
                              <span class="text-primary ">    {{ item.fName }}</span>
                            </p>

                          </div>
                        </template>

                        <template #item-action="item">

                          <v-btn icon color="error" variant="text">
                            <TrashIcon size="20"/>
                          </v-btn>
                        </template>
                      </EasyDataTable>
                    </v-window-item>

                    <v-window-item class="my-2" value="google">

                      <EasyDataTable :headers="headers" :items="items" table-class-name="customize-table"
                                     :theme-color="themeColor" :search-field="searchField" :search-value="searchValue"
                                     :rows-per-page="5" v-model:items-selected="itemsSelected">
                        <template #item-fName="item">
                          <div class="operation-wrapper">
                            <p @click="drawer = !drawer"
                               class="text-primary cursor-pointer text-decoration-none font-weight-bold ">
                              <span class="text-primary ">    {{ item.fName }}</span>
                            </p>

                          </div>
                        </template>
                        <template #item-action="item">

                          <v-btn icon color="error" variant="text">
                            <TrashIcon size="20"/>
                          </v-btn>
                        </template>
                      </EasyDataTable>
                    </v-window-item>
                    <v-window-item class="my-2" value="ref">

                      <EasyDataTable :headers="headers" :items="items" table-class-name="customize-table"
                                     :theme-color="themeColor" :search-field="searchField" :search-value="searchValue"
                                     :rows-per-page="5" v-model:items-selected="itemsSelected">
                        <template #item-fName="item">
                          <div class="operation-wrapper">
                            <p @click="drawer = !drawer"
                               class="text-primary cursor-pointer text-decoration-none font-weight-bold ">
                              <span class="text-primary ">    {{ item.fName }}</span>
                            </p>

                          </div>
                        </template>
                        <template #item-action="item">

                          <v-btn icon color="error" variant="text">
                            <TrashIcon size="20"/>
                          </v-btn>
                        </template>
                      </EasyDataTable>
                    </v-window-item>
                    <v-window-item class="my-2" value="lead">

                      <EasyDataTable :headers="headers" :items="items" table-class-name="customize-table"
                                     :theme-color="themeColor" :search-field="searchField" :search-value="searchValue"
                                     :rows-per-page="5" v-model:items-selected="itemsSelected">
                        <template #item-fName="item">
                          <div class="operation-wrapper">
                            <p @click="drawer = !drawer"
                               class="text-primary cursor-pointer text-decoration-none font-weight-bold ">
                              <span class="text-primary ">    {{ item.fName }}</span>
                            </p>

                          </div>
                        </template>
                        <template #item-action="item">

                          <v-btn icon color="error" variant="text">
                            <TrashIcon size="20"/>
                          </v-btn>
                        </template>
                      </EasyDataTable>
                    </v-window-item>

                  </v-window>
                </v-col>
              </v-row>
              </v-window-item>
          </v-window>




        </v-card-text>
      </v-card>
    </v-col>
  </v-row>


  <v-navigation-drawer color="surface" :width="850" location="right" v-model="drawer" temporary>

    <v-row>
      <v-col col="12">

        <div class="d-flex align-center  border px-4 py-2 justify-space-between ">
          <h3>Contact Details</h3>
          <div>
            <button @click="drawer = !drawer">
              <XIcon/>
            </button>
          </div>
        </div>
      </v-col>


    </v-row>

    <v-card-text>
      <v-row>
        <v-col cols="12">
          <div class="d-flex align-center justify-space-between">
            <v-tabs v-model="contactTab" color="primary">
              <v-tab value="basic">
                <UserIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                Basic
              </v-tab>
              <v-tab value="details">
                <ListDetailsIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                Details
              </v-tab>
              <v-tab v-if="contactType == 'ind'" value="family">
                <UsersIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                Family
              </v-tab>
              <v-tab v-if="contactType === 'business'" value="employees">
                <UserIcon stroke-width="1.5" width="20"/>
                Employees

              </v-tab>
              <v-tab v-if="contactType == 'ind'" value="company">
                <BuildingIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                Company
              </v-tab>
              <v-tab value="notes">
                <NoteIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                Notes
              </v-tab>
              <v-tab value="tasks">
                <NotesIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                Task
              </v-tab>
              <v-tab value="files">
                <FilesIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                Files
              </v-tab>
            </v-tabs>
            <div>
              <v-dialog width="600" v-model="notesDialog">
                <template v-slot:activator="{ props }">
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

                        <v-col cols="12">
                          <v-textarea filled auto-grow label="Notes Description" rows="4" row-height="20"
                                      color="primary"
                                      variant="outlined"></v-textarea>
                        </v-col>
                        <v-col cols="12">
                          <v-file-input
                              multiple
                              label="Upload Attachments"
                          ></v-file-input>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="error" text @click="notesDialog = false"> Close
                    </v-btn>
                    <v-btn color="success" text @click="notesDialog = false"> Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>


              <v-dialog width="600" v-model="taskDialog">
                <template v-slot:activator="{ props }">
                  <v-btn v-if="contactTab === 'tasks'" v-bind="props" color="primary" class="mx-1">Add Task +</v-btn>
                </template>
                <v-card class="overflow-auto w-100">
                  <div class="d-flex border w-100">
                    <v-card-title class="pa-5 border w-100 d-flex align-center justify-space-between">
                      Add Task
                    </v-card-title>

                  </div>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12">
                          <v-text-field v-model="taskTitle" label="Task Title" variant="outlined"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12">
                          <v-textarea v-model="taskDescription" filled auto-grow label="Task Description" rows="4"
                                      row-height="20" color="primary" variant="outlined"></v-textarea>
                        </v-col>

                        <v-col cols="12" md="6">
                          <v-autocomplete label="Select Agent to Assign Task" v-model="agent" :items="agentsList"
                                          color="primary" variant="outlined" hide-details></v-autocomplete>
                        </v-col>

                        <v-col md="6" cols="12">
                          <v-text-field v-model="taskDueDate" type="date" label="Task Due Date" variant="outlined"
                                        class="text-input"></v-text-field>
                        </v-col>

                      </v-row>

                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="error" text @click="taskDialog = false"> Close
                    </v-btn>
                    <v-btn color="success" text @click="taskDialog = false"> Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

              <v-dialog width="800" v-model="fileDialog">
                <template v-slot:activator="{ props }">
                  <v-btn v-if="contactTab === 'files'" v-bind="props" color="primary" class="mx-1">Add File +</v-btn>
                </template>
                <v-card class="overflow-auto w-100">
                  <div class="d-flex border w-100">
                    <v-card-title class="pa-5 border w-100 d-flex align-center justify-space-between">
                      Add Files
                    </v-card-title>

                  </div>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12">
                          <v-file-input
                              multiple
                              label="Upload Files"
                          ></v-file-input>
                        </v-col>


                      </v-row>

                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="error" text @click="fileDialog = false"> Close
                    </v-btn>
                    <v-btn color="success" text @click="fileDialog = false"> Add</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </div>
          <v-window v-model="contactTab">
            <v-window-item value="basic">
              <v-row class="mt-3">


                <v-col cols="12">
                  <div>
                    <v-radio-group label="Contact Type" v-model="contactType" inline>
                      <v-radio label="Individual" value="ind"></v-radio>
                      <v-radio label="Business" value="business"></v-radio>
                    </v-radio-group>
                  </div>
                </v-col>


                <v-row class="px-4 py-2 pb-4 " v-if="contactType === 'ind'">

                  <v-col cols="12" md="6" lg="4" xl="4">
                    <v-text-field v-model="fName" type="text" label="First Name" variant="outlined"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" lg="4" xl="4">
                    <v-text-field type="text" v-model="lName" label="Last Name" variant="outlined"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" lg="4" xl="4">
                    <v-text-field type="email" label="Email" v-model="email" variant="outlined"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" lg="4" xl="4">
                    <v-text-field type="email" label="Backup Email" v-model="backupEmail" variant="outlined"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="6" lg="4" xl="4">
                    <v-text-field type="number" label="Mobile Number" variant="outlined" v-model="mobile"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="6" lg="4" xl="4">
                    <v-text-field type="number" label="Work Phone" variant="outlined" v-model="workMobile"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" lg="4" xl="4">
                    <v-text-field type="date" label="Date of Birth" variant="outlined" v-model="dob"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" lg="4" xl="4">
                    <v-text-field disabled type="text" label="Age" variant="outlined" v-model="age"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field type="text" label="Home Address" variant="outlined" v-model="city"
                    ></v-text-field>
                  </v-col>
                  <v-divider class="my-2"></v-divider>
                  <v-col cols="12" md="6" lg="4" xl="4">
                    <v-text-field filled auto-grow label="City" rows="4" v-model="address"
                                  row-height="20" color="primary" variant="outlined"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" lg="4" xl="4">
                    <v-autocomplete :items="states" label="State" variant="outlined" v-model="state"
                    ></v-autocomplete>
                  </v-col>
                  <v-col cols="12" md="6" lg="4" xl="4">
                    <v-text-field type="text" label="Zip Code" variant="outlined" v-model="zipcode"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" lg="4" xl="4">
                    <v-text-field type="text" label="Reffered By" variant="outlined"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" lg="4" xl="4">
                    <v-autocomplete label="Existing Source of Opportunity" v-model="opportunitySourceVal"
                                    :items="opportunitySources"
                                    color="primary" variant="outlined" hide-details></v-autocomplete>
                  </v-col>

                </v-row>
                <v-row class="px-4 py-2 pb-4 " v-if="contactType === 'business'">
                  <v-col cols="12" md="6" lg="4" xl="4">
                    <v-text-field type="text" label="Business Name" variant="outlined"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" lg="4" xl="4">
                    <v-text-field type="text" label="Business City" variant="outlined"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" lg="4" xl="4">
                    <v-text-field type="text" label="Business State" variant="outlined"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" lg="4" xl="4">
                    <v-text-field type="text" label="Business Zip Code" variant="outlined"
                    ></v-text-field>
                  </v-col>


                  <v-col cols="12" md="6" lg="4" xl="4">
                    <v-text-field type="text" label="Business Website" variant="outlined"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" lg="4" xl="4">
                    <v-text-field type="text" label="Business Phone" variant="outlined"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" >
                    <v-text-field type="text" label="Business Street Address" variant="outlined"
                    ></v-text-field>
                  </v-col>
                  <v-divider></v-divider>
                  <v-col cols="12" md="6" lg="4" xl="4">
                    <v-text-field type="text" label=" Contact Name" variant="outlined"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" lg="4" xl="4">
                    <v-text-field type="email" label="Contact Email" variant="outlined"
                    ></v-text-field>
                  </v-col>


                  <v-col cols="12" md="6" lg="4" xl="4">
                    <v-text-field type="text" label="Contact Phone" variant="outlined"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="6" lg="4" xl="4">
                    <v-text-field type="text" label="Reffered By" variant="outlined"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" lg="4" xl="4">
                    <v-autocomplete label="Existing Source of Opportunity" v-model="opportunitySourceVal"
                                    :items="opportunitySources"
                                    color="primary" variant="outlined" hide-details></v-autocomplete>
                  </v-col>

                </v-row>


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
                  <v-text-field type="text" v-model="medicarePartB" label="Medicare Part B" variant="outlined"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-window-item>

            <v-window-item value="family">
              <v-row class="mt-3">


                <v-col cols="12" md="6" lg="6" xl="8">
                  <v-radio-group label="Martial Status" v-model="martialStatus" inline>
                    <v-radio label="Married" value="married"></v-radio>
                    <v-radio label="Single" value="single"></v-radio>
                    <v-radio label="Divorced" value="divorced"></v-radio>
                    <v-radio label="Widow" value="widow"></v-radio>
                  </v-radio-group>

                </v-col>

                <v-col cols="12" md="6" lg="6" xl="4">
                  <v-radio-group label="Is Spouse a Client too ?" v-model="spouseClient" inline>
                    <v-radio label="Yes" value="yes"></v-radio>
                    <v-radio label="No" value="no"></v-radio>
                  </v-radio-group>
                  <!-- <p class="mt-3">Selected: {{ selectedRadioValues }}</p> -->

                </v-col>

                <v-col cols="12" md="6" lg="4" xl="4">
                  <v-text-field type="text" v-model="spouseName" label="Spouse Name" variant="outlined"
                                class="mb-3"></v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="4" xl="4">
                  <v-text-field type="date" label="Spouse DOB" v-model="spouseDob" variant="outlined"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6" lg="4" xl="4">
                  <v-text-field type="text" v-model="child1" label="Child 1 - Full Name" variant="outlined"
                  ></v-text-field>
                </v-col>
                <v-col v-for="(child, index) in children" :key="index" cols="12" md="6" lg="4" xl="4">
                  <v-text-field type="text" v-model="children[index]" :label="getChildLabel(index)"
                                variant="outlined"></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-btn color="primary" variant="outlined" @click="addChild">Add Child +</v-btn>
                </v-col>
              </v-row>
            </v-window-item>

            <v-window-item value="company">
              <v-row class="mt-3">
                <v-col cols="12">
                  <v-radio-group label="Employment Status" v-model="employment" inline>
                    <v-radio label="Employed" value="employed"></v-radio>
                    <v-radio label="Self Employed" value="selfemployed"></v-radio>
                    <v-radio label="Retired" value="retired"></v-radio>
                    <v-radio label="Unemployed" value="unemployed"></v-radio>
                  </v-radio-group>
                  <!-- <p class="mt-3">Selected: {{ selectedRadioValues }}</p> -->

                </v-col>

                <v-col cols="12" md="6" lg="4" xl="4">
                  <v-text-field v-model="occupation" type="text" label="Occupation" variant="outlined"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="4" xl="4">
                  <v-text-field v-model="companyName" type="text" label="Company Name" variant="outlined"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="4" xl="4">
                  <v-text-field type="text" v-model="companyCity" label="Business City" variant="outlined"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="4" xl="4">
                  <v-text-field type="text" label="Business State" v-model="companyState" variant="outlined"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="4" xl="4">
                  <v-text-field type="text" label="Business Zip Code" variant="outlined" v-model="companyZipCode"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="4" xl="4">
                  <v-text-field filled auto-grow label="Business Street Address" rows="4" v-model="companyAddress"
                                row-height="20" color="primary" variant="outlined"></v-text-field>
                </v-col>

              </v-row>
            </v-window-item>
            <v-window-item value="notes">
              <v-row class="mt-1">
                <v-col v-for="item in notesList" class="p-0" :key="item.id" cols="12 ">
                  <NotesCard :editText="item.editText" :deleteText="item.deleteText" :time="item.time"
                             :edit-note="editNote" :date="item.date"
                             :note-description="item.note"/>
                </v-col>
              </v-row>
            </v-window-item>

            <v-window-item value="tasks">
              <v-row class="mt-1">
                <v-col v-for="item in taskList" class="p-0" :key="item.id" cols="12 ">
                  <TaskCard :statusColor="item.color" :status="item.status" :editText="item.editText"
                            :deleteText="item.deleteText" :assign-to="item.assignTo" :created-at="item.createdDate"
                            :due-date="item.dueDate"
                            :task-title="item.taskTitle" :task-description="item.taskDescription"/>
                </v-col>
              </v-row>
            </v-window-item>


            <v-window-item value="files">
              <v-row>
                <v-col cols="12">
                  <div class="my-3">

                    <!--                        <p class="text-center" >No Files Uploaded Yet</p>-->
                    <Files/>
                  </div>


                </v-col>
              </v-row>
            </v-window-item>

            <v-window-item value="employees">
              <v-row>
                <v-col cols="12" class="p-0">
                  <v-text-field class=" mt-3 float-right w-50 " type="text" variant="outlined"
                                placeholder="Search Employees" v-model="searchValue" density="compact" hide-details
                                prepend-inner-icon="mdi-magnify"/>
                </v-col>

                <v-col cols="12">
                  <EasyDataTable :headers="headersEmp" :items="itemsEmp" table-class-name="customize-table"
                                 :theme-color="themeColor" :search-field="searchField" :search-value="searchValue"
                                 :rows-per-page="5" v-model:items-selected="itemsSelected">

                  </EasyDataTable>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>

        </v-col>
      </v-row>
    </v-card-text>

  </v-navigation-drawer>



  <v-navigation-drawer color="surface" :width="800"  location="right" v-model="addContactDrawer" temporary >

    <v-row>
      <v-col col="12">

        <div class="d-flex align-center  border px-4 py-2 justify-space-between ">
          <h3>Quick Add Contact</h3>
          <div>
            <button @click="addContactDrawer = !addContactDrawer">
              <XIcon/>
            </button>
          </div>
        </div>
      </v-col>
    </v-row>



    <v-card-text>
      <Form>
       <v-row>
         <v-col cols="12" md="6" >
           <v-autocomplete label="Find Exisiting from CRM" v-model="opportunitySourceVal"
                           :items="opportunitySources"
                           color="primary" variant="outlined" hide-details></v-autocomplete>
         </v-col>
         <v-col cols="12" md="6" >
           <v-autocomplete label="Search Google Contacts" v-model="opportunitySourceVal"
                           :items="opportunitySources"
                           color="primary" variant="outlined" hide-details></v-autocomplete>
         </v-col>
       </v-row>
<v-divider class="my-3" ></v-divider>


        <v-row>


          <v-col cols="12">
            <div>
              <v-radio-group label="Contact Type" v-model="contactType" inline>
                <v-radio label="Individual" value="ind"></v-radio>
                <v-radio label="Business" value="business"></v-radio>
              </v-radio-group>
            </div>
          </v-col>

          <v-col cols="12" md="6" lg="4" xl="4">
            <v-text-field type="text" label="First Name" variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6"  lg="4" xl="4">
            <v-text-field type="text" label="Last Name" variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6"  lg="4" xl="4">
            <v-text-field type="email" label="Email" variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6"  lg="4" xl="4">
            <v-text-field type="number" label="Phone Number" variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6"  lg="4" xl="4">
            <div @click="dobDate = true" v-if="!dobDate">
              <v-text-field type="text" label="Date of Birth" variant="outlined"
              ></v-text-field>

            </div>
            <div v-else>
              <v-text-field type="date" label="Date of Birth" variant="outlined"
              ></v-text-field>
            </div>
          </v-col>
<v-divider></v-divider>

          <v-col cols="12" >
            <v-text-field type="text" label="Primary Address" variant="outlined"
            ></v-text-field>
          </v-col>


          <v-col cols="12" md="6" lg="4" xl="4">
            <v-text-field type="text" label="City" variant="outlined"
            ></v-text-field>
          </v-col>


          <v-col cols="12" md="6" lg="4" xl="4">
            <v-text-field type="text" label="State" variant="outlined"
            ></v-text-field>
          </v-col>


          <v-col cols="12" md="6" lg="4" xl="4">
            <v-text-field type="text" label="Zipcode" variant="outlined"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6" >
            <v-autocomplete label="Source for Contact" v-model="opportunitySourceVal"
                            :items="opportunitySources"
                            color="primary" variant="outlined" hide-details></v-autocomplete>
          </v-col>

          <v-col cols="12" md="6" >
            <v-text-field type="text" label="Reffered By" variant="outlined"
            ></v-text-field>
          </v-col>









        </v-row>


        <v-col class="mt-4" style="padding: 0px" cols="12" >
          <div class="d-flex gap-2" >

            <v-btn  color="primary">Save & Add Contact
            </v-btn>
          </div>
        </v-col>

      </Form>

    </v-card-text>
  </v-navigation-drawer>

</template>



