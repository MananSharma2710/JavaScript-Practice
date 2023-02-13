// ARGUMENTS

// DEFAULT PARAMETER

/*
function abc(getData){
    console.log("Data :",getData);  //output 5
}
abc(5);

function abc(getData1 ,getData2 ){
    console.log(getData1,getData2);             //output 5 10
    console.log("Sum :", getData1 + getData2);  //output 15
}
abc(5,10);

function abc(getData1 ,getData2 ){
    console.log(getData1,getData2);             //output 5 undefined
    console.log("Sum :", getData1 + getData2);  //output NaN
}
abc(5);

function abc(getData1 = 0 ,getData2 = 0 ){
    console.log(getData1,getData2);             //output 5 0
    console.log("Sum :", getData1 + getData2);  //output 5
}
abc(5);

function abc(getData1 ,getData2 =1 ){
    console.log(getData1,getData2);             //output 5 10
    console.log("Sum :", getData1 + getData2);  //output 15
}
abc(5,10);
*/


// REST PARAMETER : split operator is used
/*
function abc(data1,data2,...getData){
    console.log(data1,data2,getData)
}
abc(1,2,3,4)
*/

// PARAMETER DESTRUCTURING
/*
const obj = {
    StudentName : "MANAN SHARMA",
    StudentCourse : "JS"
}
abc(obj)

function abc(getObj){
    // console.log(getObj);
    console.log(getObj.StudentName,getObj.StudentCourse);
}
*/

/*
function abc({StudentName,StudentCourse}){
    console.log(StudentName,StudentCourse);
}
*/


// CALL BACK FUNCTION
/*
function myFunc(getData){
    console.log("MY FUNCTION",getData());
}

function abc(){
    console.log("Function abc")
}
myFunc(abc);
*/

//IMPORTANT ARRAY METHOD
/*
const Numbers = [1,2,3,4,5];

function abc(getData){
    console.log(getData*2);
}
abc(Numbers[0]);

function abc(getData){
    console.log(getData*2);
}
for(var i=0;i<Numbers.length;i++)
{
    abc(Numbers[i]);
}
*/

// FOREACH :- it takes callback function as an input
//it returns undefined
//it pass data as well as its index

/*
const Numbers = [1,2,3,4,5];

// WAY 1
function abc(getData , getIndex){
    console.log(getData,getIndex);
}
Numbers.forEach(abc);

// WAY 2
Numbers.forEach(function(getData , getIndex){
    console.log(getData,getIndex);
});

// WAY 3 : mostly used
Numbers.forEach((getData , getIndex)=> {
    console.log(getData,getIndex);
});

const getForEach = Numbers.forEach((getData , getIndex)=>{
    console.log(getData,getIndex);
    return getData;
});

console.log(getForEach);    //output undefined
*/


