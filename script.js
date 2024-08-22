const bodyElement = document.querySelector('body');
const fontMap = {
  Arimo: "Basic",
  Basic: "Inria Serif",
  "Inria Serif": "Arimo"
}

let currentFont = bodyElement.style.fontFamily;

bodyElement.addEventListener("mouseover", function() {
  bodyElement.style.fontFamily = fontMap[currentFont];
  currentFont = bodyElement.style.fontFamily;
});