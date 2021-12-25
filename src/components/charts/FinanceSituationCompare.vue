<template>
  <h2 id="chart-finance-situation">理财情况</h2>
  <p>
    城镇和农村家庭的理财情况见下表：
  </p>
  <v-chart class="chart" :autoresize="true" :option="urbanRuralFinance"/>
  <article class="message is-success">
    <div class="message-body">
      <p>无论在城镇还是在乡村，居民们的存款都逐年增多，并且理财产品的金额也逐年增大，
      这体现我国居民的理财意识增强。
      但是，也可以看到，城镇和农村在理财方面差异巨大，大部分农村家庭理财很少，
      或者甚至不参与理财。这可能是农村居民的理财意识不强，也可能是因交通不变或者麻烦，
      使得居民不想理财。</p>

      <p>要振兴乡村经济，还需要靠促进居民理财意识，同时普及手机银行、微信等随身理财产品，
      让乡村村民也参与理财，让中国的经济“活”起来。</p>
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
  name: "AgricultureFamilyNumber",
  components: {
    VChart,
  },
  setup() {
    const urbanRuralFinance = ref({
    title: {
      text: '各年居民理财情况',
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
      data: [
        '城镇年总收入', '城镇存款', '城镇购买理财产品',
        '乡村年总收入', '乡村存款', '乡村购买理财产品'
      ],
      bottom: 10
    },
    toolbox: {
      show: true,
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar'] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    calculable: true,
    xAxis: [
      {
        name: '年份',
        // prettier-ignore
        data: ['2010年', '2012年', '2014年', '2016年', '2018年']
      }
    ],
    yAxis: [
      {
        name: '人均金额(元)',
        type: 'value'
      }
    ],
    series: [
      {
        name: '城镇年总收入',
        type: 'line',
        data: [41787, 48928, 63121, 94070, 117577],
        color: 'red',
      },
      {
        name: '城镇存款',
        type: 'bar',
        data: [17226, 43435, 49391, 68218, 81498],
        color: 'aqua'
      },
      {
        name: '城镇购买理财产品',
        type: 'bar',
        data: [7503, 9732, 77987, 97838, 117114],
        color: 'orange',
      },
      {
        name: '乡村年总收入',
        type: 'line',
        data: [22294, 29903, 38479, 56873, 60214],
        color: 'magenta'
      },
      {
        name: '乡村存款',
        type: 'bar',
        data: [4172, 15789, 16952, 23361, 28640],
        color: 'blue'
      },
      {
        name: '乡村购买理财产品',
        type: 'bar',
        data: [301, 562, 21137, 28460, 36798],
        color: 'brown'
      }
    ]
    });
    
    return {urbanRuralFinance};
  }
});
</script>

<style lang="scss" scoped>
.chart {
  height: 350px;
}
</style>