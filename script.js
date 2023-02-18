const btnMobile = document.getElementById('btn-mobile');
const close = document.querySelector('#nav ul')
const nav = document.getElementById('nav');

function toggleMenu(e) {
    if(e.type === 'touchstart') e.preventDefault();

    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    e.currentTarget.setAttribute('aria-expanded', active);
    if(active) {
        e.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        e.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    }
}
function closeMenu(){
    if(nav.classList.contains('active')) {
        nav.classList.remove('active')
    }
}
close.addEventListener('click', closeMenu)
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);