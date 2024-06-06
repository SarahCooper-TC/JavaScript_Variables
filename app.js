console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
const firstName = "Sarah"; //const must be initialized and cannot be reassigned, must assign a value.
let lastName;
var age;
// Exercise 2
lastName = "Cooper";//can reassign
age = "32";//can reassign

//or 
// let lastName = "Cooper";
//  var = "age";
// Exercise 3
let language = "JavaScript";
let createdYear = "1995";
let isCaseSensitive = true;

console.log(`${language} was first released in ${createdYear}`);

// Exercise 4
let productName = "T-shirt";
let price = 19.99;
let isOnSale = false;
let salePercentage = 15;
let stock = 0;
let inStock = false;
let selectedSize = "M";

console.log(`${productName} in ${selectedSize} is ${price}`);
console.log(`There are ${stock} of ${productName} in stock`);
console.log(`${productName} is ${salePercentage} % off!`);

//Exercise 5
let title = "Name of the Wind";
let author ="Patrick Rothfuss";
let pageCount = 722;
let bookmark = 456;
let hasRead = true;

console.log(`${firstName} has read ${title} by ${author} 
which is ${pageCount} pages.`);
console.log(`${firstName} ${lastName} has read ${title}: ${hasRead}`);
console.log(`${firstName}, your last bookmark was on page ${bookmark}`);