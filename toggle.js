const toggleItem = document.querySelector(".content");
const circleItem = document.querySelector(".box");
circleItem.innerHTML = `<i class="fas fa-moon"></i>`;

toggleItem.addEventListener("click", changeToDark);

function changeToDark(e) {
  const body = document.body;
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    circleItem.style.marginRight = "-2rem";
    // circleItem.style.backgroundColor = "#f3f4f6"
    if (
      e.target.classList[0] === "content" ||
      e.target.classList[0] === "fas"
    ) {
      circleItem.innerHTML = `<i class="fas fa-sun"></i>`;
    }
  } else {
    circleItem.style.marginRight = "2rem";
    // circleItem.style.backgroundColor = "#374151"
    if (
      e.target.classList[0] === "content" ||
      e.target.classList[0] === "fas"
    ) {
      circleItem.innerHTML = `<i class="fas fa-moon"></i>`;
    }
  }
}
