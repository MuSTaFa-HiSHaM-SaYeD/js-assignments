
// // js assignments on Lessons: 40-47 // //

////////////////////////////////////////////////
// // Assignment 1

// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;

// myFriends.splice(num);
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// myFriends.pop();
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

////////////////////////////////////////////////
// Assignment 2

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.pop();
friends.shift();
console.log(friends); // ["Eman", "Osama"]

////////////////////////////////////////////////
// Assignment 3

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr=finalArr.concat(arrOne,arrTwo).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

////////////////////////////////////////////////
// Assignment 4

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words.reverse()[0][0].slice(website.length).toUpperCase()); // ZERO

////////////////////////////////////////////////
// Assignment 5

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if(haystack.includes(needle))
{
    console.log("Found");
}

haystack.indexOf(needle) !==-1 ? console.log("Found") :console.log("NOT Found") ;

haystack.lastIndexOf(needle) !==-1 ? console.log("Found") :console.log("NOT Found") ;

////////////////////////////////////////////////
// Assignment 6

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = allArrs.concat(arr2.pop(),arr2.pop(),arr1.pop()).sort().join("").toLowerCase();
console.log(allArrs); // fxy