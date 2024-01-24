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

// test divers

// les variables globales
dots = document.querySelector(".dots");

// affichage des dots
function displayDot() {
  let index = 0;
  for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement("div");
    dot.classList.add("dot");
    dots.appendChild(dot);
    if (index === i) {
      dot.classList.add("dot_selected");
    }
  }
}
displayDot();
// Affichage au click Droit * /
// Affichage au click Gauche * /

// left arrow
let arrow_left = document.getElementById("arrow_left");
arrow_left.addEventListener("click", () => {
  console.log("clic sur flèche gauche");
});

// right arrow
let arrow_right = document.getElementById("arrow_right");
arrow_right.addEventListener("click", () => {
  console.log("clic sur flèche droite");
});
