import "./styles.css";

document.getElementById(
  "app"
).innerHTML = `<div><canvas height="660" width="900"></canvas></div>`;

let drawingMode = false;
let prevX = 0;
let prevY = 0;

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.lineWidth = 10;
ctx.strokeStyle = "#ff0000";
ctx.shadowBlur = 1.25;
ctx.shadowColor = ctx.strokeStyle;

/* Code to draw a line
ctx.beginPath();
ctx.lineCap = "round";
ctx.lineWidth = 10;
ctx.moveTo(0,0);
ctx.lineTo(200,200);
ctx.stroke();
*/

const init = e => {
  prevX = e.offsetX;
  prevY = e.offsetY;
  drawingMode = true;
};

const drawOnCanvas = event => {
  if (!drawingMode) return;
  const xCor = event.offsetX;
  const yCor = event.offsetY;
  ctx.beginPath();
  ctx.moveTo(prevX, prevY);
  ctx.quadraticCurveTo(prevX, prevY, xCor, yCor);
  ctx.stroke();
  prevX = xCor;
  prevY = yCor;
};

canvas.addEventListener("mousedown", e => init(e));
canvas.addEventListener("mousemove", e => drawOnCanvas(e));
canvas.addEventListener("touchmove", e => drawOnCanvas(e));
canvas.addEventListener("mouseup", () => (drawingMode = false));
canvas.addEventListener("mouseout", () => (drawingMode = false));
canvas.addEventListener("touchend", () => (drawingMode = false));
