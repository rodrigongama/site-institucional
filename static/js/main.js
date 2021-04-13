var nav = document.querySelector('.nav-top')
var menu = document.querySelector('.side-menu')
var closeMenu = document.querySelector('.close-menu')

nav.addEventListener('click', function(event){
    menu.classList.remove('hidden');
}) 

closeMenu.addEventListener('click', function(event){
    menu.classList.add('hidden')
})