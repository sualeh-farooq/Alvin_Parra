<script setup >
import {ref} from 'vue';
import 'vue3-easy-data-table/dist/style.css';


const searchField = ref(['fName', 'email', 'source', 'phone', 'date']);
const searchValue = ref('');

const headers = [

  {text: 'Name', value: 'name', sortable: true},
  {text: 'Generation', value: 'gen', sortable: true, colspan: 3},
  {text: 'Code Number', value: 'code', sortable: true},
  {text: 'Base No', value: 'base', sortable: true},
  {text: 'Upline Code', value: 'upline', sortable: true},
  {text: 'License Number', value: 'license', sortable: true},
  {text: 'Status', value: 'status', sortable: true},
  {text: 'Action', value: 'action'}
];

const themeColor = ref('rgb(var(--v-theme-secondary))');
const itemsSelected = ref([]);

const items = ref([
  {
    name: 'Joseph William',
    gen: '1',
    code: '3002',
    base: '4000',
    upline: '3002',
    license: 'LHK-2930',
    status: 'Active'
  },
  {
    name: 'John Doe',
    gen: '1',
    code: '3003',
    base: '4001',
    upline: '3002',
    license: 'LHK-3829',
    status: 'Active'
  },
  {
    name: 'Anshan Henry',
    gen: '2',
    code: '3004',
    base: '4002 ',
    upline: '3002',
    license: 'LHK-5830',
    status: 'Active'
  },
  {
    name: 'Corina Carmen',
    gen: '2',
    code: '3005',
    base: '4003',
    upline: '3002',
    license: 'LHK-3829',
    status: 'Active'
  },
  {
    name: 'Sara Clark',
    gen: '3',
    code: '3004',
    base: '4004',
    upline: '3002',
    license: 'LHK-4629',
    status: 'Active'
  },
  {
    name: 'Sara Clark',
    gen: '3',
    code: '3004',
    base: '4004',
    upline: '3002',
    license: 'LHK-4629',
    status: 'Active'
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

          </div>
        </v-card-item>
        <v-divider></v-divider>
        <v-card-text>

          <!-- Content Goes Here -->
          <v-row>
            <v-col>





              <EasyDataTable :headers="headers" :items="items" table-class-name="customize-table"
                             :theme-color="themeColor" :search-field="searchField" :search-value="searchValue"
                             :rows-per-page="5" v-model:items-selected="itemsSelected">
                <template #item-action="item">
                  <RouterLink to="/agent/agentView">
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

        </v-card-text>
      </v-card>
    </v-col>

  </v-row>
</template>