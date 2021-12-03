<template>
  <section id="example-section" class="section is-medium">
    <h1 class="title">示例标题</h1>
    <h2 class="subtitle">示例子标题</h2>
  </section>
  <div class="content">
    <h2>农村受教育情况</h2>
    <p>以下是2010、2018年的学历占比图，以及2010-2018年各教育阶段人数比例变化图</p>
    <Edu/>
    
    <article class="message">
      <div class="message-body">
        <strong>
        为实现乡村振兴，教育普及化成为一项重要的硬性指标。政府加大对贫困地区的倾斜扶持力度。
        由CFPS统计的信息可以明显看出：‘文盲/半文盲’的占比下降22%；受到高中及以上的教育的人占统计人口的50%，农村义务教育发展不平衡不充分问题有较明显的缓解。
        </strong>
      </div>
    </article>
    <Edu_compar />
    <article class="message is-dark">
      <div class="message-body">
        我们可以明显看出：2010-2014年间，文盲/半文盲在农村调查人口中占将近一半，受到‘高中及以上’的教育水平人数上升不明显。2014-2018年间，随着城乡义务教育一体化改革的
        推进，‘文盲/半文盲’在农村的占比人数下降明显，‘小学’学历在农村占比最多，‘高中/中专/职高/技校’、‘大专’以及‘大学本科以上’的学历占比也有较明显的上涨，义务教育一体化
        改革的推进成效显著。
      </div>
    </article>
    <insurance />
    <article class="message">
      <div class="message-body">
        <strong>
        2010-2018年间三个医疗保险————新型农村合作医疗保险、城镇居民医疗保险、城镇职工医疗保险在农村占有95%以上的比重。2002年，党中央明确提出各级政府要积极引导农民建立
        以大病统筹为主的新型农村合作医疗制度，积极引导和支持农民自愿参加农村合作医疗保险。十年来，‘城镇职工医疗’占比有小幅度的上升；‘保险合作医疗保险’保持70%以上的占比。
        </strong>
      </div>
    </article>
    <p>农村手机使用率</p>
    <h2>2010-2018年间农村使用手机情况</h2>
    <use-phone />
    <article class="message is-dark">
      <div class="message-body">
        随着互联网的普及，2010-2018年间农村手机使用率逐年上涨
      </div>
    </article>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Edu from "@/components/edu";
import Edu_compar from "@/components/educompar";
import Insurance from "@/components/insurance";
import UsePhone from "@/components/UsePhone";
export default defineComponent({
  name: "SectionA",
  components: { UsePhone, Insurance, Edu_compar, Edu },
});
</script>

<style lang="scss" scoped>
</style>