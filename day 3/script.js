let num=prompt("enter your number");
console.log(num%2==0?"even number":"number is odd");


var a=prompt("enter your Os   and version");
var s=a.split(" ");
console.log(`The OS name is ${s[0]} and version is ${s[1]}`);


let grade=prompt("enter your marks you got in english");
/*
 if(grade>90)
console.log("A");
else if(grade>80)
console.log("B");
else if(grade>70)
console.log("C");
else console.log("D");
*/


//using switch

switch(grade){
    case 100: 
            console.log("A");
            break;
    case 90: 
             console.log("B");
             break;
    case 80: 
            console.log("C");
           break;
    default: console.log("D");
          break;
}