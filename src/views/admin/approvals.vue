<script setup lang="ts">
import { ref } from 'vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import type { Header, Item } from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';


const searchField = ref(['fName', 'lName', 'email', 'phone', 'addedBy']);
const searchValue = ref('');

const headers: Header[] = [
    { text: 'First Name', value: 'fName', sortable: true },
    { text: 'Last name', value: 'lName', sortable: true },
    { text: 'Email', value: 'email', sortable: true },
    { text: 'Phone', value: 'phone', sortable: true },
    { text: 'Added By', value: 'addedBy', sortable: true },
    { text: 'Action', value: 'action' }
];

const themeColor = ref('rgb(var(--v-theme-secondary))');
const itemsSelected = ref<Item[]>([]);

const items = ref([
    {
        fName: 'Joseph',
        lName: ' William 1',
        email: 'user@mail.com',
        phone: '+44 20 1234 5678',
        addedBy: 'John Doe',
        date: '12.07.2018',
        status: 3
    },
    {
        fName: 'Joseph',
        lName: ' William 1',
        email: 'user@mail.com',
        phone: '+44 20 1234 5678',
        addedBy: 'John Doe',
        date: '12.07.2018',
        status: 3
    },
    {
        fName: 'Anshan',
        lName: ' Handgun 2',
        email: 'user@mail.com',
        phone: '+44 20 1234 5678',
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
        date: '12.07.2018',
        status: 1
    },
    {
        fName: 'Sara',
        lName: ' Soudan 4',
        email: 'user@mail.com',
        phone: '+44 20 1234 5678',
        addedBy: 'John Doe',
        date: '12.07.2018',
        status: 1
    },
    {
        fName: 'Joseph',
        lName: ' William 5',
        email: 'user@mail.com',
        phone: '+44 20 1234 5678',
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
        date: '12.07.2018',
        status: 3
    },
    {
        fName: 'Larry',
        lName: ' Doe 7',
        email: 'user@mail.com',
        phone: 'Paytm',
        addedBy: 'John Doe',
        date: '12.07.2018',
        status: 3
    },
    {
        fName: 'Sara',
        lName: ' Soudan 8',
        email: 'user@mail.com',
        phone: '+44 20 1234 5678',
        addedBy: 'John Doe',
        date: '12.07.2018',
        status: 2
    },
    {
        fName: 'Sara',
        lName: ' Soudan 20',
        email: 'user@mail.com',
        phone: '+44 20 1234 5678',
        addedBy: 'John Doe',
        date: '12.07.2018',
        status: 1
    },
    {
        fName: 'Joseph',
        lName: ' William 9',
        email: 'user@mail.com',
        phone: 'Net Banking',
        addedBy: 'John Doe',
        date: '12.07.2018',
        status: 1
    },
    {
        fName: 'Anshan',
        lName: ' Handgun 10',
        email: 'user@mail.com',
        phone: '+44 20 1234 5678',
        addedBy: 'John Doe',
        date: '12.07.2018',
        status: 1
    },
    {
        fName: 'Larry',
        lName: ' Doe 11',
        email: 'user@mail.com',
        phone: 'Paytm',
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
        date: '12.07.2018',
        status: 3
    },
    {
        fName: 'Joseph',
        lName: ' William 13',
        email: 'user@mail.com',
        phone: '+44 20 1234 5678',
        addedBy: 'John Doe',
        date: '12.07.2018',
        status: 3
    },
    {
        fName: 'Anshan',
        lName: ' Handgun 14',
        email: 'user@mail.com',
        phone: '+44 20 1234 5678',
        addedBy: 'John Doe',
        date: '12.07.2018',
        status: 2
    },
    {
        fName: 'Larry',
        lName: ' Doe 15',
        email: 'user@mail.com',
        phone: '+44 20 1234 5678',
        addedBy: 'John Doe',
        date: '12.07.2018',
        status: 2
    },
    {
        fName: 'Sara',
        lName: ' Soudan 16',
        email: 'user@mail.com',
        phone: '+44 20 1234 5678',
        addedBy: 'John Doe',
        date: '12.07.2018',
        status: 1
    },
    {
        fName: 'Joseph',
        lName: ' William 17',
        email: 'user@mail.com',
        phone: '+44 20 1234 5678',
        addedBy: 'John Doe',
        date: '12.07.2018',
        status: 2
    },
    {
        fName: 'Anshan',
        lName: ' Handgun 18',
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
        phone: '+44 20 1234 5678',
        addedBy: 'John Doe',
        date: '12.07.2018',
        status: 2
    }
]);
const pendingDialog = ref(false);
const acceptedDialog = ref(false);
const rejectedDialog = ref(false);
const tab = ref(null)
const tab2 = ref(null)
const perLevel = ref(50)
</script>


<template>
    <v-row>
        <v-col col="12">
            <v-card variant="outlined" elevation="0" class="withbg">
                <v-card-item>
                    <div class="d-sm-flex align-center justify-space-between">
                        <h3 class="text-h3 w-100">Agents Approvals</h3>

                    </div>
                </v-card-item>
                <v-divider></v-divider>
                <v-card-text>

                    <v-row>
                        <v-col>

                          <div style="display: flex; justify-content: space-between;" >
                            <div>
                              <v-tabs class="mb-4" v-model="tab" color="primary">
                                <v-tab value="pending">
                                  <HourglassIcon stroke-width="1.5" width="20" class="v-icon--start" /> Pending Requests
                                </v-tab>
                                <v-tab value="approved">
                                  <SquareCheckIcon stroke-width="1.5" width="20" class="v-icon--start" /> Approved
                                  Requests
                                </v-tab>
                                <v-tab value="rejected">
                                  <SquareXIcon stroke-width="1.5" width="20" class="v-icon--start" /> Rejected Requests
                                </v-tab>

                              </v-tabs>
                            </div>
                              <div class=" w-25" >
                                <v-text-field class="my-2 w-100 " type="text" variant="outlined" persistent-placeholder
                                              placeholder="Search Requests" v-model="searchValue" density="compact" hide-details
                                              prepend-inner-icon="mdi-magnify" />
                              </div>

                          </div>


                            <v-window v-model="tab">
                                <v-window-item value="pending">

                                    <EasyDataTable :headers="headers" :items="items" table-class-name="customize-table"
                                        :theme-color="themeColor" :search-field="searchField" :search-value="searchValue"
                                        :rows-per-page="5" v-model:items-selected="itemsSelected">
                                        <template #item-action="item">
                                            <div class="operation-wrapper">
                                                <v-dialog width="800" v-model="pendingDialog" persistent>
                                                    <template v-slot:activator="{ props }">
                                                        <v-btn icon color="primary" v-bind="props" variant="text">
                                                            <EyeIcon size="20" />
                                                        </v-btn>
                                                    </template>
                                                    <v-card class="overflow-auto">
                                                        <v-card-title class="pa-5 border">
                                                            Account Information
                                                        </v-card-title>
                                                        <v-card-text>
                                                            <v-container>
                                                                <v-row>
                                                                    <v-col lg="4" md="6" sm="12" cols="12">
                                                                        <v-lable class="font-weight-bold">First
                                                                            Name</v-lable>
                                                                        <p>John</p>
                                                                    </v-col>
                                                                    <v-col lg="4" md="6" sm="12" cols="12">
                                                                        <v-lable class="font-weight-bold">Last
                                                                            Name</v-lable>
                                                                        <p>Doe</p>
                                                                    </v-col>
                                                                    <v-col lg="4" md="6" sm="12" cols="12">
                                                                        <v-lable class="font-weight-bold">Phone
                                                                            Number</v-lable>
                                                                        <p>+1-42-4025-294</p>
                                                                    </v-col>
                                                                    <v-col lg="4" md="6" sm="12" cols="12">
                                                                        <v-lable class="font-weight-bold">Email</v-lable>
                                                                        <p>johndoe@gmail.com</p>
                                                                    </v-col>

                                                                    <v-col lg="4" md="6" sm="12" cols="12">
                                                                        <v-lable class="font-weight-bold">License
                                                                            Number</v-lable>
                                                                        <p>LNUS-7920</p>
                                                                    </v-col>



                                                                    <v-col lg="4" md="6" sm="12" cols="12">
                                                                        <v-lable class="font-weight-bold">Added by
                                                                            Agent</v-lable>
                                                                        <p>Flex Hawk</p>
                                                                    </v-col>
                                                                    <v-col lg="4" md="6" sm="12" cols="12">
                                                                        <v-lable class="font-weight-bold">% Level</v-lable>
                                                                      <v-text-field v-model="perLevel" type="number"  variant="outlined"
                                                                      ></v-text-field>
                                                                    </v-col>

                                                                </v-row>

                                                                <v-row class="mt-3">
                                                                    <v-col cols="12">
                                                                        <div class=" d-flex justify-start gap-2">
                                                                            <v-btn color="error" text> Reject </v-btn>
                                                                            <v-btn color="success" text> Approved </v-btn>
                                                                        </div>
                                                                    </v-col>
                                                                </v-row>
                                                            </v-container>
                                                        </v-card-text>
                                                        <v-card-actions>
                                                            <v-spacer></v-spacer>
                                                            <v-btn color="error" text @click="pendingDialog = false"> Close
                                                            </v-btn>
                                                            <!-- <v-btn color="success" text @click="pendingDialog = false"> Save </v-btn> -->
                                                        </v-card-actions>
                                                    </v-card>
                                                </v-dialog>
                                                <v-btn icon color="error" variant="text">
                                                    <TrashIcon size="20" />
                                                </v-btn>
                                            </div>
                                        </template>
                                    </EasyDataTable>
                                </v-window-item>



                                <v-window-item value="approved">

                                    <EasyDataTable :headers="headers" :items="items" table-class-name="customize-table"
                                        :theme-color="themeColor" :search-field="searchField" :search-value="searchValue"
                                        :rows-per-page="5" v-model:items-selected="itemsSelected">
                                        <template #item-action="item">
                                            <div class="operation-wrapper">
                                                <v-dialog width="800" v-model="acceptedDialog">
                                                    <template v-slot:activator="{ props }">
                                                        <v-btn icon color="primary" v-bind="props" variant="text">
                                                            <EyeIcon size="20" />
                                                        </v-btn>
                                                    </template>
                                                    <v-card class="overflow-auto w-100">
                                                        <div class="d-flex border w-100">
                                                            <v-card-title
                                                                class="pa-5 border w-100 d-flex align-center justify-space-between">
                                                                Account Information

                                                                <v-chip class="ma-2" color="success" text-color="white">
                                                                    Account Approved
                                                                </v-chip>
                                                            </v-card-title>

                                                        </div>

                                                        <v-card-text>
                                                            <v-container>
                                                                <v-row>
                                                                    <v-col lg="4" md="6" sm="12" cols="12">
                                                                        <v-lable class="font-weight-bold">First
                                                                            Name</v-lable>
                                                                        <p>John</p>
                                                                    </v-col>
                                                                    <v-col lg="4" md="6" sm="12" cols="12">
                                                                        <v-lable class="font-weight-bold">Last
                                                                            Name</v-lable>
                                                                        <p>Doe</p>
                                                                    </v-col>
                                                                    <v-col lg="4" md="6" sm="12" cols="12">
                                                                        <v-lable class="font-weight-bold">Phone
                                                                            Number</v-lable>
                                                                        <p>+1-42-4025-294</p>
                                                                    </v-col>
                                                                    <v-col lg="4" md="6" sm="12" cols="12">
                                                                        <v-lable class="font-weight-bold">Email</v-lable>
                                                                        <p>johndoe@gmail.com</p>
                                                                    </v-col>
                                                                    <v-col lg="4" md="6" sm="12" cols="12">
                                                                        <v-lable class="font-weight-bold">Social Security
                                                                            Number</v-lable>
                                                                        <p>HSDK-9201</p>
                                                                    </v-col>
                                                                    <v-col lg="4" md="6" sm="12" cols="12">
                                                                        <v-lable class="font-weight-bold">License
                                                                            Number</v-lable>
                                                                        <p>LNUS-7920</p>
                                                                    </v-col>
                                                                    <v-col lg="4" md="6" sm="12" cols="12">
                                                                        <v-lable
                                                                            class="font-weight-bold">Generation</v-lable>
                                                                        <p>04</p>
                                                                    </v-col>
                                                                    <v-col lg="4" md="6" sm="12" cols="12">
                                                                        <v-lable class="font-weight-bold">Code
                                                                            Number</v-lable>
                                                                        <p>1201</p>
                                                                    </v-col>
                                                                    <v-col lg="4" md="6" sm="12" cols="12">
                                                                        <v-lable class="font-weight-bold">Base
                                                                            Number</v-lable>
                                                                        <p>09</p>
                                                                    </v-col>
                                                                    <v-col lg="4" md="6" sm="12" cols="12">
                                                                        <v-lable class="font-weight-bold">Added by
                                                                            Agent</v-lable>
                                                                        <p>Flex Hawk</p>
                                                                    </v-col>
                                                                    <v-col lg="4" md="6" sm="12" cols="12">
                                                                        <v-lable class="font-weight-bold">% Level</v-lable>
                                                                        <p>Reg Dir (90%)</p>
                                                                    </v-col>

                                                                </v-row>
                                                                <v-row class="mt-3">
                                                                    <v-col cols="12">
                                                                        <v-lable class="font-weight-bold">License
                                                                            Image</v-lable>

                                                                        <div class=" w-100 py-3 my-2">
                                                                            <img src="../../assets/images/license.jpg"
                                                                                class="w-25" alt="license_image" />

                                                                        </div>
                                                                    </v-col>
                                                                </v-row>
                                                                <v-row class="mt-1">
                                                                    <v-col cols="12">
                                                                        <!-- <div class=" d-flex justify-start gap-2">
                                                                            <v-btn color="error" text> Reject </v-btn>
                                                                            <v-btn color="success" text> Approved </v-btn>
                                                                        </div> -->
                                                                    </v-col>
                                                                </v-row>
                                                            </v-container>
                                                        </v-card-text>
                                                        <v-card-actions>
                                                            <v-spacer></v-spacer>
                                                            <v-btn color="error" text @click="acceptedDialog = false"> Close
                                                            </v-btn>
                                                            <!-- <v-btn color="success" text @click="pendingDialog = false"> Save </v-btn> -->
                                                        </v-card-actions>
                                                    </v-card>
                                                </v-dialog>
                                                <v-btn icon color="error" variant="text">
                                                    <TrashIcon size="20" />
                                                </v-btn>
                                            </div>
                                        </template>
                                    </EasyDataTable>
                                </v-window-item>


                                <v-window-item value="rejected">

                                    <EasyDataTable :headers="headers" :items="items" table-class-name="customize-table"
                                        :theme-color="themeColor" :search-field="searchField" :search-value="searchValue"
                                        :rows-per-page="5" v-model:items-selected="itemsSelected">
                                        <template #item-action="item">
                                            <div class="operation-wrapper">
                                                <v-dialog width="800" v-model="rejectedDialog">
                                                    <template v-slot:activator="{ props }">
                                                        <v-btn icon color="primary" v-bind="props" variant="text">
                                                            <EyeIcon size="20" />
                                                        </v-btn>
                                                    </template>
                                                    <v-card class="overflow-auto w-100">
                                                        <div class="d-flex border w-100">
                                                            <v-card-title
                                                                class="pa-5 border w-100 d-flex align-center justify-space-between">
                                                                Account Information

                                                                <v-chip class="ma-2" color="error" text-color="white">
                                                                    Account Rejected
                                                                </v-chip>
                                                            </v-card-title>

                                                        </div>

                                                        <v-card-text>
                                                            <v-container>
                                                                <v-row>
                                                                    <v-col lg="4" md="6" sm="12" cols="12">
                                                                        <v-lable class="font-weight-bold">First
                                                                            Name</v-lable>
                                                                        <p>John</p>
                                                                    </v-col>
                                                                    <v-col lg="4" md="6" sm="12" cols="12">
                                                                        <v-lable class="font-weight-bold">Last
                                                                            Name</v-lable>
                                                                        <p>Doe</p>
                                                                    </v-col>
                                                                    <v-col lg="4" md="6" sm="12" cols="12">
                                                                        <v-lable class="font-weight-bold">Phone
                                                                            Number</v-lable>
                                                                        <p>+1-42-4025-294</p>
                                                                    </v-col>
                                                                    <v-col lg="4" md="6" sm="12" cols="12">
                                                                        <v-lable class="font-weight-bold">Email</v-lable>
                                                                        <p>johndoe@gmail.com</p>
                                                                    </v-col>
                                                                    <v-col lg="4" md="6" sm="12" cols="12">
                                                                        <v-lable class="font-weight-bold">Social Security
                                                                            Number</v-lable>
                                                                        <p>HSDK-9201</p>
                                                                    </v-col>
                                                                    <v-col lg="4" md="6" sm="12" cols="12">
                                                                        <v-lable class="font-weight-bold">License
                                                                            Number</v-lable>
                                                                        <p>LNUS-7920</p>
                                                                    </v-col>
                                                                    <v-col lg="4" md="6" sm="12" cols="12">
                                                                        <v-lable
                                                                            class="font-weight-bold">Generation</v-lable>
                                                                        <p>04</p>
                                                                    </v-col>
                                                                    <v-col lg="4" md="6" sm="12" cols="12">
                                                                        <v-lable class="font-weight-bold">Code
                                                                            Number</v-lable>
                                                                        <p>1201</p>
                                                                    </v-col>
                                                                    <v-col lg="4" md="6" sm="12" cols="12">
                                                                        <v-lable class="font-weight-bold">Base
                                                                            Number</v-lable>
                                                                        <p>09</p>
                                                                    </v-col>
                                                                    <v-col lg="4" md="6" sm="12" cols="12">
                                                                        <v-lable class="font-weight-bold">Added by
                                                                            Agent</v-lable>
                                                                        <p>Flex Hawk</p>
                                                                    </v-col>
                                                                    <v-col lg="4" md="6" sm="12" cols="12">
                                                                        <v-lable class="font-weight-bold">% Level</v-lable>
                                                                        <p>Reg Dir (90%)</p>
                                                                    </v-col>

                                                                </v-row>
                                                                <v-row class="mt-3">
                                                                    <v-col cols="12">
                                                                        <v-lable class="font-weight-bold">License
                                                                            Image</v-lable>

                                                                        <div class=" w-100 py-3 my-2">
                                                                            <img src="../../assets/images/license.jpg"
                                                                                class="w-25" alt="license_image" />

                                                                        </div>
                                                                    </v-col>
                                                                </v-row>
                                                                <v-row class="mt-1">
                                                                    <v-col cols="12">
                                                                        <!-- <div class=" d-flex justify-start gap-2">
                                                                            <v-btn color="error" text> Reject </v-btn>
                                                                            <v-btn color="success" text> Approved </v-btn>
                                                                        </div> -->
                                                                    </v-col>
                                                                </v-row>
                                                            </v-container>
                                                        </v-card-text>
                                                        <v-card-actions>
                                                            <v-spacer></v-spacer>
                                                            <v-btn color="error" text @click="rejectedDialog = false"> Close
                                                            </v-btn>
                                                            <!-- <v-btn color="success" text @click="pendingDialog = false"> Save </v-btn> -->
                                                        </v-card-actions>
                                                    </v-card>
                                                </v-dialog>
                                                <v-btn icon color="error" variant="text">
                                                    <TrashIcon size="20" />
                                                </v-btn>
                                            </div>
                                        </template>
                                    </EasyDataTable>
                                </v-window-item>
                            </v-window>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>
