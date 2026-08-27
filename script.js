/* =========================
   MOBILE MENU
========================= */

const menuBtn =
  document.getElementById("menuBtn");

const navMenu =
  document.getElementById("navMenu");


menuBtn.onclick = function () {

  navMenu.classList.toggle("show");

};


document
  .querySelectorAll("#navMenu a")
  .forEach(function (link) {

    link.onclick = function () {

      navMenu.classList.remove("show");

    };

  });



/* =========================
   DARK / LIGHT MODE
========================= */

const themeBtn =
  document.getElementById("themeBtn");


if (localStorage.theme === "dark") {

  document.body.classList.add("dark");

  themeBtn.textContent = "☀️";

}


themeBtn.onclick = function () {

  document.body.classList.toggle("dark");

  const dark =
    document.body.classList.contains("dark");

  themeBtn.textContent =
    dark ? "☀️" : "🌙";

  localStorage.theme =
    dark ? "dark" : "light";

};



/* =========================
   PROJECT DATA
========================= */

const projects = {

  pet: {

    number: "PROJECT 01",

    title: "Pet Care Website",

    description:
      "A responsive pet-care web application for vaccinations, food schedules, medicine reminders and health records.",

    tech: [
      "Figma",
      "Adobe XD",
      "HTML",
      "CSS",
      "JavaScript"
    ]

  }

};



/* =========================
   PROJECT MODAL
========================= */

function openProject(name) {

  const project =
    projects[name];

  document.getElementById(
    "modalNumber"
  ).textContent =
    project.number;


  document.getElementById(
    "modalTitle"
  ).textContent =
    project.title;


  document.getElementById(
    "modalDescription"
  ).textContent =
    project.description;


  document.getElementById(
    "modalTech"
  ).innerHTML =
    project.tech
      .map(function (tech) {

        return `<span>${tech}</span>`;

      })
      .join("");


  document
    .getElementById("projectModal")
    .classList.add("show");

}



function closeProject() {

  document
    .getElementById("projectModal")
    .classList.remove("show");

}



document
  .getElementById("projectModal")
  .onclick = function (event) {

    if (
      event.target ===
      document.getElementById("projectModal")
    ) {

      closeProject();

    }

  };



/* =========================
   SCROLL ANIMATION
========================= */

const observer =
  new IntersectionObserver(

    function (entries) {

      entries.forEach(function (entry) {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "visible"
          );

          observer.unobserve(
            entry.target
          );

        }

      });

    },

    {
      threshold: 0.12
    }

  );


document
  .querySelectorAll(".reveal")
  .forEach(function (element) {

    observer.observe(element);

  });
