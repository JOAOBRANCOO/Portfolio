const canvas = document.querySelector("#matrix-bg");
const ctx = canvas.getContext("2d");

const glyphs = "01{}[]</>const let git npm Fatec Jales web".split("");
let columns = [];
let fontSize = 16;

function resizeCanvas() {
  const pixelRatio = window.devicePixelRatio || 1;
  canvas.width = Math.floor(window.innerWidth * pixelRatio);
  canvas.height = Math.floor(window.innerHeight * pixelRatio);
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

  fontSize = window.innerWidth < 640 ? 13 : 16;
  const columnCount = Math.ceil(window.innerWidth / fontSize);
  columns = Array.from({ length: columnCount }, () =>
    Math.floor(Math.random() * window.innerHeight)
  );
}

function drawMatrix() {
  ctx.fillStyle = "rgba(5, 8, 7, 0.12)";
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

  ctx.fillStyle = "#38ff9c";
  ctx.font = `${fontSize}px JetBrains Mono, monospace`;

  columns.forEach((y, index) => {
    const text = glyphs[Math.floor(Math.random() * glyphs.length)];
    const x = index * fontSize;
    ctx.fillText(text, x, y);

    if (y > window.innerHeight + Math.random() * 1200) {
      columns[index] = 0;
    } else {
      columns[index] = y + fontSize;
    }
  });

  requestAnimationFrame(drawMatrix);
}

resizeCanvas();
drawMatrix();

window.addEventListener("resize", resizeCanvas);
