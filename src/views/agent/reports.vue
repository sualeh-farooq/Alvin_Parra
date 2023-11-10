<script >
export default {
  data(){
    return {
      tab: null
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
            <h3 class="text-h3 w-100">Reports</h3>

            <div class=" w-25">
              <v-text-field class="my-2 w-100 " type="text" variant="outlined" persistent-placeholder
                            placeholder="Search Requests" v-model="searchValue" density="compact" hide-details
                            prepend-inner-icon="mdi-magnify"/>
            </div>
          </div>
        </v-card-item>
        <v-divider></v-divider>
        <v-card-text>
          <v-row>
            <v-col>


              <div style="display: flex; justify-content: space-between;">
                <div>
                  <v-tabs class="mb-4" v-model="tab" color="primary">
                    <v-tab value="pending">
                      <CalendarIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                      Policy Dates
                    </v-tab>
                    <v-tab value="approved">
                      <CakeIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                      Birthday
                    </v-tab>
                    <v-tab value="rejected">
                      <ChartCirclesIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                      Turning 65
                    </v-tab>

                  </v-tabs>
                </div>

              </div>
            </v-col>
          </v-row>

        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">

</style>