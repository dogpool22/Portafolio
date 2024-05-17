// scripts.js
// Aquí puedes añadir JavaScript para funcionalidades adicionales si es necesario
document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const images = document.querySelectorAll(".carousel-images img");
    const totalImages = images.length;

    function showNextImage() {
        images[currentIndex].classList.remove("visible");
        currentIndex = (currentIndex + 1) % totalImages;
        images[currentIndex].classList.add("visible");
    }

    images[currentIndex].classList.add("visible");
    setInterval(showNextImage, 5000); // Cambia la imagen cada 3 segundos
});

// JavaScript para agregar o quitar la clase 'slide' al menú
/*document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector(".cards-menu");
    const toggleButton = document.querySelector("#toggle-menu");

    toggleButton.addEventListener("click", function() {
        menu.classList.toggle("slide");
    });
});
*/



