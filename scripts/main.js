const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/batterfly.jpg') {
    myImage.setAttribute('src','images/batterfly2.jpg');
  } else {
    myImage.setAttribute('src','images/batterfly.jpg');
  }
}

let myHeading = document.querySelector('h1');
function setUserName() {
  const myName = prompt('Please enter your name.');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `Batterflies are cool, ${myName}`;
  }
}
if (!localStorage.getItem('name')) {
  setUserName();
} else {
  const storedName = localStorage.getItem('name');
  myHeading.textContent = `Batterflies are cool, ${storedName}`;
}
let myButton = document.querySelector('button');
myButton.onclick = () => {
  setUserName();
}