<script setup lang="ts">
import { ref, computed } from 'vue';
import { getPrimary } from '@/views/forms/charts/apex-chart/updateColors';

const select = ref({ state: 'This Month', abbr: 'FL' });
const items = [
  { state: 'This Month', abbr: 'GA' },
  { state: 'Last 6 Months', abbr: 'NE' },
  { state: 'Last Year', abbr: 'AU' }
];

// chart 1
const chartOptions1 = computed(() => {
  return {
    chart: {
      type: 'bar',
      height: 480,
      fontFamily: `inherit`,
      foreColor: '#a1aab2',
      stacked: true
    },
    colors: [getPrimary.value],
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0
          }
        }
      }
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%'
      }
    },
    xaxis: {
      type: 'category',
      categories: ['Annuity', 'Life', 'AUM', 'Medicare', 'Health', 'Trust', 'LTC/DI', 'Supplemental', 'Real Estate', 'Other']
    },
    legend: {
      show: true,
      fontFamily: `'Roboto', sans-serif`,
      position: 'bottom',
      offsetX: 20,
      labels: {
        useSeriesColors: false
      },
      markers: {
        width: 16,
        height: 16,
        radius: 5
      },
      itemMargin: {
        horizontal: 15,
        vertical: 8
      }
    },
    fill: {
      type: 'solid'
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      show: true
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
      name: 'Total Opportunities',
      data: [35, 88, 56, 20, 80, 70, 52, 20, 35, 45]
    },

  ]
};
</script>

<template>
  <v-card elevation="0">
    <v-card variant="outlined">
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="9">
            <h3 class="text-h3 font-weight-bold">Total Opportunities By Pipeline</h3>
            <!-- <h3 class="text-h3 mt-1">$2,324.00</h3> -->
          </v-col>
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
        </v-row>
        <div class="mt-4">
          <apexchart type="bar" height="480" :options="chartOptions1" :series="lineChart1.series"> </apexchart>
        </div>
      </v-card-text>
    </v-card>
  </v-card>
</template>
