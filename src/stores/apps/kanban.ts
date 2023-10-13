import { defineStore } from 'pinia';
// project imports
import axios from '@/utils/axios';

export const useKanbanStore = defineStore({
  id: 'kanban',
  state: () => ({
    kanbanItems: []
  }),
  getters: {},
  actions: {
    // Fetch Chat from action
    async fetchkanbanItems() {
      try {
        const response = await axios.get('/api/data/kanban');
        this.kanbanItems = response.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    addTask(itemID: number, item: string) {
      this.kanbanItems = this.kanbanItems.filter((task: any) => {
        return task.id === itemID
          ? {
              ...task,
              ...task.tasks.push(item)
            }
          : task;
      });
    }
  }
});
