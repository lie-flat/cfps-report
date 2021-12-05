<template>
  <aside id="toc" class="menu is-hidden-touch is-narrow">
    <p class="subtitle">目录</p>
    <p class="menu-label"><a href="#education-section">教育</a></p>
    <ul class="menu-list">
      <li><a href="#chart-education">2010/2018 受教育水平对比</a></li>
      <li><a href="#chart-education-compare">2010-2018 农村学历变化趋势</a></li>
    </ul>
    <p class="menu-label"><a href="#career-section">工作</a></p>
    <ul class="menu-list">
      <li><a href="#chart-child-dream-career">青少年的理想职业</a></li>
      <li><a href="#chart-expected-child-career">家长对青少年的期望职业</a></li>
    </ul>
    <p class="menu-label">生活</p>
    <ul class="menu-list">
      <li><a>Hello</a></li>
      <li><a>World</a></li>
      <li><a>AAAAA</a></li>
    </ul>
    <p class="menu-label">经济</p>
    <ul class="menu-list">
      <li><a>Hello</a></li>
      <li><a>World</a></li>
      <li><a>AAAAA</a></li>
    </ul>
  </aside>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "TableOfContents"
});
</script>

<style scoped>
#toc {
  padding-left: 30px;
  position: sticky;
  top: 0;
  height: min-content;
}
</style>