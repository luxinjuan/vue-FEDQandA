<template>
  <div id="structure">
    <a-layout id="components-layout-demo-top" class="layout">
      <a-layout-header>
        <div class="logo">前端开发</div>
        <a-menu
          theme="dark"
          mode="horizontal"
          :default-selected-keys="['1']"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="1" @click="itemClick1">首页</a-menu-item>
          <a-menu-item key="2" @click="itemClick2">教程</a-menu-item>
          <a-menu-item key="3" @click="itemClick3">社区</a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content style="padding: 0 50px">
        <a-breadcrumb style="margin: 16px 0">
          <!-- <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>-->
        </a-breadcrumb>
        <div class="content">
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center"></a-layout-footer>
    </a-layout>
  </div>
</template>

<script>

export default {
  name: "Structure",
  data(){
    return{
      isActive:true
    }
  },
  methods:{
     itemClick1() {
       this.$router.push('/home')
     },
     itemClick2() {
       this.$router.push('/course')
     },
     itemClick3() {
       this.$router.push('/community')
     }

   }  
};
</script>

<style>
#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  margin-right: 300px;
  float: left;
  color: white;
  font-size: 20px;
}
#components-layout-demo-top .content {
     background: '#fff';
     padding: '24px';
     margin-left:23%;
     minHeight: '280px';
     maxWidth:'800px' 
}
</style>