<script setup lang="ts">

import Dashboard_Cards from "@/components/shared/Dashboard_Cards.vue";
import PipelineChart from '@/components/admin/pipelineChart.vue'
</script>


<template>
    <v-row>
        <v-col col="12">
          <Dashboard_Cards />
        </v-col>
    </v-row>
    <v-row>
        <v-col col="12">
            <PipelineChart />
        </v-col>
    </v-row>
</template>