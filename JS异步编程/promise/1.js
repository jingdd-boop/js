//传统异步代码，层层嵌套，环环相扣，想要拿到回调结果已经够费劲了，如果还想进行错误处理，就很难
let fs = require('fs')

fs.readFile('./dellypung.json',function(err,data){
  fs.readFile(data,function (err,data) {
    fs.readFile(data,function (err,data) {
      console.log(data)
    })
  })
})

//promise 的出现，解决了什么问题
//使用promise解决了异步回调的嵌套使用和错误处理
let fs = require('fs')

function  getFile(url) {
  return new Promise((reslove,reject)=>{
    fs.readFile(url,function (err,data) {
      if(error){
        reject(error)
      }
      reslove(data)
      
    })
  })
  
}

getFile('./dellyoung.json').then(data=>{
  return getFile(data)
}).then(data=>{
  return getFile(data)
}).then(data=>{
  console.log(data)
}).catch(err=>{
  //统一错误处理、
 console.log('发生错误')
})