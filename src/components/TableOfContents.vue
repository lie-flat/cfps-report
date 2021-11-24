<template>
  <aside class="menu is-hidden-touch is-narrow">
    <p class="subtitle">目录</p>
    <p class="menu-label">第一部分</p>
    <ul class="menu-list">
      <li><a>Hello</a></li>
      <li><a>World</a></li>
    </ul>
    <p class="menu-label">第二部分</p>
    <ul class="menu-list">
      <li><a>Hello</a></li>
      <li><a>World</a></li>
      <li><a>AAAAA</a></li>
    </ul>
    <p class="menu-label">第三部分</p>
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

</style>