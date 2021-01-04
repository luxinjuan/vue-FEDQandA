<template>
  <div id="tabbutton">
    <a-tabs type="card" @change="callback">
      <a-tab-pane key="1" tab="为我推送">
        为我推送
        </a-tab-pane>
      <a-tab-pane key="2" tab="最新问答">
        最新问答
        </a-tab-pane>
      <a-tab-pane key="3" tab="待回答">
        待回答
        </a-tab-pane>
      <a-tab-pane key="4" tab="热门问答">
        热门问答
        </a-tab-pane>
      <a-tab-pane key="5" tab="+提问问题"></a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>

export default {
  name: "Tabbutton",
  data() {
    return {};
  },
  methods: {
    callback(key) {
      console.log(key);
      if (key == 5) {
        this.$router.push("/Ask");
      }
    },
    onSearch(value) {
      console.log(value);
    }
  }
};
</script>
<style scoped>
#tabbutton {
  margin-top: 15px;
}
</style>