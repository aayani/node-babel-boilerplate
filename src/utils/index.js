export const getRandomNumber = (min = 0, max = 10) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const timeout = (ms = 1000) =>
  new Promise((resolve) => setTimeout(resolve, ms));
