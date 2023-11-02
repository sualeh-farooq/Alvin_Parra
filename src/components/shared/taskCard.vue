<script >
export default {
  name: 'Task Card',

  props: {
    assignTo: String,
    taskTitle: String,
    createdAt: String,
    dueDate: String,
    taskDescription:String,
    editTask: Function ,
    deleteTask: Function,
    editText: String ,
    deleteText: String ,
    statusColor: String,
    status: String,
  },
  data() {
    return {
      rejectedDialog: null,
      taskDueDate: '2023-02-10',  // Format as 'YYYY-MM-DD'
      taskDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas incidunt praesentium illo modi saepe. Reiciendis sequi illum facere tenetur deleniti quo nisi numquam, culpa earum tempora veniam autem iure quas!\n',
      agent: 'Agent One',
      taskTitle: 'Task Title 01',
      agentsList: [
        'Agent One',
        'Agent Two',
        'Agent Threee',
      ]
    }

  },
  methods: {
    editTask() {
      this.editTask()
    },
    deleteTask() {
      this.deleteTask()
    },

  }
}
</script>

<template>
  <div class="w-100 bg-lightprimary  pa-3  rounded-sm ">
    <v-row>
      <v-col cols="12" sm="12" md="9" lg="9">
        <div class="d-flex w-100 justify-space-between  mb-1 ">
          <span >
            <p class="pb-2" ><strong>Assign To: </strong>{{ assignTo }}</p>
            <p  class="pb-2" ><strong>Task Title: </strong>{{ taskTitle }}</p>
          </span>
          <span>
            <p  class="pb-2"><strong>Created at: </strong>{{ createdAt }}</p>
            <p class="pb-2"><strong>Due Date: </strong>{{ dueDate }}</p>
          </span>
        </div>
        <p class="font-size-13 text-muted mb-0">
          <strong>   Task Description: </strong>
         {{taskDescription}}
        </p>
      </v-col>



            <v-col cols="12" sm="12" md="3" lg="3">
              <div class="d-flex align-start justify-end gap-2">
                <v-dialog width="600" v-model="rejectedDialog">
                  <template v-slot:activator="{ props }">
                    <v-btn v-bind="props" color="primary">{{editText}}
                      <EditIcon size="18" class="mx-1" />
                    </v-btn>
                  </template>
                  <v-card class="overflow-auto w-100">
                    <div class="d-flex border w-100">
                      <v-card-title class="pa-5 border w-100 d-flex align-center justify-space-between">
                        Edit Task
                      </v-card-title>

                    </div>

                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" >
                            <v-text-field  v-model="taskTitle" label="Task Title" variant="outlined"
                              class="mb-3"></v-text-field>
                          </v-col>

                          <v-col cols="12">
                            <v-textarea v-model="taskDescription" filled  auto-grow label="Task Description" rows="4"
                                        row-height="20" color="primary" variant="outlined"></v-textarea>
                          </v-col>

                          <v-col cols="12" md="6" >
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
                      <v-btn color="error" text @click="rejectedDialog = false"> Close
                      </v-btn>
                      <v-btn color="success" text @click="pendingDialog = false"> Update </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

                <v-btn @click="deleteTask" color="error">{{deleteText}}
                  <TrashIcon size="18" class="mx-1" />
                </v-btn>
              </div>
              <div class="float-right mt-3" >
                <v-chip
                    class="ma-2"
                    :color=statusColor
                    text-color="white"
                >{{ status }}</v-chip>
              </div>
            </v-col>
    </v-row>

  </div>
</template>

<style scoped lang="scss"></style>