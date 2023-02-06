

const input = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

// const handleInput = () => text.style.fontSize = `${input.value}px`;

const handleInput = () => text.style.fontSize = input.value + "px";


handleInput();

input.addEventListener('input', handleInput)