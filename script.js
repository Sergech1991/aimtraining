'use strict';

document.addEventListener('DOMContentLoaded', () => {

   const startBtn = document.querySelector('#start');
   const screens = document.querySelectorAll('.screen');
   const timeList = document.querySelector('#time-list');
   const timeEl = document.querySelector('#time');
   const board = document.querySelector('.board');
   const colors = ['#FF0000', '#FF1493', '#FFFF00', '#FF00FF', '#8A2BE2', '#00FF00'];
   let time = 0;
   let score = 0;




   startBtn.addEventListener('click', (evt) => {
        evt.preventDefault();
        screens[0].classList.add('up'); 
   });

   timeList.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('time-btn')) {
            time = parseInt(evt.target.getAttribute('data-time'));

            screens[1].classList.add('up'); 

            startGame();
        }
   });



   board.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('circle')) {
        score++;
        evt.target.remove();
        createRandomCircle();
    }
   });

   function startGame() {
       createRandomCircle();
       setInterval(decreaseTime, 1000);
       setTime(time);
   }


   function decreaseTime() {
       if (time === 0) {
        finishGame();
       } else {
        let current = --time;
        if (current < 10) {
            current = `0${current}`;
        }
        setTime(current);
       }
   }



   function setTime(value) {
    timeEl.innerHTML = `00:${value}`;
   }


   function finishGame() {
    timeEl.parentNode.remove();   
    board.innerHTML = `<h1>Ваш счет: <span class="primary">${score}</span></h1>`;
}



   function createRandomCircle() {
       const circle = document.createElement('div');

       const size = getRandomNumber(10, 60);
       const {width, height} = board.getBoundingClientRect();
       const x = getRandomNumber(0, width - size);
       const y = getRandomNumber(0, height - size);

       circle.classList.add('circle');
       circle.style.width = `${size}px`;
       circle.style.height = `${size}px`;

       circle.style.top = `${y}px`;
       circle.style.left = `${x}px`;

       circle.style.background = RandomColor();

       board.append(circle);
   }


   function getRandomNumber(min, max) {
    return Math.round(Math.random()  * (max - min) + min);
   }


   //Случайный выбор цвета
   function RandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
 }











});