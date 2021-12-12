<template>
  <h2>城镇和乡村的消费目的对比</h2>
  <p>这是2010和2018年城镇和乡村的消费目的对比图：</p>

  <div id="chart-education" class="columns is-desktop">
    <v-chart class="chart column" :autoresize="true" :option="urban2010" />
    <v-chart class="chart column" :autoresize="true" :option="rural2010" />
  </div>

  <div id="chart-education" class="columns is-desktop">
    <v-chart class="chart column" :autoresize="true" :option="urban2018" />
    <v-chart class="chart column" :autoresize="true" :option="rural2018" />
  </div>
  <article class="message is-info">
    <div class="message-body">
      <strong>
        可以看到，城乡的消费目的基本一致，乡村在交通、医疗的花费略高于城镇，
        这可能是乡村振兴
      </strong>
    </div>
  </article>
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
import VChart from "vue-echarts";
import { ref, defineComponent } from "vue";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

export default defineComponent({
  name: "UrbanRuralFamilyComsume",
  components: {
    VChart,
  },
  setup: () => {
    const grid = {
      containLabel: true,
      left: "1%",
    };
    const urban2010 = ref({
      title: [
        {
          text: "2010年城镇消费目的",
          left: "center",
        },
      ],
      ...grid,
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      series: [
        {
          name: "Education level",
          type: "pie",
          radius: "55%",
          //center: ["28%", "60%"],
          data: [
            { value: 10175.38, name: "食品" },
            { value: 1582.66, name: "衣服" },
            { value: 2460.22, name: "居住" },
            { value: 3716.38, name: "日用品" },
            { value: 3765.21, name: "医疗保健" },
            { value: 4216.56, name: "交通" },
            { value: 4176.03, name: "文教娱乐" },
            { value: 689.83, name: "其他支出" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    });
    const rural2010 = ref({
      title: [
        {
          text: "2010年乡村消费目的",
          left: "center",
        },
      ],
      ...grid,
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      series: [
        {
          name: "2018 Education level",
          type: "pie",
          radius: "55%",
          data: [
            { value: 6304.24, name: "食品" },
            { value: 767.54, name: "衣服" },
            { value: 937.18, name: "居住" },
            { value: 1966.84, name: "日用品" },
            { value: 3141.09, name: "医疗保健" },
            { value: 2300.2, name: "交通" },
            { value: 2421.02, name: "文教娱乐" },
            { value: 910.24, name: "其他支出" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 1)",
            },
          },
        },
      ],
    });

    const urban2018 = ref({
      title: [
        {
          text: "2018年城镇消费目的",
          left: "center",
        },
      ],
      ...grid,
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      series: [
        {
          name: "Education level",
          type: "pie",
          radius: "55%",
          //center: ["28%", "60%"],
          data: [
            { value: 25338.31, name: "食品" },
            { value: 3921.81, name: "衣服" },
            { value: 12209.89, name: "居住" },
            { value: 11279.43, name: "日用品" },
            { value: 6624.12, name: "医疗保健" },
            { value: 6207.07, name: "交通" },
            { value: 8647.46, name: "文教娱乐" },
            { value: 1756.77, name: "其他支出" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    });
    const rural2018 = ref({
      title: [
        {
          text: "2018年乡村消费目的",
          left: "center",
        },
      ],
      ...grid,
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      series: [
        {
          name: "2018 Education level",
          type: "pie",
          radius: "55%",
          data: [
            { value: 13905.47, name: "食品" },
            { value: 2292.99, name: "衣服" },
            { value: 7849.68, name: "居住" },
            { value: 6783.63, name: "日用品" },
            { value: 5677.98, name: "医疗保健" },
            { value: 4458.0, name: "交通" },
            { value: 4327.68, name: "文教娱乐" },
            { value: 689.1, name: "其他支出" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 1)",
            },
          },
        },
      ],
    });

    return { urban2010, rural2010, urban2018, rural2018 };
  },
});
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>
