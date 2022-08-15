let classList = document.querySelector(".element");
let resultList = document.querySelector("h5").nextElementSibling;
    resultList.style.cssText =
    "display:flex; flex-wrap:wrap; flex-direction: row; justify-content: center; align-items: center; ";

let ToAddFiled = document.querySelector(".classes-to-add");
let ToRemoveFiled = document.querySelector(".classes-to-remove");

function showClassesList() {
  resultList.textContent = "";
  let l = Array.from(classList.classList).sort();
  for (let i = 0; i < l.length; i++) {
    let className = document.createTextNode(l[i]);
    let classDiv = document.createElement("span");
    classDiv.append(className);
    classDiv.style.cssText =
      "background-color: gray; color:white; border-radius:5px; margin:10px; padding:10px;";
    resultList.appendChild(classDiv);
  }
}


ToAddFiled.addEventListener("blur", function () {
  let input = ToAddFiled.value.trim();
  if (!(!input || !input.length)) {
    input = input
      .toLowerCase()
      .split(" ")
      .filter((e) => !!e.trim());
    for (let i = 0; i < input.length; i++) {
      classList.classList.add(input[i]);
    }
  }

  showClassesList();

  ToAddFiled.value = "";
});

ToRemoveFiled.addEventListener("blur", function () {
  let input = ToRemoveFiled.value.trim();
  if (!(!input || !input.length)) {
    input = input
      .toLowerCase()
      .split(" ")
      .filter((e) => !!e.trim());
    for (let i = 0; i < input.length; i++) {
      classList.classList.remove(input[i]);
    }
  }

  showClassesList();

  ToRemoveFiled.value = "";
});
