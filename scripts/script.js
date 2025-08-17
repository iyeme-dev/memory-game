const fruitList = [
  "almond.png",
  "apple.png",
  "avocado.png",
  "bananas.png",
  "blackberry.png",
  "blueberry.png",
  "cashew.png",
  "cherries.png",
  "coconut.png",
  "corn.png",
  "date-palm.png",
  "dragon-fruit.png",
  "durian.png",
  "eggplant.png",
  "grapes.png",
  "kiwi.png",
  "lemon.png",
  "mango.png",
  "orange.png",
  "papaya.png",
  "passion-fruit.png",
  "pear.png",
  "pineapple.png",
  "pomegranate.png",
  "pumpkin.png",
  "red-fruit.png",
  "spiky-fruit.png",
  "star-fruit.png",
  "strawberry.png",
  "watermelon.png",
];

const levelDiv = document.getElementById('level');
const board = document.getElementById('game-board');
const timerDiv = document.getElementById('timer');
const messageDiv = document.getElementById('message');
const restartBtn = document.getElementById('restart-btn');

// Manage time limit for each level
// let level = 1;
function getTimeLimit(level) {
    if (level === 1) return 20;
    else if (level <=3) return 30;
    else if (level <=5) return 50;
    else if (level <=8) return 60;
    else if (level <=10) return 80;
    else return 120;
}

// Update grid-size
function getGridSize(level) {
    if (level < 2) return [2,2];
    else if (level < 4) return [3,2];
    else if (level < 6) return [4,3];
    else if (level < 9) return [4,4];
    else if (level < 12) return [5,4];
    else return [6,5];

}

//Select fruits
function pickFruits(pairCount) {
    const fruitArray = [...fruitList];
    let newFruit = [];
    for (let i=0; i< pairCount;i++) {
        const index = Math.floor(Math.random() * fruitArray.length);
        newFruit.push(fruitArray.splice(index,1) [0]);
    }
    return newFruit;

}

// shuffle fruits in grid
function shuffle(arr) {
    for(let i = arr.lenth-1; i > 0; i--) {
        let j = Math.floor(Math.random()*(i+1))
        [arr[i], arr[j]] = [arr[j],arr[i]]
    }
    return arr;
}

// Start each game level
function startLevel () {
    lock = false;
    totalFlips = 0;
    matchedPairs = 0;
    messageDiv.textContent = '';
    restartBtn.style.display = 'none';

    const [cols, rows] = getGridSize(level);
    gridSize = [cols, rows];
    levelTimeLimit = getTimeLimit(level);
    timeLeft = levelTimeLimit;
    levelDiv.textContent = `level ${level} - Match all pairs`
    board.style.gridTemplateColumns = `repeat(${cols}, 60px)`

    let pairs = Math.floor((cols * rows) / 2);
    fruits = pickFruits(pairs);
    let cards = shuffle([...fruits, ...fruits]);
    board.innerHTML = '';

    cards.forEach((fruit, i) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.index = i;
        card.dataset.fruit = fruit;
        card.textContent = ''
        card.addEventListener('click',)
    })
}

// function to handle flips
function handleFlip(e) {
    if (lock) return;
    if (card.classList.contains('flipped')) return;
    card.textContent = card.dataset.fruit;
    card.classList.add('flipped');
    totalFlips++;

    if(!firstCard) {
        firstCard = card;
    }   else {
        lock = true;
        if (firstCard.dataset.fruit === card.dataset.fruit) {
            firstCard.classList.add('matched');
            card.classList.add('matched');
            matchedPairs++;
            firstCard = null;
            lock=false
            if(matchedPairs === fruits.length) {
                endLevel(true)
            }
        }
    }
}

// Function to end level
function endLevel(success) {
    
}
