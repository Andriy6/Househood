console.clear()
document.addEventListener("DOMContentLoaded", () => {
    // Це гарантує, що DOM повністю завантажений, перш ніж намагатися отримати досту
    setTimeout(() => {
        // Ця подія спрацьовує, коли вся сторінка (включно із зображеннями, скриптам
        let loader = document.querySelector(".loader");
        let container = document.querySelector(".container");

        if (loader) {
            loader.style.display = "none"; // Приховати лоадер
        }
        if (container) {
            container.style.display = "block"; // Показати основний контент
        }
    }, 5000);
});