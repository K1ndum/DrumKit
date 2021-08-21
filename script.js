function palySound (e) {
    const audio = this.document.querySelector(`audio[id="${e.keyCode}"]`);
    const key = this.document.querySelector(`.key[id="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function palySoundMouse () {
    const audio = document.querySelector(`audio[id="${this.id}"]`);
    const key = document.querySelector(`.key[id="${this.id}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');   
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
keys.forEach(key => key.addEventListener('click', palySoundMouse));
console.log(keys);
window.addEventListener('keydown', palySound);

const mixColor = ["red", "blue", "green", "yellow", "purple"];

function getRandomInt() {
    return mixColor[Math.floor(Math.random() * mixColor.length)];
}

function changeColor () {
    let randomColor = getRandomInt();
    this.style.background = randomColor;
    this.style.boxShadow = `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`;

}

function changeColorback () {
    //this.style.transition = '2s ease';
    this.style.background = 'rgba(0,0,0,0.4)';
    this.style.boxShadow = '0 0 2px #000';
}

let screenWidth = window.screen.width;
let screenHeight = window.screen.availHeight;
document.getElementsByClassName('abstr__body')[0].style = `height: calc(${screenHeight}px - 110px)`;


for (let i = 0; i < Math.floor(screenWidth/29); i++) {
    for (let j = 0; j < Math.floor(screenHeight/58); j++) {
        let abstr = document.createElement('div');
        abstr.className = "abstr";
        document.querySelector('.abstr0').append(abstr);
        abstr.addEventListener('mouseover', changeColor);
        abstr.addEventListener('mouseout', changeColorback);
    }
}
