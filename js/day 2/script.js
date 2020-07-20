var a= prompt("enter your age");
console.log(a);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.pop());

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.push("Kiwi"));

var fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0]; 
console.log(fruit[0]);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys); 
console.log(myChildren);

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1);
console.log(citrus);