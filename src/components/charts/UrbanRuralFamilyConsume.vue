<template>
  <div id="chart-urban-rural-family-consume" class="mt1rem">
    <h2 >城镇和乡村的消费目的对比</h2>
    <p>这是2010和2018年城镇和乡村的消费目的对比图：</p>

    <div class="columns is-desktop">
      <v-chart class="chart column" :autoresize="true" :option="urban2010" />
      <v-chart class="chart column" :autoresize="true" :option="rural2010" />
    </div>

    <div class="columns is-desktop">
      <v-chart class="chart column" :autoresize="true" :option="urban2018" />
      <v-chart class="chart column" :autoresize="true" :option="rural2018" />
    </div>

    <p style="color: grey;">
      注：此处的食品支出比例不代表Engel系数，因为这里是以总消费为100%，不是总收入
    </p>
    <article class="message is-info">
      <div class="message-body">
        <strong>
          可以看到，城乡的消费目的基本一致，乡村在交通、医疗的花费略高于城镇，
          但这两项的比例相比2010年已经减少许多。
          这可能是乡村振兴，加强交通、医疗基础设施建设之后带来的直接影响。

          但我们也看到，食品和居住的支出仍然占有较高的份额，我们仍需要继续改进，
          增加经济上的宏观调控，促进我们的美好生活。
        </strong>
      </div>
    </article>
  </div>

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
