<template>
  <div>
    <div class="article" v-for="item in arr" :key="item._id">
      <h3>{{item.title}}</h3>
      <div class="matter">
        <img :src="item.img" alt />
        <div class="include">
          <p>
            <span>zhangongbo</span>
            <span>发布时间:{{item.time}}</span>
            <span>分类:个人学习</span>
            <span>阅读数量({{item.num}})</span>
          </p>
          <div class="text">
              {{item.contain}}
              </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      arr:[]
    }
  },
  mounted() {
    this.$axios.post('/article').then(res=>{
      this.arr=res
    })
  },
};
</script>

<style lang="scss">
.article {
  background: yellow;
  padding-right: 20px;
  img {
    width: 200px;
    height: 200px;
  }
  .matter {
    display: flex;
    .include {
      padding: 0 20px;
      .text {
        font-size: 20px;
        overflow: hidden; //隐藏多余行数
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3; //规定显示几行，其余行数用小数点代替
        -webkit-box-orient: vertical; //规定为垂直方向排列
      }
    }
    p {
      font-size: 20px;

      span {
        margin-right: 20px;
      }
    }
  }
}
</style>