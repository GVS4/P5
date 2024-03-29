const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// les variables globales
const dots = document.querySelector(".dots");
let index = 0;
const img = document.querySelector(".banner-img");
const p = document.querySelector("#banner p");
const arrow_right = document.getElementById("arrow_right");
const arrow_left = document.getElementById("arrow_left");

///// DISPLAY DOT /////
function displayDot() {
  for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement("div");
    dot.classList.add("dot");
    dots.appendChild(dot);
  }
  let nodeListDots = document.querySelectorAll(".dots .dot");
  nodeListDots[0].classList.add("dot_selected");
}
displayDot();

///// RIGHT ARROW  /////
function indexPlus1() {
  if (index === 0) {
    index++;
  }
}

function ClicOnRightArrow() {
  arrow_right.addEventListener("click", () => {
    indexPlus1();
    let nodeListDots = document.querySelectorAll(".dots .dot");
    nodeListDots[index - 1].classList.remove("dot_selected");
    //reset de 4 à 1
    if (index >= slides.length) {
      nodeListDots[0].classList.add("dot_selected");
      index = 1;
      img.src = `${"./assets/images/slideshow/" + slides[0].image}`;
      p.innerHTML = slides[0].tagLine;
      // de 2 à 4
    } else {
      img.src = `${"./assets/images/slideshow/" + slides[index].image}`;
      p.innerHTML = slides[index].tagLine;
      index++;
      nodeListDots[index - 1].classList.add("dot_selected");
    }
  });
}
ClicOnRightArrow();

///// LEFT ARROW /////
function ClicOnLeftArrow() {
  arrow_left.addEventListener("click", () => {
    let nodeListDots = document.querySelectorAll(".dots .dot");
    index--;
    if (index < 1) {
      index = slides.length;
      nodeListDots[slides.length - 1].classList.add("dot_selected");
      nodeListDots[0].classList.remove("dot_selected");
      img.src = `${
        "./assets/images/slideshow/" + slides[slides.length - 1].image
      }`;
    } else {
      img.src = `${"./assets/images/slideshow/" + slides[index - 1].image}`;
      p.innerHTML = slides[index - 1].tagLine;
      nodeListDots[index - 1].classList.add("dot_selected");
      nodeListDots[index].classList.remove("dot_selected");
    }
  });
}
ClicOnLeftArrow();
