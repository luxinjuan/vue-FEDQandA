<template>
  <div id="ask">
    <h2>提问问题</h2>
    <a-input size="large" placeholder="请输入标题，用问号结尾" />
    <!-- <div class="icons-list">
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
    <div>
      <a-textarea id="textarea" v-model="message" placeholder="提问内容" :rows="17" />
    </div> -->
    <editor
      init="tinymceInit"
      key="tinymceFlag"
    ></editor>
    <a-divider />
    <a-button id="but" type="primary">发布问题</a-button>
  </div>
</template>
<script>
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
import "tinymce/themes/silver";
import './import-all'

export default {
  name: "Ask",
  data() {
    return {
      // message: "",
      tinymceFlag: 1,
      tinymceInit: {},
    };
  },
  methods: {
    // bold() {
    //   // console.log(this.message);
    // }
  },
  created() {
    this.tinymceInit = {
      language:'zh_CN',
      skin: 'oxide-dark',
      height: 500,
      selector: 'textarea',
      width: undefined,
      browser_spellcheck: true, // 拼写检查
      branding: false, // 去水印
      elementpath: false, // 禁用编辑器底部的状态栏
      statusbar: false, // 隐藏编辑器底部的状态栏
      paste_data_images: true, // 允许粘贴图像
      menubar: true, // 隐藏最上方menu
      toolbar: 'undo redo | styleselect | bold italic | link image',
    };
  },
  activated() {
    this.tinymceFlag++;
  },
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