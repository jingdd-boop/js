// function Aaa(){

// }

// var a1 = new Aaa();

// console.log(a1 instanceof Aaa);

// var arr = [];
// console.log(arr instanceof Aaa);

    // var str = 'hello';
    // console.log(str instanceof String);//false
    // var bool = true;
    // console.log(bool instanceof Boolean);//false
    // var num = 123;
    // console.log(num instanceof Number);//false
    // var nul = null;
    // console.log(nul instanceof Object);//false
    // var und = undefined;
    // console.log(und instanceof Object);//false

    // var oDate = new Date();
    // console.log(oDate instanceof Date);
    // var json = {}
    // console.log(json instanceof Object);
    // var arr = [];
    // console.log(arr instanceof Array);
    // var reg = /a/;
    // console.log(reg instanceof RegExp);
    // var fun = function(){};
    // console.log(fun instanceof Function);
    // var err = new Error();
    // console.log(err instanceof Error);


    // var num = new Number(123);
    // console.log(num instanceof Number);

    // var str = new String('abcd');
    // console.log(str instanceof String);
    
    // var boo = new Boolean(true);
    // console.log(boo instanceof Boolean)

    // var str = 'hello';
    // console.log(str.constructor == String);//true
    // var bool = true;
    // console.log(bool.constructor == Boolean);//true
    // var num = 123;
    // console.log(num.constructor ==Number);//true
   // var nul = null;
   // alert(nul.constructor == Object);//报错
    //var und = undefined;
    //alert(und.constructor == Object);//报错
    // var oDate = new Date();
    // console.log(oDate.constructor == Date);//true
    // var json = {};
    // console.log(json.constructor == Object);//true
    // var arr = [];
    // console.log(arr.constructor == Array);//true
    // var reg = /a/;
    // console.log(reg.constructor == RegExp);//true
    // var fun = function(){};
    // console.log(fun.constructor ==Function);//true
    // var error = new Error();
    // console.log(error.constructor == Error);//true


    // function Aaa(){
    // }
    // Aaa.prototype.constructor = Aaa;//程序可以自动添加，当我们写个构造函数的时候，程序会自动添加这句代码
    // function BBB(){}
    // Aaa.prototype.constructor = BBB;//此时我们就修改了Aaa构造函数的指向问题
    // console.log(Aaa.construtor==Aaa);//false
    

    var str = 'hello';
    console.log(Object.prototype.toString.call(str));//[object String]
    var bool = true;
    console.log(Object.prototype.toString.call(bool))//[object Boolean]
    var num = 123;
    console.log(Object.prototype.toString.call(num));//[object Number]
    var nul = null;
    console.log(Object.prototype.toString.call(nul));//[object Null]
    var und = undefined;
    console.log(Object.prototype.toString.call(und));//[object Undefined]
    var oDate = new Date();
    console.log(Object.prototype.toString.call(oDate));//[object Date]
    var json = {};
    console.log(Object.prototype.toString.call(json));//[object Object]
    var arr = [];
    console.log(Object.prototype.toString.call(arr));//[object Array]
    var reg = /a/;
    console.log(Object.prototype.toString.call(reg));//[object RegExp]
    var fun = function(){};
    console.log(Object.prototype.toString.call(fun));//[object Function]
    var error = new Error();
    console.log(Object.prototype.toString.call(error));//[object Error]
