'use strict';
function describeCountry(country, population, capitalCity) {
    const result = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return result;
}

let det1 = describeCountry('India', 1.44, 'New Delhi');
let det2 = describeCountry('Finland', 6, 'Helsinki');

console.log(det1);
console.log(det2);