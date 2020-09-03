
//去重
var arr = [1,1,1,"1",12,2,2,2,3,4,5,5,5];
//Set是ES6新增的数据结构，说白了就是不能有重复项的数组
//const set =  new Set(arr);
//...是ES6的强制结构的运算符
//console.log([...set])
//console.log(set)

function uniq(arr){
  var _result = [];
  for(let i = 0; i < arr.length;i ++){
    if(!_result.includes(arr[i])){
      _result.push(arr[i]);
    }
  }
  return _result;
}
console.log( uniq(arr))