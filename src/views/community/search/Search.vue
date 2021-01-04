<template>
  <div id="search">
        <a-input-search
          placeholder="input search text"
          enter-button="Search"
          size="large"
          @search="onSearch"
          class="sear"
        />
  </div>
</template>
<script>
export default {
  name: "Search",
  data() {
    return {};
  },
  methods: {
    onSearch(value) {
      console.log(value);
    }
  }
};
</script>
<style scoped>
.sear{
   margin-top: 10px;
}
</style>