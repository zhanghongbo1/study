const express =require('express')

var bodyParser = require('body-parser');
const app=express()
const path=require('path')
const arr=require("./api/pic.js")
const multer = require('multer')
const connectFn=require("./mongo")

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }))
app.all('*', function(req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "X-Requested-With");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
    res.header("X-Powered-By",' 3.2.1')  
    res.header("Content-Type", "application/json;charset=utf-8");  
    next();  
}); 

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,  path.join( __dirname, './public/uploads') )
    },
    filename: function (req, file, cb) {
     
      const filename = file.originalname.split('.')[0] + '-' +Date.now() 
      console.log(filename)
      req.filename = filename 
      cb(null, filename)
    }
  })
  
  var upload = multer({ storage: storage })



//connectFn();
app.post('/img',(res,req)=>{
    req.send(arr)

})
app.post('/login',(res,req)=>{
    req.json(
        {
            token:1
        }
    )
})
app.post('/newimg',upload.any(),(req,res)=>{
    console.log(req.body) 
    console.log(req.filename)
    res.json({
        status: 2,
        info: '图片上传成功',
        imgUrl: `http://localhost:3000/uploads/${ req.filename }`
      })
})





app.listen(3000,()=>{
    console.log("服务器已经运行http://localhost:3000")
})