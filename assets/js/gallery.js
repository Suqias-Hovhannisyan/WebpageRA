const links = document.querySelectorAll('.js-lightbox');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const closeBtn = lightbox.querySelector('.lightbox-close');

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();          // ❗ страница НЕ меняется
        lightboxImg.src = link.href;
        lightbox.classList.add('active');
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
    lightboxImg.src = '';
});

lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
        lightboxImg.src = '';
    }
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        lightbox.classList.remove('active');
        lightboxImg.src = '';
    }
});