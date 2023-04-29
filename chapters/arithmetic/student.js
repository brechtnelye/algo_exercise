// Schrijf hier je code
function five() {
  return 5;
}

function average() {
  return (135 + 471) / 2;
}

function average2(x, y) {
  return (x + y) / 2;
}

function average3(x, y, z) {
  return (x + y + z) / 3;
}

function distance(x, y) {
  return (x ** 2 + y ** 2) ** 0.5;
}

function busesNeeded(people, busCapacity) {
  return Math.ceil(people / busCapacity);
}

function sugar(pies) {
  return Math.ceil(pies * 0.25);
}

function candyPerChild(children, candy) {
  return Math.floor(candy / children);
}

function leftoverCandy(children, candy) {
  return candy % children;
}

function hours(totalMinutes) {
  return Math.floor(totalMinutes / 60);
}

function minutes(totalMinutes) {
  return totalMinutes % 60;
}

function communicationCosts(seconds) {
  return Math.ceil(seconds / 60) * 0.2;
}

function distance2(x1, y1, x2, y2) {
  let dx = x2 - x1;
  let dy = y2 - y1;

  return (dx ** 2 + dy ** 2) ** 0.5;
}

function cake(eggs) {
  return Math.floor(eggs / 3);
}

function cake2(eggs, flour) {
  let minEggs = Math.floor(eggs / 4);
  let minFlour = Math.floor(flour / 250);
  return Math.min(minEggs, minFlour);
}

function cake3(eggs, flour, sugar, butter) {
  let eggCount = Math.floor(eggs / 4);
  let flourCount = Math.floor(flour / 250);
  let sugarCount = Math.floor(sugar / 250);
  let butterCount = Math.floor(butter / 250);

  return Math.min(eggCount, flourCount, sugarCount, butterCount);
}

function roundToMultiple(n, multipleOf) {
  return Math.round(n / multipleOf) * multipleOf;
}

function middle(a, b, c) {
  let min = Math.min(a, b, c);
  let max = Math.max(a, b, c);

  return a + b + c - min - max; // a, b, c or a, b or a 	// min of a,
}

function boxArea(width, height, depth) {
  return (width * height + width * depth + height * depth) * 2;
}
