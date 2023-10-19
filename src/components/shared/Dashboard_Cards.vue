<script  lang="ts">
import {CoinIcon, UserCircleIcon} from 'vue-tabler-icons'
  export default {
    data(){
      return {
        dashboardStats: [
          { title: 'Total Opportunities', earn: '150', text: '+20% from Last Month', icon: CoinIcon, color: 'darkText' },
          { title: 'Total Clients', earn: '256', text: '-18% from Last Month', icon: UserCircleIcon, color: 'darkText' },
          { title: 'Total Agents', earn: '86', text: '+10% from Last Month', icon: UserCircleIcon, color: 'darkText' }
        ]

      }
    }
  }
</script>

<template>

          <v-row>
            <v-col style="z-index: 2" v-for="items in dashboardStats" :key="items.id" cols="12" sm="12"  md="4" lg="4" >
              <v-card elevation="0" class="bg-primary overflow-hidden bubble-shape bubble-primary-shape">
                <v-card-text>
              <div style="z-index: 2" class=" position-relative d-flex align-center justify-space-between" >

                <div>
                  <h4 class="text-h4 text-medium-emphasis text-white">{{items.title}}</h4>

                  <h2 class="text-h2 font-weight-bolder">
                    {{items.earn}}
                  </h2>
                  <span class="text-subtitle-1 text-medium-emphasis text-white" >{{items.text}}</span>
                </div>
                <div>
                  <component :is="items.icon" stroke-width="1.5" size="89" class="text-white opacity-50" />

                </div>
              </div>
                </v-card-text>
              </v-card>
            </v-col>

          </v-row>


</template>

