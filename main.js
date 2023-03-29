let userInput = document.querySelector("#list-item-input");
let addButton = document.querySelector("#add").addEventListener("click", addButtonFunction);
let removeBt = document.querySelector("#remove-completed").addEventListener("click", removeCompletedFunction);
let removeAllBut = document.querySelector("#remove-All").addEventListener("click", removeAllFunction);
let ol = document.querySelector("#ordered-list");
let testBut = document.querySelector("#test").addEventListener("click", testList);


///This function validates user input and calls the add function with the users input as an argument;
 function addButtonFunction() {
  if (userInput.value === "") {
    userInput.value = prompt("MUST ENTER A TODO LIST ITEM!!!!!!");
  } else if (userInput.value !== "") {
    let item = userInput.value;
    add(item);
    userInput.value = "";
  }
}

function add(item) {

  let li = document.createElement("li");
  li.innerText = item;
  li.style.paddingLeft = "16px"
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
  delBut.style.margin = "4px"

  delBut.addEventListener("click", function () {
    li.remove();
  });

  let editBut = document.createElement("button");
  editBut.innerText = "Edit item";
  editBut.style.float = "right";
  editBut.style.margin = "4px"

  editBut.addEventListener("click", function(event){
    event.stopPropagation()   ////stops event from bobbling up the Dom Tree and triggering (li Event )
    let editItem = prompt("Edit list item");
    if(editItem === "" || editItem === null){
      return li
      
    } else if(editItem !== ""){
      li.innerText = editItem;
      li.append(delBut, editBut)
    }
    
  })

  li.append( delBut, editBut);
  ol.append(li);
}



/// this button targets any item in the node list that has a style text decoration that equals "line-through red" and removes it.
function removeCompletedFunction() {
  let nodeItemList = document.querySelectorAll("#ordered-list li");
  for (const item of nodeItemList) {
    if (item.style.textDecoration === "line-through red") {
      item.remove();
    }
  }
}

///////// remove all button, eventListener and function
function removeAllFunction() {
  let nodeItemList = document.querySelectorAll("#ordered-list li");
  for (const item of nodeItemList) {
    item.remove();
  }
}


////// test button and function 
function testList(){
    let todoMokList = ['Make a todo list', 'Check off the first item', 'Realize you already did 2 things on the list','Reward yourself with a nap','Wake up', 'Shave the neighbors cat', 'Pick up the kids','Go get the milk never come back', 'Make vanilla pudding. put in mayo jar. eat in public', 'clear browser history' ];
    for(const listItem of todoMokList){
        add(listItem);
    }
}