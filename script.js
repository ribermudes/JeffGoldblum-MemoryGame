// Card data
const cardsArray = [
  {
    name: 'jeff1',
    img: 'img/jeff1.jpg',
  },
  {
    name: 'jeff2',
    img: 'img/jeff2.jpg',
  },
  {
    name: 'jeff3',
    img: 'img/jeff3.gif',
  },
  {
    name: 'jeff4',
    img: 'img/jeff4.gif',
  },
  {
    name: 'jeff5',
    img: 'img/jeff5.jpg',
  },
  {
    name: 'jeff6',
    img: 'img/jeff6.jpg',
  },
  {
    name: 'jeff7',
    img: 'img/jeff7.jpg',
  },
  {
    name: 'jeff8',
    img: 'img/jeff8.jpg',
  },
  {
    name: 'jeff9',
    img: 'img/jeff9.jpg',
  },
  {
    name: 'jeff10',
    img: 'img/jeff10.jpg',
  },
  {
    name: 'jeff11',
    img: 'img/jeff11.jpg',
  },
  {
    name: 'jeff12',
    img: 'img/jeff12.jpg',
  },
]

let gameGrid = cardsArray.concat(cardsArray);
gameGrid.sort(() => 0.5 - Math.random());

let count = 0;

const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(item => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = item.name;
  card.style.backgroundImage = `url(${item.img})`;
  grid.appendChild(card);
});

grid.addEventListener('click', function (event) {
  let clicked = event.target;
  if (clicked.nodeName === 'SECTION') { return; }
  if (count < 2) {
    count++;
    clicked.classList.add('selected');
  }
});

// // Grab the div with an id of root
// const game = document.getElementById('game')
//
// // Create a section with a class of grid
// const grid = document.createElement('section')
// grid.setAttribute('class', 'grid')
//
// // Append the grid section to the game div
// game.appendChild(grid)
//
// // For each item in the cardsArray array...
// cardsArray.forEach(item => {
//   // Create a div
//   const card = document.createElement('div')
//
//   // Apply a card class to that div
//   card.classList.add('card')
//
//   // Set the data-name attribute of the div to the cardsArray name
//   card.dataset.name = item.name
//
//   // Apply the background image of the div to the cardsArray image
//   card.style.backgroundImage = `url(${item.img})`
//
//   // Append the div to the grid section
//   grid.appendChild(card)
// })
