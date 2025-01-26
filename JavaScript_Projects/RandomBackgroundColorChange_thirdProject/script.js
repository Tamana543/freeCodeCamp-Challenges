const darkColorsArr = [
    "#2C3E50",
    "#34495E",
    "#2C2C2C",
    "#616A6B",
    "#4A235A",
    "#2F4F4F",
    "#0E4B5A",
    "#36454F",
    "#2C3E50",
    "#800020",
  ];
  const body = document.querySelector("body")
  const dataEl = document.querySelector(".data");
  const btn = document.getElementById("mainBtn");
  function colorFunction(){


const randomData = Math.floor(darkColorsArr.length * Math.random())
const color = darkColorsArr[randomData]
body.style.backgroundColor = color;
dataEl.textContent = color;
  }
  btn.addEventListener("click",colorFunction)