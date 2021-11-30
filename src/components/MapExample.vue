<template>
  <div class="content">
    <v-chart class="chart" :autoresize="true" :option="mapOption"></v-chart>
  </div>
</template>

<script>
import {use} from "echarts/core";
import {CanvasRenderer} from "echarts/renderers";
import {BarChart, LineChart} from "echarts/charts";
import "echarts/lib/component/grid";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart from "vue-echarts";
import {ref, defineComponent} from "vue";
import * as echarts from "echarts";
import china from "../assets/geo-china.json";

use([
  CanvasRenderer,
  LineChart,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

export default defineComponent({
  name: "MapExample",
  components: {VChart},
  setup() {
    echarts.registerMap("china", china);
    const mapOption = ref({
      title: {
        text: "各省份家长对孩子的平均期望成绩",
      },
      geo: {
        map: "china",
        roam: false
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b}<br/>{c} 分'
      },
      toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          dataView: {readOnly: false},
          restore: {},
          saveAsImage: {}
        }
      },
      visualMap: {
        min: 80,
        max: 100,
        text: ['High', 'Low'],
        realtime: false,
        calculable: true,
        inRange: {
          color: ['lightskyblue', 'yellow', 'orangered']
        }
      },
      series: {
        name: '各省份家长对孩子的平均期望成绩',
        type: 'map',
        map: 'china',
        label: {
          show: false
        },
        data: [{'name': '上海市', 'value': 89.23076923076923},
          {'name': '云南省', 'value': 90.7235294117647},
          {'name': '内蒙古自治区', 'value': 100.0},
          {'name': '北京市', 'value': 93.8},
          {'name': '吉林省', 'value': 92.70491803278688},
          {'name': '四川省', 'value': 88.39428571428572},
          {'name': '天津市', 'value': 93.81818181818181},
          {'name': '宁夏回族自治区', 'value': 90.0},
          {'name': '安徽省', 'value': 92.45161290322581},
          {'name': '山东省', 'value': 92.2512077294686},
          {'name': '山西省', 'value': 93.29184549356223},
          {'name': '广东省', 'value': 91.36740740740741},
          {'name': '广西壮族自治区', 'value': 88.99354838709678},
          {'name': '新疆维吾尔自治区', 'value': 93.07692307692308},
          {'name': '江苏省', 'value': 91.88541666666667},
          {'name': '江西省', 'value': 89.46330275229357},
          {'name': '河北省', 'value': 91.71867612293144},
          {'name': '河南省', 'value': 91.87031408308005},
          {'name': '浙江省', 'value': 91.675},
          {'name': '湖北省', 'value': 91.92424242424242},
          {'name': '湖南省', 'value': 90.81420765027322},
          {'name': '甘肃省', 'value': 92.21144278606965},
          {'name': '福建省', 'value': 90.5},
          {'name': '贵州省', 'value': 88.87044534412955},
          {'name': '辽宁省', 'value': 93.11340206185567},
          {'name': '重庆市', 'value': 93.64912280701755},
          {'name': '陕西省', 'value': 92.37984496124031},
          {'name': '青海省', 'value': 85.0},
          {'name': '黑龙江省', 'value': 91.9},
          {'name': '台湾省', 'value': '没有数据'}
        ]
      }
    });
    return {
      mapOption,
    };
  }
});
</script>

<style lang="scss" scoped>
.chart {
  height: 500px;
}
</style>