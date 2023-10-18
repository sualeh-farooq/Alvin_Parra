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
      dobDate: false,

      existingContacts: [
        'Contact One',
        'Contact Two',
        'Contact Three',
        'Contact Four',
        'Contact Five',
      ],
      googleContacts: [
        'Google Contact One',
        'Google Contact Two',
        'Google Contact Three',
        'Google Contact Four',
        'Google Contact Five',
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
      ],
      drinks: [
        { id: 1, name: 'None' },
        { id: 2, name: 'Tea' },
        { id: 3, name: 'Coffee' }
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
            <h3 class="text-h3">Add Contact</h3>
          </div>
        </v-card-item>
        <v-divider></v-divider>
        <v-card-text>
          <Form>

            <v-row class="mb-3" >
              <v-col cols="12" md="6">
                <v-autocomplete label="Find Existing from CRM"  :items="existingContacts"
                                color="primary" variant="outlined" hide-details></v-autocomplete>
                <v-btn class="mt-3" color="primary" >Use / Edit this Contact  <ArrowUpIcon size="20" class="mx-2" /> </v-btn>

              </v-col>
              <v-col cols="12" md="6">
                <v-autocomplete label="Search Google Contacts"  :items="googleContacts"
                                color="primary" variant="outlined" hide-details></v-autocomplete>
                <v-btn class="mt-3" color="primary" >Import this Google Contact  <ArrowUpIcon size="20" class="mx-2" /> </v-btn>

              </v-col>

            </v-row>

            <v-divider></v-divider>

            <v-row>
              <v-col cols="12">
                <div class="mt-3">
                  <h2 class="text-h3 text-disabled">Contact Details</h2>
                </div>
              </v-col>



              <v-col cols="12" >
                <div>
                  <v-radio-group inline>
                    <v-radio label="Individual" value="individual"></v-radio>
                    <v-radio label="Business" value="business"></v-radio>
                  </v-radio-group>
                  <!-- <p class="mt-3">Selected: {{ selectedRadioValues }}</p> -->
                </div>

              </v-col>

              <v-col cols="12" md="6" lg="4">
                <v-text-field type="text" label="First Name" variant="outlined"
                              class="mb-3"></v-text-field>
              </v-col>
              <v-col cols="12" md="6" lg="4">
                <v-text-field type="text" label="Last Name" variant="outlined"
                              class="mb-3"></v-text-field>
              </v-col>
              <v-col cols="12" md="6" lg="4">
                <v-text-field type="email" label="Email" variant="outlined"
                              class="mb-3"></v-text-field>
              </v-col>
              <v-col cols="12" md="6" lg="4">
                <v-text-field type="number" label="Phone Number" variant="outlined"
                              class="mb-3"></v-text-field>
              </v-col>

              <v-col cols="12" md="6" lg="4">
                <div @click="followUpDate = true" v-if="!followUpDate">
                  <v-text-field type="text" label="Next Follow up" variant="outlined"
                                class="mb-3"></v-text-field>

                </div>
                <div v-else>
                  <v-text-field type="date" label="Next Follow up" variant="outlined"
                                class="mb-3"></v-text-field>
                </div>
              </v-col>
              <v-col cols="12" md="6" lg="4">
                <div @click="dobDate = true" v-if="!dobDate">
                  <v-text-field type="text" label="Date of Birth" variant="outlined"
                                class="mb-3"></v-text-field>

                </div>
                <div v-else>
                  <v-text-field type="date" label="Date of Birth" variant="outlined"
                                class="mb-3"></v-text-field>
                </div>
              </v-col>

              <v-col cols="12">
                <v-textarea  filled auto-grow label="Street Address" rows="2"
                            row-height="20" color="primary" variant="outlined"></v-textarea>
              </v-col>

              <v-col cols="12" md="6" lg="4">
                <v-text-field type="text" label="City" variant="outlined"
                              class="mb-3"></v-text-field>
              </v-col>


              <v-col cols="12" md="6" lg="4">
                <v-text-field type="text" label="State" variant="outlined"
                              class="mb-3"></v-text-field>
              </v-col>


              <v-col cols="12" md="6" lg="4">
                <v-text-field type="text" label="Zipcode" variant="outlined"
                              class="mb-3"></v-text-field>
              </v-col>

              <v-col cols="12" md="6" lg="4">
                <v-autocomplete label="Source for Contact" v-model="opportunitySourceVal"
                                :items="opportunitySources"
                                color="primary" variant="outlined" hide-details></v-autocomplete>
              </v-col>

              <v-col cols="12" md="6" lg="4">
                <v-text-field type="text" label="Reffered By" variant="outlined"
                              class="mb-3"></v-text-field>
              </v-col>









            </v-row>

            <v-divider></v-divider>

            <v-col cols="12" >
<div class="d-flex gap-2" >
              <v-btn  color="primary">Save & Close
              </v-btn>
              <v-btn  color="primary">Save & Add Contact
              </v-btn>
</div>
            </v-col>

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
