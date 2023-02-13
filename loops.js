const a = ["A","B","C","D"];

//FOR LOOP
for(var i=0;i<a.length;i++)
{
    console.log(i,a[i]);
}

//WHILE LOOP
var i = 0;
while(i<a.length)
{
    console.log(i,a[i]);
    i++;
}

//DO WHILE LOOP
var i=0;
do{
    console.log(i,a[i]);
    i++;
}while(i<a.length)

//FOR OF LOOP :- finding elements
for(item of a)
{
    console.log(item);
}

//FOR IN LOOP :- finding index 
const dataItems = ["A","B","C","D"];
for(item in dataItems)
{
    console.log( item, dataItems[item]);
}
/*
//ARRAY DESTRUCTURING
const dataItems = ["A","B","C","D"];
const [data1,data2,data3,data4] = dataItems;
console.log(data1);

const dataItems = ["A","B","C","D"];
const [,,data3,] = dataItems;
console.log(data3);

const dataItems = ["A","B","C","D"];
const [data1,data2,...resData] = dataItems;
console.log(resData);
*/

// OBJECT DESTRUCTURING
var objData = {
    Name : "Manan Sharma",
    Course : "JS",
    'Mobile Number' : 155785
}
console.log(objData);

console.log(objData.Name);
console.log(objData.Course);

console.log(objData['Name']);
console.log(objData['Course']);
console.log(objData['Mobile Number']);