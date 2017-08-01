import anime from 'animejs';
import {canvasEl, ctx, setCanvasSize } from './canvas_setup';
import { keymap } from './keybindings';
import { setCoords, setColors } from './section';
import { animateParticules } from './animation';
import { playSound } from './sounds';

let numberOfParticules = 30;
let pointerX = 0;
let pointerY = 0;
let sectionColors = ['#FF1461', '#18FF92'];
let centerX = window.innerWidth / 2;
let centerY = window.innerHeight / 2;
let letters = $wis('.letters');
let timeout;

$wis('html').keydown(function(e) {
  let key = e.key;
  if (keymap[key]) {
    render.play();
    setSection(key);
    animateParticules(pointerX, pointerY, sectionColors, numberOfParticules);
    playSound(key);
    let letter = document.createElement('div');
    letter.innerHTML = key;
    letter.className = 'fade';
    letters.append(letter);
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(letters.deleteInnerHTML.bind(letters), 500);
  }
});

let render = anime({
  duration: Infinity,
  update: function() {
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
  }
});

function setSection(key) {
  let section = keymap[key];
  updateCoords(section);
  updateColors(section);
}

setCanvasSize();
window.addEventListener('resize', setCanvasSize, false);

// Helpers

function updateCoords(section) {
  let newCoords = setCoords(section);
  if (newCoords !== null) {
    pointerX = newCoords[0];
    pointerY = newCoords[1];
  }
}

function updateColors(section) {
  let newColors = setColors(section);
  if (newColors !== null) {
    sectionColors = newColors;
  }
}
