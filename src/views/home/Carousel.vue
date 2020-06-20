<template>
  <div id="carousel">
    <a-carousel autoplay>
      <div>
        <img src="../../assets/img/first.jpg" />
      </div>
      <div>
        <img src="../../assets/img/second.png" />
      </div>
      <div>
        <img src="../../assets/img/three.jpg" />
      </div>
      <div>
        <img src="../../assets/img/four.jpeg" />
      </div>
    </a-carousel>
  </div>
</template>
<script>
export default {
  name: "Carousel"
};
</script>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide img {
  height: 280px;
  width: 700px;
}
</style>