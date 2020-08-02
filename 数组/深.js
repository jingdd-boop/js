function deepClone(o){
  if(
    typeof o == "string"
    || 
    typeof o == "number"
    || 
    typeof o == "boolean"
    || 
    typeof o == "undefined" 
    ){
      return o;
    }else if(Array.isArray(o)){
      var _arr = [];
      for(let i = 0;i<arr.length;i++){
        _arr.push(deepClone(o[i]));
      }
      return _arr;
    }else if(typeof o == "object"){
      var _o = {};
      for(var k in o){
        _o[k] = deepClone(o[k]);
      }
      return _o;
    }
}

var arr = [1,2,3,[44,55,88,99]];
var arr2 = deepClone(arr);
console.log(arr2);