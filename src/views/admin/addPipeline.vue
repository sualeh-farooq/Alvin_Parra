<script>
import {ref} from 'vue';
import {Table, Switch, Space, Button} from 'ant-design-vue'

const tableData = [
  {
    key: '1',
    name: 'Annuity',
    lead: 'Interested',
    stage2: 'Presentation',
    stage4: 'Funded',
    stage3: 'Acc Opening',
    stage5: 'Won' ,
    stage6: 'Lost'
  },
  {

    name: 'Life',
    key: '2',
    stage2: 'Quote',
    stage3: 'Signed App',
    lead: 'Interested',
    stage4: 'Underwriting',
    stage5: 'Won' ,
    stage6: 'Lost'
  },
  {
    key: '3',
    name: 'Health',
    stage2: 'Illustration',
    stage3: 'Signed App',
    lead: 'Interested',
    stage4: 'Transfer',
    text: 'dummy text',
    stage5: 'Won' ,
    stage6: 'Lost'
  },
  {
    key: '4',
    name: 'Supplemental',
    lead: 'Interested',
    stage2: 'SOA Signed',
    stage3: 'Presentation',
    stage4: 'Application',
    text: 'dummy text',
    stage5: 'Won' ,
    stage6: 'Lost'
  },
  {
    key: '5',
    name: 'Estate Plans',
    lead: 'Interested',
    stage2: 'Quote',
    stage3: 'Presentation',
    stage4: 'Application',
    text: 'dummy text',
    stage5: 'Won' ,
    stage6: 'Lost'
  },
  {
    key: '6',
    name: 'Real Estate',
    lead: 'Interested',
    stage2: 'Form Completed',
    stage3: 'Binding',
    stage4: 'Ship / Pickup',
    text: 'dummy text',
    stage5: 'Won' ,
    stage6: 'Lost'
  },
  {
    key: '7',
    name: 'AUM ',
    lead: 'Interested',
    stage2: 'Prequalify',
    stage3: 'Application',
    stage4: 'Review',
    text: 'dummy text',
    stage5: 'Won' ,
    stage6: 'Lost'
  },
  {
    key: '8',
    name: 'Estate Plans',
    lead: 'Interested',
    stage2: 'Quote',
    stage3: 'Presentation',
    stage4: 'Review',
    stage5: 'Won' ,
    stage6: 'Lost'
  },
  {
    key: '9',
    name: 'Others',
    lead: 'Interested',
    stage2: 'Quote',
    stage3: 'Presentation',
    stage4: 'Review',
    stage5: 'Won' ,
    stage6: 'Lost'
  },

];
const tableDataTwo = [
  {
    key: '1',
    name: 'Annuity',
    lead: 'Interested',
    stage2: 'Presentation',
    stage4: 'Funded',
    stage3: 'Acc Opening',
    stage5: 'Won' ,
    stage6: 'Lost'
  },
]
const columns = [
  {
    title: '',
    dataIndex: 'name',

  },
  {
    title: 'LEAD',
    dataIndex: 'lead',
  },
  {
    title: 'PROSPECT',
    colSpan: 3,
    dataIndex: 'stage2',

  },
  {
    title: '',
    dataIndex: 'stage3',
    colSpan: 0,
  },
  {
    title: '',
    dataIndex: 'stage4',
    colSpan: 0,
  },
  {
    title: 'WON' ,
    dataIndex: 'stage5' ,
  },
  {
    title: 'LOST' ,
    dataIndex: 'stage6'
  },
  {
    title: '' ,
    dataIndex: 'action'
  },



];
const columnsTwo = [
  {
    title: '',
    dataIndex: 'action'

  },
  {
    title: 'Stage 01',
  },
  {
    title: 'Stage 02',

  },
  {
    title: 'Stage 03',
  },
  {
    title: 'Stage 04',
  },
  {
    title: 'Stage 05' ,
  },
  {
    title: 'Stage 06' ,
  },
  {
    title: '' ,
  },

]


export default {
  name: 'Agents-Table',
  components: {
    'a-space': Space,
    'a-table': Table,
    'a-switch': Switch,
    'a-button': Button
  },

  data(){
    return {
      tableData ,
      columns,
      tableDataTwo,
      columnsTwo,
      newPipelineDialog: null,
      editPipelineDialog: null,
      pipelineName: 'Annuity',
      pipelineStage1: 'Interested',
      pipelineStage2: 'Presentaion',
      pipelineStage3: 'Signed App',
      pipelineStage4: 'Binding',
      pipelineStage5: 'Won',
      pipelineStage6: 'Lost',

    }
  }
}


</script>

<template>


  <v-row>
    <v-col col="12">
      <v-card variant="outlined" elevation="0" class="withbg">
        <v-card-item>
          <div class="d-sm-flex align-center justify-space-between">
            <h3 class="text-h3">Add Pipeline</h3>
          <div class="d-flex gap-2 align-center" >

            <v-btn color="darkText" >Reset Pipelines - </v-btn>



            <v-dialog width="800" v-model="newPipelineDialog">
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props" color="primary" >Create New Pipeline + </v-btn>


              </template>
              <v-card class="overflow-auto w-100">
                <div class="d-flex border w-100">
                  <v-card-title class="pa-5 border w-100 d-flex align-center justify-space-between">
                    Add Pipeline
                  </v-card-title>

                </div>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="6" lg="4" sm="12">
                        <v-text-field  label="Product Name" variant="outlined"
></v-text-field>
                      </v-col>

                      <v-col cols="12" md="6" lg="4" sm="12">
                          <v-text-field  label="Stage 1 - Lead" variant="outlined" ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="6" lg="4" sm="12">
                        <v-text-field  label="Stage 2 - Prospect" variant="outlined" ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="6" lg="4" sm="12">
                        <v-text-field  label="Stage 3 - Prospect" variant="outlined" ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="6" lg="4" sm="12">
                        <v-text-field label="Stage 4 - Prospect" variant="outlined"></v-text-field>
                      </v-col>

                      <v-col cols="12" md="6" lg="4" sm="12">
                        <v-text-field  label="Stage 5 - Won" variant="outlined"></v-text-field>
                      </v-col>

                      <v-col cols="12" md="6" lg="4" sm="12">
                        <v-text-field label="Stage 6 - Lost" variant="outlined" ></v-text-field>
                      </v-col>


                    </v-row>

                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="error" text @click="newPipelineDialog = false"> Close
                  </v-btn>
                  <v-btn color="primary" text @click="newPipelineDialog = false"> Save </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>



          </div>



          </div>
        </v-card-item>
        <v-divider></v-divider>
        <v-card-text>

          <a-table class="stageHeadTable"  :data-source="tableDataTwo"  :columns="columnsTwo" >
          </a-table>

          <a-table  class="pipelineDetailTable" :columns="columns" :data-source="tableData" bordered>
            <template #bodyCell="{ column, text }">
              <template v-if="column.dataIndex === 'name'">

                  <h3 >{{ text }}</h3>

              </template>



              <template v-if="column.dataIndex === 'action'">
                <div class="operation-wrapper">





                  <v-dialog width="800" v-model="editPipelineDialog">
                    <template v-slot:activator="{ props }">
<!--                      <v-btn v-bind="props" color="primary" >Create New Pipeline + </v-btn>-->
                                        <v-btn v-bind="props" icon color="primary" variant="text">
                                          <EditIcon size="20" />
                                        </v-btn>

                    </template>
                    <v-card class="overflow-auto w-100">
                      <div class="d-flex border w-100">
                        <v-card-title class="pa-5 border w-100 d-flex align-center justify-space-between">
                          Edit Pipeline
                        </v-card-title>

                      </div>

                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col cols="12" md="6" lg="4" sm="12">
                              <v-text-field v-model="pipelineName"  label="Product Name" variant="outlined"
                                             ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="6" lg="4" sm="12">
                              <v-text-field  v-model="pipelineStage1" label="Stage 1 - Lead" variant="outlined"
                                             ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="6" lg="4" sm="12">
                              <v-text-field v-model="pipelineStage2" label="Stage 2 - Prospect" variant="outlined"
                                             ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="6" lg="4" sm="12">
                              <v-text-field v-model="pipelineStage3"  label="Stage 3 - Prospect" variant="outlined"
                                             ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="6" lg="4" sm="12">
                              <v-text-field v-model="pipelineStage4" label="Stage 4 - Prospect" variant="outlined"
                                            ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="6" lg="4" sm="12">
                              <v-text-field v-model="pipelineStage5" label="Stage 5 - Won" variant="outlined"
                                             ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="6" lg="4" sm="12">
                              <v-text-field v-model="pipelineStage6" label="Stage 6 - Lost" variant="outlined"
                                            ></v-text-field>
                            </v-col>


                          </v-row>

                        </v-container>
                      </v-card-text>
                      <v-card-actions class="m-0" >
                        <v-spacer></v-spacer>
                        <v-btn color="error" text @click="editPipelineDialog = false"> Close
                        </v-btn>
                        <v-btn color="primary" text @click="editPipelineDialog = false"> Save </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>










                  <v-btn icon color="error" variant="text">
                    <TrashIcon size="20" />
                  </v-btn>
                </div>
              </template>
            </template>
          </a-table>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>



</template>
<style lang="scss" >

.stage_head {
  div {
    div{
      .ant-table {
        .ant-table-container {
          .ant-table-content {
            table {
              tbody {
                display: none !important;
              }
            }
          }
        }
      }
    }
  }
}

</style>