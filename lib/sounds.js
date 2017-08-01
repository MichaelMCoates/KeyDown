import { Howl } from 'howler';

const topLeftKeys = {
  "1": "https://s3.amazonaws.com/keydown-pro/percs1.mp3",
  "2": "https://s3.amazonaws.com/keydown-pro/percs2.wav",
  "3": "https://s3.amazonaws.com/keydown-pro/percs3.mp3",
  "4": "https://s3.amazonaws.com/keydown-pro/percs4.mp3",
  "5": "https://s3.amazonaws.com/keydown-pro/percs5.wav",
  "q": "https://s3.amazonaws.com/keydown-pro/percs6.wav",
  "w": "https://s3.amazonaws.com/keydown-pro/percs7.wav",
  "e": "https://s3.amazonaws.com/keydown-pro/percs8.wav",
  "r": "https://s3.amazonaws.com/keydown-pro/percs9.wav",
  "t": "https://s3.amazonaws.com/keydown-pro/percs10.wav",
};

const topRightKeys = {
  "6": "https://s3.amazonaws.com/keydown-pro/tones1.wav",
  "7": "https://s3.amazonaws.com/keydown-pro/tones2.wav",
  "8": "https://s3.amazonaws.com/keydown-pro/tones3.wav",
  "9": "https://s3.amazonaws.com/keydown-pro/tones4.wav",
  "0": "https://s3.amazonaws.com/keydown-pro/tones5.wav",
  "y": "https://s3.amazonaws.com/keydown-pro/tones6.wav",
  "u": "https://s3.amazonaws.com/keydown-pro/tones7.wav",
  "i": "https://s3.amazonaws.com/keydown-pro/tones8.wav",
  "o": "https://s3.amazonaws.com/keydown-pro/tones9.wav",
  "p": "https://s3.amazonaws.com/keydown-pro/tones10.wav",
};

const bottomLeftKeys = {
  "a": "https://s3.amazonaws.com/keydown-pro/snares1.mp3",
  "s": "https://s3.amazonaws.com/keydown-pro/snares2.mp3",
  "d": "https://s3.amazonaws.com/keydown-pro/snares3.mp3",
  "f": "https://s3.amazonaws.com/keydown-pro/snares4.mp3",
  "g": "https://s3.amazonaws.com/keydown-pro/snares5.wav",
  "z": "https://s3.amazonaws.com/keydown-pro/snares6.wav",
  "x": "https://s3.amazonaws.com/keydown-pro/snares7.wav",
  "c": "https://s3.amazonaws.com/keydown-pro/snares8.wav",
  "v": "https://s3.amazonaws.com/keydown-pro/snares9.wav",
  "b": "https://s3.amazonaws.com/keydown-pro/snares10.wav",
};

const bottomRightKeys = {
  "h": "https://s3.amazonaws.com/keydown-pro/kicks1.mp3",
  "j": "https://s3.amazonaws.com/keydown-pro/kicks2.mp3",
  "k": "https://s3.amazonaws.com/keydown-pro/kicks3.mp3",
  "l": "https://s3.amazonaws.com/keydown-pro/kicks4.wav",
  ";": "https://s3.amazonaws.com/keydown-pro/kicks5.mp3",
  "n": "https://s3.amazonaws.com/keydown-pro/kicks6.WAV",
  "m": "https://s3.amazonaws.com/keydown-pro/kicks7.wav",
  ",": "https://s3.amazonaws.com/keydown-pro/kicks8.wav",
  ".": "https://s3.amazonaws.com/keydown-pro/kicks9.wav",
  "/": "https://s3.amazonaws.com/keydown-pro/kicks10.wav",
};

const soundKeymap = $wis.extend(topLeftKeys, topRightKeys, bottomLeftKeys, bottomRightKeys);

for (var key in soundKeymap) {
  console.log(soundKeymap[key]);
  new Howl({ src: [`${soundKeymap[key]}`]});
}

export function playSound(key) {
  new Howl({ src: [`${soundKeymap[key]}`]}).play();
}
