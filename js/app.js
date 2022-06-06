const increment = document.getElementById('increase');
const decrement =document.getElementById('decrease');
const counter = document.getElementById('counter');

const state = {
    count: 0,
};

increment.addEventListener('click', add);
decrement.addEventListener('click', takeAway);

function add() {
    counter.textContent = state.count += 1;
};

function takeAway() {
    counter.textContent = state.count -= 1;
};