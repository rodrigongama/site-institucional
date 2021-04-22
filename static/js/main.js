const Navigation = {
    init: function (){
        this.addListeners();
    },
    addListeners: function(){
        let nav = $('.nav-top')
        let menu = $('.side-menu')
        let closeMenu = $('.close-menu')

        nav.on('click', event => {
            menu.removeClass('hidden')
        }) 

        closeMenu.on('click', event => {
            menu.addClass('hidden')
        })
    }
}

const Float = {
    init: function(){
        this.addSlick();
    },
    addSlick: function(){
        $('.section-float').slick({
            infinite: false,
            autoplay: true,
            autoplaySpeed: 2500,
        });
    }
}

const News = {
    init: function(){
        this.addListeners();
    },
    addListeners: function(){
        let news = $('.float-news')
        let open = $('.news-open')
        let closeNews = $('.close-news')
        let layer = $('.layer')

        news.on('click', event => {
            open.removeClass('news-hidden')
            layer.addClass('layer-active')
        })

        closeNews.on('click', event => {
            open.addClass('news-hidden')
            layer.removeClass('layer-active')
        })
    }
}

const Paterns = {
    init: function(){
        this.addSlick();
    },
    addSlick: function(){
        $('.partners').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
              
            ]
        });
    }
}

Navigation.init();
Float.init();
News.init();
Paterns.init();