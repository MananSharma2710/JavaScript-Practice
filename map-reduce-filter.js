
// MAP METHOD :It is same as foreach but it will return data

/*
const getMap= Numbers.map((getData , getIndex)=>{
    console.log(getData,getIndex);
    return getData;
});

console.log(getMap);        //output array elements
*/

// REDUCE METHOD :- It takes callback function as an input
// It returns a value

/*
const NumbersData = [1,2,3,4,5];

const getReduceData = NumbersData.reduce((accumulator,currentValue)=>{
    //console.log(accumulator,currentValue);
    //console.log(accumulator + currentValue);

    return accumulator + currentValue;
});

console.log(getReduceData);
*/

// FILTER :- It takes callback function as an input
// It returns the new array

/*
const NumberData = [1,2,3,4,5];

const getFilterData = NumberData.filter((item,index)=>{
    //console.log(item,index);
    return item>3;
 });
 console.log(getFilterData);

 const getFilterData = NumberData.filter((item,index)=>{
    //console.log(item,index);
    return item%2 == 0;             //return even numbers
 });
 console.log(getFilterData);

const getFilterData = NumberData.filter((item,index)=>{
    //console.log(item,index);
    return item%2;                  //return odd numbers
 });
 console.log(getFilterData);
*/


var arrData = [
    {
        StudentName : "MANAN SHARMA",
        StudentCourse : "JS",
        StudentEmail : "manansharma478@gmail.com",
        Marks : 85
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

/*
arrData.forEach((item)=>{
    console.log(item.StudentName);
})
*/

/*
const getFilterData= arrData.filter((item)=>{
    return item.Marks;
})
console.log(getFilterData);
*/

const getReduceData = arrData.reduce((accumulator,currentValue)=>{
    //console.log(accumulator,currentValue.Marks);
    return accumulator + currentValue.Marks;
},0)
console.log(getReduceData);
