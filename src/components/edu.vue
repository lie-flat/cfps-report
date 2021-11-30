<template>
  <v-chart class="chart" :option="option" />
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, defineComponent } from "vue";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

export default defineComponent({
  name: "Edu",
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: "dark",
  },
  setup: () => {
    const option = ref({
      title: [
        {
          text: "2010 Education",
          left: "23%",
        },
        {
            text:"2018 Education",
            left:'67%'
        },
      ],
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      legend: {
        orient: "vertical",
        left: "left",
        data: [
          "博士",
          "硕士",
          "大学本科",
          "高中/中专/技校/职高",
          "小学",
          "文盲/半文盲",
        ],
      },
      series: [
        {
          name: "Education level",
          type: "pie",
          radius: "55%",
          center: ["28%", "60%"],
          data: [
            { value: 4, name: "博士" },
            { value: 48, name: "硕士" },
            { value: 870, name: "大学本科" },
            { value: 4532, name: "高中/中专/技校/职高" },
            { value: 6973, name: "小学" },
            { value: 9920, name: "文盲/半文盲" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
        {
            name: "2018 Education level",
          type: "pie",
          radius: "55%",
          center: ["72%", "60%"],
          data: [
            { value: 7, name: "博士" },
            { value: 112, name: "硕士" },
            { value: 1335, name: "大学本科" },
            { value: 3058, name: "高中/中专/技校/职高" },
            { value: 3598, name: "小学" },
            { value: 2848, name: "文盲/半文盲" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 1)",
            }
            }
        }
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
