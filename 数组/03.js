//快速排序

function quickSort(arr){
  //停止递归的条件
  if(arr.length <= 1){
    return arr;
  }
  //标杆
  const pivot = arr[0];
  //比标杆大的
  var bigger = [];
  //比标杆小的
  var smaller = [];

  //遍历。分门别类
  for(let i = 1;i < arr.length; i++){
    if(arr[i] >= pivot){
      bigger.push(arr[i]);
    }else{
      smaller.push(arr[i]);
    }
  }
  return quickSort(smaller).concat(pivot,quickSort(bigger));
}

var arr = [45,4,8,5,0,23,18,30];

console.log(quickSort(arr));