<template>
  <v-chart id="chart-insurance" class="chart" :autoresize="true" :option="option" />
  <article class="message is-primary">
    <div class="message-body">
      <strong>
        2010-2018年间三个医疗保险————新型农村合作医疗保险、城镇居民医疗保险、城镇职工医疗保险在农村占有95%以上的比重。2002年，党中央明确提出各级政府要积极引导农民建立
        以大病统筹为主的新型农村合作医疗制度，积极引导和支持农民自愿参加农村合作医疗保险。十年来，‘城镇职工医疗’占比有小幅度的上升；‘保险合作医疗保险’保持70%以上的占比。
      </strong>
    </div>
  </article>
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
    orient: "horizontal",
    bottom:'0%'
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '9%',
    right: '4%',
    bottom: '40',
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
