<template>
  <!--  <section id="example-section" class="section is-medium">-->
  <!--    <h1 class="title">示例标题</h1>-->
  <!--    <h2 class="subtitle">示例子标题</h2>-->
  <!--  </section>-->
  <v-chart id="chart-child-yard" class="chart" :autoresize="true" :option="yardOption"/>
  <article class="message is-success">
    <div class="message-body">
      幼儿园/学前班的入学率逐年上升，在 2010 年时，城镇的入学率几乎是乡村的两倍，随后，城乡差异逐渐缩小，凸显出我国在推进教育公平方面的努力
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
// import * as echarts from "echarts";

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
  name: "ChildEducationYard",
  components: {
    VChart,
  },
  setup() {
    // const seriesList = [];
    // echarts.util.each(["城镇", "乡村"], function (type) {
    //   seriesList.push({
    //     type: 'line',
    //     showSymbol: false,
    //     name: type,
    //     endLabel: {
    //       show: true,
    //       formatter: function (params) {
    //         return params.value[3] + ': ' + params.value[0];
    //       }
    //     },
    //     labelLayout: {
    //       moveOverlap: 'shiftY'
    //     },
    //     emphasis: {
    //       focus: 'series'
    //     },
    //     encode: {
    //       x: '年',
    //       y: '幼儿园/学前班入学率',
    //       label: ['类型', '幼儿园/学前班入学率'],
    //       itemName: '年',
    //       tooltip: ['幼儿园/学前班入学率']
    //     }
    //   });
    // });
    const yardOption = ref({
      animationDuration: 5000,
      dataset: [
        {
          source: [
            ['年', '城镇', '乡村'],
            [2010, 0.8133509003074221, 0.43394886363636365],
            [2012, 0.8831168831168831, 0.6329113924050633],
            [2014, 0.8823529411764706, 0.7391304347826086],
            // [2016, 0.5380710659898477, 0.5450236966824644],
            [2018, 0.8985507246376812, 0.7192982456140351]
          ]
        }
      ],
      title: {
        text: '幼儿园/学前班入学率城乡对比',
        left: "center"
      },
      legend: {
        "bottom": 0
      },
      tooltip: {
        order: 'valueDesc',
        trigger: 'axis',
        formatter: function (params) {
          // console.log(params);
          return "幼儿园/学前班入学率" + params.reduce((acc, p, i) => `${acc}<br/>${p.marker} ${p.seriesName} ${100 * p.data[i + 1]}%`, '');
        },
      },
      xAxis: {
        name: "年",
        type: 'category',
        // nameLocation: 'middle'
      },
      yAxis: {
        name: '幼儿园/学前班入学率',
        type: "value",
        axisLabel: {
          "formatter": v => `${v * 100}%`
        }
      },
      series: [
        {type: "line"},
        {type: "line"},
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