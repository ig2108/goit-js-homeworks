'use strict';

let user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

const userChange = {
  mood: 'happy',
  hobby: 'javascript',
  premium: false,
};

user = Object.assign(user, userChange);

const userKeys = Object.keys(user);

for (const userKey of userKeys) {
  console.log(`${userKey} : ${user[userKey]}`);
}
