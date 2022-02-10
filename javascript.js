'use strict';

document.querySelector('.changeContent').textContent = 'new text';

document.querySelector('.changeColor').addEventListener('click', function () {
   this.style.background = `rgb(${Math.trunc(Math.random() * 255)}, ${Math.trunc(Math.random() * 255)}, ${Math.trunc(Math.random() * 255)})`;
});

const changeImageWhileHovering = document.querySelector('.changeImageWhileHovering>img');

changeImageWhileHovering.addEventListener('mouseover', function () {
   this.src = './images/2.jpg';
});

changeImageWhileHovering.addEventListener('mouseleave', function () {
   this.src = './images/1.jpg';
});




const colors = ['green', 'yellow', 'blue'];

const elem = document.querySelector('#elem');


// что-то не то
let countClicks = -1;
elem.addEventListener('click', function () {
   countClicks = (countClicks + 1) % colors.length;
   if (countClicks === 0) {
      this.classList.remove('yellow');
      this.classList.remove('blue');
      this.classList.add(colors[countClicks]);
   }
   if (countClicks === 1) {
      this.classList.remove('blue');
      this.classList.remove('green');
      this.classList.add(colors[countClicks]);
   }
   if (countClicks === 2) {
      this.classList.remove('yellow');
      this.classList.remove('green');
      this.classList.add(colors[countClicks]);
   }

})
// try2 task 4
// let countClicks = -1;
// elem.addEventListener('click', function () {
//    countClicks = (countClicks + 1) % colors.length;
//    this.setAttribute('class', `${colors[countClicks]}`);
// });



const slides = [
    {
        src: './1.jpg', 
        alt: '1',
    },
   {
      src: './2.jpg',
      alt: '2'
   },
   {
      src: './3.jpg',
      alt: '3'
   },
   {
      src: './4.jpg',
      alt: '4'
   },
];

const slidesDescriptions = ['image desctiption 1', 'image desctiption 2', 'image desctiption 3', 'image desctiption 4'];

const imgElement = document.querySelector('.img-wrapper>img');
const [prev, next] = document.querySelectorAll('.buttons');

const pCenter = document.querySelector('.pCenter');


let currentSlideIndex = 0;
imgElement.src = slides[currentSlideIndex].src;
imgElement.alt = slides[currentSlideIndex].alt;
pCenter.textContent = slidesDescriptions[currentSlideIndex];


next.addEventListener('click', function () {
   currentSlideIndex = (currentSlideIndex + 1) % slides.length;
   imgElement.src = slides[currentSlideIndex].src;
   imgElement.alt = slides[currentSlideIndex].alt;
   pCenter.innerHTML = slidesDescriptions[currentSlideIndex];
})

prev.addEventListener('click', function () {
   currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
   imgElement.src = slides[currentSlideIndex].src;
   imgElement.alt = slides[currentSlideIndex].alt;
   pCenter.innerHTML = slidesDescriptions[currentSlideIndex];
})


