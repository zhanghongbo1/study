const mongoose = require('mongoose')
const mail = new mongoose.Schema({
    usename:String,
    password:String,
    mail:String,
})

const  user=mongoose.model('User',mail)
// const { send } =require('../../mail')
// const usersend=(Option)=>{
//     console.log(1)
//    return  user.find({ mail: Option.mail},(err,doc)=>{
//         if(doc.length>0){
//             console.log(2)
//             return { date:300,mes:"用户已经存在" }
//         }else{
//             send(Option.mail)
//             return { date:200,mes:"邮件已经发送" }
//         }
//     })
    
   
// }
module.exports={user}
