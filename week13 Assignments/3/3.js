let p = document.querySelector("p");
// p.style.display="none";
p.remove();

let beforeDiv = document.createElement("div");
beforeDiv.className="start";
beforeDiv.title="Start Element";
beforeDiv.setAttribute('data-value', "Start");
beforeDiv.textContent="Start";

let div = document.querySelector("div");

div.before(beforeDiv);

let afterDiv = beforeDiv.cloneNode(true);
afterDiv.className="end";
beforeDiv.title="End Element";
beforeDiv.setAttribute('data-value', "End");
beforeDiv.textContent="End";

div.after(afterDiv);

