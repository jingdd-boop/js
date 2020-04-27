//父类
class People {
    constructor(name){
        this.name = name
    }
    eat(){
        console.log(`${this.name} eat something`)
    }
}

//子类
class Student extends People{
    constructor(name,number){  
    super(name)
    this.number = number
}
    SayHi(){
        console.log(`姓名 ${this.name} 学号 ${this.number}`)
    }
  
}
//子类
class Teacher extends People{
    constructor(name,major){
        super(name)
        this.major = major
    }
    teach(){
        console.log(`${this.name} 教授 ${this.major}`)

    }
}

//学生
const jingjing = new Student('王志浩',100)
console.log(jingjing.name)
console.log(jingjing.number)
jingjing.eat()


//学生
const wang = new Teacher('王老师','语文')
console.log(wang.name)
console.log(wang.major)
wang.teach()
