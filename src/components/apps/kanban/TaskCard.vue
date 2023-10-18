<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps({
  task: Object
});

</script>
<template>
  <v-card variant="outlined" class="withbg cursor-move">
    <v-card-text class="pa-4">

      <div style="width: 100%;">
        <div class="d-flex align-items-center w-100  justify-space-between">
          <div class="d-flex align-items-center gap-3 ">
             <h4 class="text-h4 cursor-pointer" ><b>{{ task?.opportunityName }}  </b></h4>
          </div>
          <div>

            <span class="bg-info d-flex align-center gap-2 px-3 py-1 rounded-md font-weight-bold text-white" v-if="task?.temp === 'Cold'" >  <SnowflakeIcon size="15" class="text-white " /> <span>{{ task?.temp }}</span></span>
            <span  class="bg-hot d-flex align-center gap-2 px-3 py-1 rounded-md font-weight-bold text-white" v-else-if="task?.temp === 'Hot'" >  <SunIcon size="15" class="text-white " /><span> {{ task?.temp }}</span></span>
            <span  class="bg-warm d-flex align-center gap-2 px-3 py-1 rounded-md font-weight-bold text-white" v-else-if="task?.temp === 'Warm'" >  <FlameIcon size="15" class="text-white " /> <span>{{ task?.temp }}</span></span>

          </div>
        </div>
        <h4 class="mt-2" > {{task?.name}} </h4>
      </div>
<v-divider class="my-2" ></v-divider>
      <div>
        <v-row>
          <v-col cols="12" md="6" lg="4" >
            <p><b>Follow up</b></p>
            <small>  {{task?.followUp}} </small>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <p><b>Close Date</b></p>
            <small> {{task?.estCloseDate}} </small>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <p><b>Days Open</b></p>
            <small>{{ task?.daysOpen }}</small>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <p><b>Agent</b></p>
            <small>{{ task?.agent }}</small>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <p><b>Split</b></p>
            <small>{{task?.split}}</small>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <p><b>Est Income</b></p>
            <small>{{ task?.estIncome }}</small>
          </v-col>
        </v-row>
      </div>



    </v-card-text>
  </v-card>
</template>
<style>
.cursor-move {
  cursor: move;
}
</style>
