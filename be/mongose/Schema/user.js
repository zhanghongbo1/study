const mongoose = require('mongoose')
const mail = new mongoose.Schema({
    usename:String,
    password:String,
    mail:String,
})

const  user=mongoose.model('User',mail)
const { send } =require('../../mail/index')
const usersend=(Option,res)=>{
     
    user.find({ mail: Option.mail},(err,doc)=>{
        if(doc.length>0){
            
            res.send({ date:300,mes:"用户已经存在" }) 
             console.log(1)
        }else{
            send(Option.mail)
            console.log(2)
            res.send({ date:200,mes:"邮件已经发送" }) 
        }
    })
    return
  // return send(Option.mail)()
}
module.exports={user , usersend}
