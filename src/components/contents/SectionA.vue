<template>
  <section id="example-section" class="section is-medium">
    <h1 class="title">示例标题</h1>
    <h2 class="subtitle">示例子标题</h2>
  </section>
  <div class="content">
    <Edu />
    <article class="message">
      <div class="message-body">
        <strong>
        为实现乡村振兴，教育普及化成为一项重要的硬性指标。政府加大对贫困地区的倾斜扶持力度。
        由CFPS统计的信息可以明显看出：文盲/半文盲的占比下降22%；受到高中及以上的教育的人占统计人口的50%，农村义务教育发展不平衡不充分问题有较明显的缓解。
        </strong>
      </div>
    </article>
    <Edu_compar />
    <article class="message is-dark">
      <div class="message-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
        nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
        purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac
        <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
        sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna
        a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
      </div>
    </article>
    <insurance />
    <article class="message">
      <div class="message-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
        nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
        purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac
        <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
        sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna
        a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
      </div>
    </article>
    <use-phone />
    <article class="message is-dark">
      <div class="message-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
        nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
        purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac
        <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
        sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna
        a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
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