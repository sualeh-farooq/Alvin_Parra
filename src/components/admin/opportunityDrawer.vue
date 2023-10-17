<script  lang="ts">

export default {
  name: 'OpportunityDrawer' ,
  props: {
    drawer: Boolean
  },
  data(){
    return {
        rejectedDialog: null,
      editName: 'John Doe',
      editContact: 'John Smith',
      editPipeline: 'Life Insurance',
      editLeadStatus: 'Lead One',
      editStage: 'Prospect - Quote',
      editTempLevel: 'Cold',
      editType: 'Individual',
      drawer: false,
      followUpDate: false,
      closingTarget: false,

      opportunitySources: [
        'Exisiting',
        'Lead',
        'Social'
      ],
      writingAgentSplit: [
        '100%',
        '90%',
        '80%'
      ],
      agent2Split: [
        '100%',
        '90%',
        '80%'
      ],
      serviceType: [
        'Service One',
        'Service Two',
        'Service Three',
      ],
      carrier: [
        'Carrier One',
        'Carrier Two',
        'Carrier Three'
      ],
      product: [
        'Product One',
        'Product Two',
        'Product Three'
      ],
      pipeline: [
        'Life Insurance',
        'AUM',
        'Medicare',
      ],
      leadStatus: [
        'Lead One',
        'Lead Two',
        'Lead Three',
      ],
      stage: [
        'Lead - Interested',
        'Prospect - Quote',
        'Prospect - Presentation',
        'Prospect - Review',
        'Client - Won',
        'Lost',
      ],
      level: [
        'Cold',
        'Hot'
      ],
      type: [
        'Individual',
        'Business'
      ]
    }
  }
}
</script>

<template>
  <!--- Opportunity View Drawer on Action Button Click in Table -->
  <v-navigation-drawer color="surface" :width="700" location="right" :value="drawer" temporary>
    <div class="ma-3">

      <div class="d-flex align-center justify-space-between ">
        <h3>Opportunity Details</h3>
        <div class="d-flex gap-2">
          <!-- <v-btn color="primary">
              <EditIcon size="20" /> Edit
          </v-btn> -->


          <v-dialog width="600" v-model="rejectedDialog">
            <template v-slot:activator="{ props }">
              <v-btn color="primary" v-bind="props">
                <EditIcon size="20" /> Edit
              </v-btn>
            </template>
            <v-card class="overflow-auto w-100">
              <div class="d-flex border w-100">
                <v-card-title class="pa-5 border w-100 d-flex align-center justify-space-between">
                  Edit Opportunity Details
                </v-card-title>

              </div>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col md="6" sm="12" cols="12">
                      <v-text-field v-model="editName" type="text" label="Name" variant="outlined"
                                    class="text-input"></v-text-field>
                    </v-col>
                    <v-col md="6" sm="12" cols="12">
                      <v-text-field v-model="editContact" type="text" label="Contact"
                                    variant="outlined" class="text-input"></v-text-field>
                    </v-col>

                    <v-col md="6" sm="12" cols="12">
                      <v-autocomplete label="Pipeline" v-model="editPipeline" :items="pipeline"
                                      color="primary" variant="outlined" hide-details></v-autocomplete>
                    </v-col>

                    <v-col md="6" sm="12" cols="12">
                      <v-autocomplete label="Lead Status" :items="leadStatus" v-model="editLeadStatus"
                                      color="primary" variant="outlined" hide-details></v-autocomplete>
                    </v-col>

                    <v-col md="6" sm="12" cols="12">
                      <v-autocomplete label="Stage" :items="stage" v-model="editStage" color="primary"
                                      variant="outlined" hide-details></v-autocomplete>
                    </v-col>

                    <v-col md="6" sm="12" cols="12">
                      <v-autocomplete label="Level" :items="level" v-model="editTempLevel"
                                      color="primary" variant="outlined" hide-details></v-autocomplete>
                    </v-col>

                    <v-col md="6" sm="12" cols="12">
                      <v-autocomplete label="Type" :items="type" v-model="editType" color="primary"
                                      variant="outlined" hide-details></v-autocomplete>
                    </v-col>


                  </v-row>

                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" text @click="rejectedDialog = false"> Close
                </v-btn>
                <v-btn color="success" text @click="rejectedDialog = false"> Update </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-btn color="error">
            <TrashIcon size="20" />Delete
          </v-btn>
        </div>
      </div>
      <v-row class="mt-3">
        <v-col cols="12" lg="4" md="6" sm="12">
          <v-label class="font-weight-medium">Name
          </v-label>
          <p>John Doe</p>
        </v-col>
        <v-col cols="12" lg="4" md="6" sm="12">
          <v-label class="font-weight-medium">Contact
          </v-label>
          <p>John Smith</p>
        </v-col>
        <v-col cols="12" lg="4" md="6" sm="12">
          <v-label class="font-weight-medium">Pipeline</v-label>
          <p>Life Insurance</p>
        </v-col>
        <v-col cols="12" lg="4" md="6" sm="12">
          <v-label class="font-weight-medium">Lead Status</v-label>
          <p>Lead One</p>
        </v-col>
        <v-col cols="12" lg="4" md="6" sm="12">
          <v-label class="font-weight-medium">Stage</v-label>
          <p>Prospect Quote</p>
        </v-col>
        <v-col cols="12" lg="4" md="6" sm="12">
          <v-label class="font-weight-medium">Temp Level</v-label>
          <p>Cold</p>
        </v-col>
        <v-col cols="12" lg="4" md="6" sm="12">
          <v-label class="font-weight-medium">Type</v-label>
          <p>Individual</p>
        </v-col>
      </v-row>


      <v-row>
        <v-col cols="12" md="6" lg="4">
          <div @click="followUpDate = true" v-if="!followUpDate">
            <v-text-field type="text" label="Next Follow up" variant="outlined"
                          class="text-input"></v-text-field>

          </div>
          <div v-else>
            <v-text-field type="date" label="Next Follow up" variant="outlined"
                          class="text-input"></v-text-field>
          </div>
        </v-col>

        <v-col cols="12" md="6" lg="4">
          <div @click="closingTarget = true" v-if="!closingTarget">
            <v-text-field type="text" label="Est Closing Target" variant="outlined"
                          class="text-input"></v-text-field>

          </div>
          <div v-else>
            <v-text-field type="date" label="Est Closing Target" variant="outlined"
                          class="text-input"></v-text-field>
          </div>
        </v-col>


        <v-col cols="12" md="6" lg="4">
          <v-autocomplete label="Service Type" :items="serviceType" color="primary" variant="outlined"
                          hide-details></v-autocomplete>
        </v-col>

        <v-col cols="12" md="6" lg="4">
          <v-autocomplete label="Carrier" :items="carrier" color="primary" variant="outlined"
                          hide-details></v-autocomplete>
        </v-col>
        <v-col cols="12" md="6" lg="4">
          <v-autocomplete label="Product" :items="product" color="primary" variant="outlined"
                          hide-details></v-autocomplete>
        </v-col>
        <v-col cols="12" md="6" lg="4">
          <v-text-field type="text" label="Est Annual Premium" color="primary" class="text-input"
                        variant="outlined"></v-text-field>
        </v-col>
        <v-col cols="12" md="6" lg="4">
          <v-text-field type="select" :items="agent2Split" label="Opportunity Income" color="primary"
                        variant="outlined"></v-text-field>
        </v-col>
        <v-col cols="12" md="6" lg="4">
          <v-text-field type="text" label="Writing Agent" variant="outlined" class="text-input"></v-text-field>
        </v-col>
        <v-col cols="12" md="6" lg="4">
          <v-autocomplete label="Writing Agent Split" :items="writingAgentSplit" color="primary"
                          variant="outlined" hide-details></v-autocomplete>
        </v-col>

        <v-col cols="12" md="6" lg="4">
          <v-text-field type="text" label="Agent 2" color="primary" variant="outlined"
                        class="text-input"></v-text-field>
        </v-col>
        <v-col cols="12" md="6" lg="4">
          <v-autocomplete label="Agent 2 Split" :items="agent2Split" color="primary" variant="outlined"
                          hide-details></v-autocomplete>
        </v-col>
        <v-col cols="12" md="6" lg="4">
          <v-autocomplete label="Exist Source of Opportunity" :items="opportunitySources" color="primary" variant="outlined" hide-details></v-autocomplete>
        </v-col>

        <v-col cols="12" md="6" lg="4">
          <v-text-field type="text" label="Reffered By" variant="outlined" class="text-input"></v-text-field>
        </v-col>

      </v-row>


      <v-row>
        <v-col cols="12">

          <div class="d-flex align-center justify-space-between">
            <card-title>Notes</card-title>
            <v-btn color="primary">Add Note</v-btn>

          </div>

          <div class="border my-2">
            <ul>

              <li>Note 1</li>
              <li>Note 2</li>
              <li>Note 3</li>
            </ul>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">

          <div class="d-flex align-center justify-space-between">
            <card-title>Tasks</card-title>
            <v-btn color="primary">Add Task</v-btn>

          </div>

          <div class="border my-2">
            <ul>

              <li>Task 1</li>
              <li>Task 2</li>
              <li>Task 3</li>
            </ul>
          </div>

        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">

          <div class="d-flex align-center justify-space-between">
            <card-title>Files</card-title>
            <v-btn color="primary">Add File</v-btn>

          </div>

<!--          <div class="border my-2">-->
<!--            <v-simple-table>-->
<!--              <template v-slot:default>-->
<!--                <thead>-->
<!--                <tr>-->
<!--                  <th class="text-left">-->
<!--                    Name-->
<!--                  </th>-->
<!--                  <th class="text-left">-->
<!--                    Calories-->
<!--                  </th>-->
<!--                </tr>-->
<!--                </thead>-->
<!--              </template>-->
<!--            </v-simple-table>-->
<!--          </div>-->

        </v-col>
      </v-row>

    </div>

  </v-navigation-drawer>
</template>

<style scoped lang="scss">

</style>