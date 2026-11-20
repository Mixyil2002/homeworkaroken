document.addEventListener("DOMContentLoaded", () => {
  // Находим нашу кнопку-переключатель
  const scrollBtn = document.getElementById("scrollDownBtn");

  // Находим блок, к которому будем скроллить
  const targetSection = document.getElementById("next-section");

  if (scrollBtn && targetSection) {
    scrollBtn.addEventListener("click", (e) => {
      e.preventDefault(); // Отменяем стандартный переход по ссылке (#)

      // Плавно прокручиваем страницу к целевому блоку
      targetSection.scrollIntoView({
        behavior: "smooth", // Плавная прокрутка
        block: "start", // Выравнивание по верхнему краю блока
      });
    });
  }
  scrollBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // Добавляем эффект нажатия
  scrollBtn.classList.add("is-active");

  // Прокручиваем через небольшую задержку, чтобы анимация началась
  setTimeout(() => {
    targetSection.scrollIntoView({ behavior: "smooth" });
    scrollBtn.classList.remove("is-active"); // Убираем класс через время
  }, 100);
});
});


