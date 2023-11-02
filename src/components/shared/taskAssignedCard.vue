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
      ],
      statuses: [
        { title: 'Pending' },
        { title: 'In Progress' },
        { title: 'On Hold' },
        { title: 'Completed' },
      ],
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
            <p class="pb-2" ><strong>Assign By: </strong>{{ assignTo }}</p>
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
              <div class=" d-flex justify-end" >
                <div class="text-center">
                  <v-menu
                      open-on-hover
                  >
                    <template v-slot:activator="{ props }">
                      <v-btn
                          color="primary"
                          v-bind="props"
                      >
                        Update Status
                      </v-btn>
                    </template>

                    <v-list>
                      <v-list-item  class="cursor-pointer status_item "
                          v-for="(item, index) in statuses"
                          :key="index"
                      >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </div>

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

<style scoped lang="scss">
.status_item:hover {
  background: rgba(128,128,128,0.5);
}
</style>