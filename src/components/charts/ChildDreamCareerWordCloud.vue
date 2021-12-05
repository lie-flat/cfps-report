<template>
  <div class="content">
    <!--    <p>{{ value }}</p>-->
    <!--    <input class="slider is-fullwidth" type="range" min="2010" max="2018" step="2" v-model="value">-->
    <v-chart class="chart" :autoresize="true" :option="wcOption"></v-chart>
    <v-chart class="chart" :autoresize="true" :option="wcpOption"></v-chart>
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

use([
  CanvasRenderer,
  LineChart,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

export default defineComponent({
  name: "ChildDreamCareerWordCloud",
  components: {VChart},
  setup() {
    const textStyle = {
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
      color: function () {
        // Random color
        return 'rgb(' + [
          Math.round(Math.random() * 160),
          Math.round(Math.random() * 160),
          Math.round(Math.random() * 160)
        ].join(',') + ')';
      }
    };
    const emphasis = {
      focus: 'self',
      textStyle: {
        textShadowBlur: 10,
        textShadowColor: '#333'
      }
    };
    const wcOption = ref({
      timeline: {
        data: ["2010", "2016"],
      },
      tooltip: {
        trigger: 'item',
      },
      options: [
        {
          title: {
            text: "青少年的职业期望(2010)",
            left: 'center',
          },
          series: [
            {
              name: '青少年的职业期望',
              type: 'wordCloud',
              shape: 'pentagon',
              layoutAnimation: true,
              textStyle,
              emphasis,
              data: [{'name': '教学人员', 'value': 736}, {'name': '卫生专业技术人员', 'value': 419}, {
                'name': '企业负责人',
                'value': 277
              }, {'name': '安全保卫和消防人员', 'value': 196}, {'name': '科学研究人员', 'value': 181}, {
                'name': '文学艺术工作人员',
                'value': 166
              }, {'name': '军人', 'value': 101}, {'name': '不便分类的其他从业人员', 'value': 101}, {
                'name': '行政办公和其他办事人员',
                'value': 97
              }, {'name': '工程技术人员', 'value': 69}, {'name': '法律专业人员', 'value': 56}, {
                'name': '社会服务和居民生活服务人员',
                'value': 50
              }, {'name': '国家机关、党群组织、事业单位负责人', 'value': 49}, {
                'name': '运输设备操作人员及有关人员',
                'value': 40
              }, {'name': '新闻出版和文化工作人员', 'value': 31}, {'name': '体育工作人员', 'value': 30}, {
                'name': '餐饮、旅游和健身娱乐场所服务人员',
                'value': 30
              }, {'name': '打工', 'value': 28}, {'name': '机械、电子、电力设备制造加工和维修人员', 'value': 27}, {
                'name': '读书',
                'value': 27
              }, {'name': '其他设备操作人员及有关人员', 'value': 24}, {'name': '飞机和船舶技术人员', 'value': 21}, {
                'name': '经济和金融业务人员',
                'value': 19
              }, {'name': '运输服务人员', 'value': 16}, {'name': '农业生产人员', 'value': 14}, {
                'name': '为人民服务',
                'value': 9
              }, {'name': '其他专业技术人员', 'value': 1}]
            }
          ]
        }, {
          title: {
            text: "青少年的职业期望(2016)",
            left: 'center',
          },
          series: [
            {
              name: '青少年的职业期望',
              type: 'wordCloud',
              shape: 'pentagon',
              layoutAnimation: true,
              textStyle,
              emphasis,
              data: [{'name': '教学人员', 'value': 584}, {'name': '卫生专业技术人员', 'value': 300}, {
                'name': '文学艺术工作人员',
                'value': 233
              }, {'name': '军人', 'value': 126}, {'name': '安全保卫和消防人员', 'value': 109}, {
                'name': '工程技术人员',
                'value': 99
              }, {'name': '科学研究人员', 'value': 91}, {'name': '企业负责人', 'value': 72}, {
                'name': '餐饮、旅游和健身娱乐场所服务人员',
                'value': 56
              }, {'name': '行政办公和其他办事人员', 'value': 55}, {'name': '体育工作人员', 'value': 35}, {
                'name': '新闻出版和文化工作人员',
                'value': 28
              }, {'name': '飞机和船舶技术人员', 'value': 20}, {'name': '国家机关、党群组织、事业单位负责人', 'value': 18}, {
                'name': '经济和金融业务人员',
                'value': 18
              }, {'name': '读书', 'value': 18}, {'name': '机械、电子、电力设备制造加工和维修人员', 'value': 15}, {
                'name': '社会服务和居民生活服务人员',
                'value': 15
              }, {'name': '法律专业人员', 'value': 13}, {'name': '运输设备操作人员及有关人员', 'value': 12}, {
                'name': '不便分类的其他从业人员',
                'value': 10
              }, {'name': '打工', 'value': 8}, {'name': '运输服务人员', 'value': 7}, {
                'name': '其他设备操作人员及有关人员',
                'value': 6
              }, {'name': '工人', 'value': 6}, {'name': '农业生产人员', 'value': 5}, {'name': '其他专业技术人员', 'value': 2}]
            }
          ]
        }
      ]
    });
    const wcpOption = ref({
      timeline: {
        data: ["2010", "2014", "2018"],
      },
      tooltip: {
        trigger: 'item',
      },
      options: [
        {
          title: {
            text: "家长对儿童的职业期望(2010)",
            left: "center"
          },
          series: [
            {
              name: '家长对儿童的职业期望',
              type: 'wordCloud',
              shape: 'pentagon',
              layoutAnimation: true,
              textStyle,
              emphasis,
              data: [{'name': '教学人员', 'value': 1025}, {'name': '卫生专业技术人员', 'value': 743}, {
                'name': '不便分类的其他从业人员',
                'value': 484
              }, {'name': '行政办公和其他办事人员', 'value': 315}, {'name': '企业负责人', 'value': 215}, {
                'name': '国家机关、党群组织、事业单位负责人',
                'value': 187
              }, {'name': '军人', 'value': 134}, {'name': '读书', 'value': 123}, {
                'name': '科学研究人员',
                'value': 122
              }, {'name': '安全保卫和消防人员', 'value': 119}, {'name': '工程技术人员', 'value': 110}, {
                'name': '文学艺术工作人员',
                'value': 85
              }, {'name': '法律专业人员', 'value': 63}, {'name': '为人民服务', 'value': 42}, {
                'name': '其他设备操作人员及有关人员',
                'value': 41
              }, {'name': '运输设备操作人员及有关人员', 'value': 33}, {'name': '打工', 'value': 30}, {
                'name': '经济和金融业务人员',
                'value': 27
              }, {'name': '农业生产人员', 'value': 27}, {
                'name': '机械、电子、电力设备制造加工和维修人员',
                'value': 21
              }, {'name': '社会服务和居民生活服务人员', 'value': 20}, {
                'name': '新闻出版和文化工作人员',
                'value': 13
              }, {'name': '餐饮、旅游和健身娱乐场所服务人员', 'value': 12}, {'name': '体育工作人员', 'value': 12}, {
                'name': '飞机和船舶技术人员',
                'value': 9
              }, {'name': '运输服务人员', 'value': 7}, {'name': '其他专业技术人员', 'value': 4}]
            }
          ]
        },
        {
          title: {
            text: "家长对儿童的职业期望(2014)",
            left: "center"
          },
          series: [
            {
              name: '家长对儿童的职业期望',
              type: 'wordCloud',
              shape: 'pentagon',
              layoutAnimation: true,
              textStyle,
              emphasis,
              data: [{'name': '卫生专业技术人员', 'value': 634}, {'name': '教学人员', 'value': 575}, {
                'name': '行政办公和其他办事人员',
                'value': 218
              }, {'name': '看他/她自己', 'value': 190}, {'name': '企业负责人', 'value': 146}, {
                'name': '国家机关、党群组织、事业单位负责人',
                'value': 109
              }, {'name': '军人', 'value': 108}, {'name': '安全保卫和消防人员', 'value': 58}, {
                'name': '读书',
                'value': 44
              }, {'name': '文学艺术工作人员', 'value': 44}, {'name': '科学研究人员', 'value': 39}, {
                'name': '工程技术人员',
                'value': 39
              }, {'name': '法律专业人员', 'value': 36}, {'name': '经济和金融业务人员', 'value': 24}, {
                'name': '其他设备操作人员及有关人员',
                'value': 14
              }, {'name': '社会服务和居民生活服务人员', 'value': 13}, {'name': '农业生产人员', 'value': 12}, {
                'name': '打工',
                'value': 10
              }, {'name': '不便分类的其他从业人员', 'value': 10}, {'name': '飞机和船舶技术人员', 'value': 9}, {
                'name': '体育工作人员',
                'value': 7
              }, {'name': '新闻出版和文化工作人员', 'value': 6}, {'name': '为人民服务', 'value': 5}, {
                'name': '其他专业技术人员',
                'value': 5
              }, {'name': '机械、电子、电力设备制造加工和维修人员', 'value': 4}, {'name': '工人', 'value': 4}, {
                'name': '运输服务人员',
                'value': 1
              }]
            }
          ]
        },
        {
          title: {
            text: "家长对儿童的职业期望(2018)",
            left: "center"
          },
          series: [
            {
              name: '家长对儿童的职业期望',
              type: 'wordCloud',
              shape: 'pentagon',
              layoutAnimation: true,
              textStyle,
              emphasis,
              data: [{'name': '教学人员', 'value': 673}, {'name': '卫生专业技术人员', 'value': 493}, {
                'name': '看他/她自己',
                'value': 440
              }, {'name': '行政办公和其他办事人员', 'value': 240}, {'name': '军人', 'value': 199}, {
                'name': '读书',
                'value': 67
              }, {'name': '文学艺术工作人员', 'value': 64}, {'name': '企业负责人', 'value': 63}, {
                'name': '工程技术人员',
                'value': 63
              }, {'name': '安全保卫和消防人员', 'value': 58}, {'name': '国家机关、党群组织、事业单位负责人', 'value': 49}, {
                'name': '科学研究人员',
                'value': 43
              }, {'name': '经济和金融业务人员', 'value': 32}, {'name': '法律专业人员', 'value': 32}, {
                'name': '飞机和船舶技术人员',
                'value': 19
              }, {'name': '农业生产人员', 'value': 14}, {'name': '餐饮、旅游和健身娱乐场所服务人员', 'value': 14}, {
                'name': '运输服务人员',
                'value': 12
              }, {'name': '体育工作人员', 'value': 9}, {'name': '新闻出版和文化工作人员', 'value': 9}, {
                'name': '其他设备操作人员及有关人员',
                'value': 8
              }, {'name': '打工', 'value': 8}, {'name': '机械、电子、电力设备制造加工和维修人员', 'value': 7}, {
                'name': '社会服务和居民生活服务人员',
                'value': 7
              }, {'name': '运输设备操作人员及有关人员', 'value': 2}, {'name': '为人民服务', 'value': 2}, {'name': '其他专业技术人员', 'value': 1}]
            }
          ]
        },
      ]
    });
    return {
      wcOption, wcpOption
    };
  }
});
</script>

<style lang="scss" scoped>
.chart {
  height: 500px;
}
</style>