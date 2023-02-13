// FIND METHOD
/*
var arrData = ["Apple","Ball","Apple","Cat"];

const getArrData = arrData.find((item)=>{
    //console.log(item);
    // return item=="Apple";
    return item.length==4;
});

console.log(getArrData);
*/

var objData = [
    {
        StudentName : "MANAN SHARMA",
        StudentCourse : "JS",
        StudentEmail : "manansharma478@gmail.com",
        Marks : 98
    },
    {
        StudentName : "XYZ",
        StudentCourse : "REACT JS",
        StudentEmail : "xyz8@gmail.com",
        Marks : 88
    },
    {
        StudentName : "ABC",
        StudentCourse : "REACT JS",
        StudentEmail : "abc78@gmail.com",
        Marks : 92
    },
    {
        StudentName : "PQR",
        StudentCourse : "JS",
        StudentEmail : "pqr78@gmail.com",
        Marks : 92
    }
];
/*
const getObjData = objData.find((item)=>{
    return item.Marks==88;
});

console.log(getObjData);


//EVERY METHOD

const arrData1 = [2,10,8,4];

console.log(arrData1);
const getArrData1 = arrData1.every((item)=>{
    return (item%2==0);
});

console.log(getArrData1);


//SOME METHOD

const arrData2 = [1,2,10,8,4];
console.log(arrData2);
const getArrData2 = arrData2.some((item)=>{
    return (item%2==0);
});

console.log(getArrData2);


const getEveryData = objData.every((item)=>{
    return item.Marks>85;
})

console.log(getEveryData);

const getSomeData = objData.some((item)=>{
    return item.Marks>90;
})

console.log(getSomeData);
*/


// FILL METHOD :- to fill an empty array
/*
console.log(new Array(5));

const arrData3 = new Array(5);
arrData3.fill(2);
console.log(arrData3);

const arrData4 = [1,2,3,5,4];
console.log(arrData4);
arrData4.fill(1,2,4);           //(data, start, end)
console.log(arrData4);
*/


//SPLICE METHOD

// Splice with delete

const arrData5 = ["Apple","Ball","Dog","Cat"];
/*
arrData5.splice(0,2);       // (start,no_of_elements_to_delete)
console.log(arrData5);
*/

// Splice with insert

arrData5.splice(2,1,"Fish");    //(start,no_of_elements_to_delete,insert)
console.log(arrData5);