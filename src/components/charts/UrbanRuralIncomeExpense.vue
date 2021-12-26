<template>
  <div id="chart-urban-rural-income-expense" class="mt1rem">
    <h2>城镇乡村收入支出对比</h2>
    <p>
      对于城镇和乡村的家庭，其各年的收入和支出，以及收支比如下两折线图所示：
    </p>
    <v-chart class="chart" :autoresize="true" :option="urbanRuralIncomeExpense"/>
    <v-chart class="chart" :autoresize="true" :option="urbanRuralIeRatio"/>
    <article class="message is-success">
      <div class="message-body">
        可以看到，这几年来城镇和农村的家庭收入和支出均有增加，不过城镇增加的幅度明显大于农村。
        <br/>
        对比两幅图，我们还可以看到，2012年以后，收入和支出都增加，但收支比也都增加。
        特别是2014和2018年，乡村的收支比都大于城镇，
        可以认为，乡村家庭的收入增加后，收入更多地用于储蓄，而不是消费。
      </div>
    </article>
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
  name: "UrbanRuralIncomeExpense",
  components: {
    VChart,
  },
  setup() {
    const urbanRuralIncomeExpense = ref({
      title: {
        text: "城镇和乡村的家庭收入支出情况",
        left: "center"
      },
      xAxis: {
        name: '年份',
        data: ['2010', '2012', '2014', '2016', '2018']
      },
      yAxis: {
        type: 'value',
        name: '平均收入或支出(元)'
      },
      tooltip: {},
      legend: {
        data: ['城镇平均收入', '城镇平均支出', '乡村平均收入', '乡村平均支出'],
        bottom: 10,
      },
      grid: {
        containLabel: true,
        left: '1%'
      },
      series: [
        {
          name: '城镇平均收入',
          data: [42674, 48928, 59793, 73132, 82059.95],
          type: 'line'
        },
        {
          name: '乡村平均收入',
          data: [25126, 29903, 38464, 43438, 44058],
          type: 'line'
        },
        {
          name: '城镇平均支出',
          data: [33965, 46153, 41895, 51129, 53736],
          type: 'line'
        },
        {
          name: '乡村平均支出',
          data: [20963, 28176, 29688, 29590, 32164],
          type: 'line'
        }
      ]
    });

    const urbanRuralIeRatio = ref({
      title: {
        text: "城镇和乡村的收支比",
        left: "center"
      },
      xAxis: {
        name: '年份',
        data: ['2010', '2012', '2014', '2016', '2018']
      },
      yAxis: {
        type: 'value',
        name: '收支比',
        min: 1,
        max: 1.6
      },
      tooltip: {},
      legend: {
        data: ['城镇收支比', '乡村收支比'],
        bottom: 10,
      },
      grid: {
        containLabel: true,
        left: '1%'
      },
      series: [
        {
          name: '城镇收支比',
          data: [1.20, 1.06, 1.30, 1.47, 1.37],
          type: 'line'
        },
        {
          name: '乡村收支比',
          data: [1.26, 1.06, 1.43, 1.43, 1.53],
          type: 'line'
        }
      ]
    });

    return {urbanRuralIncomeExpense, urbanRuralIeRatio};
  }
});
</script>

<style lang="scss" scoped>
.chart {
  height: 350px;
}
</style>