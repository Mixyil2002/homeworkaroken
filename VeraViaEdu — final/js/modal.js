document.addEventListener("DOMContentLoaded", () => {
  const modalOverlay = document.getElementById("webinarModal");

  // 1. МЕНЯЕМ ЭТУ СТРОКУ: Ищем вашу кнопку по классу из скриншота
  // Используем querySelectorAll, так как таких кнопок может быть несколько
  const openButtons = document.querySelectorAll(".button__cheak");

  const closeBtn = document.querySelector(".modal-close");

  // 2. МЕНЯЕМ ЛОГИКУ ОТКРЫТИЯ:
  // Перебираем все найденные кнопки и вешаем на каждую событие клика
  openButtons.forEach((button) => {
    button.addEventListener("click", () => {
      modalOverlay.classList.add("active");
      document.body.style.overflow = "hidden"; // Блокируем прокрутку фона
    });
  });

  // Закрыть по крестику
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modalOverlay.classList.remove("active");
      document.body.style.overflow = ""; // Возвращаем прокрутку
    });
  }

  // Закрыть по клику на темный фон (вне окна)
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  // Закрыть по нажатию Esc
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
      modalOverlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
});
