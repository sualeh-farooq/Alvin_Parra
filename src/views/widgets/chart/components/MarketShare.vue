<script setup lang="ts">
import { computed , ref } from 'vue';
import { getPrimary } from '../../../forms/charts/apex-chart/UpdateColors';
const select = ref({ state: 'Today', abbr: 'FL' });
const items = [
  { state: 'Today', abbr: 'FL' },
  { state: 'This Month', abbr: 'GA' },
  { state: 'This Year', abbr: 'NE' }
];
const chartOptions1 = computed(() => {
  return {
    chart: {
      type: 'area',
      height: 200,
      fontFamily: `inherit`,
      foreColor: '#a1aab2',
      sparkline: {
        enabled: true
      }
    },
    colors: ['#f44336', '#f44336' ,  getPrimary.value],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 80, 100]
      }
    },
    legend: {
      show: true
    },


    xaxis: {
      labels: {
        show: true
      }
    },

    yaxis: {
      min: 1,
      max: 100,
      labels: {
        show: true, formatter: function (value) {
          return value + " Y-axis Label"; // Change the label text as needed
        }

      }
    },
    tooltip: {
      theme: 'dark'
    }
  };
});

// chart 1
const lineChart1 = {
  series: [
    {
      name: 'Youtube',
      data: [10, 90, 65, 85, 40, 80, 30]
    },

  ]
};
</script>

<template>
  <v-card elevation="0" class="mb-6">
    <v-card variant="outlined">
      <v-card-text>
        <div class="d-sm-flex align-center justify-space-between">
          <div>
            <h3 class="text-h3 mb-1">Agents Added</h3>
            <span class="text-subtitle-1 text-medium-emphasis mb-5">Agents Stats Added by Agency</span>
          </div>
          <v-col cols="12" sm="3">
            <v-select
              color="primary"
              variant="outlined"
              hide-details
              v-model="select"
              :items="items"
              item-title="state"
              item-value="abbr"
              label="Select"
              persistent-hint
              single-line
            >
            </v-select>
          </v-col>
        </div>


      </v-card-text>
      <apexchart type="area" height="200" :options="chartOptions1" :series="lineChart1.series"> </apexchart>
    </v-card>
  </v-card>
</template>
