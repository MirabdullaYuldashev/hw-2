/*
    Задание 1. Используя setTimeout и рекурсию заставить блок двигаться по определенному шаблону (как было показано на уроке)
*/

const blockMini = document.querySelector('.blockMini');

let positionX = 0;
let positionY = 0;
const move = () => {
    if (positionX <= 440 && positionY == 0) {
        positionX += 10;
        blockMini.style.left = `${positionX}px`;
        setTimeout(() => {
            move();
        }, 50)
    } else if (positionX >= 440 && positionY < 450) {
        positionY += 10;
        blockMini.style.top = `${positionY}px`;
        setTimeout(() => {
            move();
        }, 50)
    } else if (positionY >= 450 && positionX >= 0) {
        positionX -= 10;
        blockMini.style.left = `${positionX}px`;
        setTimeout(() => {
            move();
        }, 50)
    } else if (positionX <= 440 && positionY >= 0) {
        positionY -= 10;
        blockMini.style.top = `${positionY}px`;
        setTimeout(() => {
            move();
        }, 50)
    };
};
move();

/* 
    Задание 2. Создать интервал, который будет выводить в консоль количество секунд, прошедших с момента запуска программы и останавливать его после 60
*/

i = 1;
const timer = setInterval(() => {
    console.log(i++)
}, 1000); 
setTimeout(() => {
    clearInterval(timer); // через пять секунд ф-я остановится выводится
}, 60000);
