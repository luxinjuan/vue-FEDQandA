<template>
  <div id="breakthrough" class="break">
    <h3 style="color:deeppink;font-weight:bold;margin-top:30px">
      各个突破
      <span style="font-size:14px;padding-left:15px;color:gray">如果你有一定基础，或已从事前端工作，可根据自身情况弥补短板。</span>
    </h3>
    <a-row>
      <a-col :xs="{ span: 0, offset: 0 }" :lg="{ span: 6, offset: 0 }">
        <img src="@/assets/img/vue.png" title="VUE框架+￥399"  alt="哇哦，网络跑路了"/>
        <div class="foot">
          <div>VUE框架</div>
          <div>￥399</div>
        </div>
      </a-col>
      <a-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 3 }">
        <img src="@/assets/img/react.jpg" title="REACT框架+￥359"  alt="哇哦，网络跑路了"/>
        <div class="foot">
          <div>REACT框架</div>
          <div>￥359</div>
        </div>
      </a-col>
      <a-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 3 }">
        <img src="@/assets/img/angular.jpg" title="Angular框架+￥299"  alt="哇哦，网络跑路了"/>
        <div class="foot">
          <div>Angular框架</div>
          <div>￥299</div>
        </div>
      </a-col>
    </a-row>

    <a-row>
      <a-col :xs="{ span: 0, offset: 0 }" :lg="{ span: 6, offset: 0 }">
        <img src="@/assets/img/ES6.jpg" title="ES6课程+￥269"  alt="哇哦，网络跑路了"/>
        <div class="foot">
          <div>ES6课程</div>
          <div>￥269</div>
        </div>
      </a-col>
      <a-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 3 }">
        <img src="@/assets/img/nodejs.jpg" title="NodeJS+￥289"  alt="哇哦，网络跑路了"/>
        <div class="foot">
          <div>NodeJS</div>
          <div>￥289</div>
        </div>
      </a-col>
      <a-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 3 }">
        <img src="@/assets/img/webpack.jpg" title="webpack+￥229"  alt="哇哦，网络跑路了"/>
        <div class="foot">
          <div>webpack</div>
          <div>￥229</div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script>

export default {
  name: "Breakthronugh",
};
</script>
<style>
.break img {
  width: 273px;
  height: 200px;
  -webkit-border-radius: 10px 10px 0px 0px;
  border-radius: 10px 10px 0px 0px;
}
.foot {
  height: 40px;
  width: 273px;
  margin-left: 10px;
  background-color: white;
  -webkit-border-radius: 0px 0px 10px 10px;
  border-radius: 0px 0px 10px 10px;
  position: relative;
  margin-bottom: 20px;
}
.foot :first-child {
  width: 120px;
  font-size: 16px;
  padding-top: 5px;
  padding-left: 10px;
  position: absolute;
}
.foot :last-child {
  position: absolute;
  font-size: 16px;
  color: red;
  padding-top: 5px;
  margin-left: 78%;
}
</style>