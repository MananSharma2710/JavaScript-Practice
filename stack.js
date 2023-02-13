
// PUSH : add data at last
var a = ["A","B","C","D"];
console.log("before push :",a);
a.push("E");
console.log("after push :",a);

// POP : remove data from last
var a = ["A","B","C","D"];
console.log("before pop :",a);
var removedData = a.pop();
console.log("Removed element",removedData);
console.log("after pop :",a);

//UNSHIFT : add data at starting
var a = ["A","B","C","D"];
console.log("before unshift :",a);
a.unshift("E");
console.log("after unshift :",a);


//SHIFT : remove data from starting
var a = ["A","B","C","D"];
console.log("before shift :",a);
var removedData = a.shift();
console.log("Removed element",removedData);
console.log("after shift :",a);