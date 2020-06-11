// 深拷贝

const obj1 = {
    age: 20,
    name: 'wang',
    address: {
        city:'nanchang',
    },
    arr:['a','b','c']
}

// 浅拷贝
const obj2 = deepClone(obj1)

obj2.address.city = 'nanjing'
Console.log(obj1.address.city)