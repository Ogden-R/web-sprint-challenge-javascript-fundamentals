//🚀🚀🚀  Topic #1 Closures 🚀🚀🚀//
/* 🚀🚀🚀🤓 Task 1: 🤓🚀🚀🚀 
Study the code below and explain in your own words why nested function can access the variable internal. */

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();

//🚀🚀🚀 ⬇️ 📝 Explanation ⬇️ 📝 🚀🚀🚀: 
/* nested function can access the variable internal because of closure. 
myFunction first console.logs (external) for which it has to look outside of itself for a a value. after logging it, the variable internal is established, followed by the nestedFunction function. inside of nestedFunction we are trying to console.log internal. but the value for internal is not found inside of this function, so nestedFunction has to look outside of itself to find the value of this variable. now that nestedFunction knows the value of internal, it can close itself and be invoked. once invoked, we can close the myFunction function, which will call external first, followed by internal. therefore, closure helps nestedFunction access the variable internal.*/


/* 🚀🚀🚀 Task 2: Counter 🚀🚀🚀 */
/* Use summation to do the following:
    1. Receive a number 
    2. Use a counter to return the summation of that number. 
    
For example, `summation(4)` should return 10 because 1+2+3+4 is 10. Note, you may use a for loop for this function if you wish */

function summation(number) {
  let count = 0;
  for (let i = 0; i <= number; i++){//increments and returns a counter variable
    count += i;// make it count up.
  }
  return count;
  }
 console.log("Task 2(Counter):", summation(4));


// 🦁🦁🦁 Topic 2: ADVANCED Array Methods 🦁🦁🦁
// Given this zoo data from around the United States, follow the instructions below. Use the specific array methods in the requests below to solve the problems.

const zooAnimals = [
    { animal_name: "Jackal, asiatic", population: 5, scientific_name: "Canis aureus", state: "Kentucky" },
    { animal_name: "Screamer, southern", population: 1, scientific_name: "Chauna torquata", state: "Alabama" },
    { animal_name: "White spoonbill", population: 8, scientific_name: "Platalea leucordia", state: "Georgia" },
    { animal_name: "White-cheeked pintail", population: 1, scientific_name: "Anas bahamensis", state: "Oregon" },
    { animal_name: "Black-backed jackal", population: 2, scientific_name: "Canis mesomelas", state: "Washington" },
    { animal_name: "Brolga crane", population: 9, scientific_name: "Grus rubicundus", state: "New Mexico" },
    { animal_name: "Common melba finch", population: 5, scientific_name: "Pytilia melba", state: "Pennsylvania" },
    { animal_name: "Pampa gray fox", population: 10, scientific_name: "Pseudalopex gymnocercus", state: "Connecticut" },
    { animal_name: "Hawk-eagle, crowned", population: 10, scientific_name: "Spizaetus coronatus", state: "Florida" },
    { animal_name: "Australian pelican", population: 5, scientific_name: "Pelecanus conspicillatus", state: "West Virginia" },
  ];
  
  /* 🦁🦁🦁 Request 1: .forEach() 🦁🦁🦁
  The zoos want to display both the scientific name and the animal name in front of the habitats. 
  Use animalNames to populate and return the displayNames array with only the animal name and scientific name of each animal. 
  displayNames will be an array of strings, and each string should follow this pattern: "name: {name}, scientific: {scientific name}"
  */

  function animalNames(array){
    const displayNames = [];
    array.forEach(function(item){
      displayNames.push(`name: ${item.animal_name}, scientific: ${item.scientific_name}`);
    });
    return displayNames;
  }
  
console.log("Topic 2(Advanced Array Methods), Request 1(.forEach):", animalNames(zooAnimals));
  

  /* 🦁🦁🦁 Request 2: .map() 🦁🦁🦁
  The zoo needs a list of all their animal's names converted to lower case. 
  Using lowerCaseNames use .map() to create a new array of strings with the animal's names in lowercase and return the new array. 
  For example: ['jackal, asiatic', .....]
  */
/*  
  const lowerCaseNames1 = zooAnimals.map(function(item){
    return item.animal_name.toLowerCase();
  });
console.log('Topic 2, Request 2:', lowerCaseNames1);/*
/*this  returned the exact same array as the function below, but the test showed as failing, so i changed it the answer to the one below, but i dont understand why this one failed when it showed the exact same array!!!*/

function lowerCaseNames(array){
  const smallNames = array.map(function(item){
     return item.animal_name.toLowerCase();
 })
 return smallNames;
}
console.log("Topic 2(Advanced Array Methods), Request 2(.map):", lowerCaseNames(zooAnimals));
  
  /* 🦁🦁🦁 Request 3: .filter() 🦁🦁🦁
  The zoo is concerned about animals with a lower population count. 
  Using lowPopulationAnimals use .filter() to create a new array of objects which contains only the animals with a population of less than 5.
  */
 
  function lowPopulationAnimals(array){
    const lowPop = array.filter(item => item.population < 5);
    return lowPop;
  }
console.log("Topic 2(Advanced Array Methods), Request 3(.filter):", lowPopulationAnimals(zooAnimals));
/*
// const lowPopulationAnimals = zooAnimals.filter(function(item){
//   return item.population < 5;
// });
//   console.log("lowPopulationAnimals",lowPopulationAnimals);
ALSO DOESNT PASS THE TEST. WHY?
*/

  /* 🦁🦁🦁 Request 4: .reduce() 🦁🦁🦁
  The zoo needs to know their total animal population across the United States. 
  Using USApop find the total population from the zoos array using the .reduce() method. 
  Remember the reduce method takes two arguments: a callback (which itself takes two args - the accumulator and the item), and an initial value for the count.
  */

  function USApop(){
    const totalPop = zooAnimals.reduce((acc, item) => acc + item.population, 0);
 return totalPop;
 }
   console.log("Topic 2(Advanced Array Methods), Request 4(.reduce):", USApop());
   
  
  // 🦁🦁🦁 Callbacks 🦁🦁🦁  
  /* 🦁🦁🦁 Step 1: Create a higher-order function 🦁🦁🦁
    * Use the higher-order function consume with 3 parameters: a, b and cb
    * The first two parameters can take any argument (we can pass any value as an argument)
    * The last parameter accepts a callback
    * The consume function should return the invocation of cb, passing a and b into cb as arguments
  */

  function consume(a, b, cb){
    return cb(a, b);
  }
 
  
  /* 🦁🦁🦁 Step 2: Create several functions to callback with consume(); 🦁🦁🦁 */
 // 🦁🦁🦁 Use add to return the sum of two numbers 🦁🦁🦁
  
function add(a, b){
    return a + b;
  }


// 🦁🦁🦁 Use multiply to return the product of two numbers 🦁🦁🦁
  
function multiply(a, b){
    return a * b;
  }


 // 🦁🦁🦁 Use greeting to accept a first and last name and return "Hello {first-name} {last-name}, nice to meet you!" 🦁🦁🦁
  
function greeting(a, b){
   return `Hello ${a} ${b}, nice to meet you!`;
  }
  
  
  // 🦁🦁🦁 Step 3: Check your work by un-commenting the following calls to consume(): 🦁🦁🦁 
  // ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️
  console.log("Topic 2(Callbacks) Add:", consume(2, 2, add)); // 4
  console.log("Topic 2(Callbacks) Multiply:", consume(10, 16, multiply)); // 160
  console.log("Topic 2(Callbacks) Greeting:", consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!

// 🐴🐴🐴 Topic 3: Prototypes 🐴🐴🐴 //
//🐴🐴🐴 Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge. 🐴🐴🐴

/* 🐴🐴🐴 Step 1: Base Constructor 🐴🐴🐴
 Use the constructor function named CuboidMaker to accept properties for length, width, and height which can be initialized as an object
*/
function CuboidMaker(attributes){
  this.length = attributes.length;
  this.width = attributes.width;
  this.height = attributes.height;
}


/* 🐴🐴🐴 Step 2: Volume Method 🐴🐴🐴
  Create a method called volume using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  Formula for cuboid volume: length * width * height   */
  
  CuboidMaker.prototype.volume = function(){
    return this.length * this.width * this.height;
  }

/* 🐴🐴🐴 Step 3: Surface Area Method 🐴🐴🐴
  Create another method called surfaceArea using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 
  Formula for cuboid surface area of a cube: 
  2 * (length * width + length * height + width * height)  */


CuboidMaker.prototype.surfaceArea = function(){
  return ((this.length * this.width) + (this.length * this.height) + (this.width * this.height))* 2;
}


/* 🐴🐴🐴 Step 4: Create a new object that uses CuboidMaker 🐴🐴🐴
  Create an object called cuboid that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid. */

  const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
  });

// 🐴🐴🐴 Test your volume and surfaceArea methods by uncommenting the logs below: 🐴🐴🐴
// ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️
console.log("Topic 3(Prototypes) Volume:", cuboid.volume()); // 100
console.log("Topic 3(Prototypes) Surface Area:", cuboid.surfaceArea()); // 130
 

// 🦄🦄🦄 Topic 4: Classes 🦄🦄🦄 //
//🦄🦄🦄 1. Take your prototypes from above and refactor into class syntax. Please rename your class CuboidMakerTwo and your object cuboidTwo 🦄🦄🦄
class CuboidMakerTwo{
  constructor (attributes1){
    this.length = attributes1.length;
    this.width = attributes1.width;
    this.height = attributes1.height;
  }
  volume(){
    return this.length * this.width * this.height;
  }
  surfaceArea(){
    return((this.length * this.width) + (this.length * this.height) + (this.width * this.height)) * 2;
  }
}

const cuboidTwo = new CuboidMakerTwo({
  length: 4,
  width: 5,
  height: 5
});

//🦄🦄🦄 Test your volume and surfaceArea methods by uncommenting the logs below: 🦄🦄🦄
console.log("Topic 4(Classes) Volume:", cuboidTwo.volume()); // 100
console.log("Topic 4(Classes) Surface Area:", cuboidTwo.surfaceArea()); // 130





// 🦄 💪 Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area. 🦄 💪
  

class CubeMaker extends CuboidMaker{
  constructor (attributes2){
    super(attributes2);
    this.edge = attributes2.edge = this.length = this.width = this.height;
  }
  volume(){
    return (this.edge)**3; //edge cubed
  }
  surfaceArea(){
    return 6*((this.edge)**2); //six times edge squared
  }
}

const cube = new CubeMaker({
  length: 3,
  width: 3,
  height: 3,
  edge: 3
});

const cube2 = new CubeMaker({
  length: 5,
  width: 5,
  height: 5,
  edge: 5
});

const cube3 = new CubeMaker({
  length: 12,
  width: 12,
  height: 12,
  edge: 12
});

console.log("Stretch Task, Cube 1 Volume:", cube.volume());// 3 cubed is 27
console.log("Stretch Task, Cube 1 Surface Area:", cube.surfaceArea()); //6 times 3 squared is 54

console.log("Stretch Task, Cube 2 Volume:", cube2.volume()); //5 cubed is 125
console.log("Stretch Task, Cube 2 Surface Area:", cube2.surfaceArea());//6 times 5 squared is 150

console.log("Stretch Task, Cube 3 Volume:", cube3.volume()); //12 cubed is 1728
console.log("Stretch Task, Cube 3 Surface Area:", cube3.surfaceArea());//6 times 12 squared is 864


  /* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
  function foo(){
    console.log('its working');
    return 'bar';
  }
  foo();
  module.exports = {
    foo,
    summation,
    animalNames,
    lowerCaseNames,
    lowPopulationAnimals,
    USApop,
    consume, 
    add,
    multiply,
    greeting,
    CuboidMaker,
    CuboidMakerTwo
  }
