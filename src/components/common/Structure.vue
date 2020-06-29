<template>
  <div id="structure">
    <a-layout id="components-layout-demo-top" class="layout">
      <a-layout-header class="hearder">
        <div class="logo">前端专属网站</div>
        <a-menu
          theme="dark"
          mode="horizontal"
          :default-selected-keys="['1']"
          :style="{ lineHeight: '64px' }"
        >
          <!-- <a-menu-item :key="key.title" v-for = "(item,key) in arr" @click ="itemClick">{{item.title}}</a-menu-item> -->
          <a-menu-item key="1" @click="itemClick1">首页</a-menu-item>
          <a-menu-item key="2" @click="itemClick2">教程</a-menu-item>
          <a-menu-item key="3" @click="itemClick3">资源</a-menu-item>
          <a-menu-item key="4" @click="itemClick4">社区</a-menu-item>
          <a-button class="btn" @click="login">登录</a-button>
          <a-button >注册</a-button>
        </a-menu>
      </a-layout-header>
      <a-layout-content class="conentfather">
        <!-- <a-breadcrumb style="margin: 16px 0">ttttt</a-breadcrumb> -->
        <div class="content">
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer class="bot">
        <pre>网站首页  关于我们  联系我们 友情链接</pre>
        <pre>网站所有权归我所属</pre>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "Structure",

  data() {
    return {
      //  arr:[
      //    {title:"首页"},
      //    {title:"教程"},
      //    {title:"资源"},
      //    {title:"社区"},
      //    ]
    };
  },
  methods: {
    itemClick1() {
      this.$router.push("/home");
    },
    itemClick2() {
      this.$router.push("/course");
    },
    itemClick3() {
      this.$router.push("/source");
    },
    itemClick4() {
      this.$router.push("/community");
    },
    login(){
      this.$router.push("/login")
    }
  }
};
</script>

<style>
#components-layout-demo-top .hearder {
  position: fixed;
  width: 100%;
  z-index: 2;
}
#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  margin-right: 300px;
  float: left;
  color: white;
  font-size: 20px;
}
#components-layout-demo-top .content {
  background: "#fff";
  padding: "24px";
  margin-top: 64px; 
  width:80%;
  transform: translate(12.5%);
}
.bot {
  text-align: center;
  background-color: #001529;
  color: white;
}
.btn{
  margin-left:38%;
  margin-right: 20px;
}
</style>