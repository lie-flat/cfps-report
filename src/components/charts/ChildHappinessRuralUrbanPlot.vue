<template>
  <v-chart id="chart-child-happiness-plot" class="chart" :autoresize="true" :option="yardOption"/>
  <article class="message is-warning">
    <div class="message-body">
      整体上来看，城乡少年儿童幸福指数都很高，不过城镇的幸福指数往往比乡村高零点几个百分点。
    </div>
  </article>
</template>

<script>
import {defineComponent, ref} from 'vue';
import {use} from "echarts/core";
import {CanvasRenderer} from "echarts/renderers";
import {PieChart, LineChart} from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  GridComponent
} from "echarts/components";
import VChart from "vue-echarts";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  ToolboxComponent,
  LegendComponent,
  GridComponent,
  LineChart
]);

export default defineComponent({
  name: "ChildHappinessRuralUrbanPlot",
  components: {
    VChart,
  },
  setup() {
    const yardOption = ref({
      animationDuration: 5000,
      dataset: [
        {
          source: [
            ['年', '城镇', '乡村'],
            [2010, 8.50229709035222, 8.243720930232557], [2012, 7.967149758454107, 7.757125154894672], [2014, 8.396370582617001, 8.165886287625417], [2016, 8.478170478170478, 8.138198757763975], [2018, 8.197123519458545, 8.108892921960072]

          ]
        }
      ],
      title: {
        text: '少年儿童幸福程度',
        left: "center"
      },
      grid: {
        left: "1%",
        containLabel: true
      },
      legend: {
        "bottom": "10%"
      },
      tooltip: {
        order: 'valueDesc',
        trigger: 'axis',
      },
      xAxis: {
        name: "年",
        type: 'category',
        // nameLocation: 'middle'
      },
      yAxis: {
        name: '少年儿童幸福程度',
        type: "value",
      },
      series: [
        {type: "bar"},
        {type: "bar"},
      ]
    });
    return {yardOption};
  }
});
</script>

<style lang="scss" scoped>
#example-section {
  background-image: url("../../assets/header-bg.jpg");
}

.chart {
  height: 350px;
}
</style>