<template>
  <aside id="toc" class="menu is-hidden-touch is-narrow">
    <p class="subtitle">目录</p>
    <p class="menu-label"><a href="#education-section">教育</a></p>
    <ul class="menu-list">
      <li><a>Hello</a></li>
      <li><a>World</a></li>
    </ul>
    <p class="menu-label">工作</p>
    <ul class="menu-list">
      <li><a>Hello</a></li>
      <li><a>World</a></li>
      <li><a>AAAAA</a></li>
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