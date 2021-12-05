<template>
  <section id="ending" class="content">
    <h1>结语</h1>

    <!-- <h2>乡村振兴内容</h2> -->
    <div class="card">
      <div class="card-content">
        <div class="intro">
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;全球局势动荡的今天，我国正在全力推动形成国内国际双循环新发展格局。
            其中全方位扩大内需，释放国内大循环的市场潜力是重要一环，而乡村振兴是国内大循环中的重要策略。
            2020年是全面打赢脱贫攻坚战的收官之年，乡村振兴战略更是重中之重。年初我们遭遇了新冠肺炎疫情的“加试题”，
            后疫情时代下如何打赢这场攻坚战，真正实现在危机中育新机、于变局中开新局，成为我们思考的议题。
          </span>
            
            <br> &nbsp;&nbsp;&nbsp;&nbsp; ”乡村振兴”绝不仅仅只是一句口号，它是个巨大的系统工程，不仅关系到“两个一百年”奋斗目标的实现，
            更关系到全国人民的眼前利益。我们生活所需的大量物资，都来自农业，产自农村。乡村是否振兴，
            需要大家共同关注和积极支持，所以——民族欲复兴，乡村必振兴；乡村欲振兴，要先振人心。
        
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import { defineComponent } from "vue";
// import Edu from "@/components/edu";

export default defineComponent({
  name: "End",
});
</script>

<style lang="scss" scoped>
@import "~bulma/bulma";
.intro {
  margin: auto;
  //   width: 80%;
  /* border: 3px solid green; */
  //   padding: 10px;
  font-weight: bold;
  font-size: 20px;
  font-family:wfont_1cbfba_2ce53f5018214fe19e613842ea09d504,wf_2ce53f5018214fe19e613842e,orig_fzcuheisongsbgb;
  letter-spacing:0.1em
}

.card {
    width: 70%;
  margin: 0 auto;
  margin-bottom: 80px;
}

.pic {
  margin-bottom: 60px;
  margin-top: 0px;
}
</style>
