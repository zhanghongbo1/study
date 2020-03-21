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
    //console.log(req.body)
    if(req.body.check==str){
        clearTimeout(time)
        const arr=new user(req.body)
        arr.save((err)=>{
           if(err){
               console.log(err)
           }
        })
      user.find({mail:req.body.mail},(err,doc)=>{
        res.send({data:200,mes:"注册成功"})
    })
        
    }else{
        res.send({data:300,mes:"注册失败，验证码错误或用户已经存在"})
    }

})

//登录

router.post('/login',(req,res)=>{
    user.findOne({mail:req.body.mail}).then((result)=>{
        if(result&&req.body.password==result.password){
            res.json({
                data:200,
                mes:"登录成功",
                user:result.usename
            })
        }else{
            res.json({
                data:300,
                mes:"账号或者密码错误"
            })
        }
})
   
})

//QQ登录

//usename:String,
// password:String,
// mail:String,
// img:{
//     type:String,
//     default:"https://i.loli.net/2020/02/21/hCcgSEfNOlwtZ7V.jpg"
// }
router.post('/qq',(req,res)=>{
 
    user.find({usename:req.body.usename}).then(res=>{
        if(res.length<1){
        const arr=new user({usename:req.body.usename,img:req.body.img})
       arr.save(err=>{
        if(err){
            console.log(arr)
        }else{
            console.log("保存成功")
        }
    })
        }
    })
 
  
})



module.exports= router