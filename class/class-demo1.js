class Student {
    constructor(name, number){
      this.name = name 
      this.number = number 
    }
    sayHi() {
        console.log(
         `姓名 ${this.name} , 学号 ${this.number}`
        )
    }
}

//通过类申明实例

const jingjing = new Student('王志浩',100)
console.log(jingjing.name)
console.log(jingjing.number)
jingjing.sayHi()
