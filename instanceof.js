// function Car(wang, zhi, hao){
//   this.wang = wang;
//   this.zhi = zhi;
//   this.hao = hao

// }

// const auto = new Car('jing', 'jing', 1999);

// console.log(auto instanceof Car);

// console.log(auto instanceof Object);

// //Object instanceof constructor


function myIn(left,right) {
  //基本数据类型会直接返回flase
  if(typeof left !== 'object' || left === null) return false;

  //getProtypeOf是object对象自带的一个方法，能够拿到参数的原型对象

  let proto = Object.getPrototypeOf(left);
  while(true){
    //查找到尽头，还没找到
    if(proto == null) return false;
    //找到相同的原型对象
    if(proto == right.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}


