// Your task:
// 1. Write code to create a text file called "ex3.txt" in current directory
// 2. Write text: "Hello jaktestowac.pl!" to file "ex3.txt"
// 3. Write code to read content of created file "ex3.txt"
// 4. Display content of that file on console.


// to test your solution in terminal You can run following command:
// npm run es3e3

//// TODO:
// here place your solution:


import { writeFileSync, readFileSync } from 'fs'; 

writeFileSync('ex3.txt', 'Hello jaktestowac.pl!');

const content = readFileSync('ex3.txt', 'utf-8');


console.log(content);






//// DONT MODIFY CODE BELOW!
// Here You will find expected result of exercise and verification!


// Expected output:
// Hello jaktestowac.pl!