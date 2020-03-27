const express = require('express')

const router = express.Router()

const multer = require('multer')
const { user } = require('../mongose/Schema/user')
const { mes } = require('../mongose/Schema/message')
const path = require('path')
const { sty } = require('../mongose/Schema/study')
// 将我们上传的图片存储在后端资源目录中

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/img'))
  },
  filename: function (req, file, cb) {
    //  console.log('file',file.originalname.split('.')[1])
    const filename = file.originalname.split('.')[0] + '-' + Date.now() + '.' + file.originalname.split('.')[1]
    req.filename = filename
    cb(null, filename)
  }
})

var upload = multer({ storage: storage })


router.post('/img', upload.any(), (req, res) => {
  console.log(req.body)
  console.log(req.filename)
  res.json({
    status: 2,
    info: '图片上传成功',
    imgUrl: `http://www.zhanghongbo.top/img/${req.filename}`
  })
})
//x修改头像
router.post('/changeimg', upload.any(), (req, res) => {
  //  console.log(req.body.id)
  user.updateOne({ usename: req.body.id }, { img: `http://www.zhanghongbo.top/img/${req.filename}` }, (err, doc) => {
    if (err) {
      console.log(err)
    } else {
      res.send({
        code: 200,
        mes: "更新成功"
      })
    }
  })
  // mes.findOne({user:req.body.id}).then(res=>{console.log(res)})
  mes.updateMany({ user: req.body.id.toString() }, { img: `http://www.zhanghongbo.top/img/${req.filename}` }, (err, doc) => {
    if (err) {
      console.log(err)
    } else {
      console.log(res)
    }
  })
})
router.post('/getimg', (req, res) => {
  user.findOne({ usename: req.body.id }).then(val => {
    // console.log(val)
    res.send({
      code: 200,
      img: val.img
    })
  })

})
router.post('/title', upload.any(), (req, res) => {
  console.log(req.body.p)
  console.log(req.filename)
  console.log(req.body.title)
  if (req.body.p && req.filename && req.body.title) {
    const arr = new sty({ title: req.body.title, img: `http://www.zhanghongbo.top/img/${req.filename}`, contain: req.body.p, time: getNowFormatDate() })
    arr.save((err) => {
      if (err) {
        console.log(err)
        res.send({
          code: 0
        })
      } else {
        res.send({
          code: 200,
          message: "上传成功"
        })
      }
    })
  } else {
    res.send({
      code: 0
    })
  }
})

router.post('/article',(req,res)=>{
  sty.find({},(err,doc)=>{
    res.send(doc)
  })
})



const getNowFormatDate = function () {
  var date = new Date();
  var seperator1 = "-";
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  var currentdate = year + seperator1 + month + seperator1 + strDate;

  return currentdate;
};
module.exports = router