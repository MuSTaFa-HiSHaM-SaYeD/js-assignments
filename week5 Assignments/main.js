
// // js assignments on Lessons: 31-32 // //

////////////////////////////////////////////////
// // Assignment 1

// console.log(100 == "100"); // true
// console.log(100 !== 1000); // true
// console.log(110 !== 100 && 10 !== 20); // true
// console.log(-10 == "-10"); // true
// console.log(! (-50 == +"-40")); // true
// console.log(! (10 === -"-40")); // true
// console.log(! ("10" === 10)); // true
// console.log(! (20 < false)); // true

////////////////////////////////////////////////
// // Assignment 2

// let num1 = 10;
// let num2 = 20;

// console.log(num1 !== num2); // true
// console.log(num1 != num2); // true
// console.log(! (num1 == num2)); // true
// console.log(! (num1 === num2)); // true
// console.log(num1 < num2); // true
// console.log(num1 <= num2); // true
// console.log(!(num1 > num2)); // true
// console.log(!(num1 >= num2)); // true

////////////////////////////////////////////////
// // Assignment 3

// let a = 20;
// let b = 30;
// let c = 10;

// console.log(a > b && a === c || a < b); // true
// console.log(a < b && a > c); // true
// console.log(!(a > b) && !(a === b) && !(a == c) && !(a < c)); // true


// // js assignments on Lessons: 33-37 // //

////////////////////////////////////////////////
// // Assignment 1

// // Test Case 1
// let num = 9; // "009"

// if(num < 10)
// console.log("00"+num);

// // Test Case 2
// let num2 = 20; // "020"

// if(num2 > 10 && num2 < 100)
// console.log(`0${num2}`);

// // Test Case 3
// let num3 = 110; // "110"
// if(num3 >= 100)
// console.log(num3.toString());


////////////////////////////////////////////////
// // Assignment 2

// let num1 = 9;
// let str = "9";
// let str2 = "20";

// // Output
// if(num1 == str)
// {
//     console.log("{num1} Is The Same Value As {str}");

//     if(num1 !== str)
//         console.log("{num1} Is The Same Value As {str} But Not The Same Type");    
// }

// if(num1 != str2 && num1 !== str2)
//     console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");

// if(str != str2 && typeof str === typeof str2)
//     console.log("{str} Is The Same Type As {str2} But Not The Same Value");

////////////////////////////////////////////////
// // Assignment 3

// let num1 = 10;
// let num2 = 30;
// let num3 = "30";

// // Needed Output
// if(num3 > num1 && typeof num3 !== typeof num2)
// console.log("30 Is Larger Than 10 And Type string Not The Same Type As number")
// if(num3 > num1 && num3 ==num2 && num3 !== num2)
// console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number")
// if(num3 !== num1 && typeof num3 !== typeof num2)
// console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}")

////////////////////////////////////////////////
// // Assignment 4

// // Edit What You Want Here

// let num1 = 20;
// let num2 = 10;
// let num3 = 20;
// let num4 = 51;

// /*
//   Do Not Edit Below This Line
//   Needed Output
//   True 7 Times
// */

// // Condition 1

// if (num1 > num2) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 2

// if (num1 > num2 && num1 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 3

// if (num1 > num2 && num1 === num3) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 4

// if ((num1 + num2) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 5

// if ((num1 + num3) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 6

// if ((num1 + num2 + num3) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 7

// if (num4 - (num1 + num3) + num2 === 21) {
//   console.log("True");
// } else {
//   console.log("False");
// }


// // js assignments on Lessons:38-39 // //

////////////////////////////////////////////////
// // Assignment 1

// let day = "   mon0day  ";
// // You Need To Remove Spaces And Make First Letter Capital => Friday

// switch(day.trim().charAt(0).toUpperCase()+day.trim().substring(1))
// {
//     case "Friday"  :
//     case "Saturday":
//     case "Sunday"  :
//         console.log("No Appointments Available");
//         break;
        
//     case "Monday":
//     case "Thursday":
//         console.log("From 10:00 AM To 5:00 PM");
//         break;
        
//     case "Tuesday":
//             console.log("From 10:00 AM To 6:00 PM");
//             break;
    
//     case "Wednesday":
//             console.log("From 10:00 AM To 6:00 PM");
//             break;

//     default:
//         console.log("Its Not A Valid Day");
// }
