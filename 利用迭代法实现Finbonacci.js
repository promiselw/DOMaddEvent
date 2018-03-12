
function getFinbonacci(num) {
  if(num < 1) return 0;
  if(num <=1) return 1;

  var first = 1;
  var second = 1;
  var third;

  for(var i =2;i<=num;i++){
    third = first +second;
    first = second;
    second = third;
  }

  return third;

}

//测试
console.log(getFinbonacci(5));