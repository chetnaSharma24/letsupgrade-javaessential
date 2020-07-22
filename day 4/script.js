for(let i=0;i<100;i++){
  if(i%3==0)
  console.log("fizz");
  if(i%5==0)
  {
      console.log("buzz");
  }
  if(i%3==0&&i%5==0){
      console.log("buzzfizz");
  }
}

const student ={
    name:"Helesinki",
    age:24,
    projects:{
        dicegame: "two player dice game using java script"
    }
}
//q2
const{name,age,projects}=student;
console.log(name,age,projects.dicegame);
//q3

var arr={
    productname:"asdf",
    qty:23,
}
var a={
    ...arr,
    price:30,
}
console.log(a);
//q4

let num=10;
let num2=5;
let operator=prompt("enter operator");
switch(operator){
    case '+' : console.log(num+num2);
               break;
    case '-': console.log(num-num2);
               break;
    case '*' : console.log(num*num2);
               break;
    case '**' : console.log(num ** num2);
              break;
    default: console.log("0");
}

//q5
let salary=2000; let profit=20001;
if(profit>=20000)
console.log(salary+salary*20/100);
if(profit<20000)
console.log(salary+salary*7/100);
if(profit<10000)
console.log(salary+salary*5/100);
if(profit<5000)
console.log(salary+salary*2/100);


//q6
for(let i=0;i<3;i++)
 {
    
 let nums=prompt("enter number greater then 100");
  if(nums<100)
 prompt("enter again");
 }

//q7
var enterNumber = prompt("Enter  number: ");

for(var i=2; i<=enterNumber ;i++){

        var isPrime = true;

        for(var j=2; j<i; j++){
            if(i%j === 0 && i !== j){
                isPrime = false;
            }
        }
        if(isPrime === true){
            console.log(i);
        }
    }

//q8
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);
