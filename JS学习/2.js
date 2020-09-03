function setUp(num){
  let n = num.length;
  let right = n-1;
  let left = 0;
  if(num[left] == num[right]){
    return num[left]
  }
  else {
    left++;
  }
}
let n = [1,2,3,2,6,7,4,2];
console.log(setUp(n));