window.onload = function(){
  var oF = document.createElement('iframe');
  document.body.appendChild(oF);
  
  var ifArray = window.frames[0].Array;

  var arr = new ifArray();
  console.log( arr.constructor == Array );  //false
	
	console.log( arr instanceof Array );  //false
	
	console.log( Object.prototype.toString.call(arr) == '[object Array]' );  //true
	

    
};