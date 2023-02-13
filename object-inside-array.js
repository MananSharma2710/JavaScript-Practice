//OBJECT INSIDE ARRAY
/*
var arrData = [
    {
        StudentName : "MANAN SHARMA",
        StudentCourse : "JS",
        StudentEmail : "manansharma478@gmail.com"
    },
    {
        StudentName : "XYZ",
        StudentCourse : "REACT JS",
        StudentEmail : "xyz8@gmail.com"
    },
    {
        StudentName : "ABC",
        StudentCourse : "REACT JS",
        StudentEmail : "abc78@gmail.com"
    }
]

// console.log(arrData);
for(item of arrData)
{    
    // console.log(item);
    console.log(item.StudentName, item.StudentEmail);
    console.log(item.StudentCourse);
}
*/


//NESTED DESTRUCTURING
var arrData = [
    {
        StudentName : "MANAN SHARMA",
        StudentCourse : "JS",
        StudentEmail : "manansharma478@gmail.com"
    },
    {
        StudentName : "XYZ",
        StudentCourse : "REACT JS",
        StudentEmail : "xyz8@gmail.com"
    },
    {
        StudentName : "ABC",
        StudentCourse : "REACT JS",
        StudentEmail : "abc78@gmail.com"
    }
]

// const [data1,data2,data3] = arrData;
// console.log(data1.StudentEmail);

const [{StudentName,StudentEmail},,{StudentEmail:getUserEmail}] = arrData;
console.log(StudentName,StudentEmail);
console.log(getUserEmail);
