const btn = document.querySelector("button");

const colorList = ["red", "green", "blue", "yellow", "gray"];
let currentColor = 0;

btn.addEventListener("click", () => {
  if (currentColor === colorList.length - 1) {
    currentColor = 0;
  } else {
    currentColor = currentColor + 1;
  }

  document.body.style.backgroundColor = colorList[currentColor];
});
