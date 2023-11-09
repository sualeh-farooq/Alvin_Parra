<script >
export default{
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
              <h3 class="text-h3 w-100">Products</h3>

            </div>
          </v-card-item>
          <v-divider></v-divider>
          <v-card-text>
            <div style="display: flex; justify-content: space-between;">
              <div>
                <v-tabs class="mb-4" v-model="tab" color="primary">
                  <v-tab value="pending">
                    <HomeCogIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                    Services
                  </v-tab>
                  <v-tab value="approved">
                    <BriefcaseIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                    Carriers
                  </v-tab>
                  <v-tab value="rejected">
                    <BoxIcon stroke-width="1.5" width="20" class="v-icon--start"/>
                    Products
                  </v-tab>

                </v-tabs>
              </div>

            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
</template>

<style scoped lang="scss">

</style>