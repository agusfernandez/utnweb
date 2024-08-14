document.addEventListener('DOMContentLoaded', () => {
    const mini = document.querySelectorAll('.mini');
    const mainImage = document.getElementById('main-image');

    mini.forEach(mini => {
        mini.addEventListener('click', () => {
            const newSrc = mini.src.replace('-mini', '');
            mainImage.src = newSrc;
        });
    });
});