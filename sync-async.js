/*

TASK        TIME
A           2s
B           1s
C           4s

*/

// SYNCHRONOUS :- task which come first will execute after that new task will execute

/*
console.log("TASK A");
console.log("TASK B");
console.log("TASK C");
*/


// ASYNCHRONOUS :- task display according to there completion time

setTimeout(() => {
    console.log("TASK A");          //run after 2s
}, 2000);
setTimeout(() => {
    console.log("TASK B");          //run after 1s
}, 1000);
setTimeout(() => {
    console.log("TASK C");          //run after 4s
}, 4000);
