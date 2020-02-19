<template>
  <div class="home">
    <el-carousel indicator-position="outside" height="400px">
      <el-carousel-item v-for="item in list" :key="item">
        <img :src="item" alt />
      </el-carousel-item>
    </el-carousel>
    <h2>最新文章</h2>
    <div class="mene">
      <img src="../assets/logo.jpg" alt />
      <div>
        <p>前端即网站前台部分，运行在PC端，移动端等浏览器上展现给用户浏览的网页。随着互联网技术的发展，HTML5，CSS3，前端框架的应用，跨平台响应式网页设计能够适应各种屏幕分辨率，完美的动效设计，给用户带来极高的用户体验...</p>
        <div class="bottom">

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["list"])
  },
  mounted() {}
};
</script>

<style lang="scss">
.home {
  .el-carousel__item {
    img {
      width: 100%;
      height: 100%;
    }
  }
  h2 {
    color: white;
  }
  .mene {
    border: 1px solid #0066ff;
    display: flex;
    padding: 0.2rem 0;
    box-sizing: border-box;
    img {
      width: 2rem;
      height: 2rem;
    }
    p {
      word-break: break-all;
      margin-left: .2rem;
      font-size: 0.3rem;
      color: white;
    }
  }
}
</style>