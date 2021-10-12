const toggleItem = document.querySelector(".content");
const circleItem = document.querySelector(".box");

toggleItem.addEventListener("click", changeToDark());

function changeToDark() {
  const body = document.body;
  body.classList.toggle("dark-mode");
}
