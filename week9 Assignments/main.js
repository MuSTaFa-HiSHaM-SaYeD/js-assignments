
// // // js assignments on Lessons: 64-70 // //

// ////////////////////////////////////////////////
// // Assignment 1

// function getDetails(zName, zAge, zCountry) {
//     function namePattern(zName) {
//       // Write Your Code Here
//     zName = zName.split(" ");
//     zName = zName[0]+" "+zName[1][0].toUpperCase()+".";
//     return zName;
//     // Osama Mohamed => Osama M.
//       // Ahmed ali => Ahmed A.
//     }
//     function ageWithMessage(zAge) {
//         return `Your Age Is ${parseInt(zAge)}`
//       // Write Your Code Here
//       // 38 Is My Age => Your Age Is 38
//       // 32 Is The Age => Your Age Is 32
//     }
//     function countryTwoLetters(zCountry) {
//       // Write Your Code Here
//         return `You Live In ${zCountry.substring(0,2).toUpperCase()}`;
//       // Egypt => You Live In EG
//       // Syria => You Live In SY
//     }
//     function fullDetails() {
//       // Write Your Code Here
//         return `${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`
//     }
//     return fullDetails(); // Do Not Edit This
//   }

//   console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
//   // Hello Osama M., Your Age Is 38, You Live In EG
  
//   console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
//   // Hello Ahmed A., Your Age Is 32, You Live In SY

// ////////////////////////////////////////////////
// // Assignment 2

// let itsMe = _ => `Iam A Normal Function`;  
// console.log(itsMe()); // Iam A Normal Function

// let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
// console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// ////////////////////////////////////////////////
// // Assignment 3

// let checker = (zName, status,salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

// console.log(checker("Osama","Available",4000)); // Osama, My Salary Is 4000
// console.log(checker("Ahmed","Not Available")); // Iam Not Avaialble

// ////////////////////////////////////////////////
// // Assignment 4

// function specialMix(...data) {
//   // Your Code Here 
//   let result = 0 ;
//   for (const s of data) {
//     result += parseInt(s) || 0; // (||) or (|) both works!
//   }

//   result===0 ?  result = "All Is Strings":"";
//   return result;
// }

// console.log(specialMix(10, 20, 30)); // 60
// console.log(specialMix("10Test", "Testing", "20Cool")); // 30
// console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
// console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
