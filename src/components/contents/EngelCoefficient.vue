<template>
  <section id="example-section" class="section is-medium">
    <h1 class="title">示例标题</h1>
    <h2 class="subtitle">示例子标题</h2>
  </section>
  <div class="content">
    <h2>家庭农业情况</h2>
    <p>
      以下是每年的食物支出和恩格尔系数：
    </p>
    <v-chart class="chart" :autoresize="true" :option="foodExpense"/>
  </div>
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
import * as echarts from "echarts";

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
  name: "Agriculture",
  components: {
    VChart,
  },
  setup() {
    const foodExpense = ref({
      title: {
        text: "食物支出",
        left: "center"
      },
      xAxis: {
        data: ['2010', '2012', '2014', '2016', '2018']
      },
      yAxis: {
        type: 'value',
        name: '农村农业人口比例(%)',
        max: 100,
        min: 0
      },
      tooltip: {
      },
      series: [
        {
          data: [79.71, 78.63, 73.23, 73.18, 69.24],
          type: 'bar'
        }
      ]
    });
    
    return {foodExpense};
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