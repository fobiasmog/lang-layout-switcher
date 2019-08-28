"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = langSwitch;

var _ru = require("./langs/ru.json");

var _ru2 = _interopRequireDefault(_ru);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapLetter(letter) {
  var mappedLetter = _ru2.default[letter.toLowerCase()] || letter;
  if (letter.search(/[A-Z]/) === 0) mappedLetter = mappedLetter.toUpperCase();
  return mappedLetter;
}

function langSwitch(value) {
  if (typeof value !== 'string') return value;
  return value.split('').map(mapLetter).join('');
}