'use strict';

import users from './users.js';

//======================== TASK 01 ========================

const getUserNames = users => users.map(({ name }) => name);

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

//======================== TASK 02 ========================

const getUsersWithEyeColor = (users, color) =>
  users.filter(({ eyeColor }) => eyeColor === color);

console.table(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//======================== TASK 03 ========================

const getUsersWithGender = (users, gend) =>
  users.filter(({ gender }) => gender === gend).map(({ name }) => name);

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//======================== TASK 04 ========================

const getInactiveUsers = users => users.filter(({ isActive }) => !isActive);

console.table(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//======================== TASK 05 ========================

const getUserWithEmail = (users, mail) =>
  users.find(({ email }) => email === mail);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

//======================== TASK 06 ========================

const getUsersWithAge = (users, min, max) =>
  users.filter(({ age }) => min < age && age < max);

console.table(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.table(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//======================== TASK 07 ========================

const calculateTotalBalance = users =>
  users.reduce((acc, { balance }) => (acc += balance), 0);

console.log(calculateTotalBalance(users)); // 20916

//======================== TASK 08 ========================

const getUsersWithFriend = (users, friendName) =>
  users
    .filter(({ friends }) => friends.includes(friendName))
    .map(({ name }) => name);

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

//======================== TASK 09 ========================

const getNamesSortedByFriendsCount = users =>
  users
    .sort((userA, userB) => userA.friends.length - userB.friends.length)
    .map(({ name }) => name);

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//======================== TASK 10 ========================

const getSortedUniqueSkills = users =>
  users
    .reduce((allSkills, { skills }) => [...allSkills, ...skills], [])
    .filter((skill, index, allSkills) => allSkills.indexOf(skill) === index)
    .sort((b, a) => b.localeCompare(a, 'en'));

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
