let scrollControl = document.querySelector('.explore-about');
let slideButtons = document.querySelectorAll('#slide-buttons button');

slideButtons.forEach(icon => {
    icon.addEventListener('click', () => {
        scrollControl.scrollLeft += icon.id === 'left' ? -1400 : 1400;
    })
})