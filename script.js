"use strict";

const inputEl = document.querySelector(".input");
const upper = document.querySelector(".upper");
const lower = document.querySelector(".lower");
const cap = document.querySelector(".capitalise");
const pascal = document.querySelector(".pascal");
const snake = document.querySelector(".snake");
const kebab = document.querySelector(".kebab");

upper.innerText = inputEl.value.toUpperCase();
lower.innerText = inputEl.value.toLowerCase();
cap.innerText = capitalise(inputEl.value);
pascal.innerText = toPascalCase(inputEl.value);
snake.innerText = toSnakeCase(inputEl.value);
kebab.innerText = toKebabCase(inputEl.value);

function capitalise(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

function toPascalCase(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase()).replace(/\s+/g, "");
}

function toSnakeCase(str) {
  return str.replace(/\S+/g, (char) => char.toLowerCase()).replace(/\s+/g, "_");
}

function toKebabCase(str) {
  return str.replace(/\S+/g, (char) => char.toLowerCase()).replace(/\s+/g, "-");
}

inputEl.addEventListener("input", () => {
  upper.innerText = inputEl.value.toUpperCase();
  lower.innerText = inputEl.value.toLowerCase();
  cap.innerText = capitalise(inputEl.value);
  pascal.innerText = toPascalCase(inputEl.value);
  snake.innerText = toSnakeCase(inputEl.value);
  kebab.innerText = toKebabCase(inputEl.value);
});
