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


