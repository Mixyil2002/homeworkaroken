document.addEventListener("DOMContentLoaded", () => {
  const menuPanel = document.getElementById("mobileContactMenu");
  const overlay = document.getElementById("mobileMenuOverlay");
  const openBtn = document.getElementById("openPhoneModal"); // Ваша иконка
  const closeBtn = document.getElementById("closeContactMenu");

  // Открытие панели
  if (openBtn) {
    openBtn.addEventListener("click", (e) => {
      e.preventDefault();
      menuPanel.classList.add("active");
      overlay.classList.add("active");
      document.body.style.overflow = "hidden"; // Блокируем скролл страницы
    });
  }

  // Закрытие панели (крестик)
  const closeMenu = () => {
    menuPanel.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  };

  if (closeBtn) {
    closeBtn.addEventListener("click", closeMenu);
  }

  // Закрытие при клике на затемненный фон
  if (overlay) {
    overlay.addEventListener("click", closeMenu);
  }
});
