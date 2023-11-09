<script setup>
import {ref} from 'vue';
import 'vue3-easy-data-table/dist/style.css';


const searchField = ref(['fName', 'email', 'source', 'phone', 'date']);
const searchValue = ref('');

const headers = [
  {text: 'Full Name', value: 'fName', sortable: true, colspan: 3},
  {text: 'Agent', value: 'agent', sortable: true},
  {text: 'Opportunity', value: 'opp', sortable: true},
  {text: 'Service', value: 'service', sortable: true},
  {text: 'Carrier', value: 'carrier', sortable: true},
  {text: 'Policy #', value: 'policy'},
  {text: 'Stage', value: 'stage', sortable: true},
  {text: 'Temp', value: 'temp', sortable: true},
  {text: 'Premium', value: 'premium', sortable: true},
  {text: 'Action', value: 'action'}

];
const headersBusiness = [
  {text: 'Business Name', value: 'business', sortable: true, colspan: 3},
  {text: 'Agent', value: 'agent', sortable: true},
  {text: 'Opportunity', value: 'opp', sortable: true},
  {text: 'Service', value: 'service', sortable: true},
  {text: 'Carrier', value: 'carrier', sortable: true},
  {text: 'Policy #', value: 'policy'},
  {text: 'Stage', value: 'stage', sortable: true},
  {text: 'Temp', value: 'temp', sortable: true},
  {text: 'Premium', value: 'premium', sortable: true},
  {text: 'Action', value: 'action'}

];

const leadsCheck= ref (false)
const prospectCheck = ref(false)
const clientCheck = ref(false)
const lostCheck = ref(false)
const allCheck = ref(false)
// const checked = ref(false)
const themeColor = ref('rgb(var(--v-theme-secondary))');
const itemsSelected = ref([]);

const items = ref([
  {
    fName: 'Joseph Henry',
    agent: ' John Smith',
    opp: 'Opportunity 1-life-121212',
    service: 'Service One',
    carrier: 'Carrier one',
    policy: 'Life-AHK-294',
    stage: 'Leads',
    temp: 'Warm',
    premium: '10-5-2023',
    business: 'Jetnetix'
  },
  {
    fName: 'Henry Clark',
    agent: ' Laura John',
    opp: 'Opportunity 1-Medicare-726299',
    service: 'Service Two',
    business: 'Dtone Fire & Security',
    carrier: 'Carrier One',
    policy: 'Medicare-GDY-294',
    stage: 'Prospects',
    temp: 'Hot',
    premium: '15-2-2023'
  },
  {
    fName: 'Jordan Howard',
    agent: ' Peter Smith',
    opp: 'Opportunity 3-AUM-628372',
    service: 'Service Three',
    business: 'US Trading',

    carrier: 'Carrier Three',
    policy: 'AUM-GDY-294',
    stage: 'Leads',
    temp: 'Hot',
    premium: '15-2-2023'
  },
  {
    fName: 'Tim John',
    agent: ' Corina Carmen',
    opp: 'Opportunity 4-Health-76282',
    business: 'TradeX',

    service: 'Service Four',
    carrier: 'Carrier Four',
    policy: 'HEALTH-HSJ-621',
    stage: 'Client',
    temp: 'Cold',
    premium: '15-2-2023'
  },
  {
    fName: 'Rohat Emre',
    agent: ' Mateusz Henry',
    business: 'Barbary Company',

    opp: 'Opportunity 5-Supplement-76282',
    service: 'Service Two',
    carrier: 'Carrier One',
    policy: 'Supplement-GDY-294',
    stage: 'Client',
    temp: 'Hot',
    premium: '15-2-2023'
  },
  {
    fName: 'Joseph Henry',
    agent: ' John Smith',
    opp: 'Opportunity 1-life-121212',
    service: 'Service One',
    business: 'Finance Up',

    carrier: 'Carrier one',
    policy: 'Life-AHK-294',
    stage: 'Leads',
    temp: 'Warm',
    premium: '10-5-2023'
  },
  {
    fName: 'Henry Clark',
    business: 'Prime Trading',

    agent: ' Laura John',
    opp: 'Opportunity 1-Medicare-726299',
    service: 'Service Two',
    carrier: 'Carrier One',
    policy: 'Medicare-GDY-294',
    stage: 'Prospects',
    temp: 'Hot',
    premium: '15-2-2023'
  },
  {
    fName: 'HQ Sports',
    agent: ' Peter Smith',
    opp: 'Opportunity 3-AUM-628372',
    service: 'Service Three',
    carrier: 'Carrier Three',
    policy: 'AUM-GDY-294',
    stage: 'Leads',
    temp: 'Hot',
    premium: '15-2-2023'
  },
  {
    fName: 'KnowFinance',
    agent: ' Corina Carmen',
    opp: 'Opportunity 4-Health-76282',
    service: 'Service Four',
    carrier: 'Carrier Four',
    policy: 'HEALTH-HSJ-621',
    stage: 'Client',
    temp: 'Cold',
    premium: '15-2-2023'
  },
  {
    fName: 'Rohat Emre',
    business: 'Chicago Dutch Service',

    agent: ' Mateusz Henry',
    opp: 'Opportunity 5-Supplement-76282',
    service: 'Service Two',
    carrier: 'Carrier One',
    policy: 'Supplement-GDY-294',
    stage: 'Client',
    temp: 'Hot',
    premium: '15-2-2023'
  },

]);




const pendingDialog = ref(false);
const acceptedDialog = ref(false);
const rejectedDialog = ref(false);

const desserts = ref([
  {
    name: 'Frozen Opportunity 1-life-121212rt',
    contact: 'John Doe',
    type: 'Individual',
    pipeline: 'Life',
    status: 'Lead',
    stage: 'Stage 1 - Interest',
    estIncome: '$100',
    estCloseDate: '12/12/2023',
    wrtAgentSplit: 'John Doe (100%)',
  },
  {
    name: 'Ice Opportunity 1-life-121212am sandwich',
    contact: 'John Doe',
    type: 'Individual',
    pipeline: 'Life',
    status: 'Lead',
    stage: 'Stage 1 - Interest',
    estIncome: '$100',
    estCloseDate: '12/12/2023',
    wrtAgentSplit: 'John Doe (100%)',
  },
  {
    name: 'Opportunity 1-life-121212',
    contact: 'John Doe',
    type: 'Individual',
    pipeline: 'Life',
    status: 'Lead',
    stage: 'Stage 1 - Interest',
    estIncome: '$100',
    estCloseDate: '12/12/2023',
    wrtAgentSplit: 'John Doe (100%)',
  },
  {
    name: 'Opportunity 1-life-121212',
    contact: 'John Doe',
    type: 'Individual',
    pipeline: 'Life',
    status: 'Lead',
    stage: 'Stage 1 - Interest',
    estIncome: '$100',
    estCloseDate: '12/12/2023',
    wrtAgentSplit: 'John Doe (100%)',
  },
  {
    name: 'Opportunity 1-life-121212',
    contact: 'John Doe',
    type: 'Individual',
    pipeline: 'Life',
    status: 'Lead',
    stage: 'Stage 1 - Interest',
    estIncome: '$100',
    estCloseDate: '12/12/2023',
    wrtAgentSplit: 'John Doe (100%)',
  }
]);

const page = ref({title: 'Tabs'});
const tab = ref(null);
const tab2 = ref(null);
const tab3 = ref(null);
const tab4 = ref(null);
const tab5 = ref(null);
const tab6 = ref(null);
const tab7 = ref(null);

</script>


<template>
  <v-row>
    <v-col col="12">
      <v-card variant="outlined" elevation="0" class="withbg">
        <v-card-item>
          <div style="align-items: center" class="d-sm-flex align-center justify-space-between">
            <h3 class="text-h3">Accounts</h3>


            <div class="d-flex w-50 gap-2" >


              <v-text-field class=" float-right w-100 " type="text" variant="outlined" persistent-placeholder
                            placeholder="Search Account" v-model="searchValue" density="compact" hide-details
                            prepend-inner-icon="mdi-magnify"/>
            <RouterLink to="/admin/addAccount">
              <v-btn color="primary">Add Account +</v-btn>
            </RouterLink>

            </div>

          </div>
        </v-card-item>
        <v-divider></v-divider>
        <v-card-text>

          <!-- Content Goes Here -->
          <v-row>
            <v-col>
              <v-tabs v-model="tab2" color="primary">
                <v-tab value="11">
                  <UserIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                  Individual
                </v-tab>
                <v-tab value="12">
                  <BriefcaseIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                  Business
                </v-tab>

                <div  >
                  <v-checkbox-btn  class="pt-1" color="primary" hide-details v-model="allCheck" label="All (32)"></v-checkbox-btn>
                  <v-checkbox-btn color="primary" hide-details v-model="leadsCheck" label="Leads (1)"></v-checkbox-btn>
                  <v-checkbox-btn color="primary" hide-details v-model="prospectCheck" label="Prospects (20)"></v-checkbox-btn>
                  <v-checkbox-btn color="primary" hide-details v-model="clientCheck" label="Clients (8)"></v-checkbox-btn>
                  <v-checkbox-btn color="primary" hide-details v-model="lostCheck" label="Lost (3)"></v-checkbox-btn>
                </div>

              </v-tabs>
              <v-window v-model="tab2">
                <v-window-item value="11">
                  <EasyDataTable :headers="headers" :items="items" table-class-name="customize-table my-3"
                                 :theme-color="themeColor" :search-field="searchField" :search-value="searchValue"
                                 :rows-per-page="5" v-model:items-selected="itemsSelected">

                    <template #item-fName="item">
                      <div class="operation-wrapper">
                        <RouterLink class="text-primary text-decoration-none font-weight-bold " to="/admin/accountView" >
                          <span  class="text-primary " >    {{ item.fName }}</span>
                        </RouterLink>

                      </div>
                    </template>


                    <template #item-action="item">
                      <RouterLink to="/admin/accountView">
                        <v-btn icon color="primary" v-bind="props" variant="text">
                          <EyeIcon size="20"/>
                        </v-btn>
                      </RouterLink>
<!--                      <v-btn icon color="error" variant="text">-->
<!--                        <TrashIcon size="20"/>-->
<!--                      </v-btn>-->
                    </template>
                  </EasyDataTable>
                </v-window-item>
                <v-window-item value="12">

                  <EasyDataTable :headers="headersBusiness" :items="items" table-class-name="customize-table my-3"
                                 :theme-color="themeColor" :search-field="searchField" :search-value="searchValue"
                                 :rows-per-page="5" v-model:items-selected="itemsSelected">
                    <template #item-business="item">
                      <div class="operation-wrapper">
                        <RouterLink class="text-primary text-decoration-none font-weight-bold " to="/admin/accountViewBusiness" >
                          <span  class="text-primary " >    {{ item.business }}</span>
                        </RouterLink>

                      </div>
                    </template>
                    <template #item-action="item">
                      <RouterLink to="/admin/accountViewBusiness">
                        <v-btn icon color="primary" v-bind="props" variant="text">
                          <EyeIcon size="20"/>
                        </v-btn>
                      </RouterLink>
<!--                      <v-btn icon color="error" variant="text">-->
<!--                        <TrashIcon size="20"/>-->
<!--                      </v-btn>-->
                    </template>
                  </EasyDataTable>
                </v-window-item>


              </v-window>


            </v-col>
          </v-row>

        </v-card-text>
      </v-card>
    </v-col>

  </v-row>
</template>


<style scoped lang="scss" >

</style>