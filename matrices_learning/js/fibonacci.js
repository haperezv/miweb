/**
 * number = 200
 * n1 = 1
 * n2 = 1
 * nextTerm = 2
 */

  

// program to generate fibonacci series up to a certain number

// take input from the user
const number = parseInt(prompt('Enter a positive number: '));
//let n1 = 0, n2 = 1, nextTerm;
let fibo =[0,1]
let data = [];

console.log('Fibonacci Series:');
//console.log(n1); // print 0
//console.log(n2); // print 1

//nextTerm = n1 + n2;

for (let i = 2; i <= number; i++) {
    
    fibo[i] = fibo[i - 1] + fibo[i - 2];
    

    data.push(fibo[i]);
}

console.log(data);

/*
while (nextTerm <= number) {

    // print the next term
    console.log(nextTerm);

    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}
*/


