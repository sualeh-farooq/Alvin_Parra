
<script >
import NotesCard from '../../components/admin/notesCard.vue'
import TaskCard from '../../components/admin/taskCard.vue'
import KanbanListVue from "@/components/apps/kanban/KanbanList.vue";
export default {
  data() {
    return {
      tab: null,
      tab2: null,
      notesDialog: null,
      taskDialog: null,
      notesList: [
        {
          id: 1, date: '10-05-2023', time: '05:35pm', note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quidem dolor vel nisi est mollitia excepturi debitis suscipit dicta. Voluptatibus saepe incidunt nihil dignissimos eveniet molestiae sit, magni tenetur ea.\n' +
            '\n'
        },
        {
          id: 2, date: '15-05-2023', time: '05:35pm', note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quidem dolor vel nisi est mollitia excepturi debitis suscipit dicta. Voluptatibus saepe incidunt nihil dignissimos eveniet molestiae sit, magni tenetur ea.\n' +
            '\n'
        }
      ],
      taskList: [
        {
          id: 1, createdDate: '10-05-2023', dueDate: '12-07-2023', assignTo: 'John Doe', taskTitle: 'Task Title 01', taskDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quidem dolor vel nisi est mollitia excepturi debitis suscipit dicta. Voluptatibus saepe incidunt nihil dignissimos eveniet molestiae sit, magni tenetur ea.\n' +
            '\n'
        },
        {
          id: 2, createdDate: '10-05-2023', dueDate: '12-07-2023', assignTo: 'John Doe', taskTitle: 'Task Title 01', taskDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quidem dolor vel nisi est mollitia excepturi debitis suscipit dicta. Voluptatibus saepe incidunt nihil dignissimos eveniet molestiae sit, magni tenetur ea.\n' +
            '\n'
        },
      ],
      agentsList: [
          'Agent One',
        'Agent Two',
        'Agent Threee',
      ]
    }
  },
  components: {
    KanbanListVue,
    NotesCard,
    TaskCard
  },
  methods: {
    editNote() {
      console.log('Working ..')
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
            <h3 class="text-h3">Notes & Tasks</h3>
            <div class="d-flex  justify-end ">





                <v-dialog width="600" v-model="taskDialog">
                <template v-slot:activator="{ props }">
                  <v-btn v-bind="props" color="primary" class="mx-1">Add Task +</v-btn>
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




              <v-dialog width="600" v-model="notesDialog">
                <template v-slot:activator="{ props }">
                  <v-btn v-bind="props" color="primary" class="mx-1">Add Note +</v-btn>
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
                          <v-text-field type="date" label=" Note Date" variant="outlined" class="mb-3"></v-text-field>
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
            <v-col>
              <v-tabs v-model="tab" color="primary">
                <v-tab value="notes">
                  <NotesIcon stroke-width="1.5" width="20" class="v-icon--start" /> Notes
                </v-tab>
                <v-tab value="tasks">
                  <ServerIcon stroke-width="1.5" width="20" class="v-icon--start" /> Tasks
                </v-tab>
              </v-tabs>
              <v-window v-model="tab">
                <v-window-item value="notes">
                  <v-row class="mt-1">
                    <v-col v-for="item in notesList" class="p-0" :key="item.id" cols="12 ">
                      <NotesCard :time="item.time" :edit-note="editNote" :date="item.date"
                        :note-description="item.note" />
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item value="tasks">
                  <v-row class="mt-1">
                    <v-col>
                      <v-col v-for="item in taskList" class="p-0" :key="item.id" cols="12 ">
                        <TaskCard :assign-to="item.assignTo" :created-at="item.createdDate" :due-date="item.dueDate"
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
