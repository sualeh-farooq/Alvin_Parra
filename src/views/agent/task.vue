<script setup >
import { ref } from 'vue';
import 'vue3-easy-data-table/dist/style.css';
import TaskAssignedCard from "@/components/shared/taskAssignedCard.vue";
import TaskCard from "@/components/shared/taskCard.vue";


const tab = ref(null)
const tab2 = ref(null)
const perLevel = ref(50)
const taskDialog = ref(null)

const taskList = ref( [
  {
    id: 1, createdDate: '10-05-2023', color: 'success' , status: 'Completed' , dueDate: '12-07-2023', editText: 'Edit' ,deleteText: 'Delete' ,  assignTo: 'John Doe', taskTitle: 'Task Title 01', taskDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quidem dolor vel nisi est mollitia excepturi debitis suscipit dicta. Voluptatibus saepe incidunt nihil dignissimos eveniet molestiae sit, magni tenetur ea.\n' +
        '\n'
  },
  {
    id: 2, createdDate: '10-05-2023', color: 'warning' , status: 'In Process' , dueDate: '12-07-2023', editText: 'Edit' ,deleteText: 'Delete' ,  assignTo: 'John Doe', taskTitle: 'Task Title 01', taskDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quidem dolor vel nisi est mollitia excepturi debitis suscipit dicta. Voluptatibus saepe incidunt nihil dignissimos eveniet molestiae sit, magni tenetur ea.\n' +
        '\n'
  },
])
</script>


<template>
  <v-row>
    <v-col col="12">
      <v-card variant="outlined" elevation="0" class="withbg">
        <v-card-item>
          <div class="d-sm-flex align-center justify-space-between">
            <h3 class="text-h3 w-100">Tasks</h3>
            <v-dialog width="600" v-model="taskDialog">
              <template v-slot:activator="{ props }">
                <v-btn  v-if="tab === 'approved'" v-bind="props" color="primary" class="mx-1">Add Task +</v-btn>
              </template>
              <v-card class="overflow-auto w-100">
                <div class="d-flex border w-100">
                  <v-card-title  class="pa-5 border w-100 d-flex align-center justify-space-between">
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
                  <v-btn color="success" text @click="taskDialog = false"> Save </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>



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
                      <HourglassIcon stroke-width="1.5" width="20" class="v-icon--start" /> My Tasks
                    </v-tab>
                    <v-tab value="approved">
                      <SquareCheckIcon stroke-width="1.5" width="20" class="v-icon--start" /> Assigned Tasks
                    </v-tab>

                  </v-tabs>
                </div>

              </div>
              <v-window v-model="tab">
                <v-window-item value="pending">

                  <v-row class="mt-1">
                    <v-col v-for="item in taskList" class="p-0" :key="item.id" cols="12 ">
                      <TaskAssignedCard :statusColor="item.color" :status="item.status" :editText="item.editText" :deleteText="item.deleteText" :assign-to="item.assignTo" :created-at="item.createdDate" :due-date="item.dueDate"
                                :task-title="item.taskTitle" :task-description="item.taskDescription" />
                    </v-col>
                  </v-row>
                </v-window-item>



                <v-window-item value="approved">
                  <v-row class="mt-1">
                    <v-col v-for="item in taskList" class="p-0" :key="item.id" cols="12 ">
                      <TaskCard :statusColor="item.color" :status="item.status" :editText="item.editText" :deleteText="item.deleteText" :assign-to="item.assignTo" :created-at="item.createdDate" :due-date="item.dueDate"
                                :task-title="item.taskTitle" :task-description="item.taskDescription" />
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
