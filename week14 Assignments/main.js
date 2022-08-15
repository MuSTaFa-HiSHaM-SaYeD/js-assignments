// // js assignments on Lessons: 102-110 // //

////////////////////////////////////////////////
// Assignment 1

// 8:30-9:04

// let range = prompt("Print Number From - To ", "Example: 5-20" );
// printRange(range);

// function printRange(range){
//     if(!!range){
//         range=range.trim();
//         range=range.split("-");
//         if (range.length !== 2 ){
//             console.log("Bad input");
//         }
//         else{

//             let big, small;
//             if(+range[0] >= +range[1]){
//                 big=+range[0];
//                 small=+range[1];
//             }
//             else{
//                 big=+range[1];
//                 small=+range[0];
//             }

//             for(let i =small; i <= big;i++){
//                 console.log(i);
//             }

//         }
//     }
// }

////////////////////////////////////////////////
// Assignment 2
// 02:00 - 02:58
// window.onload=
// setTimeout(function(){
//     console.log(5);
//     window.open("pop.html","_blank","width=450,height=400,left=200,top=100");
// }, 5000);

////////////////////////////////////////////////
// Assignment 3
// 8:15 - 8:26

// let div = document.createElement("div");
// div.textContent="10";

// document.body.appendChild(div);

// let counter = setInterval(
//     function(){
//         div.textContent-=1;
//         if(div.textContent == 0)
//             clearInterval(counter);
//     }
// ,1000);

////////////////////////////////////////////////
// Assignment 4
// 8:26 -

// let div = document.createElement("div");
// div.textContent = "10";
// document.body.appendChild(div);

// let counter = setInterval(countDown, 1000, div);

// function countDown(div) {
//   div.textContent -= 1;
//   if (div.textContent == 0) {
//     // location.href = "https://Elzero.org/";
//   }
// }

////////////////////////////////////////////////
// Assignment 5
// -> 8:47

// let div = document.createElement("div");
// div.textContent = "10";
// document.body.appendChild(div);

// let counter = setInterval(countDown, 1000, div);

// function countDown(div) {
//   div.textContent -= 2;
//   if (div.textContent == 0) {
//     window.open("https://Elzero.org/","_blank","width=600,height=600,left=300");
//     clearInterval(counter);
//   }
// }