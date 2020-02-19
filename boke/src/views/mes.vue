<template>
  <div class="msg" >
      <bq  @getmes="get"></bq>

  </div>
</template>

<script>
import bq from '../components/bq'
import axios from 'axios'
export default {
     components:{bq},
  data() {
   
    return {
      name:"",
      val:"",
      disabled:false,   //控制表情弹框
		  curEmoji:'', 
    };
  },
  mounted() {
    axios.post("http://localhost:3000/getall").then(res=>{
      console.log(res)
    })
  },
  methods:{
    get(item){
      console.log(item)
    }
},

};
</script>
<style lang="scss">
.msg {
height: 100%;
}
</style>