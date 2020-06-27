<template>
  <div id="moduleload">
    <a-card title="模块加载">
      <a href="https://requirejs.org/">
        <a-card-grid class="grid">
          <img src="@/assets/img/moduleimg/Requirejs.png" />
          <h4>
            RequireJS
          </h4>
          <p>RequireJS是一个非常小巧的JavaScript模块载入框架，是AMD规范最好的实现者之一。</p>
        </a-card-grid>
      </a>
      <a href="http://nodejs.cn/">
        <a-card-grid class="grid">
          <img src="@/assets/img/moduleimg/nodejs.png" />
          <h4>
            Nodejs
            <strong>中文网</strong>
          </h4>
          <p>Node.js是一个基于Chrome V8引擎的JavaScript运行环境。</p>
        </a-card-grid>
      </a>
      <a href="https://vue-loader.vuejs.org/">
        <a-card-grid class="grid">
          <img src="@/assets/img/moduleimg/vueload.jpg" />
          <h4>
           Vue Loader
          </h4>
          <p>Vue.js组件的Webpack loader。</p>
        </a-card-grid>
      </a>
    </a-card>
  </div>
</template>

<script>
export default {
  name: "Moduleload",
 
};

</script>

<style scoped>
@import "../source.css";
</style>