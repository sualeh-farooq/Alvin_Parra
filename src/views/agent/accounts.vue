<script setup>
import {ref} from 'vue';
import 'vue3-easy-data-table/dist/style.css';


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
const tab2 = ref(null);
const tab3 = ref(null);
const tab4 = ref(null);
const tab5 = ref(null);
const tab6 = ref(null);
const tab7 = ref(null);

</script>


<template>
  <v-row>
    <v-col col="12">
      <v-card variant="outlined" elevation="0" class="withbg">
        <v-card-item>
          <div class="d-sm-flex align-center justify-space-between">
            <h3 class="text-h3">Accounts</h3>

            <RouterLink to="/agent/addAccount">
              <v-btn color="primary">Add Account +</v-btn>

            </RouterLink>

          </div>
        </v-card-item>
        <v-divider></v-divider>
        <v-card-text>

          <!-- Content Goes Here -->
          <v-row>
            <v-col>
              <v-tabs v-model="tab2" color="primary">
                <v-tab value="11">
                  <UserIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                  Individual
                </v-tab>
                <v-tab value="12">
                  <BriefcaseIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                  Business
                </v-tab>

              </v-tabs>

              <v-window v-model="tab2">
                <v-window-item value="11">
                  <div style="align-items:center; justify-content:space-between;" class="d-flex" >
                    <div>
                      <v-tabs class="mb-4" v-model="tab4" color="primary">
                        <v-tab value="leads">
                          <HourglassIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                          Leads
                        </v-tab>
                        <v-tab value="prospects">
                          <UsersIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                          Prospects
                        </v-tab>
                        <v-tab value="clients">
                          <BuildingArchIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                          Clients
                        </v-tab>
                        <v-tab value="lost">
                          <SquareXIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                          Lost
                        </v-tab>

                      </v-tabs>
                    </div>
                    <div class="w-25" >

                      <v-text-field class="my-2 " type="text" variant="outlined" persistent-placeholder
                                    placeholder="Search Account" v-model="searchValue" density="compact" hide-details
                                    prepend-inner-icon="mdi-magnify"/>
                    </div>
                  </div>


                  <v-window v-model="tab4">
                    <v-window-item value="leads">

                      <EasyDataTable :headers="headers" :items="items" table-class-name="customize-table"
                                     :theme-color="themeColor" :search-field="searchField" :search-value="searchValue"
                                     :rows-per-page="5" v-model:items-selected="itemsSelected">
                        <template #item-action="item">
                          <RouterLink to="/agent/accountView">
                            <v-btn icon color="primary" v-bind="props" variant="text">
                              <EyeIcon size="20"/>
                            </v-btn>
                          </RouterLink>
                          <v-btn icon color="error" variant="text">
                            <TrashIcon size="20"/>
                          </v-btn>
                        </template>
                      </EasyDataTable>
                    </v-window-item>
                    <v-window-item value="prospects">

                      <EasyDataTable :headers="headers" :items="items" table-class-name="customize-table"
                                     :theme-color="themeColor" :search-field="searchField" :search-value="searchValue"
                                     :rows-per-page="5" v-model:items-selected="itemsSelected">
                        <template #item-action="item">
                          <RouterLink to="/agent/accountView">
                            <v-btn icon color="primary" v-bind="props" variant="text">
                              <EyeIcon size="20"/>
                            </v-btn>
                          </RouterLink>
                          <v-btn icon color="error" variant="text">
                            <TrashIcon size="20"/>
                          </v-btn>
                        </template>
                      </EasyDataTable>
                    </v-window-item>
                    <v-window-item value="clients">


                      <EasyDataTable :headers="headers" :items="items" table-class-name="customize-table"
                                     :theme-color="themeColor" :search-field="searchField" :search-value="searchValue"
                                     :rows-per-page="5" v-model:items-selected="itemsSelected">
                        <template #item-action="item">
                          <RouterLink to="/agent/accountView">
                            <v-btn icon color="primary" v-bind="props" variant="text">
                              <EyeIcon size="20"/>
                            </v-btn>
                          </RouterLink>
                          <v-btn icon color="error" variant="text">
                            <TrashIcon size="20"/>
                          </v-btn>
                        </template>
                      </EasyDataTable>
                    </v-window-item>

                    <v-window-item value="lost">

                      <EasyDataTable :headers="headers" :items="items" table-class-name="customize-table"
                                     :theme-color="themeColor" :search-field="searchField" :search-value="searchValue"
                                     :rows-per-page="5" v-model:items-selected="itemsSelected">
                        <template #item-action="item">
                          <RouterLink to="/agent/accountView">
                            <v-btn icon color="primary" v-bind="props" variant="text">
                              <EyeIcon size="20"/>
                            </v-btn>
                          </RouterLink>
                          <v-btn icon color="error" variant="text">
                            <TrashIcon size="20"/>
                          </v-btn>
                        </template>
                      </EasyDataTable>
                    </v-window-item>


                  </v-window>

                </v-window-item>


                <v-window-item value="12">
                  <div style="align-items:center; justify-content:space-between;" class="d-flex" >
                    <div>
                      <v-tabs class="mb-4" v-model="tab5" color="primary">
                        <v-tab value="leads">
                          <HourglassIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                          Leads
                        </v-tab>
                        <v-tab value="prospects">
                          <UsersIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                          Prospects
                        </v-tab>
                        <v-tab value="clients">
                          <BuildingArchIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                          Clients
                        </v-tab>
                        <v-tab value="lost">
                          <SquareXIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                          Lost
                        </v-tab>

                      </v-tabs>
                    </div>
                    <div class="w-25" >

                      <v-text-field class="my-2 " type="text" variant="outlined" persistent-placeholder
                                    placeholder="Search Account" v-model="searchValue" density="compact" hide-details
                                    prepend-inner-icon="mdi-magnify"/>
                    </div>
                  </div>

                  <v-window v-model="tab5">
                    <v-window-item value="leads">

                      <EasyDataTable :headers="headers" :items="items" table-class-name="customize-table"
                                     :theme-color="themeColor" :search-field="searchField" :search-value="searchValue"
                                     :rows-per-page="5" v-model:items-selected="itemsSelected">
                        <template #item-action="item">
                          <RouterLink to="/agent/accountView">
                            <v-btn icon color="primary" v-bind="props" variant="text">
                              <EyeIcon size="20"/>
                            </v-btn>
                          </RouterLink>
                          <v-btn icon color="error" variant="text">
                            <TrashIcon size="20"/>
                          </v-btn>
                        </template>
                      </EasyDataTable>
                    </v-window-item>
                    <v-window-item value="prospects">

                      <EasyDataTable :headers="headers" :items="items" table-class-name="customize-table"
                                     :theme-color="themeColor" :search-field="searchField" :search-value="searchValue"
                                     :rows-per-page="5" v-model:items-selected="itemsSelected">
                        <template #item-action="item">
                          <RouterLink to="/agent/accountView">
                            <v-btn icon color="primary" v-bind="props" variant="text">
                              <EyeIcon size="20"/>
                            </v-btn>
                          </RouterLink>
                          <v-btn icon color="error" variant="text">
                            <TrashIcon size="20"/>
                          </v-btn>
                        </template>
                      </EasyDataTable>
                    </v-window-item>
                    <v-window-item value="clients">


                      <EasyDataTable :headers="headers" :items="items" table-class-name="customize-table"
                                     :theme-color="themeColor" :search-field="searchField" :search-value="searchValue"
                                     :rows-per-page="5" v-model:items-selected="itemsSelected">
                        <template #item-action="item">
                          <RouterLink to="/agent/accountView">
                            <v-btn icon color="primary" v-bind="props" variant="text">
                              <EyeIcon size="20"/>
                            </v-btn>
                          </RouterLink>
                          <v-btn icon color="error" variant="text">
                            <TrashIcon size="20"/>
                          </v-btn>
                        </template>
                      </EasyDataTable>
                    </v-window-item>

                    <v-window-item value="lost">

                      <EasyDataTable :headers="headers" :items="items" table-class-name="customize-table"
                                     :theme-color="themeColor" :search-field="searchField" :search-value="searchValue"
                                     :rows-per-page="5" v-model:items-selected="itemsSelected">
                        <template #item-action="item">
                          <RouterLink to="/agent/accountView">
                            <v-btn icon color="primary" v-bind="props" variant="text">
                              <EyeIcon size="20"/>
                            </v-btn>
                          </RouterLink>
                          <v-btn icon color="error" variant="text">
                            <TrashIcon size="20"/>
                          </v-btn>
                        </template>
                      </EasyDataTable>
                    </v-window-item>


                  </v-window>

                </v-window-item>


              </v-window>
            </v-col>
          </v-row>

        </v-card-text>
      </v-card>
    </v-col>

  </v-row>
</template>