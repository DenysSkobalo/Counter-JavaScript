const increment = document.getElementById('plus');
const decrement =document.getElementById('minus');
const counter = document.getElementById('output');

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