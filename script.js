////////////////////////    Initial Activities Count Keep...    /////////////////////
                                                                                 ////
let dddiv = document.getElementById('activities')                                ////
let countQuantity = dddiv.childElementCount;                                     ////
document.getElementById("activitiesCounter").innerHTML = countQuantity;          ////
                                                                                 ////
/////////////////////////////////////////////////////////////////////////////////////

// Add by pressing "Enter"...

let input = document.getElementById("input");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   addLi();
  }
});

// The Add Button...

function addLi() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("input").value;
  let text = document.createTextNode(inputValue);
  li.appendChild(text);
  
  inputValue === "" ? alert('Please type an activity') : document.getElementById("activities").appendChild(li);
  document.getElementById("input").value = "";
  
  let span = document.createElement("span");
  let img = new Image(1, 1);
  img.src = './delete.jpg';
  span.className = "close";
  span.appendChild(img);
  li.appendChild(span);

  for (let i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        let div = this.parentElement;
        div.remove();
        count();
        count2();
      }
  }
  count2();
}

// The Close Button...

let items = document.getElementsByTagName('li');
for (let i = 0; i < items.length; i++) {
    let span1 = document.createElement('span');
    let img1 = new Image(1, 1);
    img1.src = './delete.jpg';
    span1.className = "close"
    span1.appendChild(img1);
    items[i].appendChild(span1);
}  

let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.remove();
    count();
    count2();
  }
}

// The Strikethrough...
// And Not yet Done/Completed Tasks Counter Implement...

let divdiv = document.getElementById('done');

let list = document.getElementById('activities');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    divdiv.appendChild(ev.target);
    count();
    count2();
  }
});

// Counter for "Done:" section...

function count() {
  let ddiv = document.getElementById('done')
  let count = ddiv.childElementCount - 2;
  document.getElementById("doneCounter").innerHTML = count;
}

// Counter for "To Be Done..." section...

function count2() {
  let dddiv = document.getElementById('activities')
  let count2 = dddiv.childElementCount;
  document.getElementById("activitiesCounter").innerHTML = count2;
}