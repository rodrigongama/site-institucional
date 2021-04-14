let nav = document.querySelector('.nav-top')
let menu = document.querySelector('.side-menu')
let closeMenu = document.querySelector('.close-menu')

nav.addEventListener('click', function(event){
    menu.classList.remove('hidden');
}) 

closeMenu.addEventListener('click', function(event){
    menu.classList.add('hidden')
})


let news = document.querySelector('.float-news')
let open = document.querySelector('.news-open')
let closeNews = document.querySelector('.close-news')

news.addEventListener('click', function(event){
    open.classList.remove('news-hidden');
})

closeNews.addEventListener('click', function(event){
    open.classList.add('news-hidden');
})