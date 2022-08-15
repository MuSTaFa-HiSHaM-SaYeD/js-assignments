let mypop  = document.createElement("div");



mypop.style.cssText= "border:solid 2px; position: relative; margin:20px; padding-bottom: 30px; background-color:gray;   align-items: center; justify-content: center; display:flex; flex-direction:column;  width:400px; hight:50px; ";

let h2 = document.createElement("h2");
h2.textContent="Welcome";

let msg = document.createTextNode("Welcome To Elzero Web School");

let clsbtn  = document.createElement("button");
clsbtn.style.cssText="cursor: pointer; position: absolute; right:-20px; top: -20px; border:none; background-color:red; color:white; border-radius:100%; padding:10px;";
clsbtn.textContent="X";
clsbtn.addEventListener("click", function(){window.close()});

mypop.appendChild(h2);
mypop.appendChild(msg);
mypop.appendChild(clsbtn);
document.body.appendChild(mypop);