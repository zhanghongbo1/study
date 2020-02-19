<template>
  <div class="bord">
    <div class="text">
      <textarea
        name
        id
        cols="100"
        rows="8"
        v-model="text"
        placeholder="你对博主想说点什么呢。。。。"
        @input="newval"
      ></textarea>
      <div class="pic">
        <img
          src="@/assets/img/bq.png"
          alt="表情"
          title="表情"
          style="cursor: pointer;"
          @click="changedig"
        />
        <span style="margin-right:20px">表情</span>
        <div class="psimg">
        <label for="iee" class="lab">
          <input type="file" name="" id="iee" style="display:none" @input='imgUp'>
        <img src="@/assets/img/pic.png" alt="图片" title="图片" style="cursor: pointer;" />
        <span>图片</span>
        </label>
        <div id="right" v-show="flag && imgsrc!=''" >
          <span class="close" @click="flag=false">X</span>
        <img  id="img" :src="imgsrc" alt="" >
        </div>
        </div>
        <el-button type="primary" @click="info">提交</el-button>
        <div class="face" v-show="dig">
          <div v-for="(item,index) in newlist" :key="index" class="er" @click="add(index)">
            <img
              :src="'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/' + index + '.gif'"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { list } from "@/assets/face";
import { mapState } from "vuex";
export default {
  props: {
    dig: {
      type: Boolean,
      default: false
    },
    imgsrc:{
      type:String,
      default:""
    }
  },
  data() {
    return {
      newlist: "",
      text: "",
      betext: "",
      flag:true
    };
  },
  mounted() {
    this.newlist = list;
   
  },
  computed: {},
  methods: {
    changedig() {
      this.dig = !this.dig;
    },
    info() {
      this.dig=false
      this.flag=false
      this.$emit("textto", this.text);
    },
    add(index) {
      this.text += `[${this.newlist[index]}]`;
   
      this.dig = false;
    },
    newval(e) {
      this.betext = e.target.value;
    },
    imgUp(e){
     // console.log(e.target.files[0])
      let file=new FormData()
        file.append('file',e.target.files[0])
        
        this.$emit('upload',file)
    }
  }
};
</script>


<style lang="scss">
.bord {
  //   min-height: 600px;
  width: 995px;
  margin-bottom: 10px;
  .text {
    border-radius: 6px;
    border: 1px solid #ccc;
    padding: 2px;
    width: 995px;
    background: white;
    .pic {
      height: 50px;
      background: white;
      border-top: 2px solid #999;
      display: flex;
      align-items: center;
      padding-left: 14px;
      position: relative;
      .lab{
        display: flex;
        align-items: center;
      }
      img {
        width: 30px;
        height: 30px;
        margin-right: 6px;
      }
      .el-button--primary {
        position: absolute;
        right: 0;
      }
    }
  }
  .face {
    width: 440px;
    height: 310px;
    background: white;
    position: absolute;
    left: 10px;
    top: 55px;

    .er {
      float: left;
      cursor: pointer;
    }
  }
  textarea {
    outline: none;
    border: none;
    resize: unset;
    font-size: 20px;
    width: 767px;
  }
  .psimg{
    position: relative;
    #right{
      position: absolute;
      width: 200px;
      height: 200px;
      #img{width: 100%;
        height: 100%;
      }
    
    }
      .close{
        position: absolute;
        right: 0;
        top: 0;
        color: white;
        font-size: 20px;
        cursor: pointer;
      }
  }
}
</style>