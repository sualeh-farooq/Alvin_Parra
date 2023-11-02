<script>
import { ref } from 'vue';
import KanbanListVue from '@/components/apps/kanban/KanbanList.vue';
import NotesCard from "@/components/shared/notesCard.vue";
import TaskCard from "@/components/shared/taskCard.vue";

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
            { text: 'Product', value: 'pipeline', sortable: true },
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
            editName: 'John Doe',
            editContact: 'John Smith',
            editPipeline: 'Life Insurance',
            editLeadStatus: 'Lead One',
            editStage: 'Prospect - Quote',
            editTempLevel: 'Cold',
          notesDialog: null ,
          taskDialog: null,
          selectedFile: null ,
          fav: true,
          menu: false,
          message: false,
          hints: true,
          editType: 'Individual',
            drawer: false,
            followUpDate: false,
            closingTarget: false, rejectedDialog,
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
            ],
            pipeline: [
                'Life Insurance',
                'AUM',
                'Medicare',
            ],
            leadStatus: [
                'Lead One',
                'Lead Two',
                'Lead Three',
            ],
            stage: [
                'Lead - Interested',
                'Prospect - Quote',
                'Prospect - Presentation',
                'Prospect - Review',
                'Client - Won',
                'Lost',
            ],
            level: [
                'Cold',
                'Hot'
            ],
            type: [
                'Individual',
                'Business'
            ],
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
          taskList: [
            {
              id: 1, createdDate: '10-05-2023', dueDate: '12-07-2023', editText: 'Edit' ,deleteText: 'Delete' ,  assignTo: 'John Doe', taskTitle: 'Task Title 01', taskDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quidem dolor vel nisi est mollitia excepturi debitis suscipit dicta. Voluptatibus saepe incidunt nihil dignissimos eveniet molestiae sit, magni tenetur ea.\n' +
                  '\n'
            },
            {
              id: 2, createdDate: '10-05-2023', dueDate: '12-07-2023', editText: 'Edit' ,deleteText: 'Delete' ,  assignTo: 'John Doe', taskTitle: 'Task Title 01', taskDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quidem dolor vel nisi est mollitia excepturi debitis suscipit dicta. Voluptatibus saepe incidunt nihil dignissimos eveniet molestiae sit, magni tenetur ea.\n' +
                  '\n'
            },
          ],
          desserts: [
            {
              name: 'Frozen Yogurt',
              calories: 159,
            },
            {
              name: 'Ice cream sandwich',
              calories: 237,
            },
            {
              name: 'Eclair',
              calories: 262,
            },
            {
              name: 'Cupcake',
              calories: 305,
            },
            {
              name: 'Gingerbread',
              calories: 356,
            },
            {
              name: 'Jelly bean',
              calories: 375,
            },
            {
              name: 'Lollipop',
              calories: 392,
            },
            {
              name: 'Honeycomb',
              calories: 408,
            },
            {
              name: 'Donut',
              calories: 452,
            },
            {
              name: 'KitKat',
              calories: 518,
            },
          ],
          sortByPipeline: ['AUM' , 'Annuity' , 'Life' , 'Medicare' , 'Health', 'Trust' , 'LTC/DI' , 'Supplement' , 'Group Plans','Other'],
          selectedPipeline: ['Annuity'],
          openDays: ['Highest to lowest' , 'Lowest to highest'],
          closingDate: ['Earliest to latest' , 'Latest to earliest'],
          statuses: ['All' , 'Cold', 'Warm', 'Hot'],
          agents: ['Laura' , 'Alvin' , 'John' , 'Henry'],
          defaultAgent: 'Laura',
        };
    },
    components: {
        KanbanListVue,
      NotesCard ,
      TaskCard
    },
  methods: {
    openFileInput() {
      // Trigger a click event on the hidden file input
      this.$refs.fileInput.click();
    },
    handleFileChange() {
      // Do something with the selected file
      console.log("Selected file:", this.selectedFile);
      // You can perform any additional logic here, such as uploading the file to a server.
    }
  }
};
</script>





<template>




  <v-row>
        <v-col col="12">
            <v-card variant="outlined" elevation="0" class="withbg">
                <v-card-item>
                    <div class="d-sm-flex align-center justify-space-between">
                        <h3 class="text-h3">Pipelines</h3>
                        <div class="d-flex  justify-end  w-100 ">

                          <RouterLink to="/admin/addPipeline" >
                            <v-btn color="primary" class="mx-1">Add Pipeline +</v-btn>

                          </RouterLink>

                                <v-btn  @click.stop="drawer = !drawer" color="primary" class="mx-1">
                                    Add Opportunity +
                                </v-btn>
                        </div>
                    </div>
                </v-card-item>
                <v-divider></v-divider>
                <v-card-text>
                    <v-row>
                        <v-col>
                          <div class="d-flex align-center w-100 justify-space-between" >
                            <div>
                              <v-tabs v-model="tab2" color="primary">
                                <v-tab value="11">
                                  <CardsIcon stroke-width="1.5" width="20" class="v-icon--start" /> Cards View
                                </v-tab>
                                <v-tab value="22">
                                  <ListIcon stroke-width="1.5" width="20" class="v-icon--start" /> List View
                                </v-tab>

                              </v-tabs>

                            </div>
                         <div style="justify-content:flex-end;" class="d-flex gap-2  w-100 " >
                           <div class="w-25" >
                             <v-text-field contact="text" variant="outlined" persistent-placeholder
                                           placeholder="Search Opportunity" v-model="searchValue" density="compact"
                                           hide-details prepend-inner-icon="mdi-magnify" />
                           </div>
                           <div class="w-25" >
                             <v-select label="Select Agent" :items="agents" color="primary" variant="outlined" hide-details density="compact" v-model="defaultAgent"></v-select>
                           </div>
                           <div class="w-25" >
                             <v-select label="Select Product" :items="sortByPipeline" color="primary" variant="outlined" hide-details density="compact" v-model="selectedPipeline"></v-select>
                           </div>

                           <div>
                             <div class="text-center">
                               <v-menu
                                   v-model="menu"
                                   :close-on-content-click="false"
                                   location="end"
                               >
                                 <template v-slot:activator="{ props }">
                                   <v-btn
                                       color="primary"
                                       v-bind="props"
                                   >
                                     <FilterIcon size="18" class="mx-1" />   Filters
                                   </v-btn>
                                 </template>

                                 <v-card min-width="400">

                                   <v-list >
                                     <v-list-item >
                                       <v-select class="mt-2"  label="Sort by days open" :items="openDays" color="primary" variant="outlined" hide-details density="compact" ></v-select>

                                     </v-list-item>
                                     <v-list-item >
                                       <v-select class="mt-2"  label="Sort by follow up and est closing Date" :items="closingDate" color="primary" variant="outlined" hide-details density="compact" ></v-select>

                                     </v-list-item>

                                     <v-list-item >
                                       <v-select class="mt-2"  label="Status" :items="statuses" color="primary" variant="outlined" hide-details density="compact" ></v-select>

                                     </v-list-item>
                                   </v-list>

                                   <div class=" mx-3 my-3 border d-flex gap-2" >
                                     <v-btn
                                         color="primary"
                                         class="w-50"
                                     >
                                       Apply Filters
                                     </v-btn>

                                     <v-btn
                                         color="primary"
                                         class="w-50"
                                     >
                                       Reset Filters
                                     </v-btn>

                                   </div>
                                 </v-card>
                               </v-menu>
                             </div>
                           </div>


                         </div>
                          </div>

                            <v-window v-model="tab2">
                                <v-window-item value="11">
                                    <KanbanListVue class="mt-2" />
                                </v-window-item>

                                <v-window-item value="22">

                                    <EasyDataTable class="mt-3" :headers="headers" :items="items" table-class-name="customize-table"
                                        :theme-color="themeColor" :search-field="searchField" :search-value="searchValue"
                                        :rows-per-page="5" v-model:items-selected="itemsSelected">
                                        <template #item-action="item">
                                            <div class="operation-wrapper">

                                              <RouterLink to="/admin/opportunityView" >

                                                <v-btn  icon color="primary" variant="text">
                                                    <EyeIcon size="20" />
                                                </v-btn>
                                              </RouterLink>

                                                <v-btn  icon color="error" variant="text">
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
    <v-navigation-drawer color="surface" :width="750" location="right" v-model="drawer" temporary>


      <v-row>
        <v-col col="12" >

            <div class="d-flex align-center  border px-4 py-2 justify-space-between ">
              <h3>Quick Add Opportunity</h3>
    <div>
      <button @click="drawer = !drawer" > <XIcon /></button>
    </div>
          </div>
          <v-card  variant="outlined" style="border-radius: none; background: transparent; border: none;"  elevation="0" class="  ">

            <v-card-text>

                <v-row>
                  <v-col cols="12" md="4">
                    <v-autocomplete label="Select Contact" v-model="statusValue" :items="leadStatus"
                                    color="primary" variant="outlined" hide-details></v-autocomplete>

                  </v-col>

                  <v-col cols="12" md="4">
                    <div @click="opportunityDate = true" v-if="!opportunityDate">
                      <v-text-field type="text" label="Opportunity Created Date" variant="outlined"
                                   ></v-text-field>

                    </div>
                    <div v-else>
                      <v-text-field type="date" label="Opportunity Created Date" variant="outlined"
                                   ></v-text-field>
                    </div>
                  </v-col>

                  <v-col cols="12" md="4">
                    <v-text-field type="text" label="Opportunity Name"
                                  placeholder="<lastname> <pipeline> <date>" variant="outlined"
                                  ></v-text-field>
                  </v-col>
                </v-row>

                <v-row class="my-1" >


                  <v-col cols="12" md="6" lg="4">
                    <v-autocomplete label="Select Pipeline Stage" v-model="pipelineStage"
                                    :items="pipelineStages" color="primary" variant="outlined"
                                    hide-details></v-autocomplete>

                  </v-col>

                  <v-col cols="12" md="6" lg="4">
                    <v-autocomplete label="Lead Status" v-model="statusValue" :items="leadStatus"
                                    color="primary" variant="outlined" hide-details></v-autocomplete>
                  </v-col>

                  <v-col cols="12" md="6" lg="4">
                    <div @click="followUpDate = true" v-if="!followUpDate">
                      <v-text-field type="text" label="Next Follow up" variant="outlined"
                                    ></v-text-field>

                    </div>
                    <div v-else>
                      <v-text-field type="date" label="Next Follow up" variant="outlined"
                                    ></v-text-field>
                    </div>
                  </v-col>

                  <v-col cols="12" md="6" lg="4">
                    <div @click="closingTarget = true" v-if="!closingTarget">
                      <v-text-field type="text" label="Est Closing Target" variant="outlined"
                                   ></v-text-field>

                    </div>
                    <div v-else>
                      <v-text-field type="date" label="Est Closing Target" variant="outlined"
                                   ></v-text-field>
                    </div>
                  </v-col>


                  <v-col cols="12" md="6" lg="4">
                    <v-autocomplete label="Tempera" v-model="tempVal"
                                    :items="Temprature" color="primary" variant="outlined"
                                    hide-details></v-autocomplete>

                  </v-col>



                  <v-col cols="12" md="6" lg="4">
                    <v-text-field type="text" label="Reffered By" variant="outlined"
                                  ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" lg="4">
                    <v-autocomplete label="Existing Source of Opportunity" v-model="opportunitySourceVal"
                                    :items="opportunitySources"
                                    color="primary" variant="outlined" hide-details></v-autocomplete>
                  </v-col>

                </v-row>

                <v-divider></v-divider>

                <v-row class="my-1" >

                  <v-col cols="12" md="6" lg="4">
                    <v-text-field type="text" label="Writing Agent" variant="outlined"
                                  ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="6" lg="4">
                    <v-autocomplete label="Writing Agent Split"
                                    :items="writingAgentSplit"
                                    color="primary" variant="outlined" hide-details></v-autocomplete>
                  </v-col>

                  <v-col cols="12" md="6" lg="4">
                    <v-text-field type="text" label="Agent 2" color="primary" variant="outlined"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" lg="4">
                    <v-autocomplete label="Agent 2 Split"
                                    :items="agent2Split"
                                    color="primary" variant="outlined" hide-details></v-autocomplete>
                  </v-col>
                  <v-col cols="12" md="6" lg="4">
                    <v-autocomplete label="Service Type"
                                    :items="serviceType"
                                    color="primary" variant="outlined" hide-details></v-autocomplete>
                  </v-col>
                  <v-col cols="12" md="6" lg="4">
                    <v-autocomplete label="Carrier"
                                    :items="carrier"
                                    color="primary" variant="outlined" hide-details></v-autocomplete>
                  </v-col>
                  <v-col cols="12" md="6" lg="4">
                    <v-autocomplete label="Product"
                                    :items="product"
                                    color="primary" variant="outlined" hide-details></v-autocomplete>
                  </v-col>
                  <v-col cols="12" md="6" lg="4">
                    <v-text-field type="text" label="Est Annual Premium" color="primary" variant="outlined"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" lg="4">
                    <v-text-field type="select" :items="agent2Split" label="Opportunity Income" color="primary" variant="outlined"></v-text-field>
                  </v-col>

                  <v-col cols="12" md="12">



                    <v-btn class="mx-1" color="primary">Save Opportunity
                    </v-btn>

                  </v-col>

                </v-row>

            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

    </v-navigation-drawer>
</template>












