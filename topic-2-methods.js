//Input
const person1 ={
    name:"Cliff Amadeus",
    age:23,
    occupation:"hqr"
}

//Process and Output
console.log("Name: "+person1.name);
console.log("Age: "+person1.age);
console.log("Occupation: "+person1.occupation);
console.log("--------------------------------");


// Class definition
class person{
    constructor(name, age, occupation) {
      this.name = name;
      this.age = age;
      this.occupation = occupation;
    }
  
    // Method to display car information
    displayInfo() {
        console.log("Name: "+ this.name);
        console.log("Age: "+ this.age);
        console.log("Occupation: "+ this.occupation);
    }
  }
  
  // Creating an object (instance) of the personclass
  const personOne = new person('Class', 23, 'Instructor');
  personOne.displayInfo(); 