<template>
  <div id="chart-plant-animal-expense">
    <h2>种植业林业和畜牧业渔业开销</h2>
    <p>以下是从事种植业/林业的家庭各方面开销对比：</p>
    <v-chart class="chart" :autoresize="true" :option="plantExpense"/>
    <p>以下是从事畜牧业/渔业的家庭各方面开销对比：</p>
    <v-chart class="chart" :autoresize="true" :option="animalExpense"/>
    <article class="message is-success">
      <div class="message-body">
        农林业基本上成本增加，但畜牧业和渔业的投入却下降了。这大概与畜牧业产业化有关。
      </div>
    </article>
  </div>

</template>

<script>
import {defineComponent, ref} from "vue";
import {use} from "echarts/core";
import {CanvasRenderer} from "echarts/renderers";
import {PieChart, LineChart} from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  GridComponent,
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
  LineChart,
]);

export default defineComponent({
  name: "AgricultureFamilyNumber",
  components: {
    VChart,
  },
  setup() {
    const animalExpense = ref({
      title: {
        text: '畜牧业/渔业开销对比',
        left: 'center'
      },
      grid: {
        containLabel: true,
        left: '1%'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['2012年', '2014年', '2016年', '2018年'],
        bottom: 10
      },
      toolbox: {
        show: true,
        feature: {
          dataView: {show: true, readOnly: false},
          magicType: {show: true, type: ['line', 'bar']},
          restore: {show: true},
          saveAsImage: {show: true}
        }
      },
      calculable: true,
      xAxis: [
        {
          type: 'category',
          // prettier-ignore
          data: ["种畜鱼苗费", "雇工费", "机器租赁费", "饲料费", "其他花费"]
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '2012年',
          type: 'bar',
          data: [475, 0, 10, 354, 63]
        },
        {
          name: '2014年',
          type: 'bar',
          data: [2528, 120, 20, 5064, 351],
        },
        {
          name: '2016年',
          type: 'bar',
          data: [3933, 120, 24, 4958, 404]
        },
        {
          name: '2018年',
          type: 'bar',
          data: [2996, 245, 60, 4149, 649],
        },
      ]
    });

    const plantExpense = ref({
      title: {
        text: '种植业/林业开销对比',
        left: 'center'
      },
      grid: {
        containLabel: true,
        left: '1%'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['2012年', '2014年', '2016年', '2018年'],
        bottom: 10
      },
      toolbox: {
        show: true,
        feature: {
          dataView: {show: true, readOnly: false},
          magicType: {show: true, type: ['line', 'bar']},
          restore: {show: true},
          saveAsImage: {show: true}
        }
      },
      calculable: true,
      xAxis: [
        {
          type: 'category',
          // prettier-ignore
          data: ["种子化肥农药费", "雇工费", "机器租赁费", "灌溉费", "其他费用"]
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '2012年',
          type: 'bar',
          data: [2956, 578, 214, 139, 218]
        },
        {
          name: '2014年',
          type: 'bar',
          data: [4145, 641, 428, 298, 354],
        },
        {
          name: '2016年',
          type: 'bar',
          data: [4728, 732, 592, 335, 381]
        },
        {
          name: '2018年',
          type: 'bar',
          data: [4652, 925, 581, 402, 468],
        },
      ]
    });

    return {plantExpense, animalExpense};
  },
});
</script>

<style lang="scss" scoped>
.chart {
  height: 350px;
}
</style>