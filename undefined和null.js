
//var message;   //这个变量声明之后默认取得了undefined值
//  下面这个变量没有声明
//  var age
//console.log(typeof message);    //"undefined"
//console.log(typeof age);     //"undefined"

//if(typeof(exp) == 'undefined'){
//  console.log("undefined");
//}

var exp = null;
if (!exp && typeof(exp)!="undefined" && exp!=0){
    console.log("is null");
}

var exp = null;
if(exp == null){
    alert("is null");
}

var exp = null;
if(!exp){
    alert("is null");
}

var exp = null;
if(typeof(exp) == "undefined"){
    alert("is null");
}