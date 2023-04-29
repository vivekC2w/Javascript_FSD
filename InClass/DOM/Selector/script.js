/*
    ...SELECTORS...
*/

//1. getElementsByTagName

// let paragraphTags = document.getElementsByTagName("p");

// console.log(paragraphTags); //ReferenceError: document is not defined bcz

//2. getElementById

let paraElement = document.getElementById("para");

let divId = document.getElementById("div");

paraElement.style.color = "yellow";

console.log(paraElement);

//3. getElementsByClass
let containerEle = document.getElementsByClassName("container");

console.log(containerEle);

//4. querySelector -> It takes the css selector

const paragraphQueryele = document.