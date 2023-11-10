<script>
import {ref} from 'vue';
import KanbanListVue from '@/components/apps/kanban/KanbanList.vue';
import NotesCard from "@/components/shared/notesCard.vue";
import TaskCard from "@/components/shared/taskCard.vue";
import Files from "@/components/shared/files.vue";

export default {
  data() {
    const page = ref({title: 'Tabs'});
    const tab = ref(null);
    const tab2 = ref(null);
    const tab3 = ref(null);
    const tab4 = ref(null);
    const tab5 = ref(null);
    const fileDialog = ref(null)
    const tab6 = ref(null);
    const tab7 = ref(null);
    const oppView = ref(null)
    const searchField = ref(['oppName', 'contact', 'type', 'pipeline', 'status', 'stage', 'estIncome', 'wrtAgentSplit']);
    const searchValue = ref();


    const themeColor = ref('rgb(var(--v-theme-primary))');
    const pendingDialog = ref(false);
    const acceptedDialog = ref(false);
    const rejectedDialog = ref(false);


    const headers = [
      {text: 'Opportunity ', value: 'oppName', sortable: true},
      {text: 'Full Name', value: 'contact', sortable: true},
      {text: 'Agent', value: 'agent', sortable: true},
      {text: 'Product', value: 'pipeline', sortable: true},
      {text: 'Carrier', value: 'carrier', sortable: true},
      {text: 'Policy #', value: 'policy', sortable: true},
      {text: 'Days Open', value: 'daysOpen', sortable: true},
      {text: 'Status', value: 'status', sortable: true},
      {text: 'Stage', value: 'stage', sortable: true},
      {text: 'Service', value: 'service', sortable: true},
      {text: 'Temp', value: 'temp', sortable: true},
      // {text: 'Action', value: 'action'}
    ];
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
        agent: 'Laura' ,
        carrier: 'Carrier One' ,
        policy: '1792-192-2KS',
        daysOpen: 2,
        service: 'Service One' ,
        temp: 'Hot'
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
        agent: 'John' ,
        carrier: 'Carrier Two' ,
        policy: '1029-293-2KS',
        daysOpen: 8,
        service: 'Service Two' ,
        temp: 'Cold'
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
        agent: 'Monte' ,
        carrier: 'Carrier Three' ,
        policy: '1039-402-2KS',
        daysOpen: 4,
        service: 'Service Three' ,
        temp: 'Warm'
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
        agent: 'Micheal' ,
        carrier: 'Carrier Four' ,
        policy: '1003-429-2KS',
        daysOpen: 8,
        service: 'Service Four' ,
        temp: 'Warm'
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
        agent: 'Jordan' ,
        carrier: 'Carrier Two' ,
        policy: '4029-329-2KS',
        daysOpen: 7,
        service: 'Service Five' ,
        temp: 'Cold'
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
        agent: 'Corina' ,
        carrier: 'Carrier One' ,
        policy: '3049-429-2KS',
        daysOpen: 4,
        service: 'Service Five' ,
        temp: 'Cold'
      },
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
        agent: 'Laura' ,
        carrier: 'Carrier One' ,
        policy: '1792-192-2KS',
        daysOpen: 2,
        service: 'Service One' ,
        temp: 'Hot'
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
        agent: 'John' ,
        carrier: 'Carrier Two' ,
        policy: '1029-293-2KS',
        daysOpen: 8,
        service: 'Service Two' ,
        temp: 'Cold'
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
        agent: 'Monte' ,
        carrier: 'Carrier Three' ,
        policy: '1039-402-2KS',
        daysOpen: 4,
        service: 'Service Three' ,
        temp: 'Warm'
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
        agent: 'Micheal' ,
        carrier: 'Carrier Four' ,
        policy: '1003-429-2KS',
        daysOpen: 8,
        service: 'Service Four' ,
        temp: 'Warm'
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
        agent: 'Jordan' ,
        carrier: 'Carrier Two' ,
        policy: '4029-329-2KS',
        daysOpen: 7,
        service: 'Service Five' ,
        temp: 'Cold'
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
        agent: 'Corina' ,
        carrier: 'Carrier One' ,
        policy: '3049-429-2KS',
        daysOpen: 4,
        service: 'Service Five' ,
        temp: 'Cold'
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
      oppView,
      searchValue,
      leadsCheck: false,
      prospectCheck: false,
      clientCheck: false,
      lostCheck: false,
      allCheck: false,
      fileDialog,
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
      notesDialog: null,
      taskDialog: null,
      selectedFile: null,
      accTypesVal: 'Individual',
      accTypes: ['Individual', 'Business'],
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
      ],
      taskList: [
        {
          id: 1,
          createdDate: '10-05-2023',
          color: 'warning',
          status: 'In Process',
          dueDate: '12-07-2023',
          assignTo: 'John Doe',
          taskTitle: 'Task Title 01',
          taskDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quidem dolor vel nisi est mollitia excepturi debitis suscipit dicta. Voluptatibus saepe incidunt nihil dignissimos eveniet molestiae sit, magni tenetur ea.\n' +
              '\n'
        },
        {
          id: 2,
          createdDate: '10-05-2023',
          color: 'warning',
          status: 'In Process',
          dueDate: '12-07-2023',
          assignTo: 'John Doe',
          taskTitle: 'Task Title 01',
          taskDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quidem dolor vel nisi est mollitia excepturi debitis suscipit dicta. Voluptatibus saepe incidunt nihil dignissimos eveniet molestiae sit, magni tenetur ea.\n' +
              '\n'
        },
      ],
      sortByPipeline: ['AUM', 'Annuity', 'Life', 'Medicare', 'Health', 'Trust', 'LTC/DI', 'Supplement', 'Group Plans', 'Other'],
      selectedPipeline: ['Annuity'],
      openDays: ['Highest to lowest', 'Lowest to highest'],
      closingDate: ['Earliest to latest', 'Latest to earliest'],
      temp: ['All', 'Cold', 'Warm', 'Hot'],
      tempVal: 'Cold',
      statuses: ['Lead', 'Prospect' , 'Client', 'Won'],
      statusVal: 'Client',
      agents: ['Laura', 'Alvin', 'John', 'Henry'],
      defaultAgent: 'Laura',
      addOpp: false,
      opportunityDate: false,
      addContactDrawer: false,
      pipelines: ['Pipeline 1' , 'Pipeline 2' , 'Pipeline 3'],
      pipelineVal: 'Pipeline 1',
      contactNames: ['Contact One' , 'Contact Two' , 'Contact Three'],
      pipelineStages: ['Pipeline Stage 1' , 'Pipeline Stage 2' , 'Pipeline Stage 3' , 'Pipeline Stage 4'],
      tempratureItems: ['Hot' , 'Cold' , 'Warm']
    }
  },
  components: {
    Files,
    NotesCard,
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
    },
    toggleDrawer() {
      this.drawer = !this.drawer
    },
    newContact(){
      this.addContactDrawer = !this.addContactDrawer
      this.addOpp = !this.addOpp
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
            <h3 class="text-h3">Opportunities</h3>
            <div class="d-flex  justify-end  w-100 ">


              <div style="justify-content:flex-end;" class="d-flex gap-2  w-100 ">
                <div class="w-25">
                  <v-text-field contact="text" variant="outlined" persistent-placeholder
                                placeholder="Search Opportunity or Account" v-model="searchValue" density="compact"
                                hide-details prepend-inner-icon="mdi-magnify"/>
                </div>
              </div>
                <v-btn @click="addOpp = !addOpp" color="primary" class="mx-1">Add Opportunity +</v-btn>

            </div>
          </div>
        </v-card-item>
        <v-divider></v-divider>

        <v-card-text>
          <v-row>

            <v-col cols="12" xl="2" lg="3"  md="6" >
              <v-select label="Temp" :items="temp" v-model="tempVal" color="primary" variant="outlined"
                        hide-details density="compact"></v-select>
            </v-col>
            <v-col cols="12" xl="2" lg="3" md="6" >
              <v-select class="" label="Status" :items="statuses"  v-model="statusVal" color="primary"
                        variant="outlined" hide-details density="compact"></v-select>
            </v-col>


          </v-row>

          <v-row>
            <v-col>



                  <EasyDataTable class="mt-3" :headers="headers" :items="items" table-class-name="customize-table"
                                 :theme-color="themeColor" :search-field="searchField" :search-value="searchValue"
                                 :rows-per-page="5" v-model:items-selected="itemsSelected">


                    <template #item-oppName="item">
                      <div class="operation-wrapper">
                        <p @click="drawer = !drawer"
                           class="text-primary cursor-pointer text-decoration-none font-weight-bold ">
                          <span class="text-primary ">    {{ item.oppName }}</span>
                        </p>

                      </div>
                    </template>


                    <template #item-action="item">
                      <div class="operation-wrapper">
                        <RouterLink to="/admin/opportunityView">
                          <v-btn icon color="primary" variant="text">
                            <EyeIcon size="20"/>
                          </v-btn>
                        </RouterLink>

                        <v-btn icon color="error" variant="text">
                          <TrashIcon size="20"/>
                        </v-btn>
                      </div>
                    </template>
                  </EasyDataTable>

            </v-col>
          </v-row>

        </v-card-text>
      </v-card>
    </v-col>
  </v-row>


  <!--- Opportunity View Drawer on Action Button Click in Table -->
  <v-navigation-drawer color="surface" :width="850" location="right" v-model="drawer" temporary>


    <v-row>
      <v-col col="12">

        <div class="d-flex align-center  border px-4 py-2 justify-space-between ">
          <h3>Opportunity Details</h3>
          <div>
            <button @click="drawer = !drawer">
              <XIcon/>
            </button>
          </div>
        </div>
        <v-card variant="outlined" style="border-radius: none; background: transparent; border: none;" elevation="0">

          <v-card-text>
            <v-row>
              <v-col cols="10">
                <v-row>
                  <v-col cols="12" lg="3" md="6" sm="12">
                    <v-label class="font-weight-medium">Name
                    </v-label>
                    <p>John Doe</p>
                  </v-col>
                  <v-col cols="12" lg="3" md="6" sm="12">
                    <v-label class="font-weight-medium">Contact
                    </v-label>
                    <p>John Smith</p>
                  </v-col>
                  <v-col cols="12" lg="3" md="6" sm="12">
                    <v-label class="font-weight-medium">Pipeline</v-label>
                    <p>Life Insurance</p>
                  </v-col>
                  <v-col cols="12" lg="3" md="6" sm="12">
                    <v-label class="font-weight-medium">Lead Status</v-label>
                    <p>Lead One</p>
                  </v-col>
                  <v-col cols="12" lg="3" md="6" sm="12">
                    <v-label class="font-weight-medium">Stage</v-label>
                    <p>Prospect Quote</p>
                  </v-col>
                  <v-col cols="12" lg="3" md="6" sm="12">
                    <v-label class="font-weight-medium">Temp Level</v-label>
                    <p>Cold</p>
                  </v-col>
                  <v-col cols="12" lg="3" md="6" sm="12">
                    <v-label class="font-weight-medium">Type</v-label>
                    <p>Individual</p>
                  </v-col>
                </v-row>
              </v-col>

              <v-col cols="2">
                <v-dialog width="800" v-model="rejectedDialog">
                  <template v-slot:activator="{ props }">
                    <!--                      <v-btn color="primary" v-bind="props">-->
                    <EditIcon color="primary" class="cursor-pointer text-primary" v-bind="props" size="25"/>
                    <!--                      </v-btn>-->
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
                          <v-col lg="4" md="6" sm="12" cols="12">
                            <v-text-field v-model="editName" type="text" label="Name" variant="outlined"
                                          class="text-input"></v-text-field>
                          </v-col>
                          <v-col md="6" lg="4" sm="12" cols="12">
                            <v-text-field v-model="editContact" type="text" label="Contact"
                                          variant="outlined" class="text-input"></v-text-field>
                          </v-col>

                          <v-col md="6" lg="4" sm="12" cols="12">
                            <v-autocomplete label="Pipeline" v-model="editPipeline" :items="pipeline"
                                            color="primary" variant="outlined" hide-details></v-autocomplete>
                          </v-col>

                          <v-col md="6" sm="12" lg="4" cols="12">
                            <v-autocomplete label="Lead Status" :items="leadStatus" v-model="editLeadStatus"
                                            color="primary" variant="outlined" hide-details></v-autocomplete>
                          </v-col>

                          <v-col md="6" sm="12" lg="4" cols="12">
                            <v-autocomplete label="Stage" :items="stage" v-model="editStage" color="primary"
                                            variant="outlined" hide-details></v-autocomplete>
                          </v-col>

                          <v-col md="6" sm="12" lg="4" cols="12">
                            <v-autocomplete label="Level" :items="level" v-model="editTempLevel"
                                            color="primary" variant="outlined" hide-details></v-autocomplete>
                          </v-col>

                          <v-col md="6" sm="12" lg="4" cols="12">
                            <v-autocomplete label="Type" :items="type" v-model="editType" color="primary"
                                            variant="outlined" hide-details></v-autocomplete>
                          </v-col>


                        </v-row>

                      </v-container>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="error" text @click="rejectedDialog = false"> Close
                      </v-btn>
                      <v-btn color="success" text @click="pendingDialog = false"> Update</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <TrashIcon size="25" class="cursor-pointer text-error mx-2"/>
              </v-col>
            </v-row>


            <v-row class="mt-2">
              <v-col cols="12">
                <div class="d-flex justify-space-between align-center">
                  <v-tabs v-model="oppView" color="primary">
                    <v-tab value="details">
                      <CardsIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                      Details
                    </v-tab>
                    <v-tab value="notes">
                      <NoteIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                      Notes
                    </v-tab>
                    <v-tab value="tasks">
                      <NotesIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                      Tasks
                    </v-tab>
                    <v-tab value="files">
                      <FileIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                      Files
                    </v-tab>

                  </v-tabs>
                  <div>
                    <v-dialog width="600" v-model="notesDialog">
                      <template v-slot:activator="{ props }">
                        <v-btn v-if="oppView === 'notes' " v-bind="props" color="primary" class="mx-1">Add Note +
                        </v-btn>
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
                        <v-btn v-if="oppView === 'tasks'" v-bind="props" color="primary" class="mx-1">Add Task +</v-btn>
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
                        <v-btn v-if="oppView === 'files'" v-bind="props" color="primary" class="mx-1">Add File +</v-btn>
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

              </v-col>
            </v-row>


            <v-window v-model="oppView">
              <v-window-item value="details">
                <v-row class="mt-2">

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
                    <v-text-field type="text" label="Est Annual Premium" color="primary"
                                  variant="outlined"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" lg="4">
                    <v-text-field type="select" :items="agent2Split" label="Opportunity Income" color="primary"
                                  variant="outlined"></v-text-field>
                  </v-col>



                </v-row>


                <v-divider class="my-3"></v-divider>

                <v-row>

                  <v-col cols="12" md="6" lg="4">
                    <v-text-field type="text" label="Writing Agent" variant="outlined"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="6" lg="4">
                    <v-text-field type="number" label="Split"
                                  :items="writingAgentSplit" suffix="%"
                                  color="primary" variant="outlined" hide-details></v-text-field>
                  </v-col>

                  <v-col cols="12" md="6" lg="4">
                    <v-text-field type="text" label="Agent 2" color="primary" variant="outlined"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" lg="4">
                    <v-text-field label="Split 2 " type="number" suffix="%"

                                  :items="agent2Split"
                                  color="primary" variant="outlined" hide-details></v-text-field>
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
                  <v-col class="mt-4"  cols="12" >
                    <div class="d-flex gap-2" >

                      <v-btn  color="primary">Update Opportunity Details
                      </v-btn>
                    </div>
                  </v-col>

                  <v-col cols="12" md="12">


                    <!--                    <v-btn class="mx-1" color="primary">Save Opportunity-->
                    <!--                    </v-btn>-->

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
            </v-window>


          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

  </v-navigation-drawer>





  <!--- Opportunity View Drawer on Action Button Click in Table -->
  <v-navigation-drawer color="surface" :width="850" location="right" v-model="addOpp" temporary>


    <v-row>
      <v-col col="12">

        <div class="d-flex align-center  border px-4 py-2 justify-space-between ">
          <h2>Quick Add Opportunity</h2>
          <div>
            <button @click="addOpp = !addOpp">
              <XIcon/>
            </button>
          </div>
        </div>
        <v-card variant="outlined" style="border-radius: none; background: transparent; border: none;" elevation="0">

          <v-card-text>
            <Form>

              <v-row>
                <v-col cols="12" md="6">
                  <v-autocomplete label="Contact Name"  :items="contactNames"
                                  color="primary" variant="outlined" hide-details></v-autocomplete>

                </v-col>
                <v-col cols="12" md="6">
                  <div class="mt-6">
                                    <span>Contact not found ? <span class="cursor-pointer font-weight-medium text-decoration-underline text-primary" @click="newContact"  > Create New Contact
                                        </span>
                                    </span>

                  </div>

                </v-col>

                <v-col cols="12" md="6" >
                  <v-autocomplete label="Select Pipeline "
                                  :items="pipelines" color="primary" variant="outlined"
                                  hide-details></v-autocomplete>
                </v-col>
                <v-col cols="12" md="6">
                  <div @click="opportunityDate = true" v-if="!opportunityDate">
                    <v-text-field type="text" label="Opportunity Created Date" variant="outlined"
                                  ></v-text-field>

                  </div>
                  <div v-else>
                    <v-text-field type="date" label="Opportunity Created Date" variant="outlined"
                                  ></v-text-field>
                  </div>
                </v-col>

                <v-col cols="12" >
                 <div class="d-flex gap-3 align-center " >

                   <v-btn color="primary" >Create Opportunity Name <ArrowRightIcon size="20" />  </v-btn>
                   <v-text-field type="text" label="Opportunity Name"
                                 placeholder="<lastname> <pipeline> <date>" variant="outlined"
                   ></v-text-field>
                 </div>
                </v-col>
              </v-row>
              <v-divider class="my-4" ></v-divider>

              <v-row>
<!--                <v-col cols="12">-->
<!--                  <div>-->
<!--                    <h2 class="text-h3 ">Pipeline Details</h2>-->
<!--                  </div>-->
<!--                </v-col>-->

                <v-col cols="12" md="6" lg="6">
                  <v-autocomplete label="Select Pipeline Stage"
                                  :items="pipelineStages" color="primary" variant="outlined"
                                  hide-details></v-autocomplete>

                </v-col>

                <v-col cols="12" md="6" lg="6">
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
                  <v-autocomplete label="Temperature"
                                  :items="tempratureItems" color="primary" variant="outlined"
                                  hide-details></v-autocomplete>

                </v-col>

                <v-col cols="12" md="6" lg="6">
                  <v-autocomplete label="Existing Source of Opportunity" v-model="opportunitySourceVal"
                                  :items="opportunitySources"
                                  color="primary" variant="outlined" hide-details></v-autocomplete>
                </v-col>

                <v-col cols="12" md="6" lg="6">
                  <v-text-field type="text" label="Reffered By" variant="outlined"
                                ></v-text-field>
                </v-col>


              </v-row>

              <v-divider class="my-4" ></v-divider>

              <v-row>
<!--                <v-col cols="12">-->
<!--                  <div class="">-->
<!--                    <h2 class="text-h3 ">Agent Details</h2>-->
<!--                  </div>-->
<!--                </v-col>-->
                <v-col cols="12" md="6" lg="3">
                  <v-text-field type="text" label="Writing Agent" variant="outlined"
                                ></v-text-field>
                </v-col>

                <v-col cols="12" md="6" lg="3">
                  <v-text-field label=" Split"
                                  color="primary" suffix="%"   variant="outlined" type="number"   hide-details></v-text-field>
                </v-col>

                <v-col cols="12" md="6" lg="3">
                  <v-text-field type="text" label="Agent 2" color="primary" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="3">
                  <v-text-field type="number" suffix="%" label="Split 2"
                                  :items="agent2Split"
                                  color="primary" variant="outlined" hide-details></v-text-field>
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
                <v-col cols="12" md="6" lg="6">
                  <v-text-field type="text" label="Est Annual Premium" color="primary" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="6">
                  <v-text-field type="select" :items="agent2Split" label="Opportunity Income" color="primary" variant="outlined"></v-text-field>
                </v-col>

                <v-col cols="12" md="6">



                  <v-btn class="mx-1" color="primary">Save + Add Opportunity
                  </v-btn>

                </v-col>

              </v-row>
            </Form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-navigation-drawer>
  <v-navigation-drawer color="surface" :width="800"  location="right" v-model="addContactDrawer" temporary >

    <v-row>
      <v-col col="12">

        <div class="d-flex align-center  border px-4 py-2 justify-space-between ">
          <h2>Quick Add Contact</h2>
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












