// function createPerson(name,age,job){
//   var o = new Object();
//   o.name = name;
//   o.age = age;
//   o.job = job;
//   o.sayName = function(){
//     alert(this.name);
//   };
//   return o;
// }

// var person1 = createPerson("jing",21,"web");
// var person2 = createPerson("hao",21,"java");
// function Person(name,age,job){
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   this.sayName = function(){
//     alert(this.name);
//   };

// }

// var person1 = new Person("jing",21,"web");
// var person2 = new ePerson("hao",21,"java");

// function Person(){
// }

// Person.prototype.name = 'jing';
// Person.prototype.age = '21';
// Person.prototype.job = 'stu';
// Person.prototype.sayName = function(){
//   console.log(this.name);
// };

// var person1 = new Person();
// person1.sayName();
// var person2 = new Person();
// person2.sayName();

// console.log(person1.sayName == person2.sayName);
// console.log(Person.prototype.isPrototypeOf(person1));
// console.log(Person.prototype.isPrototypeOf(person2));
// console.log(Object.getPrototypeOf(person1) == Person.prototype)
// console.log(Object.getPrototypeOf(person2) == Person.prototype)



function Person(name,age,job){
  this.name = name;
  this.age = age;
  this.job = job;
  this.friends = ['wang','zhi'];
}

Person.prototype = {
  constructor:Person,
  sayName:function(){
    console.log(this.name);
  }
}

var person1 = new Person("jing",21,"web");
var person2 = new Person("hao",21,"java");

person1.friends.push('hao');
console.log(person1.friends);
console.log(person2.friends);
console.log(person1.friends === person2.friends);
console.log(person1.sayName === person2.sayName);

