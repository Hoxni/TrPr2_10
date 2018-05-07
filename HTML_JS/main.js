var default_color;
function mouseIn() {
  default_color = document.buttonLink.but.style.background;
  document.buttonLink.but.style.background = "red";
}
function mouseOut() {
  document.buttonLink.but.style.background = default_color;
}