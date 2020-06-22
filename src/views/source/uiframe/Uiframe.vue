<template>
  <div id="uifram">
    <a-card title="UI框架">
      <a href="https://v3.bootcss.com/">
        <a-card-grid class="grid">
          <img src="@/assets/img/uiimg/bootstrap.png" />
          <h4>
            Bootstrap
          </h4>
          <p>最受欢迎的HTML、CSS和JS框架，用于开发响应式布局、移动设备优先的WEB应用</p>
        </a-card-grid>
      </a>
      <a href="https://element.eleme.cn/#/zh-CN">
        <a-card-grid class="grid">
          <img src="@/assets/img/uiimg/element.png" />
          <h4>
           Element
          </h4>
          <p>饿了么前端团队开发的基于VUE2.0的桌面端组件库。</p>
        </a-card-grid>
      </a>
      <a href="https://ant.design/index-cn">
        <a-card-grid class="grid">
          <img src="@/assets/img/uiimg/ant.png" />
          <h4>
            Ant Design
          </h4>
          <p>服务于企业级产品的设计体系，通过模块化的解决方案，让设计者专注于更好的用户体验。</p>
        </a-card-grid>
      </a>
      <a href="https://jqueryui.com/">
        <a-card-grid class="grid">
          <img src="@/assets/img/uiimg/jquryui.png" />
          <h4>jQury UI</h4>
          <p>jQury UI是建立在jQury JavaScript库上的一组用户界面交互、特效、小部件及主题。。</p>
        </a-card-grid>
      </a>
      <a href="http://elemental-ui.com/">
        <a-card-grid class="grid">
          <img src="@/assets/img/uiimg/elementui.png" />
          <h4>Element UI</h4>
          <p>一个针对React.js的灵活的、漂亮的UI框架。</p>
        </a-card-grid>
      </a>
    </a-card>
  </div>
</template>

<script>
export default {
  name: "Uifram"
};
</script>

<style scoped>
@import "../source.css";
</style>