<template>
  <v-chart class="chart" :autoresize="true" :option="yardOption"/>
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
  name: "ChildExpectedEducationStackChart",
  components: {
    VChart,
  },
  setup() {
    const yardOption = ref({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // Use axis to trigger tooltip
          type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
        }
      },
      legend: {},
      animationDuration: 3000,
      grid: {
        left: '3%',
        right: '4%',
        containLabel: true
      },
      xAxis: {
        type: 'value'
      },
      yAxis: {
        type: 'category',
        data: ['城镇', '乡村']
      },
      timeline: {data: ['2010', '2012', '2014', '2016', '2018'],},
      options: [
        {
          series: [{
            "name": "幼儿园",
            "type": "bar",
            "stack": "total",
            "emphasis": {"focus": "series"},
            "data": [0, 0]
          }, {
            "name": "小学",
            "type": "bar",
            "stack": "total",
            "emphasis": {"focus": "series"},
            "data": [19, 44]
          }, {
            "name": "初中",
            "type": "bar",
            "stack": "total",
            "emphasis": {"focus": "series"},
            "data": [24, 113]
          }, {
            "name": "高中",
            "type": "bar",
            "stack": "total",
            "emphasis": {"focus": "series"},
            "data": [65, 271]
          }, {
            "name": "大专",
            "type": "bar",
            "stack": "total",
            "emphasis": {"focus": "series"},
            "data": [58, 202]
          }, {
            "name": "大学本科",
            "type": "bar",
            "stack": "total",
            "emphasis": {"focus": "series"},
            "data": [890, 1596]
          }, {
            "name": "硕士",
            "type": "bar",
            "stack": "total",
            "emphasis": {"focus": "series"},
            "data": [149, 74]
          }, {
            "name": "博士",
            "type": "bar",
            "stack": "total",
            "emphasis": {"focus": "series"},
            "data": [397, 407]
          }, {"name": "不必读书", "type": "bar", "stack": "total", "emphasis": {"focus": "series"}, "data": [3, 5]}]
        },
        {
          series: [{
            "name": "幼儿园",
            "type": "bar",
            "stack": "total",
            "emphasis": {"focus": "series"},
            "data": [0, 0]
          }, {
            "name": "小学",
            "type": "bar",
            "stack": "total",
            "emphasis": {"focus": "series"},
            "data": [9, 27]
          }, {
            "name": "初中",
            "type": "bar",
            "stack": "total",
            "emphasis": {"focus": "series"},
            "data": [17, 79]
          }, {
            "name": "高中",
            "type": "bar",
            "stack": "total",
            "emphasis": {"focus": "series"},
            "data": [54, 250]
          }, {
            "name": "大专",
            "type": "bar",
            "stack": "total",
            "emphasis": {"focus": "series"},
            "data": [71, 156]
          }, {
            "name": "大学本科",
            "type": "bar",
            "stack": "total",
            "emphasis": {"focus": "series"},
            "data": [865, 1515]
          }, {
            "name": "硕士",
            "type": "bar",
            "stack": "total",
            "emphasis": {"focus": "series"},
            "data": [114, 86]
          }, {
            "name": "博士",
            "type": "bar",
            "stack": "total",
            "emphasis": {"focus": "series"},
            "data": [347, 438]
          }, {"name": "不必读书", "type": "bar", "stack": "total", "emphasis": {"focus": "series"}, "data": [2, 17]}]
        },
        {
          series: [{
            "name": "幼儿园",
            "type": "bar",
            "stack": "total",
            "emphasis": {"focus": "series"},
            "data": [0, 0]
          }, {
            "name": "小学",
            "type": "bar",
            "stack": "total",
            "emphasis": {"focus": "series"},
            "data": [7, 27]
          }, {
            "name": "初中",
            "type": "bar",
            "stack": "total",
            "emphasis": {"focus": "series"},
            "data": [54, 139]
          }, {
            "name": "高中",
            "type": "bar",
            "stack": "total",
            "emphasis": {"focus": "series"},
            "data": [337, 722]
          }, {
            "name": "大专",
            "type": "bar",
            "stack": "total",
            "emphasis": {"focus": "series"},
            "data": [188, 447]
          }, {
            "name": "大学本科",
            "type": "bar",
            "stack": "total",
            "emphasis": {"focus": "series"},
            "data": [2172, 2913]
          }, {
            "name": "硕士",
            "type": "bar",
            "stack": "total",
            "emphasis": {"focus": "series"},
            "data": [216, 158]
          }, {
            "name": "博士",
            "type": "bar",
            "stack": "total",
            "emphasis": {"focus": "series"},
            "data": [334, 399]
          }, {"name": "不必读书", "type": "bar", "stack": "total", "emphasis": {"focus": "series"}, "data": [2, 17]}]
        },
        {
          series: [{
            "name": "幼儿园",
            "type": "bar",
            "stack": "total",
            "emphasis": {"focus": "series"},
            "data": [0, 0]
          }, {
            "name": "小学",
            "type": "bar",
            "stack": "total",
            "emphasis": {"focus": "series"},
            "data": [9, 23]
          }, {
            "name": "初中",
            "type": "bar",
            "stack": "total",
            "emphasis": {"focus": "series"},
            "data": [43, 127]
          }, {
            "name": "高中",
            "type": "bar",
            "stack": "total",
            "emphasis": {"focus": "series"},
            "data": [333, 794]
          }, {
            "name": "大专",
            "type": "bar",
            "stack": "total",
            "emphasis": {"focus": "series"},
            "data": [167, 260]
          }, {
            "name": "大学本科",
            "type": "bar",
            "stack": "total",
            "emphasis": {"focus": "series"},
            "data": [2446, 3087]
          }, {
            "name": "硕士",
            "type": "bar",
            "stack": "total",
            "emphasis": {"focus": "series"},
            "data": [211, 130]
          }, {
            "name": "博士",
            "type": "bar",
            "stack": "total",
            "emphasis": {"focus": "series"},
            "data": [297, 362]
          }, {"name": "不必读书", "type": "bar", "stack": "total", "emphasis": {"focus": "series"}, "data": [4, 15]}]
        },
        {
          series: [
            {
              "name": "小学",
              "type": "bar",
              "stack": "total",
              "emphasis": {
                "focus": "series"
              },
              "data": [
                2,
                14
              ]
            },
            {
              "name": "初中",
              "type": "bar",
              "stack": "total",
              "emphasis": {
                "focus": "series"
              },
              "data": [
                51,
                99
              ]
            },
            {
              "name": "高中/中专/技校/职高",
              "type": "bar",
              "stack": "total",
              "emphasis": {
                "focus": "series"
              },
              "data": [
                314,
                597
              ]
            },
            {
              "name": "大专",
              "type": "bar",
              "stack": "total",
              "emphasis": {
                "focus": "series"
              },
              "data": [
                167,
                201
              ]
            },
            {
              "name": "大学本科",
              "type": "bar",
              "stack": "total",
              "emphasis": {
                "focus": "series"
              },
              "data": [
                2661,
                3204
              ]
            },
            {
              "name": "硕士",
              "type": "bar",
              "stack": "total",
              "emphasis": {
                "focus": "series"
              },
              "data": [
                281,
                142
              ]
            },
            {
              "name": "博士",
              "type": "bar",
              "stack": "total",
              "emphasis": {
                "focus": "series"
              },
              "data": [
                262,
                326
              ]
            },
            {
              "name": "不必念书",
              "type": "bar",
              "stack": "total",
              "emphasis": {
                "focus": "series"
              },
              "data": [
                2,
                11
              ]
            }
          ]

        }
      ],

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