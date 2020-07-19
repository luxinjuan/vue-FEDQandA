<template>
  <div>
    <search></search>
    <tabbutton></tabbutton> 
  </div>
</template>
<script>
import Tabbutton from "./tabbutton/Tabbutton";
import Search from "./search/Search";

export default {
  name: "Community",
  components: {
    Tabbutton,
    Search,
  }
};
</script>

<style scoped>
</style>