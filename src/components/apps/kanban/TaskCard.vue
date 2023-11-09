<script setup lang="ts">
import {ref} from 'vue';

const props = defineProps({
  task: Object,
  oppFunction: Function,
});

const opportunityView = () =>{
  props.oppFunction()
}



const editDialog = ref(false)
const editName = ref('John Doe')
const editContact = ref('John Smith')
const editPipeline = ref('Life Insurance')
const editLeadStatus = ref('Lead One')
const editStage = ref('Prospect - Quote')
const editTempLevel = ref('Cold')
const notesDialog = ref(null)
const taskDialog = ref(null)
const selectedFile = ref(null)
const editType = ref('Individual')
const drawer = ref(false)
const followUpDate = ref(false,)
const closingTarget = ref(false)
const serviceType = ref( [
  'Service One',
  'Service Two',
  'Service Three',
])
const opportunitySources = ref( [
  'Exisiting',
  'Lead',
  'Social'
])
const writingAgentSplit =  ref ([
      '100%',
      '90%',
      '80%'
    ])
    const agent2Split =ref ([
      '100%',
      '90%',
      '80%'
    ])

const pipeline = ref( [
  'Life Insurance',
  'AUM',
  'Medicare',
])


const leadStatus = ref( [
  'Lead One',
  'Lead Two',
  'Lead Three',
])

const stage= ref( [
  'Lead - Interested',
  'Prospect - Quote',
  'Prospect - Presentation',
  'Prospect - Review',
  'Client - Won',
  'Lost',
])
const level = ref( [
  'Cold',
  'Hot'
])
 const    type = ref([
  'Individual',
  'Business'
])

</script>
<template>
  <v-card variant="outlined" class="withbg cursor-move">
    <div style="align-items:center;" class="px-2 d-flex align-items-center justify-space-between border w-100">




      <span @click="opportunityView" class="cursor-pointer d-flex gap-1" >
      <h4 class="mt-2 text-primary"> {{ task?.name }} </h4>
       <span class=" mt-2">   <PencilIcon class="text-primary" size="18"/></span>
      </span>


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
<style scoped lang="scss">
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

