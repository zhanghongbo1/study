const express = require ( 'express')
const list = require ('../face')
const router=express.Router()
let { mes }=require ('../mongose/Schema/message')
let { user } =require ('../mongose/Schema/user')
router.post('/back',(req,res,next)=>{
   const p1= /\[[\u4e00-\u9fa5]+\]/g
   const content= req.body.val.match(p1)
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
      user.findOne({usename:req.body.from}).then(result=>{
        req.body.mes.arr.push({back:str,to:req.body.mes.user,from:req.body.from,img:result.img})
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
      })
     
 
   }else{
    user.findOne({usename:req.body.from}).then(result=>{
        req.body.mes.arr.push({back:req.body.val,to:req.body.to?req.body.to:req.body.mes.user,from:req.body.from,img:result.img})
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
    })
  
   }
 

})
router.post('/page',(req,res,next)=>{

    mes.find({},(err,doc)=>{
     
        res.json({
            code:200,
            data:doc.reverse().slice((req.body.page-1)*10,(req.body.page-1)*10+10)
        }
        )
    })
})

router.post('/startimg',(req,res)=>{
        user.findOne({usename:req.body.user}).then(result=>{
       //     console.log(result.img)
            mes.updateOne({user:req.body.user},{img:result.img},(err,doc)=>{
                if(err){
                    console.log(err)
                }else{
                    
                    mes.find({},(err,doc)=>{
                        // console.log(doc)
                    })
                }
            })
        })
      
})


module.exports =router



