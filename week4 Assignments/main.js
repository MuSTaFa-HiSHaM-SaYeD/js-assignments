
// // js assignments on Lessons: 23-26 // // 

////////////////////////////////////////////////

// // assignment 1
// // Examples
// // console.log(100_000); // 100000
// // console.log(100000); // 100000
// // console.log(5e4 + 5e4); // 100000

// // Your Solutions
// console.log(100_000); // 100000
// console.log(1e5); // 100000
// console.log(50_000+50_000); // 100000
// console.log(100*1000); // 100000
// console.log(Math.pow(10,5 )); // 100000
// console.log(1e6 / 1e1); // 100000
// console.log(10**5); // 100000
// console.log(Math.round(10.000005 ** 5)); // 100000
// console.log(Math.floor(10.00001*1e4)); // 100000
// console.log(Math.ceil(9.99999**5)); // 100000
// console.log(Math.trunc(100_000.99)); //100_000
// console.log(Math.min(1e6,2e6,1e5,2e5,10**10)); //100_000
// console.log(Math.max(4e4,3e3,1e5,10_000)); // 100_000

////////////////////////////////////////////////
// // assignment 2
// console.log(-Number.MIN_SAFE_INTEGER);

////////////////////////////////////////////////
// // assignment 3
// console.log(Number.MAX_SAFE_INTEGER.toFixed().length);

////////////////////////////////////////////////
// // assignment 4
// let myVar = "100.56789 Views";

// console.log(parseInt(myVar)); // 100
// console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57

////////////////////////////////////////////////
// // assignment 5

// let num = 10;

// console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

////////////////////////////////////////////////
// // assignment 6
// let flt = 10.4;

// console.log(Math.round(flt)); // 10
// console.log(Math.floor(flt)); // 10
// console.log(Math.trunc(flt)); // 10
// console.log(+flt.toFixed()); // 10
// console.log(parseInt(flt)); // 10

////////////////////////////////////////////////
// // assignment 7

// console.log(Math.floor(Math.random() * 100) % 5 ); // 0 || 1 || 2 || 3 || 4

////////////////////////////////////////////////////////////

// // js assignments on Lessons: 27-30 // //

//////////////////////////////////////////////////
// // assignment 1

// let userName = "Elzero";
// console.log(userName[0].toLowerCase()); // e
// console.log(userName.charAt(0).toLowerCase()); // e
// console.log(userName.slice(0,1).toLowerCase()); // e
// console.log(userName.substring(0,1).toLowerCase()); // e
// console.log(userName.substr(0,1).toLowerCase()); // e
// console.log(userName.split('l',1)[0].toLowerCase().repeat(3)); // eee
// console.log(userName.split('l')[0].toLowerCase().repeat(3)); // eee
// console.log(userName.split('',1)[0].toLowerCase().repeat(3)); // eee
// console.log(userName.split('')[0].toLowerCase().repeat(3)); // eee


//////////////////////////////////////////////////
// // assignment 2

// let word = "Elzero";
// let letterZ = "z";
// let letterE = "e";
// let letterO = "O";

// console.log(word.includes(letterZ)); // True
// console.log(word.startsWith(letterE.toUpperCase())); // True
// console.log(word.endsWith(letterO.toLowerCase())); // True