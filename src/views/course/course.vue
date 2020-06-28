<template>
  <div>
    <bigcourse></bigcourse>
    <breakthrough></breakthrough>
    <!-- <goods-list :goods="list"></goods-list> -->
  </div>
</template>

<script>
import Bigcourse from "./bigcourse/Bigcourse";
import Breakthrough from "./breakthrough/Breakthrough";
import GoodsList from "../../components/concent/goods/GoodsList";

export default {
  name: "Course",
  components: {
    Bigcourse,
    Breakthrough,
    GoodsList
  },
  data() {
   return {
      list:[
      {
        imag: "../../assets/img/vue.png",
        name: "VUE框架",
        price: "￥399"
      },
      {
        imag: "../../assets/img/react.jpg",
        name: "REACT框架",
        price: "￥359"
      }
    ]
   }
  }
};
</script>

<style scoped>
</style>