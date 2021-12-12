<template>
  <section id="example-section" class="section is-medium">
    <h1 class="title">示例标题</h1>
    <h2 class="subtitle">示例子标题</h2>
  </section>
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
    <v-chart class="chart" :autoresize="true" :option="exampleChartOption"/>
    <h2>Hello World</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Vitae justo eget magna fermentum iaculis. Convallis a cras semper auctor neque vitae tempus quam.
      Enim neque volutpat ac tincidunt vitae semper. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus
      pellentesque. Urna et pharetra pharetra massa. Dolor sed viverra ipsum nunc aliquet bibendum enim. Auctor neque
      vitae tempus quam pellentesque. Lobortis elementum nibh tellus molestie nunc. Aliquam purus sit amet luctus
      venenatis lectus. Iaculis nunc sed augue lacus viverra vitae congue eu consequat. Tortor posuere ac ut consequat
      semper viverra nam. Nullam non nisi est sit amet. Eget est lorem ipsum dolor. In nulla posuere sollicitudin
      aliquam ultrices sagittis orci. Pellentesque habitant morbi tristique senectus et netus et malesuada.</p>
    <v-chart class="chart" :autoresize="true" :option="anotherChartOption"/>
    <h2>HAHAHAHAHAHAHAHAHAHA</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Vitae justo eget magna fermentum iaculis. Convallis a cras semper auctor neque vitae tempus quam.
      Enim neque volutpat ac tincidunt vitae semper. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus
      pellentesque. Urna et pharetra pharetra massa. Dolor sed viverra ipsum nunc aliquet bibendum enim. Auctor neque
      vitae tempus quam pellentesque. Lobortis elementum nibh tellus molestie nunc. Aliquam purus sit amet luctus
      venenatis lectus. Iaculis nunc sed augue lacus viverra vitae congue eu consequat. Tortor posuere ac ut consequat
      semper viverra nam. Nullam non nisi est sit amet. Eget est lorem ipsum dolor. In nulla posuere sollicitudin
      aliquam ultrices sagittis orci. Pellentesque habitant morbi tristique senectus et netus et malesuada.</p>
    <v-chart class="chart" :autoresize="true" :option="yetAnotherChartOption"/>
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
import * as echarts from "echarts";

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
  name: "ExampleSection",
  components: {
    VChart,
  },
  setup() {
    const exampleChartOption = ref({
      title: {
        text: "Traffic Sources",
        left: "center"
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: "vertical",
        left: "left",
        data: ["Direct", "Email", "Ad Networks", "Video Ads", "Search Engines"]
      },
      series: [
        {
          name: "Traffic Sources",
          type: "pie",
          radius: "55%",
          center: ["50%", "60%"],
          data: [
            {value: 335, name: "Direct"},
            {value: 310, name: "Email"},
            {value: 234, name: "Ad Networks"},
            {value: 135, name: "Video Ads"},
            {value: 1548, name: "Search Engines"}
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ]
    });
    const anotherChartOption = ref({
      title: {
        text: 'Stacked Area Chart'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Email',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'Union Ads',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: 'Video Ads',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: 'Direct',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: 'Search Engine',
          type: 'line',
          stack: 'Total',
          label: {
            show: true,
            position: 'top'
          },
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    });
    const yetAnotherChartOption = ref({
      color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
      title: {
        text: 'Customized Radar Chart'
      },
      legend: {},
      radar: [
        {
          indicator: [
            {text: 'Indicator1'},
            {text: 'Indicator2'},
            {text: 'Indicator3'},
            {text: 'Indicator4'},
            {text: 'Indicator5'}
          ],
          center: ['25%', '50%'],
          radius: 120,
          startAngle: 90,
          splitNumber: 4,
          shape: 'circle',
          axisName: {
            formatter: '【{value}】',
            color: '#428BD4'
          },
          splitArea: {
            areaStyle: {
              color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
              shadowColor: 'rgba(0, 0, 0, 0.2)',
              shadowBlur: 10
            }
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(211, 253, 250, 0.8)'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(211, 253, 250, 0.8)'
            }
          }
        },
        {
          indicator: [
            {text: 'Indicator1', max: 150},
            {text: 'Indicator2', max: 150},
            {text: 'Indicator3', max: 150},
            {text: 'Indicator4', max: 120},
            {text: 'Indicator5', max: 108},
            {text: 'Indicator6', max: 72}
          ],
          center: ['75%', '50%'],
          radius: 120,
          axisName: {
            color: '#fff',
            backgroundColor: '#666',
            borderRadius: 3,
            padding: [3, 5]
          }
        }
      ],
      series: [
        {
          type: 'radar',
          emphasis: {
            lineStyle: {
              width: 4
            }
          },
          data: [
            {
              value: [100, 8, 0.4, -80, 2000],
              name: 'Data A'
            },
            {
              value: [60, 5, 0.3, -100, 1500],
              name: 'Data B',
              areaStyle: {
                color: 'rgba(255, 228, 52, 0.6)'
              }
            }
          ]
        },
        {
          type: 'radar',
          radarIndex: 1,
          data: [
            {
              value: [120, 118, 130, 100, 99, 70],
              name: 'Data C',
              symbol: 'rect',
              symbolSize: 12,
              lineStyle: {
                type: 'dashed'
              },
              label: {
                show: true,
                formatter: function (params) {
                  return params.value;
                }
              }
            },
            {
              value: [100, 93, 50, 90, 70, 60],
              name: 'Data D',
              areaStyle: {
                color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                  {
                    color: 'rgba(255, 145, 124, 0.1)',
                    offset: 0
                  },
                  {
                    color: 'rgba(255, 145, 124, 0.9)',
                    offset: 1
                  }
                ])
              }
            }
          ]
        }
      ]
    });
    return {exampleChartOption, anotherChartOption, yetAnotherChartOption};
  }
});
</script>

<style lang="scss" scoped>
#example-section {
  background-image: url("../../assets/header-bg.webp");
}

.chart {
  height: 350px;
}
</style>