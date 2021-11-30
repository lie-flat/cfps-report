<template>
  <v-chart class="chart" :autoresize="true" :option="option"/>
<!--  <swiper-->
<!--      :slides-per-view="1"-->
<!--      :space-between="50"-->
<!--      :direction="'vertical'"-->
<!--      :options="swiperOptions"-->
<!--  >-->
<!--    <swiper-slide>Slide 1</swiper-slide>-->
<!--    <swiper-slide>Slide 2</swiper-slide>-->
<!--    <swiper-slide>Slide 3</swiper-slide>-->
<!--    ...-->
<!--  </swiper>-->

</template>

<script>
// import {Swiper, SwiperSlide} from 'swiper/vue'
// import 'swiper/swiper.scss';
import {use} from "echarts/core";
import {CanvasRenderer} from "echarts/renderers";
import {PieChart} from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
import VChart from "vue-echarts";
import {ref, defineComponent} from "vue";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

export default defineComponent({
  name: "HelloWorld",
  components: {
    VChart,
    // Swiper,
    // SwiperSlide,
  },
  setup() {
    const swiperOptions = {
      loop: false,
      direction: "vertical",
      height: window.innerHeight,
      width: window.innerWidth
    }
    const option = ref({
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

    return {option, swiperOptions};
  }
});
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>