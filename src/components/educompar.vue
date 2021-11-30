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
        bottom: "3%",
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      legend: {
        data: ["大学本科及以上", "高中/中专/职高/技校", "大专","小学","文盲/半文盲"],
        orient: "vertical",
        left: "left",
      },
      xAxis: {
        type: "category",
        boundaryGap: true,
        data: ["2010", "2012", "2014", "2018"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "大学本科及以上",
          type: "line",

          data: [922, 607, 816, 1454],
        },
        {
          name: "高中/中专/职高/技校",
          type: "line",

          data: [4532, 3349, 4397, 3058],
        },
        {
          name: "大专",
          type: "line",

          data: [1417, 1018, 1391, 1648],
        },
        {
          name: "小学",
          type: "line",

          data: [6973, 5736, 7821, 3598],
        },
        {
          name: "文盲/半文盲",
          type: "line",

          data: [9920, 7887, 9463, 2848],
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
