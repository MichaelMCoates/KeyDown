import anime from 'animejs';
const colors = ['#FF1461', '#18FF92', '#5A87FF', '#2B2D42', '#8D99AE', '#C4F1BE', '#3C1642', '#086375', '#F433AB', '#EF6F6C', '#F8FFE5', '#2DE1C2'];

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
      return colors.slice(0, 3);
    case "Top Right":
      return colors.slice(3, 6);
    case "Bottom Left":
      return colors.slice(6, 9);
    case "Bottom Right":
      return colors.slice(9, 12);
    default:
      return null;
  }
}
