<template>
  <h2>家庭农业情况</h2>
  <p>
    以下是农村中农业的家庭的变化情况
  </p>
  <v-chart class="chart" :autoresize="true" :option="ruralAgriRatio"/>
  <article class="message is-success">
    <div class="message-body">
      可以看到，农村中从事农业家庭的比例依然很高，但农村中从事农业的家庭比例也正逐渐下降。
      这个趋势离不开乡村的经济改革政策。
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
    const ruralAgriRatio = ref({
      title: {
        text: "农村农业家庭比例变化情况",
        left: "center"
      },
      xAxis: {
        data: ['2010', '2012', '2014', '2016', '2018']
      },
      yAxis: {
        type: 'value',
        name: '农村农业家庭比例(%)',
        max: 100,
        min: 0
      },
      tooltip: {
      },
      formatter: '农业家庭比例<br />{b}年: {c}%',
      series: [
        {
          data: [79.71, 78.63, 73.23, 73.18, 69.24],
          type: 'line'
        }
      ]
    });
    
    return {ruralAgriRatio};
  }
});
</script>

<style lang="scss" scoped>
.chart {
  height: 350px;
}
</style>