let key = document.querySelector('#icon-nav i');
let nav = document.getElementById('nav');

key.addEventListener('click', e => {
    if (nav.className.indexOf('nav-expanded') == -1) {
        nav.classList.remove('nav-collapsed');
        nav.classList.add('nav-expanded');
    }
    else{
        nav.classList.remove('nav-expanded');
        nav.classList.add('nav-collapsed')
    }
});