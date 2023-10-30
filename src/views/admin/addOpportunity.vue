<script>
import {ref, computed} from 'vue';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import VeeValidation from '@/components/forms/validation/VeeValidation.vue';
import {Form} from 'vee-validate';

const page = ref({title: 'FormValidation Page'});
const breadcrumbs = ref([
  {
    text: 'Dashboard',
    disabled: false,
    href: '#'
  },
  {
    text: 'FormValidation Page',
    disabled: true,
    href: '#'
  }
]);

const email = ref('');
const firstname = ref('');
const lastname = ref('');
const rules = ref({
  required: (value) => !!value || 'Required.',
  counter: (value) => value.length <= 20 || 'Max 20 characters',
  email: (value) => {
    const pattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || 'Invalid e-mail.';
  },
  firstname: (value) => value.length > 2 || 'More than two letters required',
  lastname: (value) => value.length > 2 || 'More than two letters required'
});
const password = ref('');

const pwdrules = ref({
  required: (value) => !!value || 'Required.',
  min: (v) => v.length >= 8 || 'Min 8 characters',
  emailMatch: () => `The email and password you entered don't match`
});

//Checkbox radio button
const drinks = ref([
  {id: 1, name: 'None'},
  {id: 2, name: 'Tea'},
  {id: 3, name: 'Coffee'}
]);

const selectedValues = ref([]);
const selectedRadioValues = ref([]);
const myform = ref(null);
const myRadioform = ref(null);

const validateCheckbox = computed(() => {
  return [selectedValues.value.length > 0 || 'Choose at-list one Drink'];
});

const validateRadio = computed(() => {
  return [selectedRadioValues.value.length > 0 || 'Choose at-list one Drink'];
});

function submit() {
  myform.value.validate();
}

function submitRadio() {
  myRadioform.value.validate();
}

function isLast(index) {
  return drinks.value.length - 1 === index;
}

export default {
  name: 'Add Opportunity Page',
  data() {
    return {
      opportunityDate: false,
      followUpDate: false,
      closingTarget: false,

      leadStatus: [
        'Lead Status One',
        'Lead Status Two',
        'Lead Status Three',
        'Lead Status Four',
        'Lead Status Five',
      ],
      Pipelines: [
        'Pipeline One',
        'Pipeline Two',
        'Pipeline Three',
        'Pipeline Four',
        'Pipeline Five',
      ],
      pipelineStages: [
        'Lead - Interested',
        'Prospect - Quote',
        'Prospect - App Signed',
        'Prospect - Underwriting',
        'Client Won - Won',
        'Lost',
      ],
      Temprature: [
        'Cold',
        'Hot',
      ],
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
      ]
    }
  }
}

const statusValue = ref(['Lead Status One']);
const pipelineStage = ref(['Lead - Interested'])
const tempVal = ref(['Cold'])
const opportunitySourceVal = ref(['Existing'])
</script>
<template>
  <v-row>
    <v-col col="12">
      <v-card variant="outlined" elevation="0" class="withbg">
        <v-card-item>
          <div class="d-sm-flex align-center justify-space-between">
            <h3 class="text-h3">Add Opportunity</h3>
          </div>
        </v-card-item>
        <v-divider></v-divider>
        <v-card-text>
          <Form>

            <v-row>
              <v-col cols="12" md="4">
                <v-autocomplete label="Lead Status" v-model="statusValue" :items="leadStatus"
                                color="primary" variant="outlined" hide-details></v-autocomplete>

              </v-col>
<!--              <v-col cols="12" md="4">-->
<!--                <div class="mt-6">-->
<!--                                    <span>Contact not found ? <RouterLink to="/admin/addContact">Create New Contact-->
<!--                                        </RouterLink>-->
<!--                                    </span>-->

<!--                </div>-->

<!--              </v-col>-->


              <v-col cols="12" md="4">
                <div @click="opportunityDate = true" v-if="!opportunityDate">
                  <v-text-field type="text" label="Opportunity Created Date" variant="outlined"
                                class="mb-3"></v-text-field>

                </div>
                <div v-else>
                  <v-text-field type="date" label="Opportunity Created Date" variant="outlined"
                                class="mb-3"></v-text-field>
                </div>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field type="text" label="Opportunity Name"
                              placeholder="<lastname> <pipeline> <date>" variant="outlined"
                              class="mb-3"></v-text-field>
              </v-col>
            </v-row>
            <v-divider></v-divider>

            <v-row>
              <v-col cols="12">
                <div class="mt-3">
                  <h2 class="text-h3 ">Pipeline Details</h2>
                </div>
              </v-col>

              <v-col cols="12" md="6" lg="3">
                <v-autocomplete label="Select Pipeline Stage" v-model="pipelineStage"
                                :items="pipelineStages" color="primary" variant="outlined"
                                hide-details></v-autocomplete>

              </v-col>

              <v-col cols="12" md="6" lg="3">
                <v-autocomplete label="Lead Status" v-model="statusValue" :items="leadStatus"
                                color="primary" variant="outlined" hide-details></v-autocomplete>
              </v-col>

              <v-col cols="12" md="6" lg="3">
                <div @click="followUpDate = true" v-if="!followUpDate">
                  <v-text-field type="text" label="Next Follow up" variant="outlined"
                                class="mb-3"></v-text-field>

                </div>
                <div v-else>
                  <v-text-field type="date" label="Next Follow up" variant="outlined"
                                class="mb-3"></v-text-field>
                </div>
              </v-col>

              <v-col cols="12" md="6" lg="3">
                <div @click="closingTarget = true" v-if="!closingTarget">
                  <v-text-field type="text" label="Est Closing Target" variant="outlined"
                                class="mb-3"></v-text-field>

                </div>
                <div v-else>
                  <v-text-field type="date" label="Est Closing Target" variant="outlined"
                                class="mb-3"></v-text-field>
                </div>
              </v-col>


              <v-col cols="12" md="6" lg="3">
                <v-autocomplete label="Tempera" v-model="tempVal"
                                :items="Temprature" color="primary" variant="outlined"
                                hide-details></v-autocomplete>

              </v-col>

              <v-col cols="12" md="6" lg="3">
                <v-autocomplete label="Existing Source of Opportunity" v-model="opportunitySourceVal"
                                :items="opportunitySources"
                                color="primary" variant="outlined" hide-details></v-autocomplete>
              </v-col>

              <v-col cols="12" md="6" lg="3">
                <v-text-field type="text" label="Reffered By" variant="outlined"
                              class="mb-3"></v-text-field>
              </v-col>


            </v-row>

            <v-divider></v-divider>

            <v-row>
              <v-col cols="12">
                <div class="mt-3">
                  <h2 class="text-h3 ">Agent Details</h2>
                </div>
              </v-col>
              <v-col cols="12" md="6" lg="3">
                <v-text-field type="text" label="Writing Agent" variant="outlined"
                              class="mb-3"></v-text-field>
              </v-col>

              <v-col cols="12" md="6" lg="3">
                <v-autocomplete label="Writing Agent Split"
                                :items="writingAgentSplit"
                                color="primary" variant="outlined" hide-details></v-autocomplete>
              </v-col>

              <v-col cols="12" md="6" lg="3">
                <v-text-field type="text" label="Agent 2" color="primary" variant="outlined"></v-text-field>
              </v-col>
              <v-col cols="12" md="6" lg="3">
                <v-autocomplete label="Agent 2 Split"
                                :items="agent2Split"
                                color="primary" variant="outlined" hide-details></v-autocomplete>
              </v-col>
              <v-col cols="12" md="6" lg="3">
                <v-autocomplete label="Service Type"
                                :items="serviceType"
                                color="primary" variant="outlined" hide-details></v-autocomplete>
              </v-col>
              <v-col cols="12" md="6" lg="3">
                <v-autocomplete label="Carrier"
                                :items="carrier"
                                color="primary" variant="outlined" hide-details></v-autocomplete>
              </v-col>
              <v-col cols="12" md="6" lg="3">
                <v-autocomplete label="Product"
                                :items="product"
                                color="primary" variant="outlined" hide-details></v-autocomplete>
              </v-col>
              <v-col cols="12" md="6" lg="3">
                <v-text-field type="text" label="Est Annual Premium" color="primary" variant="outlined"></v-text-field>
              </v-col>
              <v-col cols="12" md="6" lg="3">
                <v-text-field type="select" :items="agent2Split" label="Opportunity Income" color="primary" variant="outlined"></v-text-field>
              </v-col>

              <v-col cols="12" md="12">
           


                <v-btn class="mx-1" color="primary">Save Opportunity
                </v-btn>

              </v-col>

            </v-row>
          </Form>

        </v-card-text>
      </v-card>
    </v-col>
  </v-row>


  <!-- <v-text-field label="Last Name" variant="outlined" class="mb-3"></v-text-field> -->

  <!-- <v-row>
      <v-col cols="12" md="6" lg="4">
          <UiParentCard title="On Type">
              <Form>
                  <v-text-field label="First Name" variant="outlined" class="mb-3"></v-text-field>
                  <v-text-field label="Last Name" variant="outlined" class="mb-3"></v-text-field>
                  <br />
                  <v-btn color="primary" type="submit">Submit</v-btn>
              </Form>
          </UiParentCard>
      </v-col>
  </v-row> -->
</template>
