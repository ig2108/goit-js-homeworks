'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  return login.split('').length >= 4 && login.split('').length <= 16
    ? true
    : false;
};

const isLoginUnique = function(allLogins, login) {
  let result;
  for (let uniqueLogin of allLogins) {
    result = allLogins.includes(login) ? false : true;
  }
  return result;
};

const addLogin = function(allLogins, login) {
  if (!isLoginValid(login)) {
    return console.log('Ошибка! Логин должен быть от 4 до 16 символов');
  } else if (!isLoginUnique(allLogins, login)) {
    return console.log('Такой логин уже используется!');
  } else if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
    allLogins.push(login);
    return console.log('Логин успешно добавлен!');
  }
};

addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'

addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'

addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'

addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов
