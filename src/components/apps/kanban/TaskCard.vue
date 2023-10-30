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
             <h6 class="text-h4 cursor-pointer" ><b>{{ task?.opportunityName }}  </b></h6>
          </div>
          <div>

            <span class="bg-info d-flex align-center gap-2 p-1  px-2 rounded-md  text-white" v-if="task?.temp === 'Cold'" >  <SnowflakeIcon size="10" class="text-white " /> <span>{{ task?.temp }}</span></span>
            <span  class="bg-hot d-flex align-center gap-2 p-1 px-2 rounded-md  text-white" v-else-if="task?.temp === 'Hot'" >  <SunIcon size="10" class="text-white " /><span> {{ task?.temp }}</span></span>
            <span  class="bg-warm d-flex align-center gap-2 p-1 px-2 rounded-md   text-white" v-else-if="task?.temp === 'Warm'" >  <FlameIcon size="10" class="text-white " /> <span>{{ task?.temp }}</span></span>

          </div>
        </div>
        <h5 class="mt-2" > {{task?.name}} </h5>
      </div>
<v-divider class="my-2" ></v-divider>
      <div>
        <v-row>
          <v-col cols="12" md="6" lg="6" >
            <p><b>Follow up</b></p>
            <small>  {{task?.followUp}} </small>
          </v-col>
          <v-col cols="12" md="6" lg="6">
            <p><b>Close Date</b></p>
            <small> {{task?.estCloseDate}} </small>
          </v-col>
          <v-col cols="12" md="6" lg="6">
            <p><b>Days Open</b></p>
            <small>{{ task?.daysOpen }}</small>
          </v-col>
          <v-col cols="12" md="6" lg="6">
            <p><b>Agent</b></p>
            <small>{{ task?.agent }}</small>
          </v-col>
          <v-col cols="12" md="6" lg="6">
            <p><b>Split</b></p>
            <small>{{task?.split}}</small>
          </v-col>
          <v-col cols="12" md="6" lg="6">
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
