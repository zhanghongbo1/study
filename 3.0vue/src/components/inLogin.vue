<template>
  
  <div class="inlogin">
      <div id="log">
      <i class="iconfont icon-youxiang1"></i>
      <span>|</span>
      <input type="text" placeholder="请输入邮箱"  v-model="mail" />
    </div>
    <div id="log">
      <i class=" iconfont icon-mima1"></i>
      <span>|</span>
      <input type="password" placeholder="请输入密码"  v-model="password" />
    </div>

    <div class="register">
     <el-button type="primary" @click="set">登录</el-button>
     
    </div>
      <div class="fast">
        <span>快捷登录</span>
        <img src="@/assets/img/QQ.png" alt="" @click="useqqlogin" >
    </div>
   
  </div>
</template> 


<script>
import Cookies from "js-cookie";
export default {

  data() {
    return {
      
      mail:"",
      password:""
    };
  },
  methods: {

    set(){
      this.$axios.post('/login',{mail:this.mail,password:this.password}).then(res=>{
           if(res.data==200){
            
             Cookies.set("user",res.user)
             location.reload()
           }else{
             this.$message({
              message: "账号或密码错误",
             type: "error"
             })
           }
      })
    },
    useqqlogin(){
       QC.Login.showPopup(
         { appId:"101855062",
         redirectURI:"http://www.zhanghongbo.top/platform"
         } 
          )
         //http://127.0.0.1:8080/platform/#/board
         Cookies.set("re",1)
    },
  
    
  }
};
</script>


<style lang="scss" scoped>
.inlogin {
  padding: 0 20px;
  position: relative;
  #log:nth-of-type(2){
      margin-top: 30px;
  }
  #log {
    padding-left:  10px;
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
    .el-button{
      padding: 9px 20px;
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
      display: flex;
      align-items: center;
      span{
          font-size: 20px;
          font-weight: 700;
      }
      img{
        width: 150px;
        margin-left: 40px;
      }
  }
}
</style>