<script setup lang="ts">
import {ref} from 'vue';

const props = defineProps({
  task: Object
});

</script>
<template>
  <v-card variant="outlined" class="withbg cursor-move">
    <div style="align-items:center;" class="px-2 d-flex align-items-center justify-space-between border w-100" >
      <h4 class="mt-2"> {{ task?.name }} </h4>

      <div>

   <span class="bg-info d-flex align-center gap-2 p-1  px-2 rounded-md  text-white"
         v-if="task?.temp === 'Cold'">  <SnowflakeIcon size="10" class="text-white "/> <small>{{
       task?.temp
     }}</small>
            </span>
    <span class="bg-hot d-flex align-center gap-2 p-1 px-2 rounded-md  text-white"
          v-else-if="task?.temp === 'Hot'">  <SunIcon size="10" class="text-white "/><small> {{
        task?.temp
      }}</small></span>
    <span class="bg-warm d-flex align-center gap-2 p-1 px-2 rounded-md   text-white"
          v-else-if="task?.temp === 'Warm'">  <FlameIcon size="10" class="text-white "/> <small>{{
        task?.temp
      }}</small></span>

      </div>
    </div>

    <v-card-text style="padding: 0px;">

      <v-expansion-panels variant="accordion">
        <v-expansion-panel class="bg-white">
          <v-expansion-panel-title>{{ task?.opportunityName }}</v-expansion-panel-title>
          <v-expansion-panel-text>
            <div style="width: 100%;">
              <div class="d-flex align-items-center w-100  justify-space-between">
                <!--                <div class="d-flex align-items-center gap-3 ">-->
                <!--                  <h6 class="text-h4 cursor-pointer"><b>{{ task?.opportunityName }} </b></h6>-->
                <!--                </div>-->
                <div>



                </div>
              </div>
            </div>
            <div>
              <v-row>
                <v-col cols="12" md="6" lg="6">
                  <small><b>Follow up</b></small><br/>
                  <small> {{ task?.followUp }} </small>
                </v-col>
                <v-col cols="12" md="6" lg="6">
                  <small><b>Close Date</b></small><br/>
                  <small> {{ task?.estCloseDate }} </small>
                </v-col>
                <v-col cols="12" md="6" lg="6">
                  <small><b>Days Open</b></small><br/>
                  <small>{{ task?.daysOpen }}</small>
                </v-col>
                <v-col cols="12" md="6" lg="6">
                  <small><b>Agent</b></small> <br/>
                  <small>{{ task?.agent }}</small>
                </v-col>
                <v-col cols="12" md="6" lg="6">
                  <small><b>Split</b></small><br/>
                  <small>{{ task?.split }}</small>
                </v-col>
                <v-col cols="12" md="6" lg="6">
                  <small><b>Est Income</b></small> <br/>
                  <small>{{ task?.estIncome }}</small>
                </v-col>
              </v-row>
            </div>


          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>


    </v-card-text>
  </v-card>
</template>
<style scoped  lang="scss">
.cursor-move {
  cursor: move;
}

.v-expansion-panel__shadow {
  display: none !important;
}

.v-expansion-panels--variant-accordion > .v-expansion-panel {
  border-radius: 5px !important;
}

.v-expansion-panel-title {

  align-items: center;
  text-align: start;
  border-radius: inherit;
  display: flex;
  font-size: 12px;
  line-height: 1;
  min-height: 25px !important;
  outline: none;
  padding: 15px 10px;
  position: relative;
  transition: 0.3s min-height cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  justify-content: space-between;
}

.v-expansion-panel {
  .v-expansion-panel_shadow {
    display: none !important;
  }
}

</style>

