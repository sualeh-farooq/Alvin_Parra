<script setup lang="ts">
import {ref} from "vue";
import {MoodSmileIcon, ShoppingCartIcon , WalletIcon ,  FileDescriptionIcon, UserCircleIcon , CoinIcon } from "vue-tabler-icons";

const fourcards = ref([
  { earn: '73', text: 'Total Opportunities', icon: UserCircleIcon, color: 'primary' },
  { earn: '27', text: 'Total Clients', icon: WalletIcon, color: 'primary' },
  { earn: '29', text: 'Total Prospects', icon: MoodSmileIcon, color: 'primary' },
]);
</script>

<template>
  <v-row>
    <v-col cols="12" sm="12" md="6" lg="4" v-for="(card4, i) in fourcards" :value="card4">
      <v-card elevation="0">
        <v-card variant="outlined" class="overflow-hidden">
          <v-row>
            <v-col cols="4" :class="'d-flex align-center justify-center pr-0 bg-' + card4.color">
              <div class="d-flex align-center justify-center py-7">
                <component :is="card4.icon" stroke-width="1.5" size="60" class="flex-shrink-0 text-white" />
              </div>
            </v-col>
            <v-col cols="8">
              <div class="py-7">
                <h4 class="text-h4 font-weight-bolder">
                  {{card4.text}}
                </h4>

                <h3 class="text-h3 text-medium-emphasis text-darkText">{{card4.earn}}</h3>


              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">

</style>