console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let i = 1; i <= 100; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(let i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log(i, "FIZZBUZZ");
    }else if (i % 3 == 0){
        console.log(i, "FIZZ");
    }else if (i % 5 == 0){
        console.log(i, "BUZZ");
    }
}
//Exercise 3a Section
console.log("EXERCISE 3a:\n==========\n");
let i = 0;
while(i % 2 != 0 && i <= 100){
    console.log(i);
    i++;
}
let j = 0;

//Exercise 3a Section
console.log("EXERCISE 3a:\n==========\n");
let q = 0;
do{
    console.log(q);
    q++
}while(q % 2 != 0 && j <= 100);   

//Exercise 3b Section
console.log("EXERCISE 3b:\n==========\n");
let x = 0;
while(x <= 100){
    if(x % 3 == 0 && x % 5 == 0){
        console.log(x, "FIZZBUZZ");
    }else if (x % 3 == 0){
        console.log(x, "FIZZ");
    }else if (x % 5 == 0){
        console.log(x, "BUZZ");
    }
    x++;
}
//Exercise 3c Section
console.log("EXERCISE 3c:\n==========\n");
let k = o;
do{
        if(k % 3 == 0 && k % 5 == 0){
            console.log(k, "FIZZBUZZ");
        }else if (k % 3 == 0){
            console.log(k, "FIZZ");
        }else if (k % 5 == 0){
            console.log(k, "BUZZ");
        }
        x++;
}while(x <= 100)

//Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
let findValue = false;

for(let y = 0; y < n; y++){
    if(y == value){
        findValue = true;
        break;
    }
    findValue = false;
    if(findValue == true){
        console.log("Found Value!");
    }
    else{
        console.log("Did not find value!");
    }
}

//Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (1 - 10) + 1);
let buzzDivisor = Math.round(Math.random() * (1 - 10) + 1);
let t = Math.round(Math.random() * (1 - 1000) + 1);
let start = Math.round(Math.random() * (1 - 10) + 1);

for(start; start <= t; start++){
    if(start % fizzDivisor == 0 && start % buzzDivisor == 0){
        console.log(t, "FIZZBUZZ");
    }else if (start % fizzDivisor == 0){
        console.log(t, "FIZZ");
    }else if (start % buzzDivisor == 0){
        console.log(t, "BUZZ");
    }
}
