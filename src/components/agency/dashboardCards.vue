<script setup lang="ts">
import { shallowRef } from 'vue';
import { FileDescriptionIcon, UserCircleIcon , CoinIcon } from 'vue-tabler-icons';

const ninecards = shallowRef([
  { earn: '264', text: 'Total Opportunities', icon: CoinIcon, color: 'darkText' , result: '+20% from Last Month'},
  { earn: '230', text: 'Total Clients', icon: UserCircleIcon, color: 'darkText', result: '-10% from Last Month' },
  { earn: '64', text: 'Total Agents', icon: FileDescriptionIcon, color: 'darkText' , result: '+8% from Last Month'},
]);
</script>

<template>
  <v-row>
    <v-col cols="12" sm="6" lg="4" md="6" v-for="(card9, i) in ninecards" :value="card9" :key="i">
      <v-card elevation="0" :class="' overflow-hidden  position-relative bg-' + card9.color">
        <v-card variant="outlined" class="text-center border-0">
          <v-card-text>


            <div class="text-left" >
              <h4 class="text-h4 text-medium-emphasis text-white">{{card9.text}}</h4>

              <h2 class="text-h2 font-weight-bolder">
                {{card9.earn}}
              </h2>
              <span class="text-subtitle-1 text-medium-emphasis text-white" >{{card9.result}}</span>
            </div>

          </v-card-text>
          <component :is="card9.icon" stroke-width="2" size="100" class="text-white opacity-50 icon-scale" />

        </v-card>
      </v-card>
    </v-col>
  </v-row>
</template>
