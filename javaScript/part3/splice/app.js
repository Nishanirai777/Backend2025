let cars= ["audi", "bmw", "xuv", "maruti"];
console.log(cars);
 let a= cars.splice(3);
console.log(a);
let b= cars.splice(0,1);
console.log(b);
cars.push("maruti","ferrari");
console.log(cars);
let c= cars.splice(1,2);
console.log(c);
console.log(cars);
let d = cars.splice(0,0,"nisha", "xuv","maruti");
console.log(d);
console.log(cars);
let e= cars.splice(1,0,"saraj");
console.log(e);
console.log(cars);
//for delete
let r = cars.splice(2,1,"saraj");
console.log(r);
console.log(cars);