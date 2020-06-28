<template>
  <div id="ask">
    <h2>提问问题</h2>
    <a-input size="large" placeholder="请输入标题，用问号结尾" />
    <!-- <div id="image"> -->
    <!-- <img src="@/assets/img/icon/标题.png" title="标题" />
      <img src="@/assets/img/icon/加粗.png" title="加粗" />
      <img src="@/assets/img/icon/斜体.png" title="斜体" /> 
      <img src="@/assets/img/icon/删除线.png" title="删除线" />
      
      <img src="@/assets/img/icon/分割线.png" title="分割线" />
      <img src="@/assets/img/icon/左引用.png" title="左引用" />
      
      <img src="@/assets/img/icon/无序列表.png" title="无序列表" />
      <img src="@/assets/img/icon/水平对齐.png" title="水平对齐" />
     
      <img src="@/assets/img/icon/图片.png" title="图片" />
      <img src="@/assets/img/icon/链接.png" title="链接" />
    <img src="@/assets/img/icon/代码块.png" title="代码块" />-->
    <div class="icons-list">
      <!-- <a-icon type="font-size" @click="fontsize" /> -->
      <a-icon type="bold" @click="bold" />
      <a-icon type="italic" />
      <a-icon type="strikethrough" />

      <a-icon type="align-left" />
      <a-icon type="ordered-list" />
      <a-icon type="unordered-list" />

      <a-icon type="code" />
      <a-icon type="link" />
      <a-icon type="unordered-list" />
    </div>
    <!-- </div> -->
    <div>
      <a-textarea id="textarea" v-model="message" placeholder="提问内容" :rows="17" />
    </div>
    <a-divider />
    <a-button id="but" type="primary">发布问题</a-button>
  </div>
</template>
<script>
export default {
  name: "Ask",
  data() {
    return {
      message: ""
    };
  },
  methods: {
    bold() {
      console.log(this.message);
    }
  }
};
</script>
<style>
h2 {
  background: white;
   border-radius: 5px;
  height: 50px;
  padding-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  color: gray;
}
#textarea {
  margin-bottom: 10px;
}
#but {
  float: right;
  margin-bottom: 20px;
}

#image {
  background: white;
  height: 25px;
  border: 2px slid gray;
  margin-top: 20px;
  padding-bottom: 5px;
  border-radius: 5px;
}
/* img {
  height: 16px;
  width: 16px;
  margin-left: 10px;
}
img:hover {
  border: 1px solid #777;
} */

.icons-list {
  margin-top: 20px;
  background: white;
  height: 30px;
  border: 2px slid gray;
  padding-left: 10px;
   padding-top: 5px;
  border-radius: 5px;
}
.icons-list >>> .anticon {
  font-size: 35px;
}
.icons-list >>> .anticon:hover {
  border: 1px solid #777;
}
</style>