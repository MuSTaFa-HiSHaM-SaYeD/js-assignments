// window.onload= function()
// {
// document.querySelector("h1").style.color = "red";

// }

// window.alert("Hello my friend to my website this is my first alert");
// console.log("Hey Consol that's meee !!");
// document.write("<h2> this is h2 haha </h2>");
// document.querySelector("h2").style.textAlign="center";

// console.error("this is not real error");
// console.warn("this is not real warning");
// console.log("Hello from \n %cjs %c file","color:blue; font-size:40px;","color:red; font-size:40px;");
// console.table(["hello","my","friend"]);

// ES6  = "EcmaScript"
// (consol.log):
// let name = "Mostafa Hesham";
// console.log(`Hello ${name}`); // replace " " with ` `

// name = "My friend";
// console.log(`Hello ${name}`); // replace " " with ` `

// console.log("name is a " + typeof name);       //string
// console.log("[12,12,45,45,78,78] is a " + typeof [12,12,45,45,78,78]); //array
// console.log("\"bolo\" is a " + typeof "bolo");  // string
// console.log("100 is a" + typeof 100);  // number
// console.log("1000.111 is a " + typeof 1000.111);  // number
// console.log("{name:\"mostafa\", age:20, city:\"Cairo\"} is a " + typeof {name:"mostafa", age:20, city:"Cairo"});  //object (student object) :)
// console.log("true is a " + typeof true);  // boolean
// console.log("false is a " + typeof false);  // boolean
// console.log("undefined is a "+typeof undefined);  // number
// console.log("null is a " + typeof null);  // object
// enough typeof operator

// escape operator "/"
// console.log("print escape operator \\ ");   //( \\ for \, \\\\ for \\, ...) 2*\
// console.log('print escape operator "\\" '); // "\"
// console.log("print escape operator '\\' "); // '\'

// console.log(
// "Mostafa \
// hesham \
// sayed \
// ");

//////           (var) vs (let) vs (const)        /////

//                   // (var) //
// redeclare                 = (yes with no error)
// access before declaration = (yes with no error)
// variable scope drama      = (it added to window object as attribute or variable )
//                             (you can access it directly with the variable name from consol or from window object too )
// block or function scope   = ?? "We dont know yet"

//                  // (let) //
// redeclare                 = (give an error) (that's better to avoid a lot of problems later)
// access before declaration = (give an error)
// variable scope drama      = (doesn't added to window object like var)
// block or function scope   = ?? "We dont know yet"

//                  // (const) //
// redeclare                 = (give an error) (that's better to avoid a lot of problems later)
// access before declaration = (give an error)
// variable scope drama      = (doesn't added to window object like var)
// block or function scope   = ?? "We dont know yet"

////////////////////////////////////////////////////
// Template String

// let a = "we";
// let b = "love";
// let c = "java";
// let d = "script";

// // legacy code
// console.log(a  + " \"\"  ''  \\ " +  b + "\n" +
// c + " " +  d);

// // in ES6
//   console.log(`${a} "" '' \\ ${b} ${c} ${d}`);

// let title = "El Zero";
// let paragraph = "El Zero Web School";
// let markup = `
//   <div class="card">
//     <div class = "child">
//         <h2 style="text-align:center;"> ${title} </h2>
//         <p style="text-align:center;"> ${paragraph} </p>
//     </div>
//   </div>
// `;

// document.write(markup);
///////////////////////////////////////////////
// video 17 (challenge)

// let cardTitle = "Elzero", cardDescription="Elzero Web School", cardDate= "25/10";
// let cardTemplate=`
// <div class="card">
//     <h3>Hello ${cardTitle}</h3>
//     <p>${cardDescription}</p>
//     <span>${cardDate}</span>
// </div>
// `;

// document.write(cardTemplate.repeat(4));

////////////////////////////////////
// Arithmetic operators

// console.log(10 + 20);  // 30
// console.log(10 - 20); // -10

// console.log(10 + "Mostafa"); // 10Mostafa
// console.log(10 - "Mostafa"); // NaN ="Not a Number"
// console.log(typeof NaN); // number ??!! ( Wired! (: )

// console.log(10 * 2); // 20
// console.log(10 ** 2); // 100  // ** = power

///////////////////////////////////////
// Unary Operation  + -

// console.log(+"100"); // 100
// console.log(+"-100"); // -100
// console.log(+"mohamed"); // NaN

// console.log(-"100"); // -100
// console.log(-"-100"); // 100
// console.log(-"Mohamed"); // NaN

// console.log(+0xff); // 255
// console.log(-0xff); // -255

// console.log(+true); // 1
// console.log(+false); // 0
// console.log(+null); // 0
// console.log(+NaN); // NaN

// console.log(-true); // -1
// console.log(-false); // -0
// console.log(-null); // -0
// console.log(-NaN); // NaN

// // we can use constructor called number
// // instead of + (the unary plus)
// console.log(Number("-100")); // -100
// console.log(Number("100"));  //  100

////////////////////////////////////////////
//operators challenges

// // challenge 1
// let a = 10;
// let b = "20";
// let c = 80;

// console.log(++a + +b++ + +c++ - +a++);
// console.log(++a + -b + +c++ - -a++ + +a);
// console.log(--c  + +b + --a * +b++ - +b * a + --a - +true);

/* ==[3]==
--> a = 14, b = "21", c = 82   

[--c] + [+b] + [--a] * [+b++] - [+b] * [a] + [--a] - [+true]
  81  +  21  +  13   *   21   -  22  *  13  + 12   - 1 = 
  102  +  273 - 286 + 11 = 375 + 11 - 286 = 386 - 286 = 100
  a= 13, c=81, b=22
*/

/* ==[2]==
--> a = 12, b = "21", c = 81   

[++a] + [-b] + [+c++] - [-a++] + [+a]
  13  +  -21 +  81    -  -13   +  14   = 100
  a= 14, c=82


/*  ==[1]==
    [++a ] +   // 11 
    [+b++] +   // 20
    [+c++] -   // 80
    [+a++]     // 11 
    --> 11 + 20 + 80 -11 = 100
    --> a = 12, b = 21, c = 81 
*/

// // challenge 2
// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true ;

// // only use variables value
// // don't use variable twice

// console.log(-d * +e ); // 2000
// console.log(++g * ++e + -d + ++f); //173

//////////////////////////////////////////////////////////////////////////////////////
// //Number challenge

// let a = 100;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;

// // Find Smallest Number In All Variables And Return Integer
// console.log(Math.trunc(Math.min(a,b,c,d))); // 2

// // Use Variables a + d One Time To Get The Needed Output
// console.log(Math.pow(a, Math.floor(d))); // 10000

// // Get Integer "2" From d=2.4 Variable With 4 Methods
// console.log(Math.floor(d)); // 2
// console.log(Math.round(d)); // 2
// console.log(Math.trunc(d)); // 2
// console.log(+d.toFixed()); // 2
// console.log(parseInt(d)); // 2

// // Use Variables b=200.5 + d=2.4 To Get This Valus
// console.log((Math.trunc(b)/Math.ceil(d)).toFixed(2)); // 66.67 => String
// console.log(parseInt((Math.trunc(b)/Math.ceil(d)).toFixed())); // 67 => Number

//////////////////////////////////////////////////////////////////////////////////////
// //String challenge

// let a = "Elzero Web School";

// // Include This Method In Your Solution [slice, charAt]
// console.log(`${a.charAt(2).toUpperCase()}${a.slice(3,6)}`); // Zero

// // 8 H
// console.log(a.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH

// // Return Array
// console.log(a.split(" ",1)); // ["Elzero"]

// // Use Only "substr" Method + Template Literals In Your Solution
// console.log(`${a.substr(0,6)} ${a.substr(11,6)}`); // Elzero School

// // Solution Must Be Dynamic Because String May Changes
// console.log(`${a.charAt(0).toLowerCase()}${a.substring(1,a.length-1).toUpperCase()}${a.substr(-1).toLowerCase()}`); // eLZERO WEB SCHOOl

//////////////////////////////////////////////////////////////////////////////////////
// //  If Condition Challenge

// let st = "Elzero Web School";

// if (st.toLowerCase().charAt(st.toLowerCase().indexOf('w')) === "w") {
//   console.log("Good");
// }

// if (st.charAt(st.indexOf('W')).toLowerCase() === "w") {
//   console.log("Good");
// }

// if( st !== "string") {
//   console.log("Good");
// }

// if (typeof(st.length) === "number") {
//   console.log("Good");
// }

// if (st.split(' ')[0].repeat(2) === "ElzeroElzero") {
//   console.log("Good");
// }
// if (st.substring(0,6).repeat(2) === "ElzeroElzero") {
//   console.log("Good");
// }
// if (st.substr(0,6).repeat(2) === "ElzeroElzero") {
//   console.log("Good");
// }
// if (st.slice(0,6).repeat(2) === "ElzeroElzero") {
//   console.log("Good");
// }

//////////////////////////////////////////////////////////////////////////////////////
// // Switch challenge

// let job = "Manager";
// let salary = 0;

// switch (job)
// {
//   case "Manager":
//   salary = 8000;
//   break;

//   case "IT":
//   case "Support":
//   salary = 6000;
//   break;

//   case "Developer":
//   case "Designer":
//   salary = 7000;
//   break;

//   default:
//     salary = 4000;
//     break;
// }
// console.log(salary)

// let holidays = 0;
// let money = 0;

// if(holidays === 0 )
//     money = 5000;

// else if (holidays === 1 || holidays === 2)
//     money = 3000;

// else if (holidays === 3)
//     money = 2000;

// else if (holidays === 2)
//     money = 1000;

// else
//     money = 0;

// console.log(`My Money is ${money}`);

//////////////////////////////////////////////////////////////////////////////////////
// // // Array Methods challenge

// let zero = 0;
// let counter = 3;
// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// // my.splice(++counter,counter);
// // my=my.reverse();

// my = my.slice(zero,++counter).reverse();
// console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

// console.log(my.slice(++zero,--counter)); // ["Elham", "Mazero"]

// console.log(`${my[zero].slice(--zero,--counter)}${my[counter].slice((counter))}`); // "Elzero"

// console.log(my[counter][my.length]+my[zero][zero]); // "rO"

//////////////////////////////////////////////////////////////////////////////////////
// // Loop challenge

// let myAdmins = ["Ahmed","Osama","Sayed","Stop","Samera"];
// let myEmployees = ["Amgad","Samah","Ameer","Omar","Othman","Amany","Samia",];

// document.write(`We Have ${myAdmins.indexOf("Stop")} Admins`);

// for(let i = 0 ;myAdmins[i]!=="Stop" ;i++)
// {
//   document.write(`<hr>`);
//   document.write(`<div>The Admin For Team ${i+1} Is ${myAdmins[i]}`);
//   document.write(`<h3>Team Members:</h3>`);

//   for(let j =0, k=1 ; j < myEmployees.length ;j++ )
//     if(myEmployees[j][0]===myAdmins[i][0])
//       document.write(`<p> - ${k++} ${myEmployees[j]}</p>`);

//   document.write(`</div>`);
// }

//////////////////////////////////////////////////////////////////////////////////////
// // Function challenge {Random Arguments Function}

// function showDetails(p1,p2,p3)
// {
//         let name =
//     typeof p1 === "string" ? p1 :
//     typeof p2 === "string" ? p2 :
//     typeof p3 === "string" ? p3 :
//         "No Name Provided";

//         let age =
//     typeof p1 === "number" ? p1 :
//     typeof p2 === "number" ? p2 :
//     typeof p3 === "number" ? p3 :
//         "No Age Provided";

//         let statue =
//     typeof p1 === "boolean" ? p1 :
//     typeof p2 === "boolean" ? p2 :
//     typeof p3 === "boolean" ? p3 :
//         "No Statue Provided";

//     statue = statue === true ? "Are" : "Are Not";

//     console.log(`Hello ${name}, Your Age Is ${age}, You ${statue} Available For Hire`);

// }

// showDetails("Osama", 38, true); // Hello Osama, Your Age Is 38, You Are Available For Hire
// showDetails(38 , "Osama",true); // Hello Osama, Your Age Is 38, You Are Available For Hire
// showDetails(true, 38, "Osama"); // Hello Osama, Your Age Is 38, You Are Available For Hire
// showDetails(false,"Osama", 38); // Hello Osama, Your Age Is 38, You Are Not Available For Hire

//////////////////////////////////////////////////////////////////////////////////////
// (2) Arrow & Regular Function challenges

// 1st challenge: Convert From (Regular) to (Arrow)

// (1) The Regular (Anonymous) Function
// let names = function (...pNames){
//   return `String [${pNames.join("], [")}] => Done !`;
// }
// console.log(names("Osama","Mohamed","Ali","Ibrahim"));

// // (1) The Equivalent (Arrow Function)
// let names = (...pNames) => `String [${pNames.join("], [")}] => Done !`;
// console.log(names("Osama","Mohamed","Ali","Ibrahim"));

/* =========================================*/

// 2nd challenge: Convert From (Arrow) to (Regular)

// let myNumbers = [20,50,10,60];

// // (2) The Arrow Function

// let calc = (one,two,...nums) => +`${one+two+nums.shift()}`;

// // (2) The Equivalent (Regular {Anonymous} Function)

// let calc = function (one,two,...nums)
// {
//   return +`${one+two+nums.shift()}`
// };

// console.log(calc(10,myNumbers.shift(),myNumbers.shift(),myNumbers.pop(),myNumbers.pop()));

//////////////////////////////////////////////////////////////////////////////////////
// // Higher Order Functions – Challenge

// // still not finished!! (You used one twice!)

// let myString = "1,2,3,EE,l,z,e,r,o,_,w,e,b,_,s,c,h,o,o,l,2,0,Z";

// let solution = myString.split(",").filter(_=> ( (isNaN(parseInt(_) )) && ( (_ === _.toLowerCase()) || (_.length>1) )  ) ).map(ele => ele[ele.length-true]).reduce((acc,ele)=> acc + (ele === "_" ? " ": ele) );

// console.log(solution); // Elzero web school

//////////////////////////////////////////////////////////////////////////////////////
// Object Challenge

//////////////////////////////////////////////////////////////////////////////////////
// // Product with title and description practice

// let product = document.createElement("div");

// product.className="product";

// document.body.appendChild(product);

// const count = 10;
// for(let i = 0 ;i < count;i++)
// {
//   let productHeading = document.createElement("h2");
//   let productDescription = document.createElement("p");

//   // productHeading.textContent = `Product[${i+1}] Heading`;
//   // productDescription.textContent = `Product[${i+1}] description`;

//   let productHeadingText = document.createTextNode(`Product [${i+1}] Heading`);
//   let productDescriptionText = document.createTextNode(`Product [${i+1}] Description`);

//   productHeading.appendChild(productHeadingText);
//   productDescription.appendChild(productDescriptionText);

//   product.appendChild(productHeading);
//   product.appendChild(productDescription);
// }

// console.log(product);

//////////////////////////////////////////////////////////////////////////////////////
// // DOM Challenge

// document.body.style.backgroundColor = "rgb(245,245,245)";

// // create header
// let header = document.createElement("header");

// header.setAttribute("class", "website-head");
// header.style.cssText =
//   "padding:20px; background-color: white; align-items: center; justify-content: space-between; display:flex;";

//   // create logo
//   let logo = document.createElement("div");
  
//   logo.setAttribute("class", "logo");
//   logo.textContent = "Elzero";
//   logo.title = "Website Logo";
//   logo.style.cssText =
//   "font-weight:bold; color: rgb(35,169,110); font-size:26px;";
  
//   header.appendChild(logo);

//   // create menu 
//   let menu = document.createElement("ul");
  
//   menu.className = "menu";
//   menu.style.cssText = 
//     "padding:0px; margin:0px; display:flex; list-style:none; ";
  
//   // create menu items
//   arr = [" Home ", " About ", " Service ", " Contact "];
//   for (let i = 0; i < 4; i++) {
//     let li = document.createElement("li");
//     li.style.marginRight = "8px";
//     li.className = "li";
//     li.textContent = arr[i];
//     menu.appendChild(li);
//   }

//   header.appendChild(menu);


// document.body.appendChild(header);

// // content
// let contentDiv = document.createElement("div");
// contentDiv.className = "content";
// contentDiv.style.cssText =
//   "display:flex; padding:20px; flex-wrap:wrap; justify-content:center; gap:20px; min-height:calc(100vh - 142pxx); box-sizing:border-box;";

//   // create products
//   for (let i = 0; i < 15; i++) {
//     let product = document.createElement("div");
//     product.className = "product";
//     product.style.cssText =
//       "padding:20px; background-color: rgb(255,255,255); border: 1px solid rgp(221,221,221); width: calc((100% - 40px) / 3); box-sizing: border-box; text-align: center; color:rgb(136,136,136); border-radius: 6px;";
    
      
//     let numSpan = document.createElement("span");
//     numSpan.style.cssText =
//     "font-size:40px; color:black; font-weight:normal; display: block; margin-bottom:10px; margin-top:10px;";

//     let productNum = document.createTextNode(`${i + 1}`);
//     numSpan.appendChild(productNum);
  
//     let productName = document.createTextNode(`Product`);
  
//     product.appendChild(numSpan);
//     product.appendChild(document.createElement("br"));
//     product.appendChild(productName);
  
//     contentDiv.appendChild(product);
//   }

// document.body.appendChild(contentDiv);

// // footer
// let footer = document.createElement("footer");
// footer.className = "footer";
// footer.style.cssText =
//   "background-color: rgb(35,169,110); font-size:26px; text-align: center; padding: 20px; color:white;";
// footer.textContent = "Copyright 2022";

// document.body.appendChild(footer);

