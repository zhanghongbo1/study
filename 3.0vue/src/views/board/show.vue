<template>
  <div class="show">
    <div class="tell">
      <span class="num">{{total}}</span>
      <span>&nbsp;&nbsp;条评论</span>
    </div>

    <div class="content clearfix">
      <div class="details" v-for="(item,index) in arr" :key="item._id">
        <img src="@/assets/img/head.png" alt="头像" title="头像" />
        <div>
          <p class="name">网友***{{index}}</p>
          <p class="text" v-html="item.info "></p>
          <p class="all">
            <span>{{item.updateTime.split('T')[0]+" "+item.updateTime.split('T')[1].slice(0,8)}}</span>
            <svg
              @click="addnum(item._id)"
              t="1581649547032"
              class="icon"
              viewBox="0 0 1102 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2035"
              width="200"
              height="200"
            >
              <path
                d="M1060.927153 677.264587v-5.827486c1.618746-6.798734 3.561241-13.273718 5.179987-19.424953s2.266245-9.064978 3.237493-13.597467l2.589993-9.388727c0-4.20874 2.266245-8.41748 3.237492-12.62622l2.913743-11.654972c0-4.532489 2.266245-8.741229 3.237493-12.949968v-5.827486c0-4.856238 2.266245-9.712477 3.561241-14.244966v-3.237492l2.913743-12.30247v-3.237493c0-4.20874 1.618746-7.769981 2.266244-10.683724 9.388727-42.087398 16.187461-95.18227-15.216213-134.355925a135.974672 135.974672 0 0 0-113.312226-42.411148h-291.374297a12.949969 12.949969 0 0 1-12.949968-12.949969V91.278502A94.211023 94.211023 0 0 0 572.389582 1.276219a104.570998 104.570998 0 0 0-117.520966 77.376064l-4.20874 12.30247-97.124765 295.906785a18.453705 18.453705 0 0 1-16.834959 12.302471l-323.749219 1.618746a13.597467 13.597467 0 0 0-12.949969 13.273718v596.993558a12.949969 12.949969 0 0 0 12.949969 12.949969h938.872733a17.482458 17.482458 0 0 0 16.187461-12.62622v-4.856238c1.942495-6.798734 4.856238-18.129956 6.798734-24.92869 0 0 38.202408-142.449656 70.901079-267.093105l2.589993-10.036225 2.913743-11.007474z m-150.543387 252.200641a17.158709 17.158709 0 0 1-16.187461 12.62622H97.12573a12.949969 12.949969 0 0 1-12.949969-12.949969V494.346279a12.949969 12.949969 0 0 1 12.949969-12.949969h302.058021a20.072452 20.072452 0 0 0 17.158708-12.626219l92.592277-281.98557 22.986194-70.25358a126.262195 126.262195 0 0 1 10.683724-23.309944 22.986194 22.986194 0 0 1 22.014947-10.359975 29.461179 29.461179 0 0 1 10.683724 3.884991 45.972389 45.972389 0 0 1 4.856239 18.777455v328.929205a12.949969 12.949969 0 0 0 12.949968 12.949969H979.34235a112.664728 112.664728 0 0 1 32.374922 8.093731s3.237492 0 3.88499 2.913743 9.064978 22.662445 0 64.749843l-2.589993 12.302471c-19.748702 85.469794-102.628502 394.974046-102.628503 394.974046z"
                p-id="2036"
              />
              <path d="M254.144101 455.496373h80.937304v528.034975h-80.937304z" p-id="2037" />
            </svg>
            <span>{{item.num}}</span>
          </p>
          <el-button type="primary" @click="back(item)">回复({{item.arr.length}})</el-button>

          <el-dialog
            title="回复"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose"
          >
            <liuyan @textto="sendmes"></liuyan>
          </el-dialog>
        </div>
        <div
          class="showback"
          v-for=" (val,i) in item.arr"
          :key="i"
          v-show="item.falg&&item.arr.length>0"
        >
          <img src="@/assets/img/head.png" alt />
          <div class>
            <p>
              <span>a</span>回复
              <span>b</span>
            </p>
            <p class="imgback" v-html="val.back"></p>
          </div>
          <p class="mid">
            <el-button type="primary" @click="send(item)">回复</el-button>
          </p>
        </div>
      </div>
      <el-pagination @current-change="changepage" :current-page.sync='page' background  layout= " prev, pager, next, jumper" :total="total"></el-pagination>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { list } from "@/assets/face";
import Cookies from "js-cookie";
import liuyan from "@/components/liuyan.vue";
export default {
  components: {
    liuyan
  },
  data() {
    return {
      name: "",
      dialogVisible: false,
      //falg:false,
      mes: {},
      page:1
     
    };
  },
  computed: {
    ...mapState({
      arr: state => state.show.message,
      total: state => state.show.total
    })
  },

  mounted() {
    this.$store.dispatch("show/getmes");
   // console.log(this.$store.state.show);

    
  },
  methods: {
    addnum(id) {
      if (Cookies.get("flag")) {
        return;
      } else {
        Cookies.set("flag", 10, { expires: 1 });
        this.$store.dispatch("show/numadd", id);
      }
    },
    send(item) {
      this.mes = item;
      this.dialogVisible = true;
    },
    handleClose(done) {
      this.dialogVisible = false;
    },
    back(item) {
      item.arr.length > 0
        ? (item.falg = !item.falg)
        : (this.dialogVisible = true);
      this.mes = item;
    },
    sendmes(val) {
      this.dialogVisible = false;
      this.$axios
        .post("/back", {
          mes: this.mes,
          val: val
        })
        .then(res => {
          if ((res.code = 200)) {
            this.$store.dispatch("show/getmes");
          }
        });
    }
    ,
    changepage(item){
      //console.log(item)
      Cookies.set('page',item,{ expires: 1 })
      this.$store.dispatch('show/page',item)
    }
  }
};
</script>


<style lang="scss">
.show {
  background: white;
  border-radius: 4px;
  padding-top: 2px;
  .tell {
    background: #ccc;
    border-radius: 4px;
    padding-top: 10px;
    width: 110px;
    height: 50px;
    line-height: 50px;
    margin-left: 5px;
    text-align: center;
    clear: both;

    .num {
      color: red;
    }
    span {
      font-size: 20px;
    }
  }
  .name {
    font-size: 20px;
    font-weight: 600;
    color: red;
  }
  p {
    margin: 10px 0;
    svg {
      width: 14px;
      height: 14px;
      margin-left: 15px;
      cursor: pointer;
    }
  }
 
  .details {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    border-top: 1px solid #000;
    margin-top: 5px;
    .text {
      font-weight: 600;
    }
    img {
      height: 90px;
      width: 80px;
      border-radius: 4px;
      margin-right: 20px;
    }
    .showback {
      width: 100%;
      height: 80px;
      display: flex;
      flex-wrap: wrap;
      position: relative;
      .mid {
        position: absolute;
        right: 0;
        bottom: -16px;
      }
      //  background: red;
      border-top: 1px solid #999;
      margin-top: 10px;
      padding-left: 30px;
      img {
        height: 100%;
        width: 80px;
      }
    }
  }
  .details:nth-of-type(10){
   // background: red!important;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
  };
  .all {
    display: flex;
    align-items: center;
  }
  .text {
    img {
      width: 30px;
      height: 30px;
      margin: 0;
    }
  }
  .disable {
    pointer-events: none;
  }
  .bord .text {
    width: 550px;
  }
  .bord textarea {
    width: 484px;
  }
  .imgback {
    img {
      width: 30px !important;
      height: 30px !important;
      margin-right: 2px !important;
    }
  }
  .el-pagination {
    border: 1px solid #ccc;
    margin-top: 20px;
    float: right;
  }
  .clearfix:after{/*伪元素是行内元素 正常浏览器清除浮动方法*/
        content: "";
        display: block;
        height: 0;
        clear:both;
        visibility: hidden;
    }

}
</style>