console.log("Hello World!\n==========\n");

  //Exercise 1 Section
  for (let i = 0; i < 100; i++) {
   if (i % 2 == 0) {
     continue;
   } else {
     console.log(i);
   }
 }

 // Exercise 2 Section

 for (let i = 1; i < 100; i++) {
   if (i % 3 == 0 && i % 5 == 0) {
     console.log("FIZZBUZZ");
   } else {
     if (i % 3 == 0) {
       console.log("FIZZ");
     }

     if (i % 5 == 0) {
       console.log("BUZZ");
     }
   }
 }
// Exercise 3 

//as while loop

 let i = 1; 

  while (i <= 100){
     console.log(i);
     i +=2;
 }

// //dowhile loops rewrite 

 i = 1; 

 do {
     console.log(i);
     i+=2;
 } while (i <= 100);

let j = 1; 

while (j <= 100){ 
    if (j % 3 == 0 && j % 5 == 0){
        console.log(j, "FIZZBUZZ");
    } else if (j % 3 == 0){
        console.log(j, "FIZZ");
    } else if (j % 5 == 0){
        console.log (j, "BUZZ");
    }
    
    j++;
} 


j = 1; 
do {
    if (j % 3 == 0 && j % 5 == 0){
    console.log("FIZZBUZZ");
} else if ( j % 3 == 0){
    console.log( j, "FIZZ");
} else if (j % 5 == 0){
    console.log( j, "BUZZ");
}

j++;
} while (j <= 100)

//excercise 4 

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

console.log(value, n);

for (let k = 0; k <= n; i++){
    if ( k == valu){
        console.log ("Found Value!");
        notFound = false; 
        break;
    } 
}

if (notFound){
    console.log("Did not find value");
}

//Exercise 5 FizzBuzz 


let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000


for (let i = start ; i <= end; i++){
    if (i % fizzDivisor == 0 && i % buzzDivisor == 0){
    console.log(i, "FIZZBUZZ");
} else if (i % fizzDivisor == 0){
    console.log(i, "FIZZ");
} else if ((!i % buzzDivisor)){

}

}

console.log(fizzDivisor, buzzDivisor); 