// 深拷贝
 

const obj1 = {
    age: 20,
    name: 'jing',
    address: {
        city: 'jiangxi'
    },
    arr: ['a','b','c']
}
//浅拷贝
const obj2 = deepClone(obj1)

obj2.address.city = 'shanghai'
console.log(obj1.address.city)

/**
 * 
 * @param {*} obj 
 */

function deepClone(obj = {}) {
    if(typeof obj !== 'object' || obj == null){
        return obj
    }


    //c初始化返回结果
    let result
    if(obj instanceof Array){
        result = []
    }else{
        result = {}
    }

    for (let key in obj) {
        if(obj.hasOwnProperty(key)){
            //保证key不是原型的属性
            //递归调用
            result[key] = deepClone(obj[key])

        }
    }
    //返回结果
    return result
}

