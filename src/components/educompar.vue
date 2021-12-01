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
  name: "Edu_compar",
  components: {
    VChart,
  },
  setup: () => {
    const option = ref({
      title: {
        text: "2010-2018农村学历变化趋势图",
        left: "center",
      },
      tooltip: {
        trigger: "axis",
      },

      grid: {
        left: "7%",
        right: "4%",
        bottom: "40",
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      legend: {
        data: [
          "大学本科及以上",
          "高中/中专/职高/技校",
          "大专",
          "小学",
          "文盲/半文盲",
        ],
        orient: "horizontal",
        // // x: "bottom",
        // y:"bottom"
        bottom: "0%",
        // pageTextStyle: {
        //   fontSize: 2,
        // },
      },
      xAxis: {
        type: "category",
        boundaryGap: true,
        data: ["2010", "2012", "2014", "2018"],
        name:'年份'
        // bottom:"50px"
        
      },
      yAxis: {
        type: "value",
        name:'百分比%'
      },
      series: [
        {
          name: "大学本科及以上",
          type: "line",

          data: [ 3.87981821,  3.28161323,  3.41594106, 12.16822872],
        },
        {
          name: "高中/中专/职高/技校",
          type: "line",

          data: [19.07086349, 18.10563875, 18.40673141, 24.08442939],
        },
        {
          name: "大专",
          type: "line",

          data: [ 5.96280088,  5.50359518,  5.82300737, 12.97944396],
        },
        {
          name: "小学",
          type: "line",

          data: [29.34270325, 31.01043412, 32.74028801, 28.33740254],
        },
        {
          name: "文盲/半文盲",
          type: "line",

          data: [41.74381417, 42.09871871, 39.61403215, 22.43049539],
        },
      ],
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
