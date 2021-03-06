<template>
  <aside ref="toc" id="toc" class="menu is-hidden-touch is-narrow">
    <p class="subtitle">目录</p>
    <p class="menu-label"><a href="#intro">引言</a></p>
    <p class="menu-label"><a href="#education-section">教育</a></p>
    <ul class="menu-list">
      <li><a href="#chart-education">2010/2018 受教育水平对比</a></li>
      <li><a href="#chart-education-compare">2010-2018 农村学历变化趋势</a></li>
      <li><a href="#chart-use-phone">农村手机使用情况</a></li>
      <li><a href="#chart-child-yard">幼儿园/学前班入学率对比</a></li>
      <li><a href="#chart-expected-education">家长所希望的孩子的教育水平</a></li>
      <li><a href="#chart-expected-score">各省份家长的平均期望成绩</a></li>
      <li><a href="#chart-education-cost">过去12个月家庭教育总支出</a></li>
    </ul>
    <p class="menu-label"><a href="#career-section">工作</a></p>
    <ul class="menu-list">
      <li><a href="#chart-child-dream-career">青少年的理想职业</a></li>
      <li><a href="#chart-expected-child-career">家长对青少年的期望职业</a></li>
      <li><a href="#chart-agriculture-family-number">从事农业家庭数量变化</a></li>
    </ul>
    <p class="menu-label"><a href="#life-section">生活</a></p>
    <ul class="menu-list">
      <li><a href="#chart-insurance">医疗保险</a></li>
      <li><a href="#chart-child-happiness">少年儿童幸福程度地图</a></li>
      <li><a href="#chart-child-happiness-plot">少年儿童幸福程度城乡对比</a></li>
    </ul>
    <p class="menu-label"><a href="#economy-section">经济</a></p>
    <ul class="menu-list">
      <li><a href="#chart-urban-rural-income-expense">城镇乡村收入支出对比</a></li>
      <li><a href="#chart-urban-rural-family-consume">居民消费情况</a></li>
      <li><a href="#chart-plant-animal-expense">农业各方面开销</a></li>
      <li><a href="#chart-finance-situation">家庭存款理财情况</a></li>
    </ul>
    <p class="menu-label"><a href="#ending-section">乡村振兴的探索和发展</a></p>
    <p class="menu-label"><a href="#end">结语</a></p>
  </aside>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "TableOfContents",
  props: ['getSections'],
  data() {
    return {
      current: '',
      links: []
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(entries => {
      this.current = []
      this.links = [...this.$refs.toc.querySelectorAll('a')]
      entries.forEach(entry => {
        let href = `#${entry.target.getAttribute('id')}`,
            link = this.links.find(l => l.getAttribute('href') === href)
        if (entry.isIntersecting) {
          link?.classList.add('menu-item-active');
        } else {
          link?.classList.remove('menu-item-active');
        }
      });
    }, {
      threshold: 0,
    });

    // Track all sections that have an `id` applied
    document.querySelectorAll('#sections div[id],.chart[id],h2[id]').forEach((section) => {
      this.observer.observe(section);
    });
  },
  beforeUnmount() {
    this.observer.disconnect();
  },
});

</script>

<style lang="scss">
@import "~bulma/sass/base/generic";

#toc {
  padding-left: 30px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  margin-top: 0;
  padding-top: 0;
  height: min-content;
  max-height: 98vh;
  overflow-y: auto;
  padding-bottom: 0;

  & > .subtitle {
    position: sticky;
    top: 0;
    left: 0;
    text-align: center;
    margin-bottom: 0;
    border-radius: 0 0 0.5rem 0.5rem;
    background-color: white;
    z-index: 1;
  }
}

.menu-label {
  font-size: 0.9rem !important;
  font-weight: bold;
  margin-bottom: 0.4rem !important;
  margin-top: 0.4rem !important;
}

.menu-item-active {
  color: white !important;
  box-shadow: $primary 0 0 10px;

  &::before {
    background-color: $primary;
    width: 100% !important;
  }
}


.menu-list a {
  position: relative;
  transition: all 0.7s ease;
  border-radius: 6px;
  overflow: hidden;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  margin-bottom: 0.2rem;
  font-size: 0.8rem;

  &::before {
    transition: all 0.7s ease;
    height: 100%;
    content: '';
    width: 0;
    opacity: 1;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
  }

  &:hover {
    color: black !important;
    box-shadow: cyan 0 0 10px;
    background-color: cyan !important;
  }
}
</style>