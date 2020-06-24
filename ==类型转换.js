{
  let a = {
    a:1,
    tip:'三种方式哦',
    valueOf: function(){
      return this.a++
    }
  }

  if(a==1 && a==2 && a==3){
    console.log('1');
  }
}

{
  let a = ['数组'];
  Array.prototype.valueOf = function(){
    if(this.length === 1){
      this.length = 2;
      return 1
    }
    if(this.length === 2){
      this.length = 3;
      return 2
    }
    if(this.length === 3){
      this.length = 4;
      return 3
    }
  }
  if(a==1 && a==2 && a==3){
    console.log('2');
  }
}

{
  let a = new String('字符串');
  let abc = 1;
  String.prototype.valueOf = function(){
    return abc++
  }
  if(a==1 && a==2 && a==3){
    console.log('3');
  }

}