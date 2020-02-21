<template>
  <div class="all">
    <div class="tome">
      <div class="top">
        <el-button type="primary">关于博主</el-button>
        <el-button type="primary" style="width:97.98px" @click="tobord">留言板</el-button>
      </div>
      <div class="go">
        <el-button type="primary" @click="tomine">个人学习</el-button>
        <el-button type="primary" @click="toart">一起学习</el-button>
      </div>
    </div>
    <div class="aboutme">
      <p>
        <span>联系博主：</span>
        <span>
          <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=582074370&site=qq&menu=yes">
            <img
              border="0"
              src="http://wpa.qq.com/pa?p=2:582074370:52"
              alt="点击这里给我发消息"
              title="点击这里给我发消息"
            />
          </a>
        </span>
      </p>
      <p>
          <span>加入群聊：</span>
          <span>
             <a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=69fd1a3b58ba0da579acef41d2838dcfffddb697b5136a05f8e0a36eb2bfada9"><img border="0" src="//pub.idqqimg.com/wpa/images/group.png" alt="前端交流群" title="前端交流群"></a>
          </span>
      </p>
      <p>
        <span >
          微信联系：
        </span>
        <span>
          <img style="width:80px;height:80px" src="@/assets/img/weixin.png" alt="微信二维码" title="微信二维码">
        </span>
      </p>
      <p>
        <span>打赏博客:</span>
        <span>
          <img  style="width:100px;height:100px;margin-left:1px" src="@/assets/img/pay.png" alt="打赏二维码" title="打赏二维码">
        </span>
      </p>
    </div>
  </div>
</template>
<script>
export default {

  methods: {
    tobord(){
        this.$router.push({name:"board"})
    },
    tomine(){
      this.$router.push({name:"mine"})
    },
    toart(){
this.$router.push({name:"art"})
    }
  },
  
};
</script>


<style lang="scss" scoped>

.tome {
  background: white;
  padding: 10px 10px 20px 10px;
  margin-top: 10px;
  .go,
  .top {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
  }
}
.aboutme {
  margin-top: 20px;
  //height: 300px;
//   width: 100%;
  background: white;
  padding-left: 40px;
  overflow: hidden;
  p {
    display: flex;
    align-items: center;
    width: 100%;

    span {
      font-size: 20px;
      margin-right: 50px;
    }
  
  }
}
</style>