//SORT
/*
const a = [1, 8, 10, 5, 4];
a.sort();
console.log(a);

var arrData = ["Apple","Cat","Fish","Dog","Ball"];
arrData.sort();
console.log(arrData);

const b = [1,9,3,8,10,5,6,110];

//Ascending order
const getAscSortData = b.sort((a,b)=>{
    // console.log(a);
    // console.log(b);
    return a-b;
})

console.log(getAscSortData);

//Descending order
const getDescSortData = b.sort((a,b)=>{
    // console.log(a);
    // console.log(b);
    return b-a;
})

console.log(getDescSortData);
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
    }
];

//console.log(objData);
const getObjData = objData.sort((item1,item2)=>{
    // console.log(item1);
    // console.log(item2);
    // console.log(item1.Marks);
    // console.log(item2.Marks);
    return item1.Marks - item2.Marks;   //sort in ascending
});
console.log(getObjData);