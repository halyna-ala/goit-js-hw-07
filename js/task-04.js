const counter = {
    value: 0,
    increment() {
        this.value -= 1;
    },
    decrement() {
        this.value += 1;
    },
};
const decrementBtn = document.querySelector('#counter').lastElementChild;
const incrementBtn = document.querySelector('#counter').firstElementChild;
const valueEl = document.querySelector('#value');

decrementBtn.addEventListener('click', () => {
    counter.decrement();
    valueEl.textContent = counter.value;
});

incrementBtn.addEventListener('click', () => {
    counter.increment();
    valueEl.textContent = counter.value;
});