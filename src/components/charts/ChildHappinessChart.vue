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
  name: "ChildHappinessChart",
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
        min: 0,
        max: 10,
        realtime: false,
        calculable: true,
        inRange: {
          color: ['green', 'yellow', 'red']
        }
      },
      options: [
        {
          title: {
            text: "儿童幸福程度(2010)",
          },
          series: [
            {
              name: '儿童幸福程度',
              type: 'map',
              map: 'china',
              data: [{'name': '上海市', 'value': 8.62962962962963}, {
                'name': '云南省',
                'value': 8.693877551020408
              }, {'name': '北京市', 'value': 8.222222222222221}, {
                'name': '吉林省',
                'value': 8.976744186046512
              }, {'name': '四川省', 'value': 8.239520958083832}, {
                'name': '天津市',
                'value': 9.142857142857142
              }, {'name': '安徽省', 'value': 8.046511627906977}, {
                'name': '山东省',
                'value': 8.714285714285714
              }, {'name': '山西省', 'value': 8.345238095238095}, {
                'name': '广东省',
                'value': 7.797520661157025
              }, {'name': '广西壮族自治区', 'value': 8.204081632653061}, {
                'name': '江苏省',
                'value': 8.448275862068966
              }, {'name': '江西省', 'value': 8.023529411764706}, {
                'name': '河北省',
                'value': 8.867647058823529
              }, {'name': '河南省', 'value': 8.529680365296803}, {
                'name': '浙江省',
                'value': 8.714285714285714
              }, {'name': '湖北省', 'value': 8.555555555555555}, {
                'name': '湖南省',
                'value': 8.057692307692308
              }, {'name': '甘肃省', 'value': 8.36078431372549}, {
                'name': '福建省',
                'value': 8.137931034482758
              }, {'name': '贵州省', 'value': 7.821782178217822}, {
                'name': '辽宁省',
                'value': 8.655021834061136
              }, {'name': '重庆市', 'value': 8.324324324324325}, {
                'name': '陕西省',
                'value': 8.301369863013699
              }, {'name': '黑龙江省', 'value': 8.928571428571429}]
            }
          ]
        }, {
          title: {
            text: "儿童幸福程度(2012)",
          },
          series: [
            {
              name: '儿童幸福程度',
              type: 'map',
              map: 'china',
              data: [{'name': '上海市', 'value': 8.294871794871796}, {
                'name': '云南省',
                'value': 7.982456140350878
              }, {'name': '北京市', 'value': 7.833333333333333}, {
                'name': '吉林省',
                'value': 8.833333333333334
              }, {'name': '四川省', 'value': 7.241758241758242}, {'name': '天津市', 'value': 8.4}, {
                'name': '安徽省',
                'value': 8.195121951219512
              }, {'name': '山东省', 'value': 8.202020202020202}, {
                'name': '山西省',
                'value': 7.8936170212765955
              }, {'name': '广东省', 'value': 7.668674698795181}, {
                'name': '广西壮族自治区',
                'value': 7.7682926829268295
              }, {'name': '江苏省', 'value': 8.333333333333334}, {
                'name': '江西省',
                'value': 7.6835443037974684
              }, {'name': '河北省', 'value': 8.1}, {'name': '河南省', 'value': 8.020648967551622}, {
                'name': '浙江省',
                'value': 7.7272727272727275
              }, {'name': '湖北省', 'value': 7.9411764705882355}, {
                'name': '湖南省',
                'value': 7.1098901098901095
              }, {'name': '甘肃省', 'value': 7.642857142857143}, {'name': '福建省', 'value': 8.32}, {
                'name': '贵州省',
                'value': 7.085106382978723
              }, {'name': '辽宁省', 'value': 8.668508287292818}, {
                'name': '重庆市',
                'value': 7.266666666666667
              }, {'name': '陕西省', 'value': 7.565217391304348}, {'name': '黑龙江省', 'value': 8.43859649122807}]
            }
          ]
        }, {
          title: {
            text: "儿童幸福程度(2014)",
          },
          series: [
            {
              name: '儿童幸福程度',
              type: 'map',
              map: 'china',
              data: [{'name': '上海市', 'value': 8.741935483870968}, {
                'name': '云南省',
                'value': 8.297297297297296
              }, {'name': '北京市', 'value': 8.583333333333334}, {
                'name': '吉林省',
                'value': 8.894736842105264
              }, {'name': '四川省', 'value': 7.937007874015748}, {
                'name': '天津市',
                'value': 8.571428571428571
              }, {'name': '安徽省', 'value': 7.904761904761905}, {
                'name': '山东省',
                'value': 9.085365853658537
              }, {'name': '山西省', 'value': 8.510416666666666}, {
                'name': '广东省',
                'value': 7.945848375451264
              }, {'name': '广西壮族自治区', 'value': 7.781609195402299}, {'name': '江苏省', 'value': 8.325}, {
                'name': '江西省',
                'value': 7.476923076923077
              }, {'name': '河北省', 'value': 8.944099378881987}, {
                'name': '河南省',
                'value': 8.388586956521738
              }, {'name': '浙江省', 'value': 8.633333333333333}, {'name': '海南省', 'value': 6.0}, {
                'name': '湖北省',
                'value': 8.757575757575758
              }, {'name': '湖南省', 'value': 7.6117647058823525}, {
                'name': '甘肃省',
                'value': 8.124324324324323
              }, {'name': '福建省', 'value': 8.285714285714286}, {
                'name': '贵州省',
                'value': 7.291338582677166
              }, {'name': '辽宁省', 'value': 8.830409356725147}, {
                'name': '重庆市',
                'value': 8.117647058823529
              }, {'name': '陕西省', 'value': 8.666666666666666}, {'name': '黑龙江省', 'value': 8.461538461538462}]
            }
          ]
        }, {
          title: {
            text: "儿童幸福程度(2016)",
          },
          series: [
            {
              name: '儿童幸福程度',
              type: 'map',
              map: 'china',
              data: [{'name': '上海市', 'value': 8.702127659574469}, {'name': '云南省', 'value': 7.76}, {
                'name': '北京市',
                'value': 8.571428571428571
              }, {'name': '吉林省', 'value': 8.941176470588236}, {
                'name': '四川省',
                'value': 7.909090909090909
              }, {'name': '天津市', 'value': 7.333333333333333}, {'name': '安徽省', 'value': 8.1}, {
                'name': '山东省',
                'value': 8.926829268292684
              }, {'name': '山西省', 'value': 8.813953488372093}, {
                'name': '广东省',
                'value': 8.112244897959183
              }, {'name': '广西壮族自治区', 'value': 7.7317073170731705}, {'name': '新疆维吾尔自治区', 'value': 8.4}, {
                'name': '江苏省',
                'value': 9.058823529411764
              }, {'name': '江西省', 'value': 7.7}, {'name': '河北省', 'value': 8.553846153846154}, {
                'name': '河南省',
                'value': 8.54335260115607
              }, {'name': '浙江省', 'value': 8.533333333333333}, {
                'name': '湖北省',
                'value': 7.769230769230769
              }, {'name': '湖南省', 'value': 8.11111111111111}, {'name': '甘肃省', 'value': 8.1437125748503}, {
                'name': '福建省',
                'value': 9.0
              }, {'name': '贵州省', 'value': 6.9655172413793105}, {
                'name': '辽宁省',
                'value': 8.728813559322035
              }, {'name': '重庆市', 'value': 8.15}, {'name': '陕西省', 'value': 8.464285714285714}, {
                'name': '黑龙江省',
                'value': 9.625
              }]
            }
          ]
        }, {
          title: {
            text: "儿童幸福程度(2018)",
          },
          series: [
            {
              name: '儿童幸福程度',
              type: 'map',
              map: 'china',
              data: [{'name': '上海市', 'value': 8.402777777777779}, {
                'name': '云南省',
                'value': 8.198019801980198
              }, {'name': '北京市', 'value': 9.5}, {'name': '吉林省', 'value': 8.233333333333333}, {
                'name': '四川省',
                'value': 8.042780748663102
              }, {'name': '天津市', 'value': 8.25}, {'name': '宁夏回族自治区', 'value': 10.0}, {
                'name': '安徽省',
                'value': 8.081632653061224
              }, {'name': '山东省', 'value': 8.634615384615385}, {'name': '山西省', 'value': 8.31}, {
                'name': '广东省',
                'value': 7.840677966101695
              }, {'name': '广西壮族自治区', 'value': 7.584269662921348}, {
                'name': '新疆维吾尔自治区',
                'value': 9.333333333333334
              }, {'name': '江苏省', 'value': 7.7073170731707314}, {
                'name': '江西省',
                'value': 7.7924528301886795
              }, {'name': '河北省', 'value': 8.48936170212766}, {
                'name': '河南省',
                'value': 8.394009216589861
              }, {'name': '浙江省', 'value': 8.0}, {'name': '湖北省', 'value': 8.470588235294118}, {
                'name': '湖南省',
                'value': 7.333333333333333
              }, {'name': '甘肃省', 'value': 8.092378752886836}, {
                'name': '福建省',
                'value': 8.244444444444444
              }, {'name': '贵州省', 'value': 7.6484375}, {'name': '辽宁省', 'value': 8.617021276595745}, {
                'name': '重庆市',
                'value': 7.566666666666666
              }, {'name': '陕西省', 'value': 8.020833333333334}, {'name': '黑龙江省', 'value': 8.75438596491228}]
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