const main = document.querySelector("main");
const inputTextValue = document.getElementById("inputName");
const select = document.getElementById("country");
const button = document.getElementById("btn");
let arrStorage = [];
const getLocalArray = JSON.parse(localStorage.getItem("data") || "[]");

function generateParagraph(elem) {
  const div = document.createElement("div");
  const p = document.createElement("p");
  main.appendChild(div);
  div.appendChild(p);
  p.innerText =
    "Nom : " + elem.name + " Age : " + elem.age + " Count : " + elem.count;
}

button.addEventListener("click", (e) => {
  const api = `https://api.agify.io?name=${inputTextValue.value}&country_id=${select.value}`;
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      generateParagraph(data);
      arrStorage.push(data);
      localStorage.setItem("data", JSON.stringify(arrStorage));
      console.log(localStorage);
    });
});

window.addEventListener("load", (e) => {
  arrStorage = getLocalArray;
  arrStorage.forEach((elem) => {
    generateParagraph(elem);
  });
});