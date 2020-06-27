<template>
  <div id="buildframe">
    <a-card title="构建工具">
      <a href="https://www.gulpjs.com.cn/">
        <a-card-grid class="grid">
          <img src="@/assets/img/buildimg/gulp.png" />
          <h4>
            Gulp
            <strong>中文网</strong>
          </h4>
          <p>Gulp.js是一个自动化构建工具，开发者可以使用它在项目开发过程中自动执行常见任务。</p>
        </a-card-grid>
      </a>
      <a href="https://www.gruntjs.net/">
        <a-card-grid class="grid">
          <img src="@/assets/img/buildimg/grunt.png" />
          <h4>
            Grunt
            <strong>中文网</strong>
          </h4>
          <p>Grunt是基于Node.js的项目构建工具，它可以自动运行你所设定的任务。</p>
        </a-card-grid>
      </a>
      <a href="https://www.webpackjs.com/">
        <a-card-grid class="grid">
          <img src="@/assets/img/buildimg/webpack.png" />
          <h4>
           Webpack
            <strong>中文网</strong>
          </h4>
          <p>Webpack是一个前端资源加载/打包工具，它将根据模块的依赖关系进行静态分析，然后将这些模块按照指定的规则生成对应的静态资源。</p>
        </a-card-grid>
      </a>
    </a-card>
  </div>
</template>

<script>
export default {
  name: "Buildframe",
 
};

</script>

<style scoped>
@import "../source.css";
</style>