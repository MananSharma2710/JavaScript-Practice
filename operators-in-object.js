//SPLIT OPERATOR IS USED FOR CLONING

//IN OBJECT

var obj1 = {
    Name : "MANAN SHARMA",
    Course : "JS",
    Mobile : 12345
}

var obj2 = {
    StudentName : "MANAN",
    StudentCourse : "REACT JS",
    Mobile : 54321
}

const objData = {...obj1,...obj2};

//if key name is same then it will override the existing data
console.log(objData);

// console.log(objData.Course);


