<script setup lang="ts">
import MarketShare from '../widgets/chart/components/MarketShare.vue';
import RevenueCards from '../dashboards/analytics/components/RevenueCards.vue';
import TotalGrowth from '../dashboards/default/components/TotalGrowth.vue';
import Dashboard_Cards from "@/components/admin/Dashboard_Cards.vue";

</script>


<template>
    <v-row>
        <v-col col="12">
          <Dashboard_Cards />
<!--            <RevenueCards />-->
        </v-col>
    </v-row>
    <v-row>
        <v-col col="12">
            <TotalGrowth />
        </v-col>
    </v-row>
</template>