
const topLeftKeys = {
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

const topRightKeys = {
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

const bottomLeftKeys = {
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

const bottomRightKeys = {
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

export const keymap = $wis.extend(topLeftKeys, topRightKeys, bottomLeftKeys, bottomRightKeys);
