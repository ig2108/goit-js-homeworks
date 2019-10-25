'use strict';

class StringBuilder {
  constructor(value) {
    this._value = [value];
  }

  get value() {
    return this._value;
  }

  // arrayJoin(array) {
  //   array = [array.join('')];
  // }

  append(str) {
    this._value.push(str);
    this._value = [this._value.join('')];
  }

  prepend(str) {
    this._value.unshift(str);
    this._value = [this._value.join('')];
  }

  pad(str) {
    this._value.push(str);
    this._value.unshift(str);
    this._value = [this._value.join('')];
  }
}

const builder = new StringBuilder('.');
console.log(builder);

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
