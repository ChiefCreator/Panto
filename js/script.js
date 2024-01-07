const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    // slidesPerView:4,
    // spaceBetween:42,
    breakpoints: {
        600 : {
            slidesPerView:2,
            spaceBetween:20,
        },
        920 : {
            slidesPerView:3,
            spaceBetween:20,
        },
        1230 : {
            slidesPerView:4,
            spaceBetween:42,
        }
    },

    navigation: {
    nextEl: '#next',
    prevEl: '#prev',
  },
  
  });

// блоки с цветами

let circles = document.querySelectorAll(".circle")

circles.forEach(circle => {

    let btn = circle.lastElementChild
    let info = circle.firstElementChild
    btn.addEventListener("click", function(e) {
        e.stopPropagation()

        if (!info.classList.contains("circle__info-color_act")) {
           
            document.querySelectorAll(".circle__info-color").forEach(inf => {
                inf.classList.remove("circle__info-color_act")
            })
            document.querySelectorAll(".circle__btn").forEach(bt => {
                bt.classList.remove("circle__btn_act")
            })
         
        }

        info.classList.toggle("circle__info-color_act")
        btn.classList.toggle("circle__btn_act")
    })

    window.addEventListener("click", function() {

        if (info.classList.contains("circle__info-color_act")) {
            info.classList.remove("circle__info-color_act")
            btn.classList.remove("circle__btn_act")
        }
    })
})

// Настройка табов

let tabBtns = document.querySelectorAll("[data-tab]")
let tabCards = document.querySelectorAll("[data-tab-value]")

tabCards.forEach(tabCard => {
    
    if (tabCard.dataset.tabValue == "chair") {
        tabCard.classList.remove("swiper-slide_none")
    } else {
        tabCard.classList.add("swiper-slide_none")
    }

    swiper.update()
    swiper.init()
})

tabBtns.forEach(function(tabBtn) {
    tabBtn.addEventListener("click", function() {

        tabBtns.forEach(tabBtn => {
            if (tabBtn.classList.contains("tabs__item_act"))  tabBtn.classList.remove("tabs__item_act")
        })

        tabBtn.classList.add("tabs__item_act")
        
        let dataTab = this.dataset.tab
        
        tabCards.forEach(function(tabCard) {
            let dataTabVal = tabCard.dataset.tabValue
            
            if (dataTab == dataTabVal) {
                tabCard.classList.remove("swiper-slide_none")
            } else {
                tabCard.classList.add("swiper-slide_none")
            }

           
            swiper.update()
            swiper.init()
        })
    })
})

// мобильное меню

let btnMenu = document.querySelector(".nav__btn");
let mobileMenu = document.querySelector(".mobile-nav-wrapper");

btnMenu.addEventListener("click", function() {

    mobileMenu.classList.toggle("mobile-nav-wrapper_act");
    bodyLock()

})

let btnClose = document.querySelector(".mobile-div__close");

btnClose.addEventListener("click", function() {

    mobileMenu.classList.remove("mobile-nav-wrapper_act");
    bodyUnlock()
})

// удаление / добавление скролла

let body = document.querySelector("body")

function bodyLock(){
    let lockPaddingValue = window.innerWidth - document.querySelector("header").offsetWidth + "px"
    
    body.classList.add("body_lock")
    body.style.paddingRight = lockPaddingValue
}

function bodyUnlock() {
    body.classList.remove("body_lock")
    body.style.paddingRight = 0
}