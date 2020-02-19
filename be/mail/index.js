//enziuuckjdwfbbij


const nodemailer = require('nodemailer');
function rand(start,end){
    return Math.floor(Math.random()*(end-start+1))+start;
};
let transporter = nodemailer.createTransport({
  // host: 'smtp.ethereal.email',
  service: 'qq', // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
  port: 465, // SMTP 端口
  secureConnection: true, // 使用了 SSL
  auth: {
    user: '582074370@qq.com',//你的邮箱
    // 这里密码不是qq密码，是你设置的smtp授权码
    pass: 'enziuuckjdwfbbij',
  }
});
const send=(mail)=>{
  let str='';
  for(var i=0;i<6;i++){
      str+=rand(0,9)
  }  
let mailOptions = {
  from: '"张宏波博客" <582074370@qq.com>', // 这里写上你自己的邮箱
  to: mail, // 这里写上要发送到的邮箱
  subject: '张宏波博客验证码', // Subject line
  html: `<b>验证码为：${str} 10分钟内有效</b>` // html body
};
 
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
     console.log(error);
  }

  
})
  return str
};

module.exports = { send }
