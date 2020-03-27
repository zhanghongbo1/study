const mongoose = require('mongoose')
const list =require('../../face')
const { user } =require ('./user')
const message = new mongoose.Schema({
    info: String,
    updateTime: {
        type: Date,
        default: Date.now
    },
    user:String,
    num:{
        type:Number,
        default:1
    },
    arr:{
        type:Array,
        default:[]
    },
    falg:{
        type:Boolean,
        default:false
    },
    img:{
        type:String,
        default:"https://i.loli.net/2020/02/21/hCcgSEfNOlwtZ7V.jpg"
    }
})
const mes = mongoose.model('Mes', message)

const messageAdd = (item) => {
   const p1= /\[[\u4e00-\u9fa5]+\]/g
   const p2=/\[[\u4e00-\u9fa5]+\]/
   const content= item.info.match(p1)
   let str=''
   if(content){
       for ( var i=0;i<content.length;i++){
            for(var j=0;j<list.length;j++){
                if(`[${list[j]}]`==content[i]){
                 var index=j  
                }
            }
       }
      str= item.info.replace(p1,`<img src=https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif />`)
   }
    if(item!=""){
        user.findOne({usename:item.user},(err,doc)=>{
            console.log(item)
            const arr = new mes(str==""?{...item,img:doc.img}:{info:str,user:item.user,img:doc.img})
            arr.save((err) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log('数据保存成功')
                }
            })
        })
    
    return    mes.find({},(err,doc)=>{
             return doc
          })
    } 
}
module.exports = {messageAdd,mes} 
