<template>
  <div class="diglogin">
    <div id="log" v-for="item in login" :key="item.id">
      <i :class="item.icon"></i>
      <span>|</span>
      <input :type="item.type" v-model="item.val" :placeholder="item.show" />
    </div>
    <div id="log">
      <i class="iconfont icon-youxiang1"></i>
      <span>|</span>
      <input type="text" placeholder="请输入邮箱" />
      <el-button type="primary" style="margin:0" @click="falg=true">获取验证码</el-button>
    </div>

    <slide-verify :l="42" :r="10" :w="310" :h="155" v-show="falg" @success="success" @fail="err"></slide-verify>

    <div class="register">
     <el-button type="primary" >注册</el-button>
    </div>
    <div class="fast">
        <span>快捷注册</span>
        <wb:login-button type="3,2" onlogin="login" onlogout="logout">登录按钮</wb:login-button>
    </div>
  </div>
</template> 


<script>
export default {
  data() {
    return {
      login: [
        {
          id: 0,
          type: "text",
          icon: "iconfont icon-zhanghao",
          val: "",
          show: "请输入用户名..."
        },
        {
          id: 1,
          type: "password",
          icon: "iconfont icon-mima1",
          val: "",
          show: "请输入密码..."
        },
        {
          id: 2,
          type: "text",
          icon: "iconfont icon-yanzhengma",
          val: "",
          show: "请输入验证码..."
        }
      ],
      falg: false
    };
  },
  methods: {
    success() {
      this.falg = false;
      this.$message({
        message: "验证码已经发送，请注意查收",
        type: "success"
      });
    },
    err(){
        this.$message({
        message: "请滑动到正确位置",
        type: "err"
      });
    }
  }
};
</script>


<style lang="scss" scoped>
.diglogin {
  padding: 0 20px;
  position: relative;
  #log {
    padding: 0 10px;
    margin: 14px 0;
    border: 1px solid #ccc;
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 4px;
    i {
      font-size: 30px;
      color: #1296db;
      margin-right: 5px;
    }
    span {
      margin-right: 5px;
    }
    input {
      border: 0;
      outline: 0;
      height: 30px;
      line-height: 30px;
      width: 600px;
      font-size: 20px;
    }
  }
  #slideVerify {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 1;
  }
  .register{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 80px;
  }
  .fast{
      margin-top: 30px;
      span{
          font-size: 20px;
          font-weight: 700;
      }
  }
}
</style>