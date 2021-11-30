<template>
  <section id="header" class="hero is-fullheight">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-start">
            <a id="github-link" href="https://github.com/lie-flat/cfps-report" class="navbar-item">
              <font-awesome-icon :icon="['fab', 'github']"/>
              <span style="margin-left: 0.3em;">GitHub</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
    <div class="hero-body">
      <div class="container">
        <p class="title">
          乡村振兴与城乡差异分析报告
        </p>
        <p class="subtitle">
          基于 CFPS 2010 - 2018 的数据
        </p>
        <p class="subtitle">山东大学（威海）数据科学与人工智能实验班大作业</p>
      </div>
    </div>
    <div class="hero-foot"></div>
  </section>
</template>

<script>
import {defineComponent} from "vue";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

library.add(faGithub);

export default defineComponent({
  name: "Header",
});
</script>

<style lang="scss" scoped>
#header {
  background-image: url("../assets/header-bg.jpg");
  background-attachment: fixed;
  color: azure !important;
  $header-title-color: azure;

  #github-link {
    max-width: 6em;
  }

  a {
    color: white;

    &:hover {
      background-color: #ffffff23;
    }
  }

  & > .hero-body > .container {
    flex-direction: column;
    text-align: left;
    justify-content: center;
    align-items: flex-start;

    & > .title {
      color: $header-title-color;
      font-size: 3rem;
      font-weight: bold;
      margin-bottom: 3rem;
    }

    & > .subtitle {
      color: $header-title-color;
    }
  }
}
</style>