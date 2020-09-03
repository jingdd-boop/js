let a = 'sun'
let b = a.indexOf('s')
console.log(b)


//上面的代码后台实际的步骤
let a = new String('sun')
let b = a.indexOf('s')
a = null

