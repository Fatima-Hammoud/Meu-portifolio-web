// script.js
const newsContainer = document.querySelector('.news-container');
const newsItems = document.querySelectorAll('.news');

let scrollAmount = 0;

setInterval(() => {
    scrollAmount += 1; // Ajuste a velocidade da rolagem
    newsContainer.style.transform = `translateX(-${scrollAmount}px)`;

    // Reiniciar a rolagem
    if (scrollAmount >= newsContainer.scrollWidth) {
        scrollAmount = 0;
    }
}, 30); // Tempo entre as mudanças
