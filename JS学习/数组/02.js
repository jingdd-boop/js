//冒泡排序

function bubbleSort(arr){
  for(let i = 0;i < arr.length-1;i++){
    for(let j = 0;j < arr.length-1-i;j++){
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp
      }
    }
  }

}

var arr = [3,5,23,4,56,78,2,45];
bubbleSort(arr)
console.log(arr);