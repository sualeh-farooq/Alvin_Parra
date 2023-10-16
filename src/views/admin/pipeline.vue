<script>
import { ref } from 'vue';
import KanbanListVue from '@/components/apps/kanban/KanbanList.vue';

export default {
    data() {
        const page = ref({ title: 'Tabs' });
        const tab = ref(null);
        const tab2 = ref(null);
        const tab3 = ref(null);
        const tab4 = ref(null);
        const tab5 = ref(null);
        const tab6 = ref(null);
        const tab7 = ref(null);
        const searchField = ref(['oppName', 'contact', 'type', 'pipeline', 'status', 'stage', 'estIncome', 'wrtAgentSplit']);
        const searchValue = ref();
        const headers = [
            { text: 'Opportunity Name', value: 'oppName', sortable: true },
            { text: 'Contact', value: 'contact', sortable: true },
            { text: 'Contact Type', value: 'type', sortable: true },
            { text: 'Pipeline', value: 'pipeline', sortable: true },
            { text: 'Status', value: 'status', sortable: true },
            { text: 'Stage', value: 'stage', sortable: true },
            { text: 'Est Income', value: 'estIncome', sortable: true },
            { text: 'Est Closing Date', value: 'closingDate', sortable: true },
            { text: 'Writing Agent Split', value: 'wrtAgentSplit', sortable: true },
            { text: 'Action', value: 'action' }
        ];

        const themeColor = ref('rgb(var(--v-theme-secondary))');
        const pendingDialog = ref(false);
        const acceptedDialog = ref(false);
        const rejectedDialog = ref(false);
        const items = ref([
            {
                oppName: 'Opportunity 1-life-121212',
                contact: 'John Doe 1',
                type: 'Individual',
                pipeline: 'Life',
                status: 'Lead',
                stage: 'Stage 1 ',
                estIncome: '$500',
                closingDate: '12/12/2021',
                wrtAgentSplit: 'Agent 1 (100%)',
            },
            {
                oppName: 'Opportunity 2-medicare-121212',
                contact: 'Jane Smith',
                type: 'Business',
                pipeline: 'Medicare',
                status: 'Prospect',
                stage: 'Stage 2',
                estIncome: '$800',
                closingDate: '01/15/2022',
                wrtAgentSplit: 'Agent 2 (90%)',
            },
            {
                oppName: 'Opportunity 3-AUM-121212',
                contact: 'Michael Johnson',
                type: 'Individual',
                pipeline: 'AUM',
                status: 'Lost',
                stage: 'Stage 3',
                estIncome: '$1200',
                closingDate: '03/20/2022',
                wrtAgentSplit: 'Agent 3 (80%)',
            },
            {
                oppName: 'Opportunity 4-RealEstate-121212',
                contact: 'Emily Davis',
                type: 'Business',
                pipeline: 'Real Estate',
                status: 'Won',
                stage: 'Stage 4',
                estIncome: '$1500',
                closingDate: '05/10/2022',
                wrtAgentSplit: 'Agent 4 (100%)',
            },
            {
                oppName: 'Opportunity 5-others-121212',
                contact: 'Daniel Wilson',
                type: 'Individual',
                pipeline: 'Others',
                status: 'Lead',
                stage: 'Stage 5',
                estIncome: '$600',
                closingDate: '07/07/2022',
                wrtAgentSplit: 'Agent 5 (90%)',
            },
            {
                oppName: 'Opportunity 6-medicare-12345',
                contact: 'Alice Johnson',
                type: 'Business',
                pipeline: 'Medicare',
                status: 'Lost',
                stage: 'Stage 2',
                estIncome: '$750',
                closingDate: '02/01/2023',
                wrtAgentSplit: 'Agent 6 (95%)',
            },
            {
                oppName: 'Opportunity 7-AUM-56789',
                contact: 'Robert Davis',
                type: 'Individual',
                pipeline: 'AUM',
                status: 'Prospect',
                stage: 'Stage 3',
                estIncome: '$1100',
                closingDate: '04/15/2023',
                wrtAgentSplit: 'Agent 7 (85%)',
            },
            {
                oppName: 'Opportunity 8-RealEstate-98765',
                contact: 'Olivia Smith',
                type: 'Business',
                pipeline: 'Real Estate',
                status: 'Lead',
                stage: 'Stage 4',
                estIncome: '$1800',
                closingDate: '06/30/2023',
                wrtAgentSplit: 'Agent 8 (100%)',
            },
            {
                oppName: 'Opportunity 9-life-54321',
                contact: 'William Wilson',
                type: 'Individual',
                pipeline: 'Life',
                status: 'Won',
                stage: 'Stage 1 - Interested',
                estIncome: '$550',
                closingDate: '08/20/2023',
                wrtAgentSplit: 'Agent 9 (90%)',
            },
            {
                oppName: 'Opportunity 10-others-112233',
                contact: 'Sophia Johnson',
                type: 'Individual',
                pipeline: 'Others',
                status: 'Prospect',
                stage: 'Stage 5',
                estIncome: '$700',
                closingDate: '10/05/2023',
                wrtAgentSplit: 'Agent 10 (95%)',
            },
            {
                oppName: 'Opportunity 11-AUM-987654',
                contact: 'John Smith',
                type: 'Business',
                pipeline: 'AUM',
                status: 'Lead',
                stage: 'Stage 6',
                estIncome: '$1300',
                closingDate: '12/10/2023',
                wrtAgentSplit: 'Agent 11 (80%)',
            },
            {
                oppName: 'Opportunity 12-life-246810',
                contact: 'Emily Wilson',
                type: 'Individual',
                pipeline: 'Life',
                status: 'Won',
                stage: 'Stage 1 - Interested',
                estIncome: '$600',
                closingDate: '02/15/2024',
                wrtAgentSplit: 'Agent 12 (100%)',
            },
            {
                oppName: 'Opportunity 13-medicare-13579',
                contact: 'David Davis',
                type: 'Individual',
                pipeline: 'Medicare',
                status: 'Lost',
                stage: 'Stage 2',
                estIncome: '$850',
                closingDate: '04/01/2024',
                wrtAgentSplit: 'Agent 13 (90%)',
            },
            {
                oppName: 'Opportunity 14-RealEstate-111222',
                contact: 'Ava Johnson',
                type: 'Business',
                pipeline: 'Real Estate',
                status: 'Prospect',
                stage: 'Stage 3',
                estIncome: '$1600',
                closingDate: '06/20/2024',
                wrtAgentSplit: 'Agent 14 (85%)',
            },
            {
                oppName: 'Opportunity 15-others-333444',
                contact: 'Michael Smith',
                type: 'Business',
                pipeline: 'Others',
                status: 'Lead',
                stage: 'Stage 4',
                estIncome: '$700',
                closingDate: '08/15/2024',
                wrtAgentSplit: 'Agent 15 (100%)',
            },

        ]);

        return {
            page,
            tab,
            tab2,
            tab3,
            tab4,
            tab5,
            tab6,
            tab7,
            items,
            searchField,
            searchValue,
            headers,
            themeColor,
            pendingDialog,
            acceptedDialog,
            drawer: false,
            followUpDate: false,
            closingTarget: false,rejectedDialog ,
            opportunitySources: [
                'Exisiting',
                'Lead',
                'Social'
            ],
            writingAgentSplit: [
                '100%',
                '90%',
                '80%'
            ],
            agent2Split: [
                '100%',
                '90%',
                '80%'
            ],
            serviceType: [
                'Service One',
                'Service Two',
                'Service Three',
            ],
            carrier: [
                'Carrier One',
                'Carrier Two',
                'Carrier Three'
            ],
            product: [
                'Product One',
                'Product Two',
                'Product Three'
            ]

        };
    },
    components: {
        KanbanListVue,
    },
};
</script>





<template>
    <v-row>
        <v-col col="12">
            <v-card variant="outlined" elevation="0" class="withbg">
                <v-card-item>
                    <div class="d-sm-flex align-center justify-space-between">
                        <h3 class="text-h3">Pipelines</h3>
                        <div class="d-flex  justify-end ">
                            <v-btn color="primary" class="mx-1">Add Pipeline +</v-btn>
                            <RouterLink to="/admin/addOpportunity">

                                <v-btn color="primary" class="mx-1">
                                    Add Opportunity +
                                </v-btn>
                            </RouterLink>
                        </div>
                    </div>
                </v-card-item>
                <v-divider></v-divider>
                <v-card-text>
                    <v-row>
                        <v-col>
                            <v-tabs v-model="tab2" color="primary">
                                <v-tab value="11">
                                    <CardsIcon stroke-width="1.5" width="20" class="v-icon--start" /> Cards View
                                </v-tab>
                                <v-tab value="22">
                                    <ListIcon stroke-width="1.5" width="20" class="v-icon--start" /> List View
                                </v-tab>

                            </v-tabs>

                            <v-window v-model="tab2">
                                <v-window-item value="11">
                                    <KanbanListVue />
                                </v-window-item>

                                <v-window-item value="22">
                                    <v-text-field class="my-2 " contact="text" variant="outlined" persistent-placeholder
                                        placeholder="Search Opportunity" v-model="searchValue" density="compact"
                                        hide-details prepend-inner-icon="mdi-magnify" />
                                    <EasyDataTable :headers="headers" :items="items" table-class-name="customize-table"
                                        :theme-color="themeColor" :search-field="searchField" :search-value="searchValue"
                                        :rows-per-page="5" v-model:items-selected="itemsSelected">
                                        <template #item-action="item">
                                            <div class="operation-wrapper">

                                                <v-btn @click.stop="drawer = !drawer" icon color="primary" variant="text">
                                                    <EyeIcon size="20" />
                                                </v-btn>
                                                <v-btn @click.stop="drawer = !drawer" icon color="error" variant="text">
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


    <!--- Opportunity View Drawer on Action Button Click in Table -->
    <v-navigation-drawer color="surface" :width="700" location="right" v-model="drawer" temporary>


        <div class="ma-3">


            <div class="d-flex align-center justify-space-between ">
                <h3>Opportunity Details</h3>
                <div class="d-flex gap-2">
                    <!-- <v-btn color="primary">
                        <EditIcon size="20" /> Edit
                    </v-btn> -->


                    <v-dialog width="600" v-model="rejectedDialog">
                        <template v-slot:activator="{ props }">
                            <v-btn  color="primary" v-bind="props" >
                                <EditIcon size="20" /> Edit
                            </v-btn>
                        </template>
                        <v-card class="overflow-auto w-100">
                            <div class="d-flex border w-100">
                                <v-card-title class="pa-5 border w-100 d-flex align-center justify-space-between">
                                    Edit Opportunity Details
                                </v-card-title>

                            </div>

                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col md="6" sm="12" cols="12">
                                            <v-lable class="font-weight-bold">First
                                                Name</v-lable>
                                            <p>John</p>
                                        </v-col>
                                        <v-col md="6" sm="12" cols="12">
                                            <v-lable class="font-weight-bold">Last
                                                Name</v-lable>
                                            <p>Doe</p>
                                        </v-col>
                                        <v-col md="6" sm="12" cols="12">
                                            <v-lable class="font-weight-bold">Phone
                                                Number</v-lable>
                                            <p>+1-42-4025-294</p>
                                        </v-col>
                                        <v-col md="6" sm="12" cols="12">
                                            <v-lable class="font-weight-bold">Email</v-lable>
                                            <p>johndoe@gmail.com</p>
                                        </v-col>
                                        <v-col md="6" sm="12" cols="12">
                                            <v-lable class="font-weight-bold">Social Security
                                                Number</v-lable>
                                            <p>HSDK-9201</p>
                                        </v-col>
                                        <v-col md="6" sm="12" cols="12">
                                            <v-lable class="font-weight-bold">License
                                                Number</v-lable>
                                            <p>LNUS-7920</p>
                                        </v-col>
                                        <v-col md="6" sm="12" cols="12">
                                            <v-lable class="font-weight-bold">Generation</v-lable>
                                            <p>04</p>
                                        </v-col>
                                        <v-col md="6" sm="12" cols="12">
                                            <v-lable class="font-weight-bold">Code
                                                Number</v-lable>
                                            <p>1201</p>
                                        </v-col>
                                        <v-col md="6" sm="12" cols="12">
                                            <v-lable class="font-weight-bold">Base
                                                Number</v-lable>
                                            <p>09</p>
                                        </v-col>
                                        <v-col md="6" sm="12" cols="12">
                                            <v-lable class="font-weight-bold">Added by
                                                Agent</v-lable>
                                            <p>Flex Hawk</p>
                                        </v-col>
                                        <v-col md="6" sm="12" cols="12">
                                            <v-lable class="font-weight-bold">% Level</v-lable>
                                            <p>Reg Dir (90%)</p>
                                        </v-col>

                                    </v-row>
                                    <v-row class="mt-3">
                                        <v-col cols="12">
                                            <v-lable class="font-weight-bold">License
                                                Image</v-lable>

                                            <div class=" w-100 py-3 my-2">
                                                <img src="../../assets/images/license.jpg" class="w-25"
                                                    alt="license_image" />

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
                    <v-btn color="error">
                        <TrashIcon size="20" />Delete
                    </v-btn>
                </div>
            </div>
            <v-row class="mt-3">
                <v-col cols="12" lg="4" md="6" sm="12">
                    <v-label class="font-weight-medium">Name
                    </v-label>
                    <p>John Doe</p>
                </v-col>
                <v-col cols="12" lg="4" md="6" sm="12">
                    <v-label class="font-weight-medium">Contact
                    </v-label>
                    <p>John Smith</p>
                </v-col>
                <v-col cols="12" lg="4" md="6" sm="12">
                    <v-label class="font-weight-medium">Pipeline</v-label>
                    <p>Life Insurance</p>
                </v-col>
                <v-col cols="12" lg="4" md="6" sm="12">
                    <v-label class="font-weight-medium">Lead Status</v-label>
                    <p>Lead One</p>
                </v-col>
                <v-col cols="12" lg="4" md="6" sm="12">
                    <v-label class="font-weight-medium">Stage</v-label>
                    <p>Prospect Quote</p>
                </v-col>
                <v-col cols="12" lg="4" md="6" sm="12">
                    <v-label class="font-weight-medium">Temp Level</v-label>
                    <p>Cold</p>
                </v-col>
                <v-col cols="12" lg="4" md="6" sm="12">
                    <v-label class="font-weight-medium">Type</v-label>
                    <p>Individual</p>
                </v-col>
            </v-row>


            <v-row>

                <v-col cols="12" md="6" lg="4">
                    <div @click="followUpDate = true" v-if="!followUpDate">
                        <v-text-field type="text" label="Next Follow up" variant="outlined"
                            class="text-input"></v-text-field>

                    </div>
                    <div v-else>
                        <v-text-field type="date" label="Next Follow up" variant="outlined"
                            class="text-input"></v-text-field>
                    </div>
                </v-col>

                <v-col cols="12" md="6" lg="4">
                    <div @click="closingTarget = true" v-if="!closingTarget">
                        <v-text-field type="text" label="Est Closing Target" variant="outlined"
                            class="text-input"></v-text-field>

                    </div>
                    <div v-else>
                        <v-text-field type="date" label="Est Closing Target" variant="outlined"
                            class="text-input"></v-text-field>
                    </div>
                </v-col>


                <v-col cols="12" md="6" lg="4">
                    <v-autocomplete label="Service Type" :items="serviceType" color="primary" variant="outlined"
                        hide-details></v-autocomplete>
                </v-col>

                <v-col cols="12" md="6" lg="4">
                    <v-autocomplete label="Carrier" :items="carrier" color="primary" variant="outlined"
                        hide-details></v-autocomplete>
                </v-col>
                <v-col cols="12" md="6" lg="4">
                    <v-autocomplete label="Product" :items="product" color="primary" variant="outlined"
                        hide-details></v-autocomplete>
                </v-col>
                <v-col cols="12" md="6" lg="4">
                    <v-text-field type="text" label="Est Annual Premium" color="primary" class="text-input"
                        variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="4">
                    <v-text-field type="select" :items="agent2Split" label="Opportunity Income" color="primary"
                        variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="4">
                    <v-text-field type="text" label="Writing Agent" variant="outlined" class="text-input"></v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="4">
                    <v-autocomplete label="Writing Agent Split" :items="writingAgentSplit" color="primary"
                        variant="outlined" hide-details></v-autocomplete>
                </v-col>

                <v-col cols="12" md="6" lg="4">
                    <v-text-field type="text" label="Agent 2" color="primary" variant="outlined"
                        class="text-input"></v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="4">
                    <v-autocomplete label="Agent 2 Split" :items="agent2Split" color="primary" variant="outlined"
                        hide-details></v-autocomplete>``
                </v-col>
                <v-col cols="12" md="6" lg="4">
                    <v-autocomplete label="Exist Source of Opportunity" v-model="opportunitySourceVal"
                        :items="opportunitySources" color="primary" variant="outlined" hide-details></v-autocomplete>
                </v-col>

                <v-col cols="12" md="6" lg="4">
                    <v-text-field type="text" label="Reffered By" variant="outlined" class="text-input"></v-text-field>
                </v-col>

            </v-row>

        </div>

    </v-navigation-drawer>
</template>












