// USING PROMISE

/*
function api(){

    const getData = fetch('https://jsonplaceholder.typicode.com/users');
    
    getData.then((getItem)=>{
        //console.log(getItem);                 // data in readable stream 
        //console.log(getItem.json());          // .json() is used to read readable stream data
    
        getItem.json().then((itemList) => {
            //console.log(itemList);            // display data in array of objects
            itemList.map((getDataItem) =>{
                console.log(getDataItem.address.street);
            })
        })
    })
}
*/


// USING AWAIT
/*
async function api(){
    const getData = await fetch('https://jsonplaceholder.typicode.com/users');
    var getJSONData = await getData.json();
    //console.log(getJSONData);                 // Display data in array
    getJSONData.map((getItem) =>{
        console.log(getItem.company);
    })
}
*/


async function api(){
    const getData = await fetch('https://jsonplaceholder.typicode.com/users');
    var getJSONData = await getData.json();
    return getJSONData;
}
api().then((itemData)=>{
    //console.log(itemData);
    itemData.map((getItem) =>{
        console.log(getItem.company.name);
    })
});
