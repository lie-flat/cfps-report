<template>
  <div class="content">
    <!--    <p>{{ value }}</p>-->
    <!--    <input class="slider is-fullwidth" type="range" min="2010" max="2018" step="2" v-model="value">-->
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
  name: "EduCostMapChart",
  components: {VChart},
  setup() {
    echarts.registerMap("china", china);
    const mapOption = ref({
      timeline: {
        data: ["2010", "2012", "2014", "2016", "2018"],
      },
      geo: {
        map: "china",
        roam: false
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b}<br/>{c} 元'
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
        text: ['高', '低'],
        realtime: false,
        calculable: true,
        inRange: {
          color: ['lightskyblue', 'yellow', 'orangered']
        }
      },
      options: [
        {
          visualMap: {
            min: 540,
            max: 3000,
          },
          title: {
            text: "过去12个月的教育总支出平均值(2010)",
          },
          series: [
            {
              name: '过去12个月的教育总支出平均值',
              type: 'map',
              map: 'china',
              data: [{'name': '上海市', 'value': 5551.385593220339}, {
                'name': '云南省',
                'value': 687.626923076923
              }, {'name': '北京市', 'value': 7115.9}, {'name': '吉林省', 'value': 2136.021276595745}, {
                'name': '四川省',
                'value': 1095.2777777777778
              }, {'name': '天津市', 'value': 2171.6875}, {'name': '安徽省', 'value': 1503.0}, {
                'name': '山东省',
                'value': 967.1151832460733
              }, {'name': '山西省', 'value': 1683.0857142857142}, {
                'name': '广东省',
                'value': 1402.3834134615386
              }, {'name': '广西壮族自治区', 'value': 668.5925925925926}, {
                'name': '江苏省',
                'value': 2798.4141414141413
              }, {'name': '江西省', 'value': 811.7559523809524}, {
                'name': '河北省',
                'value': 1045.0033112582782
              }, {'name': '河南省', 'value': 1077.5}, {'name': '浙江省', 'value': 3000.6428571428573}, {
                'name': '湖北省',
                'value': 2770.564705882353
              }, {'name': '湖南省', 'value': 2885.696682464455}, {
                'name': '甘肃省',
                'value': 538.8505025125628
              }, {'name': '福建省', 'value': 1400.9154929577464}, {
                'name': '贵州省',
                'value': 546.5973597359736
              }, {'name': '辽宁省', 'value': 2457.638190954774}, {
                'name': '重庆市',
                'value': 1207.7027027027027
              }, {'name': '陕西省', 'value': 1492.3846153846155}, {'name': '黑龙江省', 'value': 2667.529761904762}]
            }
          ]
        }, {
          visualMap: {
            min: 1100,
            max: 6000,
          },
          title: {
            text: "过去12个月的教育总支出平均值(2012)",
          },
          series: [
            {
              name: '过去12个月的教育总支出平均值',
              type: 'map',
              map: 'china',
              data: [{'name': '上海市', 'value': 14029.310344827587}, {
                'name': '云南省',
                'value': 1146.9565217391305
              }, {'name': '吉林省', 'value': 3227.2727272727275}, {
                'name': '四川省',
                'value': 3171.818181818182
              }, {'name': '天津市', 'value': 3250.0}, {'name': '安徽省', 'value': 4320.0}, {
                'name': '山东省',
                'value': 1913.75
              }, {'name': '山西省', 'value': 4323.333333333333}, {'name': '广东省', 'value': 3693.25}, {
                'name': '广西壮族自治区',
                'value': 1734.875
              }, {'name': '江苏省', 'value': 3686.6666666666665}, {'name': '江西省', 'value': 2182.3}, {
                'name': '河北省',
                'value': 2076.0
              }, {'name': '河南省', 'value': 3091.123595505618}, {
                'name': '浙江省',
                'value': 9571.42857142857
              }, {'name': '湖北省', 'value': 3410.0}, {'name': '湖南省', 'value': 4455.263157894737}, {
                'name': '甘肃省',
                'value': 1979.6666666666667
              }, {'name': '福建省', 'value': 3508.8888888888887}, {'name': '缺失', 'value': 2250.0}, {
                'name': '贵州省',
                'value': 1192.8846153846155
              }, {'name': '辽宁省', 'value': 5814.893617021276}, {'name': '重庆市', 'value': 2075.0}, {
                'name': '陕西省',
                'value': 1872.7272727272727
              }, {'name': '黑龙江省', 'value': 4607.142857142857}]
            }
          ]
        }, {
          visualMap: {
            min: 2400,
            max: 7000,
          },
          title: {
            text: "过去12个月的教育总支出平均值(2014)",
          },
          series: [
            {
              name: '过去12个月的教育总支出平均值',
              type: 'map',
              map: 'china',
              data: [{'name': '上海市', 'value': 11054.054054054053}, {
                'name': '云南省',
                'value': 3183.157894736842
              }, {'name': '内蒙古自治区', 'value': 20000.0}, {'name': '北京市', 'value': 4533.333333333333}, {
                'name': '吉林省',
                'value': 6873.333333333333
              }, {'name': '四川省', 'value': 3292.2448979591836}, {'name': '天津市', 'value': 4125.0}, {
                'name': '安徽省',
                'value': 5188.064516129032
              }, {'name': '山东省', 'value': 4096.774193548387}, {
                'name': '山西省',
                'value': 5910.555555555556
              }, {'name': '广东省', 'value': 5797.242647058823}, {
                'name': '广西壮族自治区',
                'value': 2518.8888888888887
              }, {'name': '新疆维吾尔自治区', 'value': 3425.0}, {'name': '江苏省', 'value': 8897.5}, {
                'name': '江西省',
                'value': 3366.875
              }, {'name': '河北省', 'value': 3599.0163934426228}, {
                'name': '河南省',
                'value': 3643.7698412698414
              }, {'name': '浙江省', 'value': 10384.21052631579}, {'name': '湖北省', 'value': 6256.24}, {
                'name': '湖南省',
                'value': 6527.291666666667
              }, {'name': '甘肃省', 'value': 2818.288590604027}, {'name': '福建省', 'value': 2323.9}, {
                'name': '缺失',
                'value': 10250.0
              }, {'name': '贵州省', 'value': 2481.549295774648}, {
                'name': '辽宁省',
                'value': 7921.428571428572
              }, {'name': '重庆市', 'value': 5647.307692307692}, {
                'name': '陕西省',
                'value': 5400.833333333333
              }, {'name': '黑龙江省', 'value': 7194.117647058823}]
            }
          ]
        }, {
          visualMap: {
            min: 2000,
            max: 7000,
          },
          title: {
            text: "过去12个月的教育总支出平均值(2016)",
          },
          series: [
            {
              name: '过去12个月的教育总支出平均值',
              type: 'map',
              map: 'china',
              data: [{'name': '上海市', 'value': 4432.35294117647}, {
                'name': '云南省',
                'value': 3646.6666666666665
              }, {'name': '北京市', 'value': 20000.0}, {'name': '吉林省', 'value': 5910.0}, {
                'name': '四川省',
                'value': 3961.0
              }, {'name': '天津市', 'value': 8000.0}, {'name': '安徽省', 'value': 6350.0}, {
                'name': '山东省',
                'value': 2920.1
              }, {'name': '山西省', 'value': 3446.6666666666665}, {
                'name': '广东省',
                'value': 7044.634146341464
              }, {'name': '广西壮族自治区', 'value': 1799.7894736842106}, {
                'name': '江苏省',
                'value': 6444.444444444444
              }, {'name': '江西省', 'value': 3428.125}, {'name': '河北省', 'value': 2880.0}, {
                'name': '河南省',
                'value': 3064.035087719298
              }, {'name': '浙江省', 'value': 7500.0}, {'name': '湖北省', 'value': 1600.0}, {
                'name': '湖南省',
                'value': 4858.333333333333
              }, {'name': '甘肃省', 'value': 2617.5}, {'name': '福建省', 'value': 5638.461538461538}, {
                'name': '贵州省',
                'value': 4473.05
              }, {'name': '辽宁省', 'value': 6546.666666666667}, {'name': '重庆市', 'value': 2200.0}, {
                'name': '陕西省',
                'value': 7335.714285714285
              }, {'name': '黑龙江省', 'value': 6471.428571428572}]
            }
          ]
        }, {
          visualMap: {
            min: 2000,
            max: 7000,
          },
          title: {
            text: "过去12个月的教育总支出平均值(2018)",
          },
          series: [
            {
              name: '过去12个月的教育总支出平均值',
              type: 'map',
              map: 'china',
              data: [{'name': '上海市', 'value': 15960.0}, {'name': '云南省', 'value': 3791.5}, {
                'name': '北京市',
                'value': 550.0
              }, {'name': '吉林省', 'value': 10285.714285714286}, {
                'name': '四川省',
                'value': 3466.735849056604
              }, {'name': '天津市', 'value': 700.0}, {'name': '宁夏回族自治区', 'value': 500.0}, {
                'name': '安徽省',
                'value': 6666.666666666667
              }, {'name': '山东省', 'value': 5573.809523809524}, {
                'name': '山西省',
                'value': 4702.903225806452
              }, {'name': '广东省', 'value': 5619.9701492537315}, {
                'name': '广西壮族自治区',
                'value': 3502.1052631578946
              }, {'name': '新疆维吾尔自治区', 'value': 250.0}, {'name': '江苏省', 'value': 7466.666666666667}, {
                'name': '江西省',
                'value': 1886.125
              }, {'name': '河北省', 'value': 3917.037037037037}, {
                'name': '河南省',
                'value': 4996.590909090909
              }, {'name': '浙江省', 'value': 13416.666666666666}, {'name': '湖北省', 'value': 7218.0}, {
                'name': '湖南省',
                'value': 8485.0
              }, {'name': '甘肃省', 'value': 3205.972222222222}, {'name': '福建省', 'value': 5300.0}, {
                'name': '贵州省',
                'value': 2764.1935483870966
              }, {'name': '辽宁省', 'value': 9557.142857142857}, {'name': '重庆市', 'value': 3900.0}, {
                'name': '陕西省',
                'value': 8179.166666666667
              }, {'name': '黑龙江省', 'value': 12922.222222222223}]
            }
          ]
        },

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