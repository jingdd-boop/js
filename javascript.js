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

var value = 1;
function foo(){
  console.log(value);
}

function bar(){
  var value = 2;
  foo();
}

bar();