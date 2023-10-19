<script lang="ts">
import AgentsTable from "@/components/agent/agentsTable.vue";
export default {
  name: 'Agents-Page',
  components: {
    AgentsTable
  }
}


</script>

<template>
  <v-row>
    <v-col col="12">
      <v-card variant="outlined" elevation="0" class="withbg">
        <v-card-item>
          <div class="d-sm-flex align-center justify-space-between">
            <h3 class="text-h3">Agents</h3>
          </div>
        </v-card-item>
        <v-divider></v-divider>
        <v-card-text>
          <AgentsTable/>

        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>