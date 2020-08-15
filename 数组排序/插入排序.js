var arr = [34,54,1,3,24,8,92,32];
for(var i = 0;i<arr.length;i++){
  var n = i;
  while(arr[n]>arr[n+1] && n>=0){
    var tem =arr[n];
    arr[n]=arr[n+1];
    arrr[n+1]=temp;
    n--
  }
}