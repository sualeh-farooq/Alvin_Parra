<script>
import {ref} from 'vue';
import KanbanListVue from '@/components/apps/kanban/KanbanList.vue';
import NotesCard from "@/components/shared/notesCard.vue";
import TaskCard from "@/components/shared/taskCard.vue";

export default {
  data() {
    const page = ref({title: 'Tabs'});
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
      {text: 'Opportunity Name', value: 'oppName', sortable: true},
      {text: 'Contact', value: 'contact', sortable: true},
      {text: 'Contact Type', value: 'type', sortable: true},
      {text: 'Pipeline', value: 'pipeline', sortable: true},
      {text: 'Status', value: 'status', sortable: true},
      {text: 'Stage', value: 'stage', sortable: true},
      {text: 'Est Income', value: 'estIncome', sortable: true},
      {text: 'Est Closing Date', value: 'closingDate', sortable: true},
      {text: 'Writing Agent Split', value: 'wrtAgentSplit', sortable: true},
      {text: 'Action', value: 'action'}
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
      notesDialog: null,
      taskDialog: null,
      selectedFile: null,

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
          editText: 'Edit',
          deleteText: 'Delete',
          note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quidem dolor vel nisi est mollitia excepturi debitis suscipit dicta. Voluptatibus saepe incidunt nihil dignissimos eveniet molestiae sit, magni tenetur ea.\n' +
              '\n'
        },
        {
          id: 2,
          date: '15-05-2023',
          time: '05:35pm',
          editText: 'Edit',
          deleteText: 'Delete',
          note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quidem dolor vel nisi est mollitia excepturi debitis suscipit dicta. Voluptatibus saepe incidunt nihil dignissimos eveniet molestiae sit, magni tenetur ea.\n' +
              '\n'
        }
      ],
      taskList: [
        {
          id: 1,
          createdDate: '10-05-2023',
          dueDate: '12-07-2023',
          editText: 'Edit',
          deleteText: 'Delete',
          assignTo: 'John Doe',
          taskTitle: 'Task Title 01',
          taskDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quidem dolor vel nisi est mollitia excepturi debitis suscipit dicta. Voluptatibus saepe incidunt nihil dignissimos eveniet molestiae sit, magni tenetur ea.\n' +
              '\n'
        },
        {
          id: 2,
          createdDate: '10-05-2023',
          dueDate: '12-07-2023',
          editText: 'Edit',
          deleteText: 'Delete',
          assignTo: 'John Doe',
          taskTitle: 'Task Title 01',
          taskDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quidem dolor vel nisi est mollitia excepturi debitis suscipit dicta. Voluptatibus saepe incidunt nihil dignissimos eveniet molestiae sit, magni tenetur ea.\n' +
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
      sortByPipeline: ['AUM', 'Annuity', 'Life', 'Medicare', 'Health', 'Trust', 'LTC/DI', 'Supplement', 'Group Plans', 'Other'],
      selectedPipeline: ['Annuity']
    };
  },
  components: {
    KanbanListVue,
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
    goBack(){
      window.history.back(-1)
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
            <h3 class="text-h3">Opportunity View</h3>
            <div>

              <v-dialog width="800" v-model="rejectedDialog">
                <template v-slot:activator="{ props }">
                  <v-btn  class="mx-1" @click="goBack" color="primary" ><ArrowNarrowLeftIcon /> Go Back </v-btn>

                  <v-btn v-if="tab==='details'" color="primary" v-bind="props">
                    <EditIcon size="20"/>
                    Edit Details
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
                        <v-col cols="12" md="6" lg="4">
                          <v-text-field v-model="editName" type="text" label="Name" variant="outlined"
                                        class="text-input"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6" lg="4">
                          <v-text-field v-model="editContact" type="text" label="Contact"
                                        variant="outlined" class="text-input"></v-text-field>
                        </v-col>

                        <v-col cols="12" md="6" lg="4">
                          <v-autocomplete label="Pipeline" v-model="editPipeline" :items="pipeline"
                                          color="primary" variant="outlined" hide-details></v-autocomplete>
                        </v-col>

                        <v-col cols="12" md="6" lg="4">
                          <v-autocomplete label="Lead Status" :items="leadStatus" v-model="editLeadStatus"
                                          color="primary" variant="outlined" hide-details></v-autocomplete>
                        </v-col>

                        <v-col cols="12" md="6" lg="4">
                          <v-autocomplete label="Stage" :items="stage" v-model="editStage" color="primary"
                                          variant="outlined" hide-details></v-autocomplete>
                        </v-col>

                        <v-col cols="12" md="6" lg="4">
                          <v-autocomplete label="Level" :items="level" v-model="editTempLevel"
                                          color="primary" variant="outlined" hide-details></v-autocomplete>
                        </v-col>

                        <v-col cols="12" md="6" lg="4">
                          <v-autocomplete label="Type" :items="type" v-model="editType" color="primary"
                                          variant="outlined" hide-details></v-autocomplete>
                        </v-col>


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
                          <v-autocomplete label="Service Type" :items="serviceType" color="primary"
                                          variant="outlined"
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
                          <v-text-field type="select" :items="agent2Split" label="Opportunity Income"
                                        color="primary"
                                        variant="outlined"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6" lg="4">
                          <v-text-field type="text" label="Writing Agent" variant="outlined"
                                        class="text-input"></v-text-field>
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
                          <v-autocomplete label="Agent 2 Split" :items="agent2Split" color="primary"
                                          variant="outlined"
                                          hide-details></v-autocomplete>
                        </v-col>
                        <v-col cols="12" md="6" lg="4">
                          <v-autocomplete label="Exist Source of Opportunity" v-model="opportunitySourceVal"
                                          :items="opportunitySources" color="primary" variant="outlined"
                                          hide-details></v-autocomplete>
                        </v-col>

                        <v-col cols="12" md="6" lg="4">
                          <v-text-field type="text" label="Reffered By" variant="outlined"
                                        class="text-input"></v-text-field>
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





              <v-dialog width="800" v-model="notesDialog">
                <template v-slot:activator="{ props }">
                  <v-btn v-if="tab === 'notes'" v-bind="props" color="primary" class="mx-1">Add Note +</v-btn>
                </template>
                <v-card class="overflow-auto w-100">
                  <div   class="d-flex border w-100">
                    <v-card-title class="pa-5 border w-100 d-flex align-center justify-space-between">
                      Add Note
                    </v-card-title>

                  </div>
                  <v-card-text>
                    <v-container>
                      <v-row>

                        <v-col cols="12">
                          <v-textarea filled auto-grow label="Notes Description" rows="4" row-height="20" color="primary"
                                      variant="outlined"></v-textarea>
                        </v-col>
                        <v-col cols="12" >
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
                    <v-btn color="success" text @click="notesDialog = false"> Save </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>



              <v-dialog width="800" v-model="taskDialog">
                <template v-slot:activator="{ props }">
                  <v-btn v-if="tab === 'tasks'" v-bind="props" color="primary" class="mx-1">Add Task +</v-btn>
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
                                        class="mb-3"></v-text-field>
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
                    <v-btn color="success" text @click="taskDialog = false"> Save </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>



            </div>
          </div>
        </v-card-item>
        <v-divider></v-divider>
        <v-card-text>

          <v-row>
            <v-col>
              <div style="align-items:center; justify-content: space-between;" class="d-flex  ">

                <div>
                  <v-tabs class="mb-4" v-model="tab" color="primary">
                    <v-tab value="details">
                      <HourglassIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                      Details
                    </v-tab>
                    <v-tab value="notes">
                      <SquareCheckIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                      Notes
                    </v-tab>
                    <v-tab value="tasks">
                      <SquareXIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                      Tasks
                    </v-tab>
                    <v-tab value="files">
                      <SquareXIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                      Files
                    </v-tab>
                  </v-tabs>
                </div>
                <div>


                </div>
              </div>


              <v-window v-model="tab">
                <v-window-item value="details">
                  <v-row class="mt-3">
                    <v-col cols="12" lg="3" md="4" sm="12">
                      <v-label class="font-weight-medium">Name
                      </v-label>
                      <p>John Doe</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="4" sm="12">
                      <v-label class="font-weight-medium">Contact
                      </v-label>
                      <p>John Smith</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="4" sm="12">
                      <v-label class="font-weight-medium">Pipeline</v-label>
                      <p>Life Insurance</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="4" sm="12">
                      <v-label class="font-weight-medium">Lead Status</v-label>
                      <p>Lead One</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="4" sm="12">
                      <v-label class="font-weight-medium">Stage</v-label>
                      <p>Prospect Quote</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="4" sm="12">
                      <v-label class="font-weight-medium">Temp Level</v-label>
                      <p>Cold</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="4" sm="12">
                      <v-label class="font-weight-medium">Type</v-label>
                      <p>Individual</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="4" sm="12">
                      <v-label class="font-weight-medium">Next Follow Up</v-label>
                      <p>10-02-2024</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="4" sm="12">
                      <v-label class="font-weight-medium">Est Closing Target</v-label>
                      <p>16-12-2023</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="4" sm="12">
                      <v-label class="font-weight-medium">Est Closing Target</v-label>
                      <p>16-12-2023</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="4" sm="12">
                      <v-label class="font-weight-medium">Service Type</v-label>
                      <p>Service One</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="4" sm="12">
                      <v-label class="font-weight-medium">Carrier</v-label>
                      <p>Carrier One</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="4" sm="12">
                      <v-label class="font-weight-medium">Product</v-label>
                      <p>Medicare</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="4" sm="12">
                      <v-label class="font-weight-medium">Est Annual Premium</v-label>
                      <p>$500</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="4" sm="12">
                      <v-label class="font-weight-medium">Opportunity Income</v-label>
                      <p>$5300</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="4" sm="12">
                      <v-label class="font-weight-medium">Writng Agent</v-label>
                      <p>Laura Clerk</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="4" sm="12">
                      <v-label class="font-weight-medium">Writing Agent Split</v-label>
                      <p>100%</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="4" sm="12">
                      <v-label class="font-weight-medium"> Agent 2</v-label>
                      <p>Laura Clerk</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="4" sm="12">
                      <v-label class="font-weight-medium"> Agent 2 Split</v-label>
                      <p>90%</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="4" sm="12">
                      <v-label class="font-weight-medium"> Existing Source of Opportunity</v-label>
                      <p>Social</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="4" sm="12">
                      <v-label class="font-weight-medium"> Reffered By</v-label>
                      <p>John Doe</p>
                    </v-col>
                  </v-row>

                </v-window-item>
                <v-window-item value="notes" >
                  <v-row class="mt-1">
                    <v-col v-for="item in notesList" class="p-0" :key="item.id" cols="12 ">
                      <NotesCard :editText="item.editText"  :deleteText="item.deleteText" :time="item.time" :edit-note="editNote" :date="item.date"  :note-description="item.note" />
                    </v-col>
                  </v-row>
                </v-window-item>

                <v-window-item value="files" >
                  <v-row>
                    <v-col cols="12" >
                      <div >

                        <p class="text-center" >No Files Uploaded Yet</p>
                      </div>

                    </v-col>
                  </v-row>
                </v-window-item>


                <v-window-item value="tasks"  >
                  <v-row class="mt-1" >
                    <v-col>
                      <v-col v-for="item in taskList" class="p-0" :key="item.id" cols="12 ">
                        <TaskCard :editText="item.editText" :deleteText="item.deleteText" :assign-to="item.assignTo" :created-at="item.createdDate" :due-date="item.dueDate"
                                  :task-title="item.taskTitle" :task-description="item.taskDescription" />
                      </v-col>
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