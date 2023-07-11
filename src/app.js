/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];

function dominio() {
  let dominiosgen = [];
  for (var i = 0; i < pronoun.length; i++) {
    for (var j = 0; j < adj.length; j++) {
      for (var k = 0; k < noun.length; k++) {
        let dominiosr = pronoun[i] + adj[j] + noun[k] + ".com";
        dominiosgen.push(dominiosr);
      }
    }
  }
  return dominiosgen;
}

let data = dominio();

console.log(data);

for (var i = 0; i < data.length; i++) {
  let li = document.createElement("li");
  let elemetn = document.getElementById("lista").appendChild(li);
  elemetn.classList.add("list-group-item");
  elemetn.innerHTML = data[i];
}
