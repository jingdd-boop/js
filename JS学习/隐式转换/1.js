// console.log(1 + "true");//1true
// console.log(1 + true);//2
// console.log(1 + undefined);//NaN
// console.log(1 + null);//1

// console.log("2" > 10);//false
// console.log("2" > "10");
// console.log("abc" > "b");//false
// console.log("abc" > "aad");
// console.log(NaN == NaN);//false
// console.log(undefined == null);
// console.log(undefined == undefined);
// console.log(null == null);
// console.log(NaN == undefined);//false
// console.log(NaN == 0);//false


// var a = {
//   i: 0,
//   valueOf: function(){
//     this.i++;
//     return this.i;//每调用一次，让对象a的i属性自增一次并且返回
//   }
// }

// if(a == 1 && a == 2 && a == 3){//每一次运算是都会调用一次a的valueOf()方法
//   console.log("1");
// }

//如何完善a ,使得其正确打印1

// console.log([1,2] == '1,2');//true
// //原理：左边先转成string，然后右边也是string，再使用unicode编码运算
// console.log([1,2].valueOf());//[1,2]
// console.log([1,2].toString());//'1,2'

// var a = {};
// console.log(a == "[object Object]");
// //原理：console.log(a.valueOf().toString());//[object Object]

// //一级坑
// console.log([] == 0);
// console.log(![] == 0);

//二级坑
// console.log([] == ![]);
// console.log([] == []);

// //三级坑
// console.log({} == !{});
// console.log({} == {});


// console.log(0.1 + 0.2 != 0.3)// true

// const max = Number.MAX_SAFE_INTEGER;
// console.log(max);//9007199254740991
// const min = Number.MIN_SAFE_INTEGER;
// console.log(min);//-9007199254740991

// console.log(max + 1);//9007199254740992
// console.log(max + 2);//9007199254740992

console.log(BigInt(Number.MAX_SAFE_INTEGER) + 2n);//9007199254740993n
console.log(1234567890123456789 * 123);//151851850485185200000

console.log(1234567890123456789n * 123n);//151851850485185185047n