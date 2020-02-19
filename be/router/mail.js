const { send } = require('../mail/index')
const express = require('express')

const router = express.Router()
const  {user} = require ('../mongose/Schema/user')

let str=""
router.post('/mail',(req,res)=>{
    user.find({ mail: req.body.mail},(err,doc)=>{
                if(doc.length>0){
                    //console.log(2)
                    res.send({ data:300,mes:"用户已经存在" }) 
                }else{
                    str=send(req.body.mail)
                    //send(req.body.mail)
                    res.send({ data:200,mes:"邮件已经发送 "})
                 
                }
})
 time=  setTimeout(() => {
      str=""
  }, 60000);      
})
router.post('/check',(req,res)=>{
    console.log(str)
    if(req.body.check==str){
        clearTimeout(time)
        const arr=new user(req.body)
        arr.save((err)=>{
        //    console.log(err)
        })
        res.send({data:200,res:"注册成功"})
    }else{
        res.send({data:300,mes:"注册失败"})
    }
})





module.exports= router