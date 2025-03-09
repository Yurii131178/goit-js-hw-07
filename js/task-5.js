function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

document.querySelector(".change-color").addEventListener("click", () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  document.querySelector(".color").textContent = color;
});

const button = document.querySelector("button");

button.style.display = "flex";
button.style.width = "148px";
button.style.height = "40px";
button.style.padding = "8px 16px";
button.style.justifyContent = "center";
button.style.alignItems = "center";
button.style.gap = "10px";
button.style.backgroundColor = "#4E75FF";
button.style.color = "#fff";
button.style.fontFamily = "Montserrat";
button.style.fontSize = "16px";
button.style.fontStyle = "normal";
button.style.fontWeight = "500";
button.style.lineHeight = "1.5";
button.style.letterSpacing = "0.64px";
button.style.borderRadius = "8px";
button.style.border = "none";


const widget = document.querySelector(".widget");

widget.style.marginleft = "auto";
widget.style.color = "#2E2F42";
widget.style.fontFamily = "Montserrat";
widget.style.fontSize = "16px";
widget.style.fontStyle = "normal";
widget.style.fontWeight = "400";
widget.style.lineHeight = "1.5";
widget.style.letterSpacing = "0.64px";




  

