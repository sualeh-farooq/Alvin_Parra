<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useKanbanStore } from '@/stores/apps/kanban';
import TaskCard from './TaskCard.vue';
import { VueDraggableNext } from 'vue-draggable-next';
import { sub } from 'date-fns';
import { Chance } from 'chance';

const store = useKanbanStore();
const chance = new Chance();
onMounted(() => {
  store.fetchkanbanItems();
});

const getTask: any = computed(() => {
  return store.kanbanItems;
});
const msg = ref('');
const showTaskform = ref(null);
const draggable = VueDraggableNext;
const handleToggle = (id: any) => {
  getTask.value.filter((task: any) => {
    if (id === task.id) {
      showTaskform.value = id;
    }
  });
};
const addTaskCard = (id: number, task: string) => {
  const newTask: any = {
    description: '',
    userStory: `${chance.integer({ min: 1000, max: 9999 })}`,
    dueDate: sub(new Date(), { days: 12 }),
    id: 1,
    priority: 'low',
    title: task
  };
  store.addTask(id, newTask);
  msg.value = '';
  showTaskform.value = null;
};
</script>
<template>
  <div class="overflow-auto">
    <div  class="taskBoardBox ma-0 d-flex gap-2">
      <div  v-for="column in getTask" :key="column.title">
        <div style="width: 350px" class="bg-lightprimary  rounded-lg ">
        <div :style="{'background-color': column.color }" class=" text-white py-2 text-center rounded-lg" >
          <h4 class="text-h4 ">{{ column.title }}</h4>
        </div>
          <draggable class="pa-2 " style="min-height: 150px" :list="column.tasks" :animation="200" ghost-class="ghost-card" group="tasks">
            <!-- Each element from here will be draggable and animated. Note :key is very important here to be unique both for draggable and animations to be smooth & consistent. -->
            <TaskCard v-for="task in column.tasks" :key="task.id" :task="task" class="mt-3 cursor-move"></TaskCard>
            <!-- </transition-group> -->
          </draggable>
<!--          <v-btn variant="text" @click="handleToggle(column.id)" class="mt-4" color="primary" block size="small">-->
<!--            Add Task {{ column.id }}-->
<!--          </v-btn>-->
<!--          <v-card class="pa-3 pt-1" v-if="showTaskform === column.id">-->
<!--            <v-text-field-->
<!--              variant="plain"-->
<!--              hide-details-->
<!--              density="compact"-->
<!--              v-model="msg"-->
<!--              color="primary"-->
<!--              persistent-placeholder placeholder="Add Task"-->
<!--            ></v-text-field>-->
<!--            <div class="d-flex align-center mt-3 gap-1">-->
<!--              <v-btn icon size="small" variant="text" color="primary"><v-icon>mdi-account-outline</v-icon></v-btn>-->
<!--              <v-btn icon size="small" variant="text" color="primary"><CalendarIcon size="16" /></v-btn>-->
<!--              <v-btn icon size="small" class="ml-auto" variant="text" color="error"><XIcon size="16" /></v-btn>-->
<!--              <v-btn color="primary" size="small" @click="addTaskCard(column.id, msg)">Add</v-btn>-->
<!--            </div>-->
<!--          </v-card>-->
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.taskBoardBox {
  width: 1100px;
}
</style>
