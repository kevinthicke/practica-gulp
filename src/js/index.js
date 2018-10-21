let body = document.querySelector("body");
let array = ["green", "blue", "red"]

for (let color of array){
  let button = document.createElement( `button`);

  button.className = `btn btn-${color}`;
  button.textContent = color;

  body.appendChild(button);
}