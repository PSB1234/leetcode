// Last updated: 16/7/2026, 9:18:18 pm
function carFleet(target: number, position: number[], speed: number[]): number {
    const car: [position: number, speed: number, time: number][] = [];
    for (let i = 0; i < position.length; i++) {
        car[i] = [position[i], speed[i], (target - position[i]) / speed[i]];
    }
    car.sort((a, b) => b[0] - a[0]);
    let slowestCar = 0;
    let j = 1;
    let Fleet = 0;
    while (slowestCar < car.length && j < car.length) {
        let timeOfSlowestCar = car[slowestCar][2];
        let timeOfAnotherCar = car[j][2];
        if (timeOfSlowestCar >= timeOfAnotherCar) {
            j++;
        } else {
            Fleet++;
            slowestCar = j;
            j++;
        }
    }
    return Fleet + 1;

};