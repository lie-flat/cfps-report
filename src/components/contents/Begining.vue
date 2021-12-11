<template>
  <section id='intro' class="content">
    <h1>引言</h1>
    <div class='pic'>
      <img alt="xi's words" src='../../assets/xi3.png'>
    </div>
    <!-- <h2>乡村振兴内容</h2> -->
    <div class="card">
      <div class="card-content">
        <div class="intro">

          <p>1.把解决好“三农“问题作为全党工作重中之重</p>
          <p>2.产业兴旺、生态宜居、乡风文明、治理有效、生活富裕的总要求</p>
          <p>3.完善承包地”三权“分置制度，第二轮土地承包到期后再延长三十年。</p>
          <p>4.深化农村集体产权制度改革，壮大集体经济；</p>
          <p>5.确保国家粮食安全，饭碗端在自己手中；</p>
          <p>
            6.构建现代农业产业体系、生产体系、经营体系，实现小农户和现在农业发展有机衔接
          </p>
          <p>7.促进农村一二三产业发展，支持和鼓励农名就业创业</p>
          <p>8.健全自治、法治、德治相结合的乡村治理体系</p>
          <p>9.懂农业、爱农村、爱农民的‘三农”工作队伍</p>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "Begin",

});
</script>

<style lang="scss">
@import "~bulma/sass/utilities/mixins";

.intro {
  margin: auto;
  width: 80%;
  /* border: 3px solid green; */
  padding: 10px;
  font-weight: bold;
  font-size: 19px;
  font-family: wfont_1cbfba_2ce53f5018214fe19e613842ea09d504, wf_2ce53f5018214fe19e613842e, orig_fzcuheisongsbgb;
}

.card {
  width: 70%;
  margin: 0 auto 80px;
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
  margin-top: 0;

}
</style>
