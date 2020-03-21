<template>
    <div class="message">
        <h3>最新评论</h3>
        <div class="sketch" v-for="item in list" :key='item._id'>
            <img :src="item.img" alt="">
            <div>
                <div style="color:red;font-size:20px;font-weight:800">{{item.user?item.user:"网友123"}}</div>
                <p v-html="item.info"></p>
                <p>{{item.updateTime.split('T')[0]}}</p>
            </div>
        </div>

       
    </div>
</template>

<script>
export default {
    data() {
        return {
            list:[]
        }
    },
    mounted() {
        this.$axios.post('/new').then(res=>{
            if(res.data.length>0){
             //   console.log(res)
                this.list=res.data
            }
        })
    },

}
</script>


<style lang="scss" scoped>
.message{
    background: white;
    padding:0 10px;
    .sketch{
        display: flex;
        border-top: 1px solid #ccc;
        padding-top: 5px;
        align-items: center;
        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            margin: 16px;
        }
    }
}
    
</style>