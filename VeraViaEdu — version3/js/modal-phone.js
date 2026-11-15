document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("phoneModal");
  const openBtn = document.getElementById("openPhoneModal");
  const closeBtn = document.querySelector(".phone-modal-close");

  // 1. Открытие окна (только если экран < 360px)
  if (openBtn) {
    openBtn.addEventListener("click", () => {
      if (window.innerWidth < 360) {
        modal.classList.add("active");
        document.body.style.overflow = "hidden"; // Блокируем скролл
      }
    });
  }

  // 2. Закрытие по крестику
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
      document.body.style.overflow = ""; // Возвращаем скролл
    });
  }

  // 3. Закрытие по клику на темный фон
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }

  // 4. Закрытие по нажатию Esc
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
});
