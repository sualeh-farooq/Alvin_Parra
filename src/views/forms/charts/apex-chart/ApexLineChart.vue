<script setup lang="ts">
import { computed } from 'vue';
import { getPrimary } from './UpdateColors';

const chartOptions = computed(() => {
  return {
    chart: {
      type: 'line',
      height: 350,
      fontFamily: `inherit`,
      foreColor: '#a1aab2'
    },
    colors: [getPrimary.value],

    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    tooltip: {
      theme: 'dark',
      y: {
        formatter: function (val: any) {
          return '$ ' + val + ' thousands';
        }
      }
    }
  };
});
const lineChart = {
  series: [
    {
      name: 'Desktops',
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }
  ]
};
</script>

<template>
  <!-- ---------------------------------------------------- -->
  <!-- Line Chart -->
  <!-- ---------------------------------------------------- -->

  <apexchart type="line" height="350" :options="chartOptions" :series="lineChart.series"> </apexchart>
</template>
