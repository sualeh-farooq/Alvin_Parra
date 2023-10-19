<script setup lang="ts">

import AgentAddedChart from '@/components/agency/addedAgentsChart.vue'
import DashboardCards from '@/components/agency/dashboardCards.vue'
</script>


<template>
  <v-row>
    <v-col col="12">
      <DashboardCards />
    </v-col>
  </v-row>
  <v-row>
    <v-col col="12">
      <AgentAddedChart />
    </v-col>
  </v-row>
</template>