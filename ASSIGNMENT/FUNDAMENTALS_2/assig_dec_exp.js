'use strict';

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const res1 = percentageOfWorld1(1441);
const res2 = percentageOfWorld2(1441);

console.log(res1.toFixed(2));
console.log(res2.toFixed(2));