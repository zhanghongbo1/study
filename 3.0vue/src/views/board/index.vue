<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/board' }">留言板</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="bor">
      <div class="left">
        <liuyan @textto="get" @upload="upload" :imgsrc="img"></liuyan>
        <show :arr1="arr"></show>
      </div>
      <div class="right">
        <rightTop />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import liuyan from "@/components/liuyan.vue";
import show from "./show";
import rightTop from "../detail/right/top";
import Cookies from "js-cookie";
import jsonp from "jsonp";
import { mapState } from "vuex";
export default {
  components: {
    liuyan,
    show,
    rightTop
  },
  data() {
    return {
      val: "",
      arr: []
    };
  },
  computed: {
    ...mapState({ img: state => state.show.imgSrc })
  },
  methods: {
    //第一次提交
    get(val) {
      if (!val) {
        alert("请输入留言内容");
      } else {
        //console.log(Cookies.get("user"))
        if (Cookies.get("user")) {
          this.$store.dispatch("show/getMessage", {
            val: val,
            this: this,
            user: Cookies.get("user")
          });
          if (Cookies.get("page") != "1" && Cookies.get("page")) {
            this.$store.dispatch("show/page", Cookies.get("page"));
          } else {
            this.$store.dispatch("show/getmes");
          }

          this.$store.commit("show/changefalse");
        } else {
          this.$message({ message: "登录后回复", type: "error" });
        }
      }
    },
    upload(item) {
      this.$store.dispatch("show/upload", item);
    }
  },
  mounted() {
    let that = this;
    if (QC.Login.check()) {
      QC.Login(
        {
          btnId: "",
          scope: "all"
        },
        function(val, opts) {
          Cookies.set("user", val.nickname);
          that.$axios.post("/qq", {
            usename: val.nickname,
            img: val.figureurl_qq
          });
            if(Cookies.get('re')==1){
              Cookies.set('re','')
              location.reload()
            }
        }
      );
    }

   
  }
};
</script>
<style lang="scss">
.bor {
  display: flex;
  margin-top: 20px;
  .left {
    width: 1600px;
    margin-right: 14px;
  }
  .right {
    flex: 1;
  }
  h2 {
    margin-top: 0;
  }
}
</style>