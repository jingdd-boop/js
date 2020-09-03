function quickSort(arr){
  if(arr.length <=1){
    return arr;
  }
  var left = [];
  var right = [];
  var midIndex = parseInt(arr.length /2);
  var mid = arr[midIndex];
  for(var i = 0;i<arr.length;i++){
    if(i == midIndex) continue;
    if(arr[i] < mid){
      left.push(arr[i])
    }else{
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([mid],quickSort(right));
}
arr = [3,5,7,3,5,8,1,9,23,45,31]
console.log(quickSort(arr));