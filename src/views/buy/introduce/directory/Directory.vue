<template>
  <div id="directory">
    <a-collapse accordion>
      <a-collapse-panel key="1" header="第1关：项目需求分析和基础环境搭建">
        <p class="cours">任务1：电子商城需求分析介绍</p>
        <p class="cours">任务2：课程内容和学习目标介绍</p>
      </a-collapse-panel>
      <a-collapse-panel key="2" header="第2关：用户模块实战开发过程">
        <!-- <p>{{ text }}</p> -->
      </a-collapse-panel>
      <a-collapse-panel key="3" header="第3关：标准的项目注册和登录过程实现">
        <!-- <p>{{ text }}</p> -->
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
export default {
  name: "Directory"
  //   data() {
  //     return {
  //       text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`
  //     };
  //   }
};
</script>

<style>
.cours{
    border: 1px solid grey;
    line-height: 40px;
    padding-left: 10px;

}
</style>