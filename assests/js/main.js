function resizeCanvas(canvas, container) {
  const rect = container.getBoundingClientRect();
  canvas.width = Math.floor(rect.width);
  canvas.height = Math.floor(rect.height);
}

function draw() {
  const canvas = document.getElementById("canvas");
  const container = canvas.parentElement;

  if (!canvas.getContext) return;

  resizeCanvas(canvas, container);

  const ctx = canvas.getContext("2d");

  // Limpiar todo el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // =============================
  // RECTÁNGULO RELLENO
  // =============================
  ctx.fillStyle = "#2dd4bf";
  ctx.fillRect(25, 25, 100, 100);

  ctx.clearRect(45, 45, 60, 60);

  ctx.strokeStyle = "#111827";
  ctx.lineWidth = 3;
  ctx.strokeRect(50, 50, 50, 50);

  // =============================
  // TRIÁNGULO (Path API)
  // =============================
  ctx.beginPath();
  ctx.moveTo(200, 100);
  ctx.lineTo(250, 150);
  ctx.lineTo(250, 50);
  ctx.closePath();
  ctx.fillStyle = "#f97316";
  ctx.fill();

  // =============================
  // CARA SONRIENTE (arc)
  // =============================
  ctx.beginPath();

  // Círculo externo
  ctx.arc(400, 100, 50, 0, Math.PI * 2, true);

  // Boca
  ctx.moveTo(435, 100);
  ctx.arc(400, 100, 35, 0, Math.PI, false);

  // Ojo izquierdo
  ctx.moveTo(390, 90);
  ctx.arc(385, 90, 5, 0, Math.PI * 2, true);

  // Ojo derecho
  ctx.moveTo(420, 90);
  ctx.arc(415, 90, 5, 0, Math.PI * 2, true);

  ctx.strokeStyle = "#1f2937";
  ctx.lineWidth = 3;
  ctx.stroke();

    // Triángulo relleno
    ctx.beginPath();
    ctx.moveTo(525, 25);
    ctx.lineTo(605, 25);
    ctx.lineTo(525, 105);
    ctx.fill();

    // Triángulo contorneado
    ctx.beginPath();
    ctx.moveTo(625, 125);
    ctx.lineTo(625, 65);
    ctx.lineTo(535, 125);
    ctx.closePath();
    ctx.stroke();

 const yOffset = 220;

  // =============================
  // ARCOS EN BUCLE
  // =============================
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      ctx.beginPath();
      const x = 25 + j * 50;
      const y = yOffset + 25 + i * 50;
      const radius = 20;
      const startAngle = 0;
      const endAngle = Math.PI + (Math.PI * j) / 2;
      const counterclockwise = i % 2 !== 0;

      ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

      if (i > 1) {
        ctx.fill();
      } else {
        ctx.stroke();
      }
    }
  }

  // =============================
  // CURVAS CUADRÁTICAS
  // =============================
  ctx.beginPath();
  ctx.moveTo(300, yOffset + 25);
  ctx.quadraticCurveTo(250, yOffset + 25, 250, yOffset + 62.5);
  ctx.quadraticCurveTo(250, yOffset + 100, 275, yOffset + 100);
  ctx.quadraticCurveTo(275, yOffset + 120, 255, yOffset + 125);
  ctx.quadraticCurveTo(285, yOffset + 120, 290, yOffset + 100);
  ctx.quadraticCurveTo(350, yOffset + 100, 350, yOffset + 62.5);
  ctx.quadraticCurveTo(350, yOffset + 25, 300, yOffset + 25);
  ctx.stroke();
// corazon
  const heartY = yOffset + 210; // posición vertical debajo de la figura

ctx.beginPath();
ctx.moveTo(300, heartY);

ctx.bezierCurveTo(300, heartY - 20, 260, heartY - 20, 260, heartY);
ctx.bezierCurveTo(260, heartY + 30, 300, heartY + 50, 300, heartY + 70);
ctx.bezierCurveTo(300, heartY + 50, 340, heartY + 30, 340, heartY);
ctx.bezierCurveTo(340, heartY - 20, 300, heartY - 20, 300, heartY);

ctx.fillStyle = "black";
ctx.fill();

  
  // =============================
  // PACMAN
  // =============================
  //roundedRect(ctx, 450, yOffset + 20, 120, 120, 15);

   // Movemos el sistema de coordenadas
ctx.translate(350, 220); // X , Y  (ajusta si quieres más abajo)

ctx.fillStyle = "black";
ctx.strokeStyle = "black";

// Marco
roundedRect(ctx, 12, 12, 150, 150, 15);
//roundedRect(ctx, 19, 19, 150, 150, 9);
roundedRect(ctx, 53, 53, 49, 33, 10);
roundedRect(ctx, 53, 119, 49, 16, 6);
roundedRect(ctx, 135, 53, 49, 33, 10);
roundedRect(ctx, 135, 119, 25, 49, 10);

// Pacman
ctx.beginPath();
ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
ctx.lineTo(31, 37);
ctx.fill();

// Puntos
for (let i = 0; i < 8; i++) {
  ctx.fillRect(51 + i * 16, 35, 4, 4);
}

for (let i = 0; i < 6; i++) {
  ctx.fillRect(115, 51 + i * 16, 4, 4);
}

for (let i = 0; i < 8; i++) {
  ctx.fillRect(51 + i * 16, 99, 4, 4);
}

// Fantasma
ctx.beginPath();
ctx.moveTo(83, 116);
ctx.lineTo(83, 102);
ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
ctx.lineTo(111, 116);
ctx.lineTo(106.333, 111.333);
ctx.lineTo(101.666, 116);
ctx.lineTo(97, 111.333);
ctx.lineTo(92.333, 116);
ctx.lineTo(87.666, 111.333);
ctx.lineTo(83, 116);
ctx.fill();

// Ojos blancos
ctx.fillStyle = "white";
ctx.beginPath();
ctx.moveTo(91, 96);
ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
ctx.moveTo(103, 96);
ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
ctx.fill();

// Pupilas
ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(101, 102, 2, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.arc(89, 102, 2, 0, Math.PI * 2);
ctx.fill();

ctx.restore();

  // =============================
  // PATH2D
  // =============================
  
  const rectangle = new Path2D();
  rectangle.rect(500, yOffset + 20, 50, 50);

  const circle = new Path2D();
  circle.arc(500, yOffset + 45, 25, 0, 2 * Math.PI);

  ctx.stroke(rectangle);
  ctx.fill(circle);
  


}

// 👇 AQUÍ VA LA FUNCIÓN AUXILIAR
function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.stroke();
}

function initUI() {
  document.getElementById("year").textContent =
    new Date().getFullYear();

  document
    .getElementById("btnRedraw")
    .addEventListener("click", draw);

  window.addEventListener("resize", draw);

  draw();
}

initUI();
