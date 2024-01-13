'use strict';

const selectUser = document.querySelector('.js-select');

const btn = document.querySelector('.js-btn');
const msj = document.querySelector('.js-result');
const counterUser = document.querySelector('.js-counter-user');

const counterPc = document.querySelector('.js-counter-pc');

// funcion random 
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const getValuePc = () => {
    const randomNumber = getRandomNumber(9);
    console.log(randomNumber);
    if (randomNumber <=  3) {
        return "Piedra";
    } else if (randomNumber >= 7) {
        return "Papel";
    } else {
        return "Tijera";
    }

}

// funcion para validar el resultado
const playGame = () => {
    const valuePC = getValuePc();
    const valueUser = userSelect.value;
    console.log(valuePC, valueUser);

    if(valueUser === valuePC) {
        msj.innerHTML = 'Empate';
    } else if (valueUser === 'piedra'){
        if(valuePC === 'tijera'){
            msj.innerHTML= 'Has ganado'
        }else {
            msj.innerHTML= 'has perdido'
        }
    }
    
    
};

const handleClick = (event) => {
    event.preventDefault();
    playGame();
};

btn.addEventListener('clik', handleClick);
