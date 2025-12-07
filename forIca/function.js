const qi = (x) => document.getElementById(x);
const qs = (x) => document.querySelector(x);
const delay = (ms) => new Promise(res => setTimeout(res, ms));
const randomInt = (max) => Math.floor(Math.random() * max);
const randomNum = (max) => {
    const n = Math.floor(Math.random() * (max + 1));
    return n % 2 === 0 ? -n : n;
};
