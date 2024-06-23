const mainWrapper = document.querySelector("#mainWrapper");
const formWrapper = document.querySelector("#formWrapper");
const openRegistrationFormButton = document.querySelector(
  "#openRegistrationFormButton"
);
const closeFormButton = document.querySelector("#closeFormButton");

// scripts for modal window

function changeFormVisibility(e) {
  e.preventDefault();
  formWrapper.classList.toggle("active");
  if (mainWrapper.style.overflow === "scroll") {
    mainWrapper.style.overflow = "hidden";
  } else {
    mainWrapper.style.overflow = "auto";
  }
}

openRegistrationFormButton.addEventListener("click", (e) => {
  changeFormVisibility(e);
});

closeFormButton.addEventListener("click", (e) => {
  changeFormVisibility(e);
});

//close form by background click

formWrapper.addEventListener("click", (e) => {
  if (e.target === formWrapper) {
    changeFormVisibility(e);
  }
});

//close form by escape button

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && formWrapper.classList.contains("active")) {
    changeFormVisibility(event);
  }
});

//using different pictures depending on window width

const formImage = document.getElementById("formImage");

function updateImage() {
  if (window.innerWidth <= 375) {
    formImage.src = "./assets/computer-375.jpg";
  }
  if (window.innerWidth <= 768 && window.innerWidth > 375) {
    formImage.src = "./assets/computer-768.jpg";
  }
  if (window.innerWidth <= 1440 && window.innerWidth > 768) {
    formImage.src = "./assets/computer-1440.jpg";
  } else {
    formImage.src = "./assets/computer-1920.jpg";
  }
}

updateImage();
window.addEventListener("resize", updateImage);
