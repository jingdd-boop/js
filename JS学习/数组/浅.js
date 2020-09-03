var arr = [1,2,3,[44,55,66]];

var _arr = [];
for(let i = 0;i<arr.length;i++){
  _arr.push(arr[i]);
}
console.log(_arr);
console.log(_arr == arr);
//对象不同了  false
console.log(_arr[4] == arr[4]);
//只克隆了一层
