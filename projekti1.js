
// laitetaan "kirjoita tähän" toiminto toimimaan ja lisää nappi
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  
  if (inputValue === '') {
    alert("kirjoita jotain!");
	
  } 
    else if (inputValue >= '0' && inputValue <= '9') {
    alert("Kirjoita tekstiä");
	
  } 

else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


//tehty merkintä listalle, css viite tähän mitä väriä yms. katso että matchaa
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);



//luodaan x nappi jokaisen listan loppuun, lasku kaavalla se tulee automaattisesti jokaiseen listan kohtaan.
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

/*tapahtuma x napin painamisen jälkeen. käytännössä vaan piilotetaa tiedosto, ettei hidasteta koodia
for toiminto pitää taas huolen että kaikki listan tehtävät saa tän toiminnon*/
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//otsikon muokkaus
var element = document.getElementById("id1");
element.innerHTML = "Tehtävä lista";

/*kova yritys saada logal storage toimimaan mutta näyttää vähän siltä et tätä en hoksaa. paria juttua kokeillut mutta ei toimi*/

/*localStorage.setItem("myUL", "inputValue");

var  storage = localStorage.getItem("myUL", "inputValue");
 var i;

for (i = 0; i < myUL.length; i++) {
    storage[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "all";
    } */

  /*function storeList(){

  var storage = [];
  const list = Array.from(document.querySelectorAll('#myUL>li'));
  for (var i = 0; i < list.length; i++ ){
      storage.push(list[i].textContent);
  }
  const savedText = JSON.stringify(storage)
  
  const editedText = savedText.slice(0,-1)
  localStorage.setItem("storage",savedText);
}

function clearFromList(){
  var storage = [];
  const list = Array.from(document.querySelectorAll('#myUL>li'));
  
  for (var i = 0; i < list.length; i++ ){
      storage.push(list[i].textContent);
  }
  localStorage.removeItem("storage",JSON.stringify(storage));
}


function loadList(){
  if(localStorage.getItem("storage") != null) {
    var storage = JSON.parse(localStorage.getItem("storage"));
    console.log(storage);
    for(var i = 0; i < storage.length; i++){
      if(storage[i].slice(-2).includes("\u00D7")){ 
        newItem(storage[i].slice(0,-1));
      }else{
        newItem(storage[i]);
      }
      
    }
  }
}*/