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
const s = document.querySelector(".sec")
const m = document.querySelector(".min")
const h = document.querySelector(".hour")
setInterval(() => {
    const now = new Date()
    const sec = now.getSeconds()
    const min = now.getMinutes()
    const hour = now.getHours()

    s.style.transform = `rotate(${sec *6}deg)`
    m.style.transform = `rotate(${min *6}deg)`
    h.style.transform = `rotate(${hour *30 + m *0.5}deg)`
}, 1000);