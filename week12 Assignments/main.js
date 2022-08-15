// // js assignments on Lessons: 86-93 // //

// // try some code
// let myLink = document.links[0];
// document.links[0].textContent="99";

// console.log(myLink);

// console.log(myLink.getAttribute("href"));
// console.log(myLink.getAttribute("alt")===null);
// document.images[0].setAttribute("alt", "NO IMG");
////////////////////////////////////////////////
// // Assignment 1

// // [4] Using "getElementsBy..."
// let myDiv = document.getElementById("elzero");
// console.log(myDiv);

// myDiv = document.getElementsByClassName("element")[0];
// console.log(myDiv);

// myDiv = document.getElementsByTagName("div")[0];
// console.log(myDiv);

// myDiv = document.getElementsByName("js")[0];
// console.log(myDiv);
// //--------------------------------------------------//
// // [4] Using "querySelector"

// myDiv = document.querySelector("div");
// console.log(myDiv);

// myDiv = document.querySelector("#elzero");
// console.log(myDiv);

// myDiv = document.querySelector(".element");
// console.log(myDiv);

// myDiv = document.querySelector("[id]");
// console.log(myDiv);

// //--------------------------------------------------//
// //[4] Using "querySelectorAll"

// myDiv = document.querySelectorAll("div")[0];
// console.log(myDiv);

// myDiv = document.querySelectorAll("#elzero")[0];
// console.log(myDiv);

// myDiv = document.querySelectorAll(".element")[0];
// console.log(myDiv);

// myDiv = document.querySelectorAll("[id]")[0];
// console.log(myDiv);

// //--------------------------------------------------//
// //[3] Using "body.children && childNodes"

// myDiv = document.body.children[0];
// console.log(myDiv);

// myDiv = document.body.childNodes[1];
// console.log(myDiv);

// myDiv = document.body.firstElementChild;
// console.log(myDiv);

////////////////////////////////////////////////
// // Assignment 2

// let myImgs = document.images;
// for(let i =0 ; i < myImgs.length;i++){
//     myImgs[i].src="https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//     myImgs[i].alt="Elzero Logo";
// }

////////////////////////////////////////////////
// // Assignment 3
// let input = document.querySelector("[name='dollar']");
// let result = document.querySelector(".result");

// input.oninput=function(){
//     let dollar = input.value;
//     let pounds = dollar * 15.6 ;
//     result.textContent = `{${dollar}} USD Dollar = {${pounds.toFixed(2)}} Egyptian Pound` ;
// };

////////////////////////////////////////////////
// Assignment 4
let temp, d1, d2;
d1 = document.querySelector(".one");
d2 = document.querySelector(".two");

temp = d1.className;
d1.className = d2.className;
d2.className = temp;

d1.textContent = `Two 2`;
d2.textContent = `One`;

// reorder.. didn't work;
// temp = d1;
// d1 = d2;
// d2 = temp;

////////////////////////////////////////////////
// Assignment 5

let imgAlt = document.images;
for (let i = 0; i < 5; i++) {
  imgAlt[i].alt = imgAlt[i].hasAttribute("alt") ? "Old" : "Elzero New";
}

////////////////////////////////////////////////
// Assignment 6

let myform = document.querySelector("#f");
let inputs = document.querySelectorAll(".input");
let create = document.querySelector("[name='create']");
let result = document.querySelector(".results");

create.addEventListener("click", function (event) {
  event.preventDefault();
  while (result.lastChild) {
    result.removeChild(result.lastChild);
  }

  for (let i = 0; i < inputs[0].value; i++) {
    let e = document.createElement(inputs[2].value.toLowerCase());
    let txt = document.createTextNode(inputs[1].value);

    e.setAttribute("class","box");
    e.setAttribute("title","Elements");
    e.setAttribute("id",`id-${i+1}`);

    e.appendChild(txt);
    result.appendChild(e);
  }
});

// create.onclick = function (event) {

//     event.preventDefault();

//     // looping option
//   while (result.lastChild) {
//     result.removeChild(result.lastChild);
//   }

//   for (let i = 0; i < inputs[0].value; i++) {
//     let e = document.createElement(inputs[2].value.toLowerCase());
//     let txt = document.createTextNode(inputs[1].value);

//     console.log(e);
//     e.appendChild(txt);
//     result.appendChild(e);
//   }

// };

console.log(
  inputs,
  create,
  result,
  document.createElement(inputs[2].value.toLowerCase()),
  myform
);
