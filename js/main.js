const mainWrapper = document.querySelector("#mainWrapper");
const modalWrapper = document.querySelector("#modalWrapper");
const modalButtonsList = document.querySelectorAll(".modal-button");

if (modalButtonsList.length > 0) {
  modalButtonsList.forEach((modalButton) => {
    modalButton.addEventListener("click", function (e) {
      e.preventDefault();
      buttonData = {};
      const modalType = this.getAttribute("data-buttonType");
      buttonData.modalType = modalType;
      if (modalType === "image") {
        buttonData.imageSrc = this.src;
      }
      openModal(buttonData);
    });
  });
}

function openModal(modalData) {
  changeModalVisibility();
  switch (modalData.modalType) {
    case "openForm":
      modalWrapper.innerHTML = formGeneration();

      break;
    case "image":
      modalWrapper.innerHTML = imageModalGeneration(modalData.imageSrc);
      break;
  }
}

function formGeneration() {
  return `<form action="submit" onsubmit="return false;" class="registrationForm">
  <button id="closeModalButton" class="closeModalButton" onclick="changeModalVisibility()"></button>
  <h2 class="subTitle">Войти в систему</h2>
  <input
    class="input email"
    type="text"
    placeholder="Email/Телефон"
    suggested="username"
  />
  <input
    class="input password"
    type="password"
    placeholder="Пароль"
    autocomplete="current-password"
  />
  <label class="rememberMe" for="rememberMe"
    ><input class="input rememberMe" type="checkbox" id="rememberMe" />
    Запомнить пароль</label
  >
  <button class="recoverPassword button">Восстановить</button>
  <button id="logIn" class="logIn button">Войти</button>
  <button id="regIn" class="regIn button">Зарегестрироваться</button>
</form>`;
}

function imageModalGeneration(path) {
  return `<button id="closeModalButton" class="closeModalButton" onclick="changeModalVisibility()" ></button>
  <img class="modalImage" src='${path}' alt="image" />`;
}

function changeModalVisibility() {
  modalWrapper.classList.toggle("active");
  isClose = false;
  modalWrapper.style.top = `${window.scrollY}px`;
  if (modalWrapper.className.includes("active")) {
    mainWrapper.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}

//close form by background click

modalWrapper.addEventListener("click", (e) => {
  if (e.target === modalWrapper) {
    changeModalVisibility();
  }
});

// //close form by escape button

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modalWrapper.classList.contains("active")) {
    changeModalVisibility();
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
