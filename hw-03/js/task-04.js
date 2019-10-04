'use strict';

const countTotalSalary = employees => {
  let total = 0;
  for (const salary of Object.values(employees)) {
    total += salary;
  }
  return total;
};

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
);

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
);
