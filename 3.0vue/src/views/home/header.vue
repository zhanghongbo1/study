<template>
  <div class="headr">
    <div class="bg">
    <img src="@/assets/img/header.png" alt />
    </div>
    <el-button type="primary" v-for="item in tab" :key="item.id" @click="pathto(item)">{{item.name}}</el-button>
    <div class="login" @mouseleave="out()">
      <label for="img">
        <input type="file" id='img' style="display:none" @input="changeimg">
      <img :src="this.$store.state.src" alt v-show="isLogin" @mouseenter="enter()" />
      </label>
      <div class="exit" v-show="exitover" @click="outlogin">退出</div>
      <el-button type="primary" style="margin-right:5px" @click="show" v-show="!isLogin">注册</el-button>
      <el-button type="primary" style="margin:0" @click="login" v-show="!isLogin">登录</el-button>
    </div>
    <!-- <wb:login-button type="3,2" onlogin="login" onlogout="logout">登录按钮</wb:login-button> -->
    <el-dialog title="注册/登录" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <login :falg="check" v-if="item"></login>
      <in-login v-else></in-login>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
import login from "@/components/login.vue";
import inLogin from "@/components/inLogin.vue";
import Cookies from "js-cookie";
import axios from 'axios';
export default {
  components: { login, inLogin },
  data() {
    return {
      tab: [
        { id: "1", name: "首页", path: "/detail" },
        { id: "1", name: "技术分享", path: "/art" },
        { id: "1", name: "个人学习", path: "/mine" },
        { id: "1", name: "羊毛分享", path: "/Wool" },
        { id: "1", name: "留言板", path: "/board" }
      ],
      dialogVisible: false,
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      },
      check: false,
      src: require('@/assets/img/1.jpg'),
      exitover: false,
      item: true
    };
  },
  methods: {
    pathto(item) {
      this.$router.push({ path: item.path });
    },
    handleClose(done) {
      this.dialogVisible = false;
      this.check = false;
    },
    checkLogin() {
      if (Cookies.get("user")) {
        this.$store.commit("islogin");
      }
    },
    enter() {
      this.exitover = true;
    },
    out() {
      this.exitover = false;
    },
    outlogin() {
      Cookies.set("user", "");
      this.$store.commit("isNologin");
    },
    login() {
      this.dialogVisible = true;
      this.item = false;
    },
    show() {
      this.dialogVisible = true;
      this.item = true;
    },
    changeimg(e){
      const user=Cookies.get("user")
       let file=new FormData()
        file.append('file',e.target.files[0])
        file.append('id', user)
        axios.post('/changeimg',file).then(res=>{
           if(res.data.code==200){
             location.reload()
           }else{
             this.$message({message:"头像更新失败",type:"error"})
           }
        })       
    },
    getimg(){
      if(Cookies.get("user")){
        const user=Cookies.get("user")
            this.$store.dispatch("imgget",user)
      }
     
    }
  },
  computed: {
    ...mapState(["isLogin"])
  },
  mounted() {
    this.checkLogin();
    this.getimg()
   
      
  
  }
};
</script>


<style lang="scss" scoped>
.headr {
  display: flex;
  align-items: center;
  width: 100%;
  .bg{background-color: #409EFF;}
  img {
    width: 540px;
    height: 100px;
    
  }
  .el-button--primary {
    margin: 0 40px;
  }
  .login {
    position: absolute;
    right: 0;
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      cursor: pointer;
    }
    .exit {
      background: white;
      cursor: pointer;
      text-align: center;
      position: absolute;
      left: 15px;
      bottom: -20px;
    }
  }
  .el-dialog__header {
    text-align: center !important;
  }
  .el-dialog__header {
    font-weight: 700;
  }
 
}
</style>