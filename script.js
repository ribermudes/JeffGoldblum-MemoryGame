// Card data
const cardsArray = [{
    'name': 'shell',
    'img': 'img/jeff1.jpg',
  },
  {
    'name': 'star',
    'img': 'img/jeff2.jpg',
  },
  {
    'name': 'bobomb',
    'img': 'img/jeff3.jpg',
  },
  {
    'name': 'mario',
    'img': 'img/jeff4.jpg',
  },
  {
    'name': 'luigi',
    'img': 'img/jeff5.jpg',
  },
  {
    'name': 'peach',
    'img': 'img/jeff6.jpg',
  },
  {
    'name': '1up',
    'img': 'img/jeff7.jpg',
  },
  {
    'name': 'mushroom',
    'img': 'img/jeff8.jpg',
  },
  {
    'name': 'thwomp',
    'img': 'img/jeff9.jpg',
  },
  {
    'name': 'bulletbill',
    'img': 'img/jeff10.jpg',
  },
  {
    'name': 'coin',
    'img': 'img/jeff11.jpg',
  },
  {
    'name': 'goomba',
    'img': 'img/jeff12.jpg',
  },
];

// For each item in the cardsArray array...
cardsArray.forEach(item => {
  // Create a div
  const card = document.createElement('div');

  // Apply a card class to that div
  card.classList.add('card');

  // Set the data-name attribute of the div to the cardsArray name
  card.dataset.name = item.name;

  // Apply the background image of the div to the cardsArray image
  card.style.backgroundImage = `url(${item.img})`;

  // Append the div to the grid section
  grid.appendChild(card);
});
