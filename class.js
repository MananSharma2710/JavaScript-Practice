// CLASS

// CONSTRUCTOR :- It is used to initialize the object
/*
class Abc{
    constructor(){
        console.log("hello bae");
    }
}
new Abc();
*/

// Passing argument to constructor
/*
class Abc{
    constructor(getName){
        console.log("hello "+getName);
    }
}
new Abc("MANAN");
*/

// Using this keyword 
/*
class Abc{
    constructor(getName){
        console.log("hello "+getName);
        this.stuName = getName;
    }
}
const getData = new Abc("MANAN");
console.log(getData);
*/


// METHODS
/*
class Abc{
    constructor(getName){
        console.log("hello "+getName);
        this.stuName = getName;
    }
    getStuInfo(){
        return this;
    }
}
const getData = new Abc("MANAN");
console.log(getData);
console.log(getData.stuName);

console.log(getData.getStuInfo());
console.log(getData.getStuInfo().stuName);
*/


/*
class Abc{
    constructor(getName, getAge){
        // console.log("hello "+getName);
        this.stuName = getName;
        this.stuAge = getAge;
    }
    getStuInfo(){
        return this;                    // It will return the object
    }
    getStuAge(){
        return this.stuAge;             // It will return the value
    }
}
const getData = new Abc("MANAN",21);

console.log(getData);                                       // Display object values
console.log(getData.stuName + " "+ getData.stuAge);         // Display values

console.log(getData.getStuInfo());                          // Display this object return values
console.log(getData.getStuAge());                           // Display return value

console.log(getData.getStuInfo().stuName);                  // Display name 
console.log(getData.getStuAge());                           // Display age
*/


// INHERITANCE 

/*
class Parent{
    constructor(getName, getAge){
        console.log("Parent class");
        this.stuName = getName;
        this.stuAge = getAge;
    }
    getStuInfo(){
        return this.stuName;
    }
    getStuAge(){
        return this.stuAge;
    }
}

class Child extends Parent{

}

const getData = new Child("Manan",20);
console.log(getData.getStuAge());
*/

class Parent{
    constructor(getName){
        console.log("Parent class");
        this.stuName = getName;
    }
    getStuInfo(){
        return this.stuName;
    }
    
}

class Child extends Parent{
    constructor(getName,getStuAge){
        super(getName);                         // passing data to the parent constructor
        this.stuAge = getStuAge;
    }
    getStuAge(){
        return this.stuAge;
    }
}

const getData = new Child("Manan",20);
console.log(getData.getStuInfo());
console.log(getData.getStuAge());