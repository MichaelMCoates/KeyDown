import anime from 'animejs';
const colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C', '#533A71', '#F79256', '#21897E', '#B7D3F2'];

export function setCoords(section) {
  let width = window.innerWidth;
  let height = window.innerHeight;
  let topY = Math.random() * height / 2;
  let bottomY = anime.random(height / 2, height);
  let leftX = Math.random() * width / 2;
  let rightX = anime.random(width / 2, width);

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
      return null;
  }
}

export function setColors(section) {
  switch (section) {
    case "Top Left":
      return colors.slice(0, 2);
    case "Top Right":
      return colors.slice(2, 4);
    case "Bottom Left":
      return colors.slice(4, 6);
    case "Bottom Right":
      return colors.slice(6, 8);
    default:
      return null;
  }
}
