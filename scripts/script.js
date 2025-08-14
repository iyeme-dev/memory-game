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

// Manage time limit for each level
let level = 1;

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
function shuffle(arr){
    for(let i=arr.lenth-1; i>0; i--){
        let j - Math.floor(Math.random()*(i+1))
        [arr[i], arr[j]] = [arr[j],arr[i]]
    }
    return arr;
}