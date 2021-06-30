var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul")
var delbtn = document.getElementById("deletebtn");


function inputLength() {
    return input.value.length;
}

/*
function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    }
*/

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    //start
    var del = document.createElement("button");
    del.innerHTML = "delete";
    li.appendChild(del);
    del.onclick= deleteListElement();
    //end
    ul.appendChild(li);
    input.value = "";
    }

function deleteListElement() {
    console.log("it works like this")
}





function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
        
    }
}

function addListAfterKeypress(event){
    if (inputLength() > 0 && event.which === 13) {
          createListElement();
        }
}

button.addEventListener("click", addListAfterClick);


input.addEventListener("keypress", addListAfterKeypress);

