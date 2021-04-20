let nav = document.querySelector('.nav-top')
let menu = document.querySelector('.side-menu')
let closeMenu = document.querySelector('.close-menu')

nav.addEventListener('click', event => {
    menu.classList.remove('hidden')
}) 

closeMenu.addEventListener('click', event => {
    menu.classList.add('hidden')
})


let news = document.querySelector('.float-news')
let open = document.querySelector('.news-open')
let closeNews = document.querySelector('.close-news')
let layer = document.querySelector('.layer')

news.addEventListener('click', event => {
    open.classList.remove('news-hidden')
    layer.classList.add('layer-active')
})

closeNews.addEventListener('click', event => {
    open.classList.add('news-hidden')
    layer.classList.remove('layer-active')
})