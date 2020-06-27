<template>
  <div>
    <bigcourse></bigcourse>
    <breakthrough></breakthrough>
  </div>
</template>

<script>
import Bigcourse from "./bigcourse/Bigcourse";
import Breakthrough from './breakthrough/Breakthrough'

export default {
  name: "Course",
  components: {
    Bigcourse,
    Breakthrough
  }
};
</script>

<style scoped>
</style>