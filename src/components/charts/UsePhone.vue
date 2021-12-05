<template>
  <v-chart id="chart-use-phone" class="chart" :autoresize="true" :option="option" />
  <article class="message is-link">
    <div class="message-body">
      随着互联网的普及，2010-2018年间农村手机使用率逐年上涨
    </div>
  </article>
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart, LineChart } from "echarts/charts";
import "echarts/lib/component/grid";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart from "vue-echarts";
import { ref, defineComponent } from "vue";

use([
  CanvasRenderer,
  LineChart,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

export default defineComponent({
  name: "UsePhone",
  components: {
    VChart,
  },
  setup: () => {
    const option = ref({
      title: {
        text: "2010-2018年农村手机使用率",
        left: "left",
      },
      tooltip: {
        // trigger: "item",
        // formatter: "{a} <br/>{b} : {c} ({d}%)"
        trigger: "axis",
      },
      xAxis: {
        type: "category",
        data: ["2010", "2012", "2014", "2018"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [0.68, 0.82, 0.88, 0.9],
          type: "line",
        },
      ],
    });

    return { option };
  },
});
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>
