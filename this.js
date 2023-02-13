// THIS KEYWORD :- Global object

// WINDOW :- Global object 
/*
console.log(window);
console.log(this);
*/

// BOTH THIS AND WINDOW ARE SAME OBJECT
//console.log(this===window);


/*
function xyz(){
    console.log(this);
    console.log("hello...");
}
window.xyz()
*/

/*
function xyz(){
    "use strict"                //it is used to strictly define the variable and functions
    console.log(this);          //undefined
    console.log("hello...");
}
xyz()*/

/*
"use strict"
function xyz(){
    console.log(this);
    console.log("hello...");
}
xyz()
*/

// This with function

/*
function abc(){
    this.studentName = "Manan";
    this.studentEmail = "manansharma478@gmail.com";
    // console.log("ABC ",this.studentName);
    return this;            // return the this object
}
// console.log(abc());         // display this or window object

//console.log(new abc());         // it will display studentName in form of object

const getObject = new abc();
console.log(getObject); 
console.log(getObject.studentEmail);
console.log(getObject.studentName);  
*/


// CALL, APPLY AND BIND

// CALL

/*
var getStudentInfo = {
    getDetails : function(){
        // console.log(this.stuName);
        // console.log(this.stuCourse);
        return this.stuName +" "+ this.stuCourse;
    }
}

stuDetails ={
    stuName : "MANAN",
    stuCourse : "JS"
}

const getResult = getStudentInfo.getDetails.call(stuDetails);

console.log(getResult);
*/

// Passing data as an argument

/*
var getStudentInfo = {
    getDetails : function(getData){
        return this.stuName +" "+ this.stuCourse+ " "+getData;
    }
}

stuDetails ={
    stuName : "MANAN",
    stuCourse : "JS"
}

const getResult = getStudentInfo.getDetails.call(stuDetails,8759);
console.log(getResult);
*/


// APPLY

/*
// It pass data as an array 
var getStudentInfo = {
    getDetails : function(getData){
        return this.stuName +" "+ this.stuCourse+ " "+getData;
    }
}

stuDetails ={
    stuName : "MANAN",
    stuCourse : "JS"
}

const getResult = getStudentInfo.getDetails.apply(stuDetails,[8759]);
console.log(getResult);
*/

// BIND :- it will work when we execute the function

var getStudentInfo = {
    getDetails : function(getData){
        return this.stuName +" "+ this.stuCourse;
    }
}

stuDetails ={
    stuName : "MANAN",
    stuCourse : "JS"
}

const getResult = getStudentInfo.getDetails.bind(stuDetails);
console.log(getResult());