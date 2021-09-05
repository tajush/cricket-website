// let addButton = document.getElementById("addbutton");
// addButton.addEventListener("click", function addData() {
//   let inputData = document.getElementById("inputData");
//   console.log(inputData);
// });
// function addData() {
//     let inputData = document.getElementById("inputData");
//     console.log(inputData.value);
//     var ul = document.getElementById("list");
//   var li = document.createElement("li");
//   li.appendChild(document.createTextNode(inputData.value));
//   ul.appendChild(li);
//   };
function getItemById(id) {
  return document.getElementById(id);
}
let inputData = getItemById("inputData");
let addbutton = getItemById("addbutton");
let list = getItemById("list");

// function evnt(a) {
//   return addEventListener=a
// }
// evnt("addEventListener")

function remvItm(item) {
  item.addEventListener("click", () => {
    item.style.display = "none";
  });
}

addbutton.addEventListener("click", function name(params) {
  let li = document.createElement("li"); // <li></li>
  let text = document.createTextNode(inputData.value);
  li.appendChild(text);

  list.appendChild(li);
});

let items = document.getElementsByTagName("li");

console.log(items);
for (let index = 0; index < items.length; index++) {
  const item = items[index];

  remvItm(item)
}
function handleClick(rmvBtn) {
  rmvBtn.addEventListener("click", () => {
    list.style.display = "none";
  });
}

function removeAll() {
  let rmvBtn = document.getElementById("rmvBtn");
  handleClick(rmvBtn)
}
removeAll("list");


function getMultipleValue(number="ggggg") {
  
  return number*2
}
console.log(getMultipleValue("ggggg"));



function addValue(number1,number2) {
  
  return number1+number2
}
console.log(addValue(5,2));



console.log(getItemById("inputData"));
console.log(getItemById("addbutton"));

// function f1() {
// let inputData = document.getElementById("inputData");
// let addbutton = document.getElementById("addbutton");
// let list = document.getElementById("list");
// }
// f1();

// function f2() {
//   addbutton.addEventListener("click", function name(params) {

//     li = document.createElement("li"); // <li></li>
//     text = document.createTextNode(inputData.value);
//     li.appendChild(text);

//     list.appendChild(li);
//   });
// }
// f2();

function name(params) {
  
}
