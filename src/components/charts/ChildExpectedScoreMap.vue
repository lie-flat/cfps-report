<template>
  <v-chart id="chart-expected-score" class="chart" :autoresize="true" :option="mapOption"></v-chart>
  <article class="message is-primary">
    <div class="message-body">
      各省份家长对孩子的期望成绩都很高，几乎都在 85 分以上。
    </div>
  </article>
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
import china from "../../assets/geo-china.json";

use([
  CanvasRenderer,
  LineChart,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

export default defineComponent({
  name: "ChildExpectedScoreMap",
  components: {VChart},
  setup() {
    echarts.registerMap("china", china);
    const mapOption = ref({
      timeline: {
        data: ["2010", "2012", "2014", "2016", "2018"],
      },
      title: {
        text: "各省份家长对孩子的平均期望成绩(2018)",
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
      options: [
        {
          title: {
            text: "各省份家长对孩子的平均期望成绩(2010)",
          },
          series: [
            {
              name: '各省份家长对孩子的平均期望成绩',
              type: 'map',
              map: 'china',
              data: [{'name': '上海市', 'value': 89.45806451612903},
                {'name': '云南省', 'value': 91.30645161290323},
                {'name': '北京市', 'value': 93.21428571428571},
                {'name': '吉林省', 'value': 96.484375},
                {'name': '四川省', 'value': 89.56410256410257},
                {'name': '天津市', 'value': 95.45454545454545},
                {'name': '安徽省', 'value': 89.72857142857143},
                {'name': '山东省', 'value': 92.97260273972603},
                {'name': '山西省', 'value': 90.7292576419214},
                {'name': '广东省', 'value': 89.76260162601626},
                {'name': '广西壮族自治区', 'value': 90.1029411764706},
                {'name': '江苏省', 'value': 93.11428571428571},
                {'name': '江西省', 'value': 91.87704918032787},
                {'name': '河北省', 'value': 92.27601809954751},
                {'name': '河南省', 'value': 91.69620253164557},
                {'name': '浙江省', 'value': 91.625},
                {'name': '湖北省', 'value': 92.04761904761905},
                {'name': '湖南省', 'value': 91.41509433962264},
                {'name': '甘肃省', 'value': 89.96204379562043},
                {'name': '福建省', 'value': 95.42553191489361},
                {'name': '贵州省', 'value': 83.27472527472527},
                {'name': '辽宁省', 'value': 92.8782894736842},
                {'name': '重庆市', 'value': 94.375},
                {'name': '陕西省', 'value': 90.91752577319588},
                {'name': '黑龙江省', 'value': 94.79166666666667}]
            }]
        }, {
          title: {
            text: "各省份家长对孩子的平均期望成绩(2012)",
          },
          series: [
            {
              name: '各省份家长对孩子的平均期望成绩',
              type: 'map',
              map: 'china',
              data: [{'name': '上海市', 'value': 90.64864864864865},
                {'name': '云南省', 'value': 90.53892215568862},
                {'name': '北京市', 'value': 89.92857142857143},
                {'name': '吉林省', 'value': 94.38983050847457},
                {'name': '四川省', 'value': 92.3006993006993},
                {'name': '天津市', 'value': 89.6086956521739},
                {'name': '安徽省', 'value': 91.17808219178082},
                {'name': '山东省', 'value': 92.52147239263803},
                {'name': '山西省', 'value': 93.6867469879518},
                {'name': '广东省', 'value': 89.89483394833948},
                {'name': '广西壮族自治区', 'value': 91.01652892561984},
                {'name': '新疆维吾尔自治区', 'value': 90.0},
                {'name': '江苏省', 'value': 90.73611111111111},
                {'name': '江西省', 'value': 93.38562091503267},
                {'name': '河北省', 'value': 91.29527559055119},
                {'name': '河南省', 'value': 92.02816901408451},
                {'name': '浙江省', 'value': 91.97826086956522},
                {'name': '湖北省', 'value': 91.44444444444444},
                {'name': '湖南省', 'value': 90.16438356164383},
                {'name': '甘肃省', 'value': 90.72609400324149},
                {'name': '福建省', 'value': 94.0},
                {'name': '缺失', 'value': 96.66666666666667},
                {'name': '贵州省', 'value': 85.83206106870229},
                {'name': '辽宁省', 'value': 94.12449799196787},
                {'name': '重庆市', 'value': 94.94},
                {'name': '陕西省', 'value': 88.78787878787878},
                {'name': '黑龙江省', 'value': 93.40625}]
            }
          ]

        }, {
          title: {
            text: "各省份家长对孩子的平均期望成绩(2014)",
          },
          series: [
            {
              name: '各省份家长对孩子的平均期望成绩',
              type: 'map',
              map: 'china',
              data: [{'name': '上海市', 'value': 90.38970588235294},
                {'name': '云南省', 'value': 92.31137724550898},
                {'name': '内蒙古自治区', 'value': 90.0},
                {'name': '北京市', 'value': 92.61904761904762},
                {'name': '吉林省', 'value': 92.63492063492063},
                {'name': '四川省', 'value': 90.47963800904978},
                {'name': '天津市', 'value': 92.31818181818181},
                {'name': '安徽省', 'value': 91.94047619047619},
                {'name': '山东省', 'value': 92.78832116788321},
                {'name': '山西省', 'value': 92.76687116564418},
                {'name': '广东省', 'value': 90.49574468085106},
                {'name': '广西壮族自治区', 'value': 90.96923076923076},
                {'name': '新疆维吾尔自治区', 'value': 90.1},
                {'name': '江苏省', 'value': 93.40298507462687},
                {'name': '江西省', 'value': 91.45528455284553},
                {'name': '河北省', 'value': 91.59073359073359},
                {'name': '河南省', 'value': 90.86587183308495},
                {'name': '浙江省', 'value': 92.60377358490567},
                {'name': '海南省', 'value': 100.0},
                {'name': '湖北省', 'value': 92.32075471698113},
                {'name': '湖南省', 'value': 91.92156862745098},
                {'name': '甘肃省', 'value': 91.49230769230769},
                {'name': '福建省', 'value': 90.61904761904762},
                {'name': '缺失', 'value': 95.75},
                {'name': '贵州省', 'value': 88.05128205128206},
                {'name': '辽宁省', 'value': 92.64},
                {'name': '重庆市', 'value': 93.15789473684211},
                {'name': '陕西省', 'value': 90.11702127659575},
                {'name': '黑龙江省', 'value': 92.63636363636364}]
            }
          ]

        }, {
          title: {
            text: "各省份家长对孩子的平均期望成绩(2016)",
          },
          series: [
            {
              name: '各省份家长对孩子的平均期望成绩',
              type: 'map',
              map: 'china',
              data: [{'name': '上海市', 'value': 89.40112994350282},
                {'name': '云南省', 'value': 91.15862068965517},
                {'name': '内蒙古自治区', 'value': 80.0},
                {'name': '北京市', 'value': 88.66666666666667},
                {'name': '吉林省', 'value': 94.10144927536231},
                {'name': '四川省', 'value': 87.9967637540453},
                {'name': '天津市', 'value': 92.95121951219512},
                {'name': '宁夏回族自治区', 'value': 91.25},
                {'name': '安徽省', 'value': 90.88172043010752},
                {'name': '山东省', 'value': 91.37640449438203},
                {'name': '山西省', 'value': 92.73008849557522},
                {'name': '广东省', 'value': 91.20970537261698},
                {'name': '广西壮族自治区', 'value': 92.21764705882353},
                {'name': '新疆维吾尔自治区', 'value': 93.0},
                {'name': '江苏省', 'value': 92.4090909090909},
                {'name': '江西省', 'value': 90.41935483870968},
                {'name': '河北省', 'value': 92.77692307692308},
                {'name': '河南省', 'value': 92.12330198537096},
                {'name': '浙江省', 'value': 92.13924050632912},
                {'name': '海南省', 'value': 100.0},
                {'name': '湖北省', 'value': 90.58823529411765},
                {'name': '湖南省', 'value': 91.21844660194175},
                {'name': '甘肃省', 'value': 89.99482535575679},
                {'name': '福建省', 'value': 90.5764705882353},
                {'name': '缺失', 'value': 93.0},
                {'name': '贵州省', 'value': 89.43445692883896},
                {'name': '辽宁省', 'value': 93.25531914893617},
                {'name': '重庆市', 'value': 92.01515151515152},
                {'name': '陕西省', 'value': 91.77165354330708},
                {'name': '青海省', 'value': 94.5},
                {'name': '黑龙江省', 'value': 94.02105263157895}]
            }
          ]
        },
        {
          title: {
            text: "各省份家长对孩子的平均期望成绩(2018)",
          },
          series: [
            {
              name: '各省份家长对孩子的平均期望成绩',
              type: 'map',
              map: 'china',
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
                {'name': '黑龙江省', 'value': 91.9}]
            }
          ]

        }
      ]
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