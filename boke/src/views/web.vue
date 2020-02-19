<template>
    <div class="mse">
        <ul>
            <li v-for="item in list" :key="item.id">
                <p>{{item.name}}</p>
                <img src="../assets/bolo.jpg" alt="">
            </li>
        </ul>
        <p class="tell">欢迎咨询</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list:[
                {id:"1",name:"js+node+mongodb"},
                {id:"2",name:"js+java"},
                {id:"3",name:"小程序、APP"}
            ]
        }
    },
}
</script>
<style lang="scss">
    .mse{
        ul{
        li{
            display: flex;
            height: 2rem;
            margin-top: .3rem;
            justify-content: space-around;
            align-items: center;
            p{
                width: 1.8rem;
                font-size: .3rem;
                color: white;
            }
            img{
                height: 2rem;
            }
        }
        }
        .tell{
             font-size: .3rem;
                color: white;
                text-align: center;
                margin-top: 1rem;
        }
    }
</style>