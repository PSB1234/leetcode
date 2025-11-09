/*
 * @lc app=leetcode id=853 lang=typescript
 *
 * [853] Car Fleet
 */

// @lc code=start
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
// @lc code=end

