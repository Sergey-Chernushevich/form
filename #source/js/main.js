const mainWrapper = document.querySelector("#mainWrapper");
const formWrapper = document.querySelector("#formWrapper");
const openRegistrationFormButton = document.querySelector(
  "#openRegistrationFormButton"
);
const closeFormButton = document.querySelector("#closeFormButton");

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

formWrapper.addEventListener("click", (e) => {
  if (e.target === formWrapper) {
    changeFormVisibility(e);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && formWrapper.classList.contains("active")) {
    changeFormVisibility(event);
  }
});

const formImage = document.getElementById("formImage");

// Функция для обновления изображения в зависимости от ширины экрана
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

// Вызываем функцию при загрузке страницы и при изменении размера окна
updateImage();
window.addEventListener("resize", updateImage);
