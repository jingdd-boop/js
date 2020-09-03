//1、如何让if(a==1 && a==2 && a==3)条件成立

//知识点，==类型转换 valueOf

// {
//   let a = {
//     a = 1,
//     tip: '三种方式'，
//     valueOf: function() {
//       return this.a++
//     }
//   }

//   if(a==1&&a==2&&a==3) {
//     console.log('1');
//   }
// }

// var value = 1;
// function foo(){
//   console.log(value);
// }

// function bar(){
//   var value = 2;
//   foo();
// }

// bar();


// var nyname = '执行上下文'

// var myname //声明部分
// myname = '执行上下文' //赋值部分

// function foo(){
//   console.log('foo')
// }
// var bar = function(){
//   console.log('bar')
// }

//变量提升
// showName()
// console.log(myname)
// var myname = 'jingda' 
// function showName(){   
//   console.log('函数 showName 被执行')
// }

// var a = 2
// function add(){
//   var b = 10
//   return a+b
// }

var a = 2
function aa(a,b){
  return b+c
}
function addAll(b,b){
  var d = 10
  result = add(b,c)
  return a + result + d
}
addAll(3,6)

