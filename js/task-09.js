function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const body = document.body;
const changeColorBtn = document.querySelector('.change-color');
const nameColor = document.querySelector('.color');

const changeColor = () => {
  nameColor.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
};

changeColorBtn.addEventListener('click', changeColor);
