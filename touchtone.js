import anime from 'animejs';

let topLeftKeys = {
  "1": "Top Left",
  "2": "Top Left",
  "3": "Top Left",
  "4": "Top Left",
  "5": "Top Left",
  "q": "Top Left",
  "w": "Top Left",
  "e": "Top Left",
  "r": "Top Left",
  "t": "Top Left",
};

let topRightKeys = {
  "6": "Top Right",
  "7": "Top Right",
  "8": "Top Right",
  "9": "Top Right",
  "0": "Top Right",
  "y": "Top Right",
  "u": "Top Right",
  "i": "Top Right",
  "o": "Top Right",
  "p": "Top Right",
};

let bottomLeftKeys = {
  "a": "Bottom Left",
  "s": "Bottom Left",
  "d": "Bottom Left",
  "f": "Bottom Left",
  "g": "Bottom Left",
  "z": "Bottom Left",
  "x": "Bottom Left",
  "c": "Bottom Left",
  "v": "Bottom Left",
  "b": "Bottom Left",
};

let bottomRightKeys = {
  "h": "Bottom Right",
  "j": "Bottom Right",
  "k": "Bottom Right",
  "l": "Bottom Right",
  ";": "Bottom Right",
  "n": "Bottom Right",
  "m": "Bottom Right",
  ",": "Bottom Right",
  ".": "Bottom Right",
  "/": "Bottom Right",
};

let keymap = $wis.extend(topLeftKeys, topRightKeys, bottomLeftKeys, bottomRightKeys);

var canvasEl = $wis('.fireworks').first();
var ctx = canvasEl.getContext('2d');
var numberOfParticules = 30;
var pointerX = 0;
var pointerY = 0;
var section = "";
var colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'];

function setCanvasSize() {
  canvasEl.width = window.innerWidth * 2;
  canvasEl.height = window.innerHeight * 2;
  canvasEl.style.width = window.innerWidth + 'px';
  canvasEl.style.height = window.innerHeight * 0.995 + 'px';
  canvasEl.getContext('2d').scale(2, 2);
}

function setSection(key) {
  section = keymap[key];
}

function setCoords() {
  let width = window.innerWidth;
  let height = window.innerHeight;
  let topY = Math.random() * height / 2;
  let bottomY = Math.random() * (height - height / 2) + height / 2;
  let leftX = Math.random() * width / 2;
  let rightX = Math.random() * (width - width / 2) + width / 2;

  switch (section) {
    case "Top Left":
      return [leftX, topY];
    case "Top Right":
      return [rightX, topY];
    case "Bottom Left":
      return [leftX, bottomY];
    case "Bottom Right":
      return [rightX, bottomY];
    default:
      return [pointerX, pointerY];
  }
}

function updateCoords(e) {
  let newCoords = setCoords();
  pointerX = newCoords[0];
  pointerY = newCoords[1];
  // pointerX = e.clientX || e.touches[0].clientX;
  // pointerY = e.clientY || e.touches[0].clientY;
}



function setParticuleDirection(p) {
  var angle = anime.random(0, 360) * Math.PI / 180;
  var value = anime.random(50, 180);
  var radius = [-1, 1][anime.random(0, 1)] * value;
  return {
    x: p.x + radius * Math.cos(angle),
    y: p.y + radius * Math.sin(angle)
  };
}

function createParticule(x,y) {
  var p = {};
  p.x = x;
  p.y = y;
  p.color = colors[anime.random(0, colors.length - 1)];
  p.radius = anime.random(16, 32);
  p.endPos = setParticuleDirection(p);
  p.draw = function() {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
    ctx.fillStyle = p.color;
    ctx.fill();
  };
  return p;
}

function createCircle(x,y) {
  var p = {};
  p.x = x;
  p.y = y;
  p.color = '#FFF';
  p.radius = 0.1;
  p.alpha = 0.5;
  p.lineWidth = 6;
  p.draw = function() {
    ctx.globalAlpha = p.alpha;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
    ctx.lineWidth = p.lineWidth;
    ctx.strokeStyle = p.color;
    ctx.stroke();
    ctx.globalAlpha = 1;
  };
  return p;
}

function renderParticule(anim) {
  for (var i = 0; i < anim.animatables.length; i++) {
    anim.animatables[i].target.draw();
  }
}

function animateParticules(x, y) {
  var circle = createCircle(x, y);
  var particules = [];
  for (var i = 0; i < numberOfParticules; i++) {
    particules.push(createParticule(x, y));
  }
  anime.timeline().add({
    targets: particules,
    x: function(p) { return p.endPos.x; },
    y: function(p) { return p.endPos.y; },
    radius: 0.1,
    duration: anime.random(1200, 1800),
    easing: 'easeOutExpo',
    update: renderParticule
  })
    .add({
    targets: circle,
    radius: anime.random(80, 160),
    lineWidth: 0,
    alpha: {
      value: 0,
      easing: 'linear',
      duration: anime.random(600, 800),
    },
    duration: anime.random(1200, 1800),
    easing: 'easeOutExpo',
    update: renderParticule,
    offset: 0
  });
}

var render = anime({
  duration: Infinity,
  update: function() {
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
  }
});

$wis('html').keydown(function(e) {
  render.play();
  setSection(e.key);
  updateCoords(e);
  animateParticules(pointerX, pointerY);
});



var centerX = window.innerWidth / 2;
var centerY = window.innerHeight / 2;
//
// function autoClick() {
//   if (window.human) return;
//   animateParticules(
//     anime.random(centerX-50, centerX+50),
//     anime.random(centerY-50, centerY+50)
//   );
//   anime({duration: 200}).finished.then(autoClick);
// }
//
// autoClick();
setCanvasSize();
window.addEventListener('resize', setCanvasSize, false);
