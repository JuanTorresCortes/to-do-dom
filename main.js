let addButton = document.querySelector("#add");
let userInput = document.querySelector("#list-item-input");

addButton.addEventListener("click", function () {
  if (userInput.value === "") {
    userInput.value = prompt("MUST ENTER A TODO LIST ITEM!!!!!!");
  } else if (userInput.value !== "") {
    let item = userInput.value;
    add(item);
    userInput.value = "";
  }
});

let ol = document.querySelector("#ordered-list");

function add(item) {
  let li = document.createElement("li");

  li.innerText = item;

  li.addEventListener("click", markLine);

  function markLine() {
    if (li.style.textDecoration !== "line-through red") {
      li.style.textDecoration = "line-through red";
      li.style.background = "orange";
    } else if (li.style.textDecoration === "line-through red") {
      li.style.textDecoration = "none";
      li.style.background = "green";
    }
  }

  let delBut = document.createElement("button");
  delBut.innerText = "Delete";
  delBut.style.float = "right"

  delBut.addEventListener("click", function () {
    li.remove();
  });

  li.append(delBut);
  ol.append(li);
}

let removeBt = document.querySelector("#remove");

removeBt.addEventListener("click", function () {
  let nodeItemList = document.querySelectorAll("#ordered-list li");

  for (const item of nodeItemList) {
    if (item.style.textDecoration === "line-through red") {
      item.remove();
    }
  }
});

let removeAllBt = document.querySelector("#remove-All");

removeAllBt.addEventListener("click", function () {
  let nodeItemList = document.querySelectorAll("#ordered-list li");

  for (const item of nodeItemList) {
    item.remove();
  }
});
