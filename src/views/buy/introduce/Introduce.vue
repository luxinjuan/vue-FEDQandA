<template>
  <div id="introduce">
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="介绍">
        <present></present>
      </a-tab-pane>
      <a-tab-pane key="2" tab="目录">
         <directory></directory>
      </a-tab-pane>
      <a-tab-pane key="3" tab="评价">评价</a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import Present from "./present/Present"
import Directory from "./directory/Directory"
export default {
  name: "Introduce",
  components:{
    Present,
    Directory
  },
  data() {
    return {};
  },
  methods: {
    callback(key) {
      // console.log(key);
    }
  }
};
</script>
<style>
#introduce {
  background-color: white;
  border: 1px solid white;
  border-radius: 5px;
  margin-bottom: 20px;
}
</style>