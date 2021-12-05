<template>
  <div class="columns">
    <v-chart class="chart column" :autoresize="true" :option="option2010"/>
    <v-chart class="chart column" :autoresize="true" :option="option2018"/>
  </div>
  <article class="message is-info">
    <div class="message-body">
      <strong>
        为实现乡村振兴，教育普及化成为一项重要的硬性指标。政府加大对贫困地区的倾斜扶持力度。
        由CFPS统计的信息可以明显看出：‘文盲/半文盲’的占比下降22%；受到高中及以上的教育的人占统计人口的50%，农村义务教育发展不平衡不充分问题有较明显的缓解。
      </strong>
    </div>
  </article>
</template>

<script>
import {use} from "echarts/core";
import {CanvasRenderer} from "echarts/renderers";
import {PieChart} from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart from "vue-echarts";
import {ref, defineComponent} from "vue";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

export default defineComponent({
  name: "Education",
  components: {
    VChart,
  },
  setup: () => {
    const option2010 = ref({
      title: [
        {
          text: "2010 Education",
          left: "center",
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
          //center: ["28%", "60%"],
          data: [
            {value: 4, name: "博士"},
            {value: 48, name: "硕士"},
            {value: 870, name: "大学本科"},
            {value: 4532, name: "高中/中专/技校/职高"},
            {value: 6973, name: "小学"},
            {value: 9920, name: "文盲/半文盲"},
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ]
    });
    const option2018 = ref({
      title: [
        {
          text: "2018 Education",
          left: 'center'
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
          name: "2018 Education level",
          type: "pie",
          radius: "55%",
          data: [
            {value: 7, name: "博士"},
            {value: 112, name: "硕士"},
            {value: 1335, name: "大学本科"},
            {value: 3058, name: "高中/中专/技校/职高"},
            {value: 3598, name: "小学"},
            {value: 2848, name: "文盲/半文盲"},
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

    return {option2010, option2018};
  },
});
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>
