console.log('abc');

//console.error
console.error("jmn");

//console.warn
console.warn("here my assignmnet");

//console.clear
//console.clear()
//console.table

// console.table() method 
console.table({'a':1, 'b':2}); 

//console.count
// console.count() method 
for(let i=0;i<5;i++){ 
    console.count(i); 
} 
// console.group() and console.groupEnd()
console.group('simple'); 
  console.warn('warning!'); 
  console.error('error here'); 
  console.log('vivi vini vici'); 
console.groupEnd('simple'); 
console.log('new section'); 