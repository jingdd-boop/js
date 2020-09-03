new 一个promise对象

let p = new Promise((resolve, reject) => {
  //做一些异步操作
  setTimeout(() => {
      console.log('执行完成');
      resolve('我是成功！！');
  }, 2000);
});

// 1、创造了一个Promise实例。
// const promise = new Promise(function(resolve, reject) {
//   // ... some code
//   if (/* 异步操作成功 */){
//     resolve(value);
//   } else {
//     reject(error);
//   }
// });

// 2、then方法可以接受两个回调函数作为参数。
// Promise.then(function(value){
//   //success
// }, function(error){
//   //false
// });

// 3、一个Promise对象的简单例子。

// function timeout(ms) {
//   return new Promise(function(resolve,reject) {
//     setTimeout(resolve,ms,'done');
// });
// }

// timeout(100).then((value) => {
//   console.log(value);
// });
//4、Promise 新建后就会立即执行。

// let promise = new Promise(function(reslove,reject) {
//   console.log('promise');
//   reslove();
// });

// promise.then(function() {
//   console.log('resolved');
// });

// console.log('hi');
// 上面代码中，Promise 新建后立即执行，
// 所以首先输出的是Promise
// 然后，then方法指定的回调函数，
// 将在当前脚本所有同步任务执行完才会执行，
// 所以resolved最后输出。

// 5、异步加载图片的例子。

// function loadImageAsync(url) {
//   return new Promise(function(resolve,reject) {
//     const image = new Image();
    
//     image.onload = function() {
//       resolve(image);
//     };

//     image.onerror = function() {
//       reject(new Error('could not load image at' + url));
//     };

//     image.src = url;
//   });

// } 

// 上面代码中，使用Promise包装了一个图片加载的异步操作。
// 如果加载成功，就调用resolve方法，
// 否则就调用reject方法。

// 6、一个用Promise对象实现的 Ajax 操作的例子

