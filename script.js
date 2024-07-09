let colors = ["rgb(244, 241, 187)", "rgb(230, 235, 224)", "rgb(155, 193, 188)", "rgb(94, 91, 108)", "rgb(11, 85, 98)", "rgb(193, 228, 205)"];

const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.getElementById("message");
const h1 = document.querySelector("#h1");
const resetButton = document.querySelector("#reset");
const easyButton = document.querySelector("#easy");
const hardButton = document.querySelector("#hard");

let pickedColor;

let numSquares = 6;

init();

function setupSquares() {
  for (let i = 0; i < squares.length; i++) {
      squares[i].addEventListener("click", function() {
          const clickedColor = this.style.backgroundColor;

          if (clickedColor === pickedColor) {
              messageDisplay.textContent = "¡Correcto!";
              changeColors(clickedColor);
              h1.style.backgroundColor = clickedColor;
              resetButton.textContent = "Jugar de nuevo";
          } else {
              this.style.backgroundColor = "#232323";
              messageDisplay.textContent = "Inténtalo nuevamente";
          }
      });
  }
}

function init() {
  setupModeButtons(); 
  setupSquares(); 
  reset(); 
}

resetButton.addEventListener("click", function() {
  reset();
});

function setupModeButtons() {
  easyButton.addEventListener("click", function() {
      if (numSquares !== 3) {
          numSquares = 3; 
          reset();
          easyButton.classList.add("selected");
          hardButton.classList.remove("selected");
      }
  });

  hardButton.addEventListener("click", function() {
      if (numSquares !== 6) {
          numSquares = 6; 
          reset();
          hardButton.classList.add("selected");
          easyButton.classList.remove("selected");
      }
  });
}

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function generateRandomColors(num) {
  const arr = [];
  for (let i = 0; i < num; i++) {
      arr.push(randomColor());
  }
  return arr;
}

function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor(); 
  colorDisplay.textContent = pickedColor; 
  messageDisplay.textContent = ""; 
  resetButton.textContent = "Nuevos Colores"; 
  h1.style.backgroundColor = "#232323"; 

  for (let i = 0; i < squares.length; i++) {
      if (colors[i]) {
          squares[i].style.display = "block";
          squares[i].style.backgroundColor = colors[i];
      } else {
          squares[i].style.display = "none";
      }
  }
}

function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

