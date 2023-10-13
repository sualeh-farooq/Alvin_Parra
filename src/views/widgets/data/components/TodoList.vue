<script setup lang="ts">
import { ref } from 'vue';

const todos = ref([
  {
    item: 'Check your Email',
    done: true
  },
  {
    item: 'Make YouTube Video',
    done: true
  },
  {
    item: 'Create Banner',
    done: true
  },
  {
    item: 'Upload Project',
    done: false
  },
  {
    item: 'Update Task',
    done: false
  },
  {
    item: 'Task Issue',
    done: false
  }
]);
</script>

<template>
  <div class="pb-3 todo-list" v-for="(todo, i) in todos" :value="todo">
    <v-checkbox v-model="todo.done" color="primary" density="compact" hide-details>
      <template v-slot:label>
        <div class="ml-2">
          {{ todo.item }}
        </div>
      </template>
    </v-checkbox>
  </div>
</template>
