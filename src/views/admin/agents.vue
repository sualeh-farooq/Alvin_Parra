<script setup>
import {ref} from 'vue';
import 'vue3-easy-data-table/dist/style.css';


const searchField = ref(['name', 'gen', 'code', 'base', 'upline', 'license', 'status', 'team_count']);
const searchValue = ref('');

const headers = [

  {text: 'Name', value: 'name', sortable: true},
  {text: 'Generation', value: 'gen', sortable: true, colspan: 3},
  {text: 'Code Number', value: 'code', sortable: true},
  {text: 'Base No', value: 'base', sortable: true},
  {text: 'Team Count', value: 'team_count', sortable: true},
  {text: 'Upline Code', value: 'upline', sortable: true},
  {text: 'License Number', value: 'license', sortable: true},
  // {text: 'Status', value: 'status', sortable: true},
  {text: 'Action', value: 'action'}
];

const themeColor = ref('rgb(var(--v-theme-primary))');
const itemsSelected = ref([]);
const tab = ref(null)

const items = ref([
  {
    name: 'Alvin Parra',
    gen: '0',
    code: '3000',
    base: '4000',
    upline: '0000',
    license: 'KSH-2849',
    status: 'Active',
    team_count: 30,
  },
  {
    name: 'Joseph William',
    gen: '1',
    code: '3002',
    base: '4000',
    upline: '3000',
    license: 'LHK-2930',
    status: 'Active',
    team_count: 2,
  },
  {
    name: 'John Doe',
    gen: '1',
    code: '3003',
    base: '4001',
    upline: '3002',
    license: 'LHK-3829',
    status: 'Active',
    team_count: 5,
  },
  {
    name: 'Anshan Henry',
    gen: '2',
    code: '3004',
    base: '4002 ',
    upline: '3002',
    license: 'LHK-5830',
    status: 'Active',
    team_count: 2,
  },
  {
    name: 'Corina Carmen',
    gen: '2',
    code: '3005',
    base: '4003',
    upline: '3004',
    license: 'LHK-3829',
    status: 'Active',
    team_count: 10,

  },
  {
    name: 'Sara Clark',
    gen: '3',
    code: '3004',
    base: '4004',
    upline: '3002',
    license: 'LHK-4629',
    status: 'Active',
    team_count: 8,

  },
  {
    name: 'Sara Clark',
    gen: '3',
    code: '3004',
    base: '4004',
    upline: '3002',
    license: 'LHK-4629',
    status: 'Active',
    team_count: 1,

  },

]);


</script>


<template>
  <v-row>
    <v-col col="12">
      <v-card variant="outlined" elevation="0" class="withbg">
        <v-card-item>
          <div class="d-sm-flex align-center justify-space-between">
            <h3 class="text-h3">Agents</h3>
            <div class="d-flex  w-25">

                <v-text-field class="mb-3 " type="text" variant="outlined" persistent-placeholder
                              placeholder="Search Agents" v-model="searchValue" density="compact" hide-details
                              prepend-inner-icon="mdi-magnify"/>
            </div>

          </div>
        </v-card-item>
        <v-divider></v-divider>
        <v-card-text>

          <div style="display: flex; justify-content: space-between;">
            <div>
              <v-tabs class="mb-4" v-model="tab" color="primary">
                <v-tab value="pending">
                  <ClockIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                  Pending
                </v-tab>
                <v-tab value="all">
                  <ListIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                  All
                </v-tab>
                <v-tab value="active">
                  <SquareCheckIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                  Active
                </v-tab>
                <v-tab value="recentExpire">
                  <HistoryIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                  Recent Expired
                </v-tab>
                <v-tab value="inactive">
                  <AlertTriangleIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                  InActive
                </v-tab>
                <v-tab value="prospect">
                  <FileStarIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                  Prospect
                </v-tab>

              </v-tabs>
            </div>

          </div>

          <v-window v-model="tab" >
            <v-window-item  value="pending" >
              <v-row>
                <v-col>
                  <EasyDataTable :headers="headers" :items="items" table-class-name="customize-table"
                                 :theme-color="themeColor" :search-field="searchField" :search-value="searchValue"
                                 :rows-per-page="5" v-model:items-selected="itemsSelected">
                    <template #item-name="item">
                      <div class="operation-wrapper">
                        <RouterLink class="text-primary text-decoration-none font-weight-bold " to="/admin/agentView">
                          <span class="text-primary ">    {{ item.name }}</span>
                        </RouterLink>

                      </div>
                    </template>
                    <template #item-action="item">
                      <RouterLink to="/admin/agentView">
                        <v-btn icon color="primary" v-bind="props" variant="text">
                          <EyeIcon size="20"/>
                        </v-btn>
                      </RouterLink>
                      <v-btn icon color="error" variant="text">
                        <TrashIcon size="20"/>
                      </v-btn>
                    </template>
                  </EasyDataTable>


                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item  value="all" >
              <v-row>
                <v-col>
                  <EasyDataTable :headers="headers" :items="items" table-class-name="customize-table"
                                 :theme-color="themeColor" :search-field="searchField" :search-value="searchValue"
                                 :rows-per-page="5" v-model:items-selected="itemsSelected">
                    <template #item-name="item">
                      <div class="operation-wrapper">
                        <RouterLink class="text-primary text-decoration-none font-weight-bold " to="/admin/agentView">
                          <span class="text-primary ">    {{ item.name }}</span>
                        </RouterLink>

                      </div>
                    </template>
                    <template #item-action="item">
                      <RouterLink to="/admin/agentView">
                        <v-btn icon color="primary" v-bind="props" variant="text">
                          <EyeIcon size="20"/>
                        </v-btn>
                      </RouterLink>
                      <v-btn icon color="error" variant="text">
                        <TrashIcon size="20"/>
                      </v-btn>
                    </template>
                  </EasyDataTable>


                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item  value="active" >
              <v-row>
                <v-col>
                  <EasyDataTable :headers="headers" :items="items" table-class-name="customize-table"
                                 :theme-color="themeColor" :search-field="searchField" :search-value="searchValue"
                                 :rows-per-page="5" v-model:items-selected="itemsSelected">
                    <template #item-name="item">
                      <div class="operation-wrapper">
                        <RouterLink class="text-primary text-decoration-none font-weight-bold " to="/admin/agentView">
                          <span class="text-primary ">    {{ item.name }}</span>
                        </RouterLink>

                      </div>
                    </template>
                    <template #item-action="item">
                      <RouterLink to="/admin/agentView">
                        <v-btn icon color="primary" v-bind="props" variant="text">
                          <EyeIcon size="20"/>
                        </v-btn>
                      </RouterLink>
                      <v-btn icon color="error" variant="text">
                        <TrashIcon size="20"/>
                      </v-btn>
                    </template>
                  </EasyDataTable>


                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item  value="recentExpire" >
              <v-row>
                <v-col>
                  <EasyDataTable :headers="headers" :items="items" table-class-name="customize-table"
                                 :theme-color="themeColor" :search-field="searchField" :search-value="searchValue"
                                 :rows-per-page="5" v-model:items-selected="itemsSelected">
                    <template #item-name="item">
                      <div class="operation-wrapper">
                        <RouterLink class="text-primary text-decoration-none font-weight-bold " to="/admin/agentView">
                          <span class="text-primary ">    {{ item.name }}</span>
                        </RouterLink>

                      </div>
                    </template>
                    <template #item-action="item">
                      <RouterLink to="/admin/agentView">
                        <v-btn icon color="primary" v-bind="props" variant="text">
                          <EyeIcon size="20"/>
                        </v-btn>
                      </RouterLink>
                      <v-btn icon color="error" variant="text">
                        <TrashIcon size="20"/>
                      </v-btn>
                    </template>
                  </EasyDataTable>


                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item  value="inactive" >
              <v-row>
                <v-col>
                  <EasyDataTable :headers="headers" :items="items" table-class-name="customize-table"
                                 :theme-color="themeColor" :search-field="searchField" :search-value="searchValue"
                                 :rows-per-page="5" v-model:items-selected="itemsSelected">
                    <template #item-name="item">
                      <div class="operation-wrapper">
                        <RouterLink class="text-primary text-decoration-none font-weight-bold " to="/admin/agentView">
                          <span class="text-primary ">    {{ item.name }}</span>
                        </RouterLink>

                      </div>
                    </template>
                    <template #item-action="item">
                      <RouterLink to="/admin/agentView">
                        <v-btn icon color="primary" v-bind="props" variant="text">
                          <EyeIcon size="20"/>
                        </v-btn>
                      </RouterLink>
                      <v-btn icon color="error" variant="text">
                        <TrashIcon size="20"/>
                      </v-btn>
                    </template>
                  </EasyDataTable>


                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item  value="prospect" >
              <v-row>
                <v-col>
                  <EasyDataTable :headers="headers" :items="items" table-class-name="customize-table"
                                 :theme-color="themeColor" :search-field="searchField" :search-value="searchValue"
                                 :rows-per-page="5" v-model:items-selected="itemsSelected">
                    <template #item-name="item">
                      <div class="operation-wrapper">
                        <RouterLink class="text-primary text-decoration-none font-weight-bold " to="/admin/agentView">
                          <span class="text-primary ">    {{ item.name }}</span>
                        </RouterLink>

                      </div>
                    </template>
                    <template #item-action="item">
                      <RouterLink to="/admin/agentView">
                        <v-btn icon color="primary" v-bind="props" variant="text">
                          <EyeIcon size="20"/>
                        </v-btn>
                      </RouterLink>
                      <v-btn icon color="error" variant="text">
                        <TrashIcon size="20"/>
                      </v-btn>
                    </template>
                  </EasyDataTable>


                </v-col>
              </v-row>
            </v-window-item>
          </v-window>



        </v-card-text>
      </v-card>
    </v-col>

  </v-row>
</template>