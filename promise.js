// PROMISE :-  used to handle asynchronous operations

var promise = new Promise(function (resolve, reject) {
    const a = "MANAN";
    const b = "MANAN";
    if (a === b) {
        resolve();              //if condition is true, then will execute
    } else {
        reject();               //if condition is false, catch will execute
    }
}); 

// then and catch is used to handle promise 

// then will execute when  a promise is resolved
// catch will execute when a promise is either rejected or some error has occurred in execution


// WAY 1
/*
promise.then(function(){
    console.log("resolve is working")
});
promise.catch(function(){
    console.log("reject is working");
})
*/


// WAY 2
/*
promise.then(function () {
    console.log("resolve is working")
}).catch(function () {
    console.log("reject is working");
})
*/

// WAY 3 :- using arrow function

promise.then(() => {
    console.log("resolve is working")
}).catch(() => {
    console.log("reject is working");
})

