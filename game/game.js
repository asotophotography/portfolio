const canvas = document.getElementById("flappyCanvas");
const ctx = canvas.getContext("2d");

const GRAVITY = 0.6;
const JUMP_STRENGTH = -10;
const PIPE_WIDTH = 50;
const PIPE_GAP = 150;
const GROUND_HEIGHT = 40;

let bird = { x: 80, y: 150, width: 40, height: 30, velocity: 0 };
let pipes = [];
let score = 0;
let isGameOver = false;

function drawBird() {
  ctx.fillStyle = "yellow";
  ctx.fillRect(bird.x, bird.y, bird.width, bird.height);
}

function drawPipes() {
  ctx.fillStyle = "green";
  for (let pipe of pipes) {
    ctx.fillRect(pipe.x, 0, PIPE_WIDTH, pipe.top);
    ctx.fillRect(pipe.x, pipe.top + PIPE_GAP, PIPE_WIDTH, canvas.height - pipe.top - PIPE_GAP - GROUND_HEIGHT);
  }
}

function drawGround() {
  ctx.fillStyle = "#228B22";
  ctx.fillRect(0, canvas.height - GROUND_HEIGHT, canvas.width, GROUND_HEIGHT);
}

function spawnPipe() {
  let top = Math.floor(Math.random() * (canvas.height - PIPE_GAP - GROUND_HEIGHT - 60)) + 20;
  pipes.push({ x: canvas.width, top });
}

function checkCollision(pipe) {
  return (
    bird.x < pipe.x + PIPE_WIDTH &&
    bird.x + bird.width > pipe.x &&
    (
      bird.y < pipe.top ||
      bird.y + bird.height > pipe.top + PIPE_GAP
    )
  );
}

function resetGame() {
  bird.y = 150;
  bird.velocity = 0;
  pipes = [];
  score = 0;
  isGameOver = false;
  spawnPipe();
}

function update() {
  if (isGameOver) return;

  bird.velocity += GRAVITY;
  bird.y += bird.velocity;

  if (bird.y + bird.height > canvas.height - GROUND_HEIGHT || bird.y < 0) {
    isGameOver = true;
  }

  for (let i = pipes.length - 1; i >= 0; i--) {
    pipes[i].x -= 3;

    if (checkCollision(pipes[i])) {
      isGameOver = true;
    }

    if (pipes[i].x + PIPE_WIDTH < 0) {
      pipes.splice(i, 1);
      score++;
    }
  }

  if (frames % 100 === 0) {
    spawnPipe();
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBird();
  drawPipes();
  drawGround();

  ctx.fillStyle = "black";
  ctx.font = "20px Inter";
  ctx.fillText("Score: " + score, 20, 30);

  if (isGameOver) {
    ctx.fillText("Game Over! Press R to restart", 80, canvas.height / 2);
  }
}

let frames = 0;
function gameLoop() {
  update();
  draw();
  frames++;
  requestAnimationFrame(gameLoop);
}

document.addEventListener("keydown", (e) => {
  if (e.key === " " || e.key === "ArrowUp" || e.key === "w") {
    if (!isGameOver) {
      bird.velocity = JUMP_STRENGTH;
    }
  }

  if (e.key.toLowerCase() === "r" && isGameOver) {
    resetGame();
  }
});

resetGame();
gameLoop();
