<template>
  <div id="bigcourse">
    <h3 style="color:deeppink;font-weight:bold;">
      综合大课
      <span
        style="font-size:14px;padding-left:15px;color:gray"
      >前端开发必备,前端javaScript、HTML5、CSS3技术于一身的综合大课</span>
    </h3>
    <img class="courimg" src="@/assets/img/course1.png" title="JavaScript+CSS+HTML+￥299" alt="哇哦，网络跑路了" @click="detail"/>
    <div class="foots"  @click="detail">
      <div>前端综合大课</div>
      <div>￥299</div>
    </div>
  </div>
</template>

<script>
import Buy from "../../buy/Buy"
export default {
  name: "Bigcourse",
  components:{
    Buy
  },
  methods:{
    detail(){
      this.$router.push("/buy")
    }
    
  }
};
</script>
<style scoped>
.courimg {
  width: 100%;
  height: 300px;
  -webkit-border-radius: 10px 10px 0px 0px;
  border-radius: 10px 10px 0px 0px;
}
.foots {
  height: 40px;
  width: 100%;
  /* margin-left: 10px; */
  background-color: white;
  -webkit-border-radius: 0px 0px 10px 10px;
  border-radius: 0px 0px 10px 10px;
  position: relative;
}
.foots :first-child {
  width: 30%;
  font-size: 16px;
  padding-top: 5px;
  padding-left: 10px;
  position: absolute;
}
.foots :last-child {
  position: absolute;
  font-size: 16px;
  color: red;
  padding-top: 5px;
  margin-left: 94%;
}
</style>