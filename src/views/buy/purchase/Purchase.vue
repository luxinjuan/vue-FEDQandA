<template>
  <div id="purchase">
    <h2>JavaScript语言基础实战教程#Web前端起步技术</h2>
    <div id="center">
      <img src="@/assets/img/course1.png" />
      <div id="txt">
        <p>
          <a-icon type="smile" /> 价格:￥399
        </p>
        <p>
          <a-icon type="smile" /> 教学计划:
          <a-button>默认计划</a-button>
        </p>
        <p>
          <a-icon type="smile" /> 学习有效期：2020-06-20至2021-06-20
        </p>
      </div>
      <div id="btn">
        <a-button type="primary" size="large">购买</a-button>
      </div>
    </div>
    <div id="foot1">
      <div id="icon">
        <a-icon type="heart" theme="twoTone" two-tone-color="#eb2f96" />
        <a-icon type="heart" theme="twoTone" two-tone-color="#eb2f96" />
        <a-icon type="heart" theme="twoTone" two-tone-color="#eb2f96" />
        <a-icon type="heart" theme="twoTone" two-tone-color="#eb2f96" />
        <a-icon type="heart" theme="twoTone" two-tone-color="#eb2f96" />
      </div>
      <div id="person">
        <a-icon type="user" />1999人加入购买
      </div>
    </div>
  </div>
</template>
<script>
export default({
    name:"Purchase"
})
</script>
<style>
#purchase {
  background-color: white;
  border: 1px solid white;
  border-radius: 5px;
  height: 300px;
  margin-bottom: 20px;
}
h2 {
  margin-left: 15px;
}
#center {
  position: relative;
  height: 200px;
}
img {
  position: absolute;
  width: 350px;
  height: 200px;
  margin-left: 15px;
}
#txt {
  position: absolute;
  margin-left: 45%;
  margin-top: 4%;
}
#btn {
  position: absolute;
  margin-left: 90%;
  margin-top: 15%;
}
#foot1 {
  position: relative;
}
#icon {
  position: absolute;
  margin-left: 15px;
  margin-top: 1%;
}
#person {
  position: absolute;
  margin-left: 21%;
  margin-top: 1%;
}
</style>