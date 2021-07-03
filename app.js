var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul")
var delbtn = document.getElementById("deletebtn");

// store keypress values
let value = '';
input.addEventListener('keypress', (val) => {
    value = value + val.key;
})

// handle add
button.addEventListener('click', () => {
    const value = input.value;
    if (value.length > 0) {
        const list = document.createElement('li');
        const text = document.createTextNode(value);

        list.appendChild(text);
        ul.appendChild(list);

        input.value = '';

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'delete';
        deleteBtn.addEventListener('click', () => {
            ul.removeChild(list)
        });

        list.appendChild(deleteBtn)
    } else alert('Value missing from input')
})

// handle clear
clearBtn.addEventListener('click', () => input.value = '');


/*function inputLength() {
    return input.value.length;
}
*/
/*
function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    }
*/
/*
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
*/
