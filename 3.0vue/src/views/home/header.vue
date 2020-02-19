<template>
  <div class="headr">
    <img src="@/assets/img/header.png" alt />
    <el-button type="primary" v-for="item in tab" :key="item.id" @click="pathto(item)">{{item.name}}</el-button>
    <div class="login">
      <img src="" alt="">
      <el-button type="primary" style="margin-right:5px"  @click="dialogVisible = true">注册</el-button>
      <el-button type="primary" style="margin:0"  @click="dialogVisible = true">登录</el-button>
    </div>
       <!-- <wb:login-button type="3,2" onlogin="login" onlogout="logout">登录按钮</wb:login-button> -->
    <el-dialog
  title="注册/登录"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <login></login>
  
</el-dialog>
 
  </div>
</template>

<script>
import login from '@/components/login.vue'
export default {
  components:{login},
    data() {
        return {
            tab:[
                {id:"1",name:"首页",path:"/detail"},
                {id:"1",name:"技术分享",path:"/art"},
                {id:"1",name:"个人学习",path:"/mine"},
                {id:"1",name:"羊毛分享",path:"/Wool"},
                {id:"1",name:"留言板",path:"/board"}
            ],
            dialogVisible: false,
            formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
            
        }
    },
    methods: {
      pathto(item){
        this.$router.push({path:item.path})
      },
       handleClose(done) {
         this.dialogVisible=false
      }
    
    },
};
</script>


<style lang="scss" scoped>
.headr {
    display: flex;
    align-items: center;
  
  img {
    width: 340px;
  }
  .el-button--primary{
      margin: 0 40px
  }
  .login{
    position: absolute;
    right: 0;
   
  }
  .el-dialog__header{
    text-align: center!important;
  }
 .el-dialog__header{
   font-weight: 700
 }
}
 
</style>