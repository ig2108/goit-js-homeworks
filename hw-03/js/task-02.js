'use strict';

const countProps = obj => {
  let total = 0;
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i += 1) {
    total += 1;
  }
  return total;
};

console.log(countProps({}));

console.log(countProps({ name: 'Mango', age: 2 }));

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));
