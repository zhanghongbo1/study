const express = require ( 'express')
const list = require ('../face')
const router=express.Router()
let { mes }=require ('../mongose/Schema/message')

router.post('/back',(req,res,next)=>{
   // console.log(mes.arr)
   const p1= /\[[\u4e00-\u9fa5]+\]/g
   const p2=/\[[\u4e00-\u9fa5]+\]/
   const content= req.body.val.match(p1)
//    console.log(req.body.val,"req.body")
//    console.log(content,'content')
   let str=''
   if(content){
       for ( var i=0;i<content.length;i++){
            for(var j=0;j<list.length;j++){
                if(`[${list[j]}]`==content[i]){
                 var index=j  
                }
            }
       }
      str= req.body.val.replace(p1,`<img src=https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif />`)
      req.body.mes.arr.push({back:str})
         mes.findByIdAndUpdate(req.body.mes._id,{arr:req.body.mes.arr},(err)=>{
       if(err){
           console.log("保存失败")
       }else{
           res.json({
               code:200,
               mes:"保存成功"
           })
       }
   })
   }else{
    req.body.mes.arr.push({back:req.body.val})
    mes.findByIdAndUpdate(req.body.mes._id,{arr:req.body.mes.arr},(err)=>{
        if(err){
            console.log("保存失败")
        }else{
            res.json({
                code:200,
                mes:"保存成功"
            })
        }
    })
   }
 

})
router.post('/page',(req,res,next)=>{
   // console.log(req.body.page)
    mes.find({},(err,doc)=>{
     
        res.json({
            code:200,
            data:doc.reverse().slice((req.body.page-1)*10,(req.body.page-1)*10+10)
        }
        )
    })
})
module.exports =router



