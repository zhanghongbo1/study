const mongoose = require('mongoose')
const list =require('../../face')
const message = new mongoose.Schema({
    info: String,
    updateTime: {
        type: Date,
        default: Date.now
    },
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
        const arr = new mes(str==""?item:{info:str})
        arr.save((err) => {
            if (err) {
                console.log(err)
            } else {
                console.log('数据保存成功')
            }
        })
    return    mes.find({},(err,doc)=>{
             return doc
          })
    } 
}
module.exports = {messageAdd,mes} 
