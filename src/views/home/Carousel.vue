<template>
  <div id="carousel">
    <!-- 图片轮播 -->
    <a-carousel autoplay>
      <div>
        <img src="@/assets/img/first.jpg" alt="哇哦，网络跑路了" />
      </div>
      <div>
        <img src="@/assets/img/second.png" alt="哇哦，网络跑路了" />
      </div>
      <div>
        <img src="@/assets/img/three.jpg" alt="哇哦，网络跑路了" />
      </div>
      <div>
        <img src="@/assets/img/four.jpeg" alt="哇哦，网络跑路了" />
      </div>
    </a-carousel>
    <!-- tabs滑动 -->
    <a-tabs default-active-key="1" @change="callback" class="tabs">
      <a-tab-pane key="1" tab="推荐">
        <recommend></recommend>
      </a-tab-pane>
      <a-tab-pane key="2" tab="精选" force-render>
        <router-view></router-view>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import Recommend from './childers/recommend/Recommend'

export default {
  name: "Carousel",
  components:{
    Recommend
  },
  data() {
    return {
    };
  },
  methods: {
    callback(key) {
       console.log(key);
    }
  }
};
</script>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide img {
  height: 300px;
  width: 100%;
}
.tabs {
  width: 100%;
}
</style>