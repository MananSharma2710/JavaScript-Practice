
var a = ["A","B","C","D"];
var b = a;
console.log("before push :",a,b);
a.push("E");
console.log("after push :",a,b);

//CLONE: changes made in b will not reflect in a
var a = ["A","B","C","D"];
var b = ["A","B","C","D"];
console.log("before push :",a,b);
a.push("E");
console.log("after push :",a,b);

//SLICE: copy data from starting point to ending point
var a = ["A","B","C","D"];
var b = a.slice(0,3)
console.log("before push :",a,b);
a.push("E");
console.log("after push :",a,b);

var a = ["A","B","C","D"];
var b = a.slice(0);
console.log("before push :",a,b);
a.push("E");
console.log("after push :",a,b);

//CONCAT
var a = ["A","B","C","D"];
var b = [].concat(a);
console.log("before push :",a,b);
a.push("E");
console.log("after push :",a,b);

//SPLIT
//Array representation
var a = ["A","B","C","D"];
var b = [...a];
console.log("before push :",a,b);
a.push("E");
console.log("after push :",a,b);

//Object representation
var a = ["A","B","C","D"];
var b = {...a};
console.log("before push :",a,b);
a.push("E");
console.log("after push :",a,b);

