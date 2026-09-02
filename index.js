const menuToggle= document.getElementById('menu-tggle');
const closeBtn= document.getElementById('close-btn');
const navLink= document.getElementById('nav-link');
const navItems= document.querySelectorAll('#nav-link a');

menuToggle.addEventListener('click',function(){
    navLink.classList.add('active');
});
closeBtn.addEventListener('click',function(){
    navLink.classList.remove('active');
});
navItems.forEach(link=> {
    link.addEventListener('click', function(){
        navLink.classList.remove('active');
    });
});