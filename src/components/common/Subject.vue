<template>
  <div class="subject">
    <div class="image">
      <slot name="image"></slot>
    </div>
    <div class="foot">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Subject"
};
</script>

<style scoped>
/* .subject {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
  }

  .left, .right {
    width: 60px;
  }

  .center {
    flex: 1;
  } */
.image {
  width: 273px;
  height: 200px;
  -webkit-border-radius: 10px 10px 0px 0px;
  border-radius: 10px 10px 0px 0px;
}
.foot {
  height: 40px;
  width: 273px;
  /* margin-left: 10px; */
  background-color: white;
  -webkit-border-radius: 0px 0px 10px 10px;
  border-radius: 0px 0px 10px 10px;
  position: relative;
  margin-bottom: 20px;
}
.left {
  width: 120px;
  font-size: 16px;
  padding-top: 5px;
  padding-left: 10px;
  position: absolute;
}
.right {
  position: absolute;
  font-size: 16px;
  color: red;
  padding-top: 5px;
  margin-left: 78%;
}
</style>
