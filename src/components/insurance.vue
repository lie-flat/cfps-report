<template>
  <v-chart class="chart" :autoresize="true" :option="option" />
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart, LineChart } from "echarts/charts";
import "echarts/lib/component/grid";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart from "vue-echarts";
import { ref, defineComponent } from "vue";

use([
  CanvasRenderer,
  LineChart,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

export default defineComponent({
  name: "Insurance",
  components: {
    VChart,
  },
  setup: () => {
    const option = ref({
      title: {
    text: 'Insurance',
    left:"center"
  },
  
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['新型农村合作医疗', '城镇居民医疗保险', '城镇职工医疗保险'],
    orient: "vertical",
    left: "left"
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '9%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['2010', '2012', '2014', '2018']
    }
  ],
  
  yAxis: [
    {
      yAxis : [ { // 纵轴标尺固定
            type : 'value',
            scale : true,
            max : 100,
            min : 0,
            splitNumber : 5,
            boundaryGap : [ 0.5, 0.5 ]
        } ],
    }
  ],
  series: [
    {
      name: '新型农村合作医疗',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [18670, 23396, 24287, 19686]
    },
    {
      name: '城镇居民医疗保险',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [2170,2329,2863,2575]
    },
    {
      name: '城镇职工医疗保险',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [2969,3650,4204,4313 ]
    },
    
  ]
      
    });
    // 怎么规定颜色

    return { option };
  },
});
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>
