var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/photo1.png') {
      myImage.setAttribute ('src','images/photo2.png');
    } else if(mySrc === 'images/photo2.png'){
      myImage.setAttribute ('src','images/photo3.png');
    } else{
myImage.setAttribute ('src','images/photo1.png');
}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setEngName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Om-AlYousr is The Best, ' + myName;
}

if(!localStorage.getItem('name')) {
  setEngName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Om-AlYousr is The Best, ' + storedName;
}

myButton.onclick = function() {
  setEngName();
}