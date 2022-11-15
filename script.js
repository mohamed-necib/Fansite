var masking = document.querySelectorAll(".masking");

// ! Liste des transitions au chargement de la page ACCUEIL

window.addEventListener("load", () => {
  // transition sur le Gros titre
  setTimeout(function () {
    masking[5].querySelector("h1").style.transform = "translateY(0px)";
  }, 800);

  // transition sur le image
  setTimeout(function () {
    masking[7].style.transform = "translate(-50%, -50%) scaleY(1)";
    masking[7].querySelector("img").style.transform = "scale(0.8)";
    masking[7].querySelector("img").style.filter = "brightness(110%)";
  }, 2000);

  // transition sur le logo
  setTimeout(function () {
    masking[0].querySelector("a").style.transform = "translateY(0px)";
  }, 2400);

  //transition sur le bouton menu
  setTimeout(function () {
    masking[1].querySelector("button").style.transform = "translateY(0px)";
  }, 2550);

  //transition sur le bouton dark-mode
  setTimeout(function () {
    masking[2].querySelector("button").style.transform = "translateY(0px)";
  }, 2700);

  // transition sur le bouton search
  setTimeout(function () {
    masking[3].querySelector("button").style.transform = "translateY(0px)";
  }, 2850);

  // transition sur le bouton shop
  setTimeout(function () {
    document.querySelector(".search-button").style.transform = "scale(1)";
  }, 3050);

  // transition sur les liens
  setTimeout(function () {
    masking[4].querySelector("a").style.transform = "translateY(0px)";
    masking[6].getElementsByTagName("a")[0].style.transform = "translateY(0px)";
    masking[6].getElementsByTagName("a")[1].style.transform = "translateY(0px)";
  }, 3200);
});

// Fonction Animation de la souris au mouvement

function animateCursor() {
  window.addEventListener("mousemove", (e) => {
    let topPosition = e.pageY;
    let leftPosition = e.pageX;
    cursor.style.top = topPosition + "px";
    cursor.style.left = leftPosition + "px";
    cursor.style.display = "block";
  });
}
animateCursor();

masking.forEach((mask) => {
  mask.addEventListener("mouseover", () => {
    // fonction permettant l'agrandissement du curseur de la souris lors du passage sur des items portant la classe "masking" .
    cursor.style.transform = "translate(-50%,-50%) scale(1)";
  });
  mask.addEventListener("mouseleave", () => {
    // fonction permettant le rapetissage du curseur de la souris lors du passage sur des items portant la classe "masking".
    cursor.style.transform = "translate(-50%,-50%) scale(0.5)";
  });
});

// ! Fonctionnalités NAVBAR ==========>

const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");

// Ouverture/Fermeture menu
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("menu-open");
});

// Precedente/Suivante Slider Photos

const page = document.querySelectorAll(".page");
const prev = document.querySelector(".precedante");
const next = document.querySelector(".suivante");
const img = document.querySelector(".img-slider");
const overlay = document.querySelector(".overlay");
const anim = document.querySelectorAll(".anim");

// ! Récupération des Variables CSS contenu dans root

const r = document.querySelector(":root");
const rs = getComputedStyle(r);

let id = 0;

// Répertoire Images
const images = [
  "./img/img1.jpeg",
  "./img/img2.jpeg",
  "./img/img3.jpeg",
  "./img/img4.jpeg",
  "./img/img5.jpeg",
  "./img/img6.jpeg",
  "./img/img7.jpeg",
  "./img/img8.jpeg",
  "./img/img9.jpeg",
  "./img/img10.jpeg",
  "./img/img11.jpeg",
  "./img/img12.jpeg",
];

// Thématique couleurs

const colors = [
  "#feb57b",
  "#ffa901",
  "#be516e",
  "#27223f",
  "#468cc2",
  "#45C4B0",
  "#ffa901",
  "#9AEBA3",
  "#F2A71B",
  "#D1CFE2",
  "#9CADCE",
  "#D4AFB9",
];

function reAnim() {
  // fonction permettant de relancer l'animation
  for (let i = 0; i < anim.length; i++) {
    anim[i].style.animation = "none";
    anim[i].offsetHeight;
    anim[i].style.animation = null;
  }
}

function slider(i) {
  // Relance l'animation
  reAnim();
  // Change la source de l'image
  img.src = images[i];
  // Change la couleur Primaire définie
  r.style.setProperty("--secondaire", colors[i]);
  // Switch la class active à la page souhaitée
  // Enleve la class active du reste
  for (let i = 0; i < page.length; i++) {
    page[i].classList.remove("active");
  }
  // Remet la classe active à l'état initial
  page[i].classList.add("active");
}

for (let i = 0; i < page.length; i++) {
  // Ajoute un événement au click sur n'importe quelle pagination
  page[i].addEventListener("click", () => {
    // Démarre la fonction de slider
    slider(i);
    // Définit l'id de la page clickée à index
    id = i;
    // Arrete l'auto slide
    stopAutoslide();
  });
}

// Fonctionnement bouton Precedent
prev.addEventListener("click", () => {
  // On décrémente l'id de l'image
  id--;
  // on vérifie si l'id est plus petit que le nbres de photos
  if (id < 0) {
    id = page.length - 1;
  }
  slider(id);
  stopAutoslide();
});

// Fonctionnement bouton Suivant
next.addEventListener("click", () => {
  nextSlide();
  stopAutoslide();
});

function nextSlide() {
  // on incrémente l'id de l'image
  id++;
  // on vérifie si l'id est plus grand que le nombe d'images disponible
  if (id > page.length - 1) {
    id = 0;
  }
  slider(id);
}

// Slider Automatic
let autoSlide = setInterval(nextSlide, 10000);

// Stop Slider Automatique

function stopAutoSlide() {
  clearInterval(autoSlide);

  // relancer le Slider Automatique
  autoSlide = setInterval(nextSlide, 10000);
}
