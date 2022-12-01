const bill = 275;
let tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.20 * bill;
console.log(`The bill was ${bill}, the tip was ${(tip).toFixed(2)} and the total value was ${(Number(bill) + Number((tip).toFixed(2)))}.`);