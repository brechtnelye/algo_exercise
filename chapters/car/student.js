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

function slalom(car) {
    forwardUntilWall(car);
    turnLeft(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnLeft(car);
    forwardUntilWall(car);
    turnLeft(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
}

function leftOrRight(car) {
    turnLeft(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnLeft(car);
    forwardUntilWall(car);
}

function incompleteU(car) {
    
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
}

function whichDirection(car) {
    while(sensor(car)) {
        turnRight(car);
    }
    forwardUntilWall(car);
}

function sensorRight(car) {
    turnRight(car)
    let result = sensor(car);
    turnLeft(car);

    return result;
}

function firstRight(car) {
    forwardUntilFreeRight(car)
    turnRight(car);
    forwardUntilWall(car);
}

function sensorLeft(car) {
    turnLeft(car);
    let result = sensor(car);
    turnRight(car);

    return result;
}

function firstLeft(car) {
    forwardUntilFreeLeft(car)
    turnLeft(car);  
    forwardUntilWall(car);
}

function zigZag(car) {
    firstRight(car);
    turnLeft(car);
    forward(car);
    firstLeft(car);       // Start at beginning of path.  Turn right until wall.  Forward until wall.  Turn left until wall.  Forward until wall.  Turn right until wall.  Forward until wall.  Turn left until wall.  Forward until wall.  Turn right until wall.  Forward until wall.  Turn right until wall.  Forward until wall.  Turn left until wall.  Forward until wall.  Turn right until wall.  Forward until wall.  Turn right until wall.  Forward until wall.  Turn left until wall.  Forward until wall.  Turn right unti
}

function forwardUntilFreeRight(car) {
    while(sensorRight(car)) {
        forward(car);
    }
}

function forwardUntilFreeLeft(car) {
    while(sensorLeft(car)) {
        forward(car);
    }
}

function secondRight(car) {
    forwardUntilFreeRight(car);
    forward(car);
    firstRight(car);
}

function thirdRight(car) {
    forwardUntilFreeRight(car);
    forward(car);
    secondRight(car);
}

function forwardUntillNthRight(car, nrights) { 
    let i = nrights;

    while(i > 0) {
        forward(car);
        if (!sensorRight(car)) {
            i--;
        }
    }
}

function forwardUntillNthLeft(car, nlefts) { 
    let i = nlefts;

    while(i > 0) {
        forward(car);
        if (!sensorLeft(car)) {
            i--;
        }
    }
}



function fourthRight(car) {
    forwardUntillNthRight(car, 4);
    firstRight(car);
}

function fifthLeft(car) {
    forwardUntillNthLeft(car, 5);
    firstLeft(car);
}
  // UC:  forward until wall, turn left, forward until wall, turn right, forward until wall, turn left, forward until wall  - this is not the most efficient way to do it, but it works for now.                                