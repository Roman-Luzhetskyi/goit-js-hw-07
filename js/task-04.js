

const buttonIncrement = document.querySelector('button[data-action = "increment"]');
const buttonDecrement = document.querySelector('button[data-action = "decrement"]');
const result = document.querySelector("#value");
let counterValue = 0;

const handleClickbuttonIncrement = () => result.textContent = counterValue += 1;

const handleClickbuttonDecrement = () => result.textContent = counterValue -= 1;

buttonDecrement.addEventListener("click", handleClickbuttonDecrement)
buttonIncrement.addEventListener("click", handleClickbuttonIncrement)












// const buttonIncrement = document.querySelector('button[data-action = "increment"]');
// const buttonDecrement = document.querySelector('button[data-action = "decrement"]');
// const result = document.querySelector("#value");
// let counterValue = 0;

// const handleClickbuttonIncrement = () => addMarkup(counterValue += 1);

// const handleClickbuttonDecrement = () => addMarkup(counterValue -= 1);

// const addMarkup = value => result.innerHTML = `${value}`;
// buttonDecrement.addEventListener("click", handleClickbuttonDecrement);
// buttonIncrement.addEventListener("click", handleClickbuttonIncrement);