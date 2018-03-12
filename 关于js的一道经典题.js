
var a = {};

var b = {
  name:'yy'
};

var c = {
  name:'ww'
};


//执行了三次该函数
Object.prototype.toString = function() {
  console.log('执行了');
};

//在执行该代码时，隐式的调用了toString()方法。
a[b] = 123;
a[c] = 456;

console.log(a[b]);