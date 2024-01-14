"use strict";

const selectUser = document.querySelector(".js-select");

const btn = document.querySelector(".js-btn");
const msj = document.querySelector(".js-result");
const counterUser = document.querySelector(".js-counter-user");
const counterPc = document.querySelector(".js-counter-pc");
const btnReset = document.querySelector(".js-reset");

let pcScore = 0;
let userScore = 0;
let moves = 0;

// función para generar el numero random
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const getValuePc = () => {
  const randomNumber = getRandomNumber(9);
  console.log(randomNumber);
  if (randomNumber <= 3) {
    return "piedra";
  } else if (randomNumber >= 7) {
    return "papel";
  } else {
    return "tijera";
  }
};

// funcion para inicializar el juego
const playGame = () => {
  const valuePC = getValuePc();
  const valueUser = selectUser.value;
  console.log(valuePC, valueUser);

  if (valueUser === valuePC) {
    msj.innerHTML = "Empate";
  } else if (valueUser === "piedra") {
    if (valuePC === "tijera") {
      msj.innerHTML = "Has ganado";
      userScore++; // userScore = userScore + 1 -- userScore +=1
    } else {
      msj.innerHTML = "Has perdido";
      pcScore++;
    }
  } else if (valueUser === "papel") {
    if (valuePC === "tijera") {
      msj.innerHTML = "Has perdido";
      pcScore++;
    } else {
      msj.innerHTML = "Has ganado";
      userScore++;
    }
  } else {
    if (valuePC === "piedra") {
      msj.innerHTML = "Has perdido";
      pcScore++;
    } else {
      msj.innerHTML = "Has ganado";
      userScore++;
    }
  }
};
const paintScore = () => {
  counterUser.innerHTML = userScore;
  counterPc.innerHTML = pcScore;

};

const resetGame = () => {
  moves++;
  if (moves === 10) {
  btnReset.classList.remove("hidden");
  btn.classList.add("hidden");
};
};

// función manejadora del evento
const handleClickBtn = (event) => {
  event.preventDefault();
  playGame();
  paintScore();
  resetGame();
};

// evento click sobre el boton
btn.addEventListener("click", handleClickBtn);

const handleClickReset = (event) => {
  event.preventDefault();
  btnReset.classList.add("hidden");
  btn.classList.remove("hidden");

  pcScore = 0;
  userScore = 0;
  moves = 0;
  paintScore();


  msj.innerHTML = "Vamos a jugar";
  
};

btnReset.addEventListener("click", handleClickReset);
