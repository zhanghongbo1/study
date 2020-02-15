const express = require ( 'express')
const list =require('../face/index')
const router=express.Router()
const { messageAdd,mes} = require('../mongose/Schema/message')

router.post('/message',(req,res,next)=>{
   
    messageAdd(req.body)
    mes.find({},(err,doc)=>{
        // console.log(doc)
         res.json({
             code:200,
             data:doc.reverse()
         })
     })
    
})


router.post('/getmes',(req,res,next)=>{
    mes.find({},(err,doc)=>{
       // console.log(doc)
       res.json({
        code:200,
        data:doc.reverse()
    })
    })
    
})

router.post('/num',(req,res,next)=>{
const id=req.body
    mes.update(id,{$inc:{num:1}},(err,doc)=>{
        //console.log(id)
        res.json({
            code:200,
            mes:"成功"
        })
    })
})

module.exports=router