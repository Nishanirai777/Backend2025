let months =["january", "july", "march", "august"];
console.log(months);
let a = months.splice(0,1);
console.log(a);
console.log(months);
let b= months.splice(1,0,"june");
console.log(b);
console.log(months);