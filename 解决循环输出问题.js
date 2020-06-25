for(var i=1;i<=5;i++){
  setTimeout(function timer(){
    console.log(i)
  },0)
}
//使用立即执行函数，当每次for循环的时候，把此时的i变量传递到定时器中
for(var i=1;i<=5;i++){
  (function(j){
    setTimeout(function timer(){
      console.log(j);
    },0)
  })(i)
}


//使用let
for(let i=1;i<=5;i++){
  setTimeout(function timer(){
    console.log(i)
  },0)
}
//给定时器传递第三个参数，作为timer函数的第一个参数
for(var i=1;i<=5;i++){
  setTimeout(function timer(){
    console.log(i)
  },0,i)
}