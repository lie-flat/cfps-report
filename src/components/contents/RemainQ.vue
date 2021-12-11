<template>
  <section id="ending-section" class="section is-medium">
    <h1 class="title">乡村振兴的探索和发展</h1>
  </section>
  <!-- <hr class="custom"> -->
  <div class="content">
    <h1>案例展示</h1>
    <ol>
      <li>菏泽单县：实施乡村振兴战略、打造乡村振兴齐鲁样板，是习近平总书记对山东乡村振兴工作的殷切希望。单县加快实施乡村振兴发展战略，其中将单县浮龙湖生态文化旅游度假区作为重点项目建设，
        利用优良地质条件，突出发展生态文化旅游，努力实现文化振兴、生态振兴，以达到乡村振兴。
      </li>
      <li>广东紫金县：紫金县主要领导多次召开会议部署迎检工作，密集深入到镇村一线发现问题、现场办公，督导检查乡村振兴各项工作推进情况。紫金以县党政领导挂村、党员干部返乡、志愿服务下村、
        巾帼美丽家园、师生清洁家庭等行动决战决胜乡村振兴第一仗，通过党员干部示范带动全民参与乡村环境整治，激起乡村振兴“一池春水”。
      </li>
      <li>蒙城县：近年来，蒙城县坚持党建引领，突出产业带动，拓宽收入渠道，优化收入结构，发展壮大社区集体经济，增强了乡村振兴的发展后劲。蒙城县利用自然优势，形成产业+企业+就业的新模式，
        为居民就业、集体增收提供了强大助力。并且引进“和创园”现代农业建设320亩连体温室大棚项目、上海三尚生物科技等企业，大力发展果蔬产业。有了产业，有了企业，自然也就带来了就业，新模式下的发展平台，吸引了返乡人员留在本地创业。
      </li>

    </ol>
    <h1>发展存在的问题</h1>
    <ul>
      <li>乡村振兴的专业人才较为紧缺：城乡发展差距导致乡村人才纷纷投入城市建设中，青壮年劳力、高素质人群流失严重，留守基层的主要有两类人，一类是基层干部，另一类是老人、妇女和儿童。</li>
      <li>土地要素活力尚未充分释放：土地收益分配机制不健全，农民难以从现有的土地制度中获益。此外，目前农村土地利用规划缺位导致农村土地利用粗放、无序、碎片化问题，使得土地资源未能得到有效整合，
        土地生产效率难以提高。
      </li>
      <li>乡村造血不足与资金扶持不够：现有的金融服务和金融产品的标准、特点、审批时效、贷款期限大多针对工业企业的经营而设计，与差异化、个性化、成本低廉化、季节性强的农村金融需求不相符合。金融机构网点设置、人员、
        信贷资源配置等仍主要集中于城市，农村的信用体系建设尚未形成。网络信息技术在农村金融中发挥作用有限，金融机构对新型经营主体和小农户渗透力不足。
      </li>
    </ul>
  </div>
</template>


<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "Question",
});
</script>

<style lang="scss">
@import "~bulma/sass/utilities/mixins";

.intro {
  margin: auto;
  //   width: 80%;
  /* border: 3px solid green; */
  //   padding: 10px;
  font-weight: bold;
  font-size: 20px;
  font-family: wfont_1cbfba_2ce53f5018214fe19e613842ea09d504,
  wf_2ce53f5018214fe19e613842e, orig_fzcuheisongsbgb;
  letter-spacing: 0.1em;
}

.card {
  width: 70%;
  margin: 0 auto;
  margin-bottom: 80px;
}

@include touch {
  .card {
    width: 90%;
  }
  .intro {
    width: 90%;
  }
}

.pic {
  margin-bottom: 60px;
  margin-top: 0px;
}

.custom {
  border-top: 10px dotted steelblue;
  margin-top: 80px;
}

#ending-section {
  background-image: url("../../assets/develop.jpg");

}

li {
  letter-spacing: 0.1em;
  font-family: wfont_1cbfba_2ce53f5018214fe19e613842ea09d504, wf_2ce53f5018214fe19e613842e, orig_fzcuheisongsbgb;
  font-size: 20px;
}

</style>

