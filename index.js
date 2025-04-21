// находим html элемент с помощью функции querySelector (если много querySelectorAll) и записываем в переменную cells
const cells = document.querySelectorAll(".cell");

// функция которая возвращает любой случайный цвет
function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // от 0 до 255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
// cells[0].addEventListener('mouseover', function() {
//     // создаем переменную randomColor. И присваиваем ей значение которая возвращает функция getRandomColor с помощью return
//     const randomColor = getRandomColor(); //получаем случайный цвет
//     cells[0].style.backgroundColor = randomColor //меняем цвет
//     console.log(randomColor);
// }
// )

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("mouseover", function () {
    const randomColor = getRandomColor();
    cells[i].style.backgroundColor = randomColor;
  });
}

for (let i = 0; i < cells.length; i++) {
  const clear = document.querySelector(".clear");
  clear.addEventListener("click", function () {
    cells[i].style.backgroundColor = "white";
  });
}


