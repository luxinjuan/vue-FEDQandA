<template>
<div>
    <jsfram></jsfram>
    <uiframe></uiframe>
    <buildframe></buildframe>
    <moduleload></moduleload>
</div>
</template>

<script>
import Jsfram from "./jsframe/Jsframe";
import Uiframe from "./uiframe/Uiframe";
import Buildframe from "./buildframe/Buildframe";
import Moduleload from "./moduleload/Moduleload";
export default {
  name: "Source",
  components: {
    Jsfram,
    Uiframe,
    Buildframe,
    Moduleload
  }
};
</script>

<style scoped>
</style>