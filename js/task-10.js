function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector("#controls button[data-create]");
const destroyBtn = document.querySelector("#controls button[data-destroy]");
const boxes = document.querySelector("#boxes");
const input = document.querySelector("#controls input[type=number]");

const getItemMarkup = (index) => `<div class="item"
 style="width: ${30 + 10 * index}px; height: ${30 + 10 * index}px; 
 background-color: ${getRandomHexColor()}"></div>`

const getItemListMarkup = (amount) => Array(amount).fill('').map((_, i) => getItemMarkup(i)).join('')

const handleClickCreate = () => {
  clearBoxes();
  createBoxes(Number(input.value))
}
const handleClickDestroy = () => clearBoxes();

createBtn.addEventListener('click', handleClickCreate);
destroyBtn.addEventListener('click', handleClickDestroy);

const createBoxes = (amount) => boxes.insertAdjacentHTML('afterbegin', getItemListMarkup(amount));

const clearBoxes = () => {
  while (boxes.childNodes.length > 0) {
    boxes.firstChild.remove();
  }
}