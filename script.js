// Toogle class active 

const navbarNav = document.querySelector ('.navbar-nav'); 

// Ketika menu di klik
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Klik diluar sidebar 
const menu = document.querySelector('#menu'); 

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
}); 