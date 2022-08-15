
// // js assignments on Lessons: 57-63 // //

////////////////////////////////////////////////
// // Assignment 1

// function sayHello(theName, theGender) {
//     // Your Code Here
//         theGender = 
//     theGender === "Male"   ? "Mr "   :
//     theGender === "Female" ? "Miss " :
//             "";

//     console.log(`Hello ${theGender}${theName}`);
//   }
  
//   // Needed Output
//   sayHello("Osama", "Male"); // "Hello Mr Osama"
//   sayHello("Eman", "Female"); // "Hello Miss Eman"
//   sayHello("Sameh"); // "Hello Sameh"

////////////////////////////////////////////////
// // Assignment 2

// function calculate(firstNum, secondNum, operation) {
    
//     if( secondNum === undefined)
//     {
//         console.log("Second Number Not Found"); 
//         return; 
//     }

//     switch(operation)
//     {
//         case "add":
//         case undefined:
//             console.log(firstNum + secondNum);
//             break;
//         case "subtract":
//             console.log(firstNum - secondNum);
//             break;
//         case "multiply":
//             console.log(firstNum * secondNum);
//             break;
//     }
// }
  
//   // Needed Output
//   calculate(20); // Second Number Not Found
//   calculate(20, 30); // 50
//   calculate(20, 30, 'add'); // 50
//   calculate(20, 30, 'subtract'); // -10
//   calculate(20, 30, 'multiply'); // 600

// ////////////////////////////////////////////////
// // Assignment 3

// function ageInTime(theAge) {
//     // Your Code Here
//     theAge > 10 && theAge <100 ? console.log(theAge*12+" Months\n" , theAge*12*4+" Weeks\n",theAge*12*4*7+" Days\n",theAge*12*4*7*24+" Hours\n",theAge*12*4*7*24*60*60+" Seconds\n" ):console.log("Age Out Of Range");
//   }
  
//   // Needed Output
//   ageInTime(110); // Age Out Of Range
//   ageInTime(38); // Months Example => 456 Months

////////////////////////////////////////////////
// // Assignment 4

// function checkStatus(a,b,c)
// {
//         let name = 
//     typeof a === "string" ? a :
//     typeof b === "string" ? b : 
//     typeof c === "string" ? c : 
//         "No Name Provided";

//         let age =
//     typeof a === "number" ? a :
//     typeof b === "number" ? b : 
//     typeof c === "number" ? c : 
//         "No Age Provided";
  
//         let statue = 
//     typeof a === "boolean" ? a :
//     typeof b === "boolean" ? b : 
//     typeof c === "boolean" ? c : 
//         "No Statue Provided";

//     statue = statue === true ? "Are" : "Are Not";

//     console.log(`Hello ${name}, Your Age Is ${age}, You ${statue} Available For Hire`);
        
// }

// checkStatus("Osama", 38, true); // Hello Osama, Your Age Is 38, You Are Available For Hire 
// checkStatus(38 , "Osama",true); // Hello Osama, Your Age Is 38, You Are Available For Hire
// checkStatus(true, 38, "Osama"); // Hello Osama, Your Age Is 38, You Are Available For Hire
// checkStatus(false,"Osama", 38); // Hello Osama, Your Age Is 38, You Are Not Available For Hire

////////////////////////////////////////////////
// // Assignment 5

// function createSelectBox(startYear, endYear) {
//     // Your Code Here
//     document.write(`<select>`);
//     for(startYear;startYear<=endYear;startYear++)
//     {
//         document.write(`<option value="${startYear}">${startYear}</option>`);
//     }
//     document.write(`</select>`);
// }

// createSelectBox(2000, 2021);

//   ////////////////////////////////////////////////
// // Assignment 6

// function multiply(...nums)
// {
//     let result  = 1;
//     for(let i=0;i<nums.length;i++)
//     {
//         if(typeof nums[i] == "number")
//         {
//             result *= parseInt(nums[i]);
//         }
//     }

//     console.log(result);
// }

// multiply(10, 20); // 200
// multiply("A", 10, 30); // 300
// multiply(100.5, 10, "B"); // 1000