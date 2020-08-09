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
function Person(name,age,job){
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function(){
    alert(this.name);
  };

}

var person1 = new Person("jing",21,"web");
var person2 = new ePerson("hao",21,"java");