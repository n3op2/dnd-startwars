//This really should go to Utils, take a couple of args exp: screenW
const getRandomX = () => {
  const w = document.body.clientWidth;
  const x = Math.floor(Math.random() * w);
  if(x < 50) return x + 50;
  if(x > (w - 50)) return x - 50;
  return x;
};
const getRandomY = () => Math.floor(Math.random() * 300 + 150);

export const reduxStore = {
  planets: [
    { 
      id: 1,
      x: getRandomX(),
      y: getRandomY(),
      name: 'planet1',
      imgSrc: '/img/planet4.png'
    },
    { 
      id: 2,
      x: getRandomX(),
      y: getRandomY(),
      name: 'planet2',
      imgSrc: '/img/planet2.png'
    },
    { 
      id: 3,
      x: getRandomX(),
      y: getRandomY(),
      name: 'planet3',
      imgSrc: '/img/planet3.png'
    },
    { 
      id: 4,
      x: getRandomX(),
      y: getRandomY(),
      name: 'planet4',
      imgSrc: '/img/planet4.png'
    },
    { 
      id: 5,
      x: getRandomX(),
      y: getRandomY(),
      name: 'planet5',
      imgSrc: '/img/planet5.png'
    },
    { 
      id: 6,
      x: getRandomX(),
      y: getRandomY(),
      name: 'planet6',
      imgSrc: '/img/planet2.png'
    },
    { 
      id: 7,
      x: getRandomX(),
      y: getRandomY(),
      name: 'planet7',
      imgSrc: '/img/planet7.png'
    }
  ],
  interceptors: [
    { 
      id: 1,
      name: 'ship1', 
      imgSrc: '/img/interceptor.png'
    },
    { 
      id: 2,
      name: 'ship2', 
      imgSrc: '/img/interceptor.png'
    },
    { 
      id: 3,
      name: 'ship3', 
      imgSrc: '/img/interceptor.png'
    },
  ],
  game: false
};


