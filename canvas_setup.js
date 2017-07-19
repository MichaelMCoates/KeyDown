export const canvasEl = $wis('.fireworks').first();
export const ctx = canvasEl.getContext('2d');

export function setCanvasSize() {
  canvasEl.width = window.innerWidth * 2;
  canvasEl.height = window.innerHeight * 2;
  canvasEl.style.width = window.innerWidth + 'px';
  canvasEl.style.height = window.innerHeight * 0.995 + 'px';
  canvasEl.getContext('2d').scale(2, 2);
}
