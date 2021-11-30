<template>
  <!--  <section id="example-section" class="section is-medium">-->
  <!--    <h1 class="title">示例标题</h1>-->
  <!--    <h2 class="subtitle">示例子标题</h2>-->
  <!--  </section>-->
  <div class="content">
    <h2>Lorem ipsum</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Vitae justo eget magna fermentum iaculis. Convallis a cras semper auctor neque vitae tempus quam.
      Enim neque volutpat ac tincidunt vitae semper. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus
      pellentesque. Urna et pharetra pharetra massa. Dolor sed viverra ipsum nunc aliquet bibendum enim. Auctor neque
      vitae tempus quam pellentes
      que. Lobortis elementum nibh tellus molestie nunc. Aliquam purus sit amet luctus
      venenatis lectus. Iaculis nunc sed augue lacus viverra vitae congue eu consequat. Tortor posuere ac ut consequat
      semper viverra nam. Nullam non nisi est sit amet. Eget est lorem ipsum dolor. In nulla posuere sollicitudin
      aliquam ultrices sagittis orci. Pellentesque habitant morbi tristique senectus et netus et malesuada.</p>
    <v-chart class="chart" :autoresize="true" :option="yardOption"/>
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
          return "幼儿园/学前班入学率" + params.reduce( (acc, p, i)=>`${acc}<br/>${p.marker} ${p.seriesName} ${100*p.data[i+1]}%`, '');
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