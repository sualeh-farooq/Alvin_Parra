<script setup lang="ts">
import {ref} from 'vue';
// common components

import UserProfileTab from '@/components/agent/UserProfileTab.vue';
import ChangePasswordTab from '@/components/agent/ChangePasswordTab.vue'
import LicensingTab from '@/components/agent/LicensingTab.vue'
import EducationTab from '@/components/agent/EducationTab.vue'
import AgentCodeTab from '@/components/agent/AgentCodeTab.vue'
import BankingTab from '@/components/agent/BankingTab.vue'
import CommisionTab from "@/components/agent/CommisionTab.vue";


const tab = ref('tab-profile');
</script>

<template>
  <v-row>
    <v-col cols="12">
      <v-card variant="flat">
        <v-card variant="outlined">
          <v-card-item>
            <v-card-title>Account Settings</v-card-title>
          </v-card-item>
          <v-divider></v-divider>
          <div class="my-3">
            <v-row class="d-flex flex-row">
              <v-col cols="12" sm="4" class="border-right pr-sm-0 py-sm-0">
                <v-card-text>
                  <v-tabs v-model="tab" direction="vertical" color="primary">
                    <v-tab value="tab-profile" rounded="md" class="text-left overflow-hidden" height="70">
                      <UserIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                      <div>
                        <div> Personal Info</div>
                        <span class="text-subtitle-2 text-disabled font-weight-medium d-block">Profile Settings</span>
                      </div>
                    </v-tab>

                    <v-tab value="tab-change-password" rounded="md" class="mb-3 text-left overflow-hidden" height="70">
                      <KeyIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                      <div>
                        <div>Change Password</div>
                        <span
                            class="text-subtitle-2 text-disabled font-weight-medium d-block">Update Profile Security</span>
                      </div>
                    </v-tab>
                    <v-tab value="tab-subscription" rounded="md" class="mb-3 text-left overflow-hidden" height="70">
                      <KeyIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                      <div>
                        <div>Subscription</div>
                        <span
                            class="text-subtitle-2 text-disabled font-weight-medium d-block">Subscription Settings</span>
                      </div>
                    </v-tab>
                  </v-tabs>
                </v-card-text>
              </v-col>
              <v-col cols="12" sm="8" class="pl-sm-0 py-sm-0">
                <v-card-text>
                  <v-window v-model="tab">
                    <v-window-item value="tab-profile">
                      <UserProfileTab/>
                    </v-window-item>
                    <v-window-item value="tab-change-password">
                      <ChangePasswordTab/>
                    </v-window-item>

                  </v-window>
                </v-card-text>
              </v-col>
            </v-row>
          </div>

          <v-divider></v-divider>

        </v-card>
      </v-card>
    </v-col>
  </v-row>
</template>
