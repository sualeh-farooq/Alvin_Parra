<script>
import {ref} from 'vue';
import {Table, Switch, Space, Button} from 'ant-design-vue'

const tableData = [
  {
    key: '1',
    name: 'Annuity',
    lead: 'Interested',
    stage2: '0571-22098909',
    stage4: 'New York No. 1 Lake Park',
    stage3: 18889898989,
    stage5: 'Won' ,
    stage6: 'Lost'
  },
  {

    name: 'Life',
    key: '2',
    stage2: '0571-22098333',
    stage3: 18889898888,
    lead: 'Interested',
    stage4: 'London No. 1 Lake Park',
    stage5: 'Won' ,
    stage6: 'Lost'
  },
  {
    key: '3',
    name: 'Health',
    stage2: '0571-22098333',
    stage3: 18889898888,
    lead: 'Interested',
    stage4: 'London No. 1 Lake Park',
    text: 'dummy text',
    stage5: 'Won' ,
    stage6: 'Lost'
  },
  {
    key: '4',
    name: 'Supplemental',
    lead: 'Interested',
    stage2: '0575-22098909',
    stage3: 18900010002,
    stage4: 'London No. 2 Lake Park',
    text: 'dummy text',
    stage5: 'Won' ,
    stage6: 'Lost'
  },
  {
    key: '5',
    name: 'Estate Plans',
    lead: 'Interested',
    stage2: '0575-22098909',
    stage3: 18900010002,
    stage4: 'London No. 2 Lake Park',
    text: 'dummy text',
    stage5: 'Won' ,
    stage6: 'Lost'
  },
  {
    key: '6',
    name: 'Real Estate',
    lead: 'Interested',
    stage2: '0575-22098909',
    stage3: 18900010002,
    stage4: 'London No. 2 Lake Park',
    text: 'dummy text',
    stage5: 'Won' ,
    stage6: 'Lost'
  },
  {
    key: '7',
    name: 'AUM ',
    lead: 'Interested',
    stage2: '0575-22098909',
    stage3: 18900010002,
    stage4: 'London No. 2 Lake Park',
    text: 'dummy text',
    stage5: 'Won' ,
    stage6: 'Lost'
  },
  {
    key: '8',
    name: 'Estate Plans',
    lead: 'Interested',
    stage2: '0575-22098909',
    stage3: 18900010002,
    stage4: 'London No. 2 Lake Park',
    stage5: 'Won' ,
    stage6: 'Lost'
  },
  {
    key: '9',
    name: 'Others',
    lead: 'Interested',
    stage2: '0575-22098909',
    stage3: 18900010002,
    stage4: 'London No. 2 Lake Park',
    stage5: 'Won' ,
    stage6: 'Lost'
  },

];

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
      newPipelineDialog: null,
      editPipelineDialog: null

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
                      <v-col cols="12" md="6" lg="6" sm="12">
                        <v-text-field  label="Pipeline Name" variant="outlined"
                                      class="mb-3"></v-text-field>
                      </v-col>

                      <v-col cols="12" md="6" lg="6" sm="12">
                          <v-text-field  label="Stage 1 - Lead" variant="outlined"
                                      class="mb-3"></v-text-field>
                      </v-col>

                      <v-col cols="12" md="6" lg="6" sm="12">
                        <v-text-field  label="Stage 2 - Prospect" variant="outlined"
                                      class="mb-3"></v-text-field>
                      </v-col>

                      <v-col cols="12" md="6" lg="6" sm="12">
                        <v-text-field  label="Stage 3 - Prospect" variant="outlined"
                                      class="mb-3"></v-text-field>
                      </v-col>

                      <v-col cols="12" md="6" lg="6" sm="12">
                        <v-text-field label="Stage 4 - Prospect" variant="outlined"
                                      class="mb-3"></v-text-field>
                      </v-col>

                      <v-col cols="12" md="6" lg="6" sm="12">
                        <v-text-field  label="Stage 5 - Won" variant="outlined"
                                      class="mb-3"></v-text-field>
                      </v-col>

                      <v-col cols="12" md="6" lg="6" sm="12">
                        <v-text-field label="Stage 6 - Lost" variant="outlined"
                                      class="mb-3"></v-text-field>
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


          <a-table  :columns="columns" :data-source="tableData" bordered>
            <template #bodyCell="{ column, text }">
              <template v-if="column.dataIndex === 'name'">

                  <h3 >{{ text }}</h3>

              </template>



              <template v-if="column.dataIndex === 'action'">
                <div class="operation-wrapper">

                  <v-btn icon color="primary" variant="text">
                    <EditIcon size="20" />
                  </v-btn>









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