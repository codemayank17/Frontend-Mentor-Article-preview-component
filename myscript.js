document.querySelector(".shareicon").addEventListener("mouseenter", () => {
  document.querySelector(".social").style.transform = "translateY(0%)";
  document.querySelector(".shareicon").style.backgroundColor =
    "hsl(214, 17%, 51%)";
  document.querySelector(".icon").style.fill = "white";
});

document.querySelector(".shareicon").addEventListener("mouseleave", () => {
  (document.querySelector(".social").style.transform = "translateY(100%)"),
    (document.querySelector(".shareicon").style.backgroundColor =
      "hsl(210, 46%, 95%)");
  document.querySelector(".icon").style.fill = "#6E8098";
});

document.querySelector(".social").addEventListener("mouseleave", () => {
  (document.querySelector(".social").style.transform = "translateY(100%)"),
    (document.querySelector(".shareicon").style.backgroundColor =
      "hsl(210, 46%, 95%)");
  document.querySelector(".icon").style.fill = "#6E8098";
});

document.querySelector(".social").addEventListener("mouseenter", () => {
  document.querySelector(".social").style.transform = "translateY(0%)";
  document.querySelector(".shareicon").style.backgroundColor =
    "hsl(214, 17%, 51%)";
  document.querySelector(".icon").style.fill = "white";
});

document.querySelector(".social").addEventListener("press", () => {
  document.querySelector(".social").style.transform = "translateY(0%)";
  document.querySelector(".shareicon").style.backgroundColor =
    "hsl(214, 17%, 51%)";
  document.querySelector(".icon").style.fill = "white";
});
