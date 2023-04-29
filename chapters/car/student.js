// Schrijf hier je code
function myFirstFunction(bike) {
    forward(bike);

}

function twiceForward(bike) {
    forward(bike);
    forward(bike);
}

function thriceForward(bike) {
    forward(bike);
    forward(bike);
    forward(bike);
}

function forward4(bike) {
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
}

function forward5(bike) {
    let i = 5;
    while(i>0) {
        forward(bike);
        i--;
    }
}

function forward10(bike) {
    let i = 10;
    while(i>0) {
        forward(bike);
        i--;
    }
}

function right(bike) {
    turnRight(bike);
    forward(bike);
}

function ellShape(bike) {
    forward5(bike);
    turnRight(bike);
    forward4(bike);
}

function uTurn(bike) {
    thriceForward(bike);
    turnRight(bike);
    forward10(bike);
    turnRight(bike);
    twiceForward(bike);
}

function forwardN(bike, steps) {
    let i = steps;

    while(i > 0) {
        forward(bike);
        i--;
    }
}

function crookedUTurn(bike) {
    forwardN(bike, 7);
    turnRight(bike);
    forwardN(bike, 9);
    turnRight(bike);
    forwardN(bike, 3);
}

function forwardUntilWall(bike) {
    while(!sensor(bike)) {
        forward(bike);
    }
}

function smartEllShape(bike) {
    forwardUntilWall(bike);
    turnRight(bike);
    forwardUntilWall(bike);
}

function spiral(car) {
    while(!sensor(car)) {
        forwardUntilWall(car);
        turnRight(car);
    }
}

function turnLeft(car) {
    turnRight(car);
    turnRight(car);
    turnRight(car);
}

function left(car) {
    turnLeft(car);
    forward(car);
}