<script setup lang="ts">
import { ref } from 'vue';

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

const page = ref({ title: 'Tabs' });
const tab = ref(null);
const tab2 = ref(null);
const tab3 = ref(null);
const tab4 = ref(null);
const tab5 = ref(null);
const tab6 = ref(null);
const tab7 = ref(null);

import KanbanListVue from '@/components/apps/kanban/KanbanList.vue';
</script>





<template>
  <v-row>
    <v-col col="12">
      <v-card variant="outlined" elevation="0" class="withbg">
        <v-card-item>
          <div class="d-sm-flex align-center justify-space-between">
            <h3 class="text-h3">Accounts</h3>

          </div>
        </v-card-item>
        <v-divider></v-divider>
        <v-card-text>

          <!-- Content Goes Here -->
          <v-row>
            <v-col>
              <v-tabs v-model="tab2" color="primary">
                <v-tab value="11">
                  <UserIcon stroke-width="1.5" width="20" class="v-icon--start" /> Individual
                </v-tab>
                <v-tab value="22">
                  <BriefcaseIcon stroke-width="1.5" width="20" class="v-icon--start" /> Business
                </v-tab>

              </v-tabs>

              <v-window v-model="tab2">
                <v-window-item value="11">
                  <v-tabs v-model="tab3" class="mt-4" color="primary">
                    <v-tab value="12">
                      <UsersIcon stroke-width="1.5" width="20" class="v-icon--start" /> Lead
                    </v-tab>
                    <v-tab value="13">
                      <SearchIcon stroke-width="1.5" width="20" class="v-icon--start" /> Prospect
                    </v-tab>
                    <v-tab value="14">
                      <HeartHandshakeIcon stroke-width="1.5" width="20" class="v-icon--start" /> Clients
                    </v-tab>
                    <v-tab value="15">
                      <XIcon stroke-width="1.5" width="20" class="v-icon--start" /> Lost
                    </v-tab>
                  </v-tabs>


                  <v-window v-model="tab3">
                    <v-window-item value="12">
                      <v-table>
                        <thead>
                          <tr>
                            <th class="text-left text-subtitle-1">Opportunity Name</th>
                            <th class="text-left text-subtitle-1">Contact</th>
                            <th class="text-left text-subtitle-1">Contact Type</th>
                            <th class="text-left text-subtitle-1">Pipeline</th>
                            <th class="text-left text-subtitle-1">Status</th>
                            <th class="text-left text-subtitle-1">Stage</th>
                            <th class="text-left text-subtitle-1">Est Income</th>
                            <th class="text-left text-subtitle-1">Est Close Date</th>
                            <th class="text-left text-subtitle-1">Writing Agent Split</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="item in desserts" :key="item.name" class="text-lighttext">
                            <td class="text-subtitle-1 font-weight-regular">{{ item.name }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.contact }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.type }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.pipeline }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.status }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.stage }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.estIncome }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.estCloseDate }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.wrtAgentSplit }}</td>
                          </tr>
                        </tbody>
                      </v-table>
                    </v-window-item>
                    <v-window-item value="13">
                      <v-table>
                        <thead>
                          <tr>
                            <th class="text-left text-subtitle-1">Opportunity Name</th>
                            <th class="text-left text-subtitle-1">Contact</th>
                            <th class="text-left text-subtitle-1">Contact Type</th>
                            <th class="text-left text-subtitle-1">Pipeline</th>
                            <th class="text-left text-subtitle-1">Status</th>
                            <th class="text-left text-subtitle-1">Stage</th>
                            <th class="text-left text-subtitle-1">Est Income</th>
                            <th class="text-left text-subtitle-1">Est Close Date</th>
                            <th class="text-left text-subtitle-1">Writing Agent Split</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="item in desserts" :key="item.name" class="text-lighttext">
                            <td class="text-subtitle-1 font-weight-regular">{{ item.name }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.contact }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.type }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.pipeline }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.status }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.stage }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.estIncome }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.estCloseDate }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.wrtAgentSplit }}</td>
                          </tr>
                        </tbody>
                      </v-table>
                    </v-window-item>
                    <v-window-item value="14">
                      <v-table>
                        <thead>
                          <tr>
                            <th class="text-left text-subtitle-1">Opportunity Name</th>
                            <th class="text-left text-subtitle-1">Contact</th>
                            <th class="text-left text-subtitle-1">Contact Type</th>
                            <th class="text-left text-subtitle-1">Pipeline</th>
                            <th class="text-left text-subtitle-1">Status</th>
                            <th class="text-left text-subtitle-1">Stage</th>
                            <th class="text-left text-subtitle-1">Est Income</th>
                            <th class="text-left text-subtitle-1">Est Close Date</th>
                            <th class="text-left text-subtitle-1">Writing Agent Split</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="item in desserts" :key="item.name" class="text-lighttext">
                            <td class="text-subtitle-1 font-weight-regular">{{ item.name }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.contact }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.type }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.pipeline }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.status }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.stage }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.estIncome }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.estCloseDate }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.wrtAgentSplit }}</td>
                          </tr>
                        </tbody>
                      </v-table>
                    </v-window-item>
                    <v-window-item value="15">
                      <v-table>
                        <thead>
                          <tr>
                            <th class="text-left text-subtitle-1">Opportunity Name</th>
                            <th class="text-left text-subtitle-1">Contact</th>
                            <th class="text-left text-subtitle-1">Contact Type</th>
                            <th class="text-left text-subtitle-1">Pipeline</th>
                            <th class="text-left text-subtitle-1">Status</th>
                            <th class="text-left text-subtitle-1">Stage</th>
                            <th class="text-left text-subtitle-1">Est Income</th>
                            <th class="text-left text-subtitle-1">Est Close Date</th>
                            <th class="text-left text-subtitle-1">Writing Agent Split</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="item in desserts" :key="item.name" class="text-lighttext">
                            <td class="text-subtitle-1 font-weight-regular">{{ item.name }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.contact }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.type }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.pipeline }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.status }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.stage }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.estIncome }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.estCloseDate }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.wrtAgentSplit }}</td>
                          </tr>
                        </tbody>
                      </v-table>
                    </v-window-item>
                  </v-window>


                </v-window-item>

                <v-window-item value="22">
                  <v-tabs v-model="tab4" class="mt-4" color="primary">
                    <v-tab value="23">
                      <UsersIcon stroke-width="1.5" width="20" class="v-icon--start" /> Lead
                    </v-tab>
                    <v-tab value="24">
                      <SearchIcon stroke-width="1.5" width="20" class="v-icon--start" /> Prospect
                    </v-tab>
                    <v-tab value="25">
                      <HeartHandshakeIcon stroke-width="1.5" width="20" class="v-icon--start" /> Clients
                    </v-tab>
                    <v-tab value="26">
                      <XIcon stroke-width="1.5" width="20" class="v-icon--start" /> Lost
                    </v-tab>
                  </v-tabs>
                  <v-window v-model="tab4">
                    <v-window-item value="23">
                      <v-table>
                        <thead>
                          <tr>
                            <th class="text-left text-subtitle-1">Opportunity Name</th>
                            <th class="text-left text-subtitle-1">Contact</th>
                            <th class="text-left text-subtitle-1">Contact Type</th>
                            <th class="text-left text-subtitle-1">Pipeline</th>
                            <th class="text-left text-subtitle-1">Status</th>
                            <th class="text-left text-subtitle-1">Stage</th>
                            <th class="text-left text-subtitle-1">Est Income</th>
                            <th class="text-left text-subtitle-1">Est Close Date</th>
                            <th class="text-left text-subtitle-1">Writing Agent Split</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="item in desserts" :key="item.name" class="text-lighttext">
                            <td class="text-subtitle-1 font-weight-regular">{{ item.name }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.contact }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.type }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.pipeline }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.status }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.stage }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.estIncome }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.estCloseDate }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.wrtAgentSplit }}</td>
                          </tr>
                        </tbody>
                      </v-table>
                    </v-window-item>
                    <v-window-item value="24">
                      <v-table>
                        <thead>
                          <tr>
                            <th class="text-left text-subtitle-1">Opportunity Name</th>
                            <th class="text-left text-subtitle-1">Contact</th>
                            <th class="text-left text-subtitle-1">Contact Type</th>
                            <th class="text-left text-subtitle-1">Pipeline</th>
                            <th class="text-left text-subtitle-1">Status</th>
                            <th class="text-left text-subtitle-1">Stage</th>
                            <th class="text-left text-subtitle-1">Est Income</th>
                            <th class="text-left text-subtitle-1">Est Close Date</th>
                            <th class="text-left text-subtitle-1">Writing Agent Split</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="item in desserts" :key="item.name" class="text-lighttext">
                            <td class="text-subtitle-1 font-weight-regular">{{ item.name }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.contact }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.type }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.pipeline }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.status }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.stage }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.estIncome }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.estCloseDate }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.wrtAgentSplit }}</td>
                          </tr>
                        </tbody>
                      </v-table>
                    </v-window-item>
                    <v-window-item value="25">
                      <v-table>
                        <thead>
                          <tr>
                            <th class="text-left text-subtitle-1">Opportunity Name</th>
                            <th class="text-left text-subtitle-1">Contact</th>
                            <th class="text-left text-subtitle-1">Contact Type</th>
                            <th class="text-left text-subtitle-1">Pipeline</th>
                            <th class="text-left text-subtitle-1">Status</th>
                            <th class="text-left text-subtitle-1">Stage</th>
                            <th class="text-left text-subtitle-1">Est Income</th>
                            <th class="text-left text-subtitle-1">Est Close Date</th>
                            <th class="text-left text-subtitle-1">Writing Agent Split</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="item in desserts" :key="item.name" class="text-lighttext">
                            <td class="text-subtitle-1 font-weight-regular">{{ item.name }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.contact }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.type }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.pipeline }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.status }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.stage }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.estIncome }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.estCloseDate }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.wrtAgentSplit }}</td>
                          </tr>
                        </tbody>
                      </v-table>
                    </v-window-item>
                    <v-window-item value="26">
                      <v-table>
                        <thead>
                          <tr>
                            <th class="text-left text-subtitle-1">Opportunity Name</th>
                            <th class="text-left text-subtitle-1">Contact</th>
                            <th class="text-left text-subtitle-1">Contact Type</th>
                            <th class="text-left text-subtitle-1">Pipeline</th>
                            <th class="text-left text-subtitle-1">Status</th>
                            <th class="text-left text-subtitle-1">Stage</th>
                            <th class="text-left text-subtitle-1">Est Income</th>
                            <th class="text-left text-subtitle-1">Est Close Date</th>
                            <th class="text-left text-subtitle-1">Writing Agent Split</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="item in desserts" :key="item.name" class="text-lighttext">
                            <td class="text-subtitle-1 font-weight-regular">{{ item.name }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.contact }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.type }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.pipeline }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.status }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.stage }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.estIncome }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.estCloseDate }}</td>
                            <td class="text-subtitle-1 font-weight-regular">{{ item.wrtAgentSplit }}</td>
                          </tr>
                        </tbody>
                      </v-table>
                    </v-window-item>
                  </v-window>

                </v-window-item>
              </v-window>
            </v-col>
          </v-row>

        </v-card-text>
      </v-card>
    </v-col>

  </v-row>
</template>