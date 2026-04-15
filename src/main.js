import './styles/header.scss'
import './styles/main.scss'
import './styles/footer.scss'
import './styles/media.scss'

let burgerAside = document.querySelector('.burger-aside');
let burger = document.querySelector('.burger');
let burgerOpen = document.querySelector('#burger--open');
let burgerOverlay = document.querySelector('.burger-overlay');

let header = document.querySelector('.header-burger');
let headerBurgerOpen = document.querySelector('.header-burger--open');
let headerTop = document.querySelector('.header-top');

let burgerLine = headerTop.querySelector('.header-top__burger-line');
let headerTopLine = headerTop.querySelector('.header-top__line');

let headerTopCall = headerTop.querySelector('.header-top__call');
let headerTopMessage = headerTop.querySelector('.header-top__message');
let headerTopPerson = headerTop.querySelector('.header-top__person');
let headerTopSettingsBtn = headerTop.querySelector('.header-top__settings-btn');
let headerTopSearchBtn = headerTop.querySelector('.header-top__search-btn');
let headerTopSearch = headerTop.querySelector('.header-top__search');

let headerMain = document.querySelector('.header-main');
let container = document.querySelector('.container');

let heading = document.querySelector('.heading');

let mainMenu = document.querySelector('#main-menu');
let burgerMenu = document.querySelector('#burger-menu');

let menuFooter = document.querySelector('#menu-footer');

let info = document.querySelector('.info');

let main = document.querySelector('.main');

burger.addEventListener('click', function (evt) {
    evt.preventDefault();
    burgerAside.classList.remove('burger-aside--none');
    burgerOverlay.classList.add('burger-overlay--open');
});

burgerOpen.addEventListener('click', function (evt) {
    evt.preventDefault();
    burgerAside.classList.add('burger-aside--none');
    burgerOverlay.classList.remove('burger-overlay--open');
});

// burgerOverlay

document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
        evt.preventDefault();
        burgerAside.classList.add('burger-aside--none');
        burgerOverlay.classList.remove('burger-overlay--open');
        burgerOverlay.style.display = 'none';
    }
});

const mediaQuery1120 = window.matchMedia('(min-width: 1120px)');
let logo = document.querySelector('.logo');
let headerTopSearchText = document.querySelector('.header-top__search-text');
let headerTopSettings = document.querySelector('.header-top__settings');

function updateDesktopClasses() {
    const isDesktop = mediaQuery1120.matches;
    const isMenuOpen = burgerOpen.classList.contains('burger--open');
    
    if (isDesktop) {
        if (isMenuOpen) {
            // logo.classList.add('header--open__logo');
            headerTopSearchText.classList.add('header-top--open__search-text');
            headerTopSettings.classList.add('header-top__settings--none');
        } else {
            logo.classList.remove('header--open__logo');
            headerTopSearchText.classList.remove('header-top--open__search-text');
            headerTopSettings.classList.remove('header-top__settings--none');
        }
    }
}

updateDesktopClasses();
mediaQuery1120.addEventListener('change', updateDesktopClasses);

//active-links
const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 
        
        menuLinks.forEach(item => {
            item.classList.remove('menu__link--active');
        });
        
        this.classList.add('menu__link--active');
    });
});

//burger active-links
const menuOpenLinks = document.querySelectorAll('.menu--open__link');

menuOpenLinks.forEach(link => {
    link.addEventListener('click', function(evt) {
        evt.preventDefault();

        menuOpenLinks.forEach(item => {
            item.classList.remove('menu--open__link--active');
        });

        this.classList.add('menu--open__link--active');
    });
});

//burger active-langs
const menuOpenlang = document.querySelectorAll('.lang-link');

menuOpenlang.forEach(link => {
    link.addEventListener('click', function(evt) {
        evt.preventDefault();

        menuOpenlang.forEach(item => {
            item.classList.remove('lang-link--active');
        });

        this.classList.add('lang-link--active');
    });
});

// button read more
let infoBtn = document.querySelector('.info__btn-read');
let closeText = document.querySelector('.info__main-text--close');
let arrows = infoBtn.querySelector('.info__arrows');
let infoReadMore = document.querySelector('.info__read-more');

infoBtn.addEventListener('click', function() {
    if (arrows.classList.contains('info__arrows--open')) {
        closeText.classList.add('info__main-text--close');

    arrows.classList.remove('info__arrows--open');

    infoReadMore.textContent = 'Читать далее';
    } else {
        closeText.classList.remove('info__main-text--close');

    arrows.classList.add('info__arrows--open');

    infoReadMore.textContent = 'Скрыть';
    }
});

// swiper
const slider = document.querySelector('.swiper');
let swiperInstance;

function mobileSlider() {
    if (window.innerWidth <= 768 && slider.dataset.mobile == 'false') {
        
        swiperInstance = new Swiper(".swiper", {
            slidesPerView: 'auto',
            spaceBetween: 16,
            loop: true,
            loopAdditionalSlides: 5,
            speed: 100,
            freeMode: false,
            allowTouchMove: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                bulletClass: 'custom-bullet',
                bulletActiveClass: 'custom-bullet-active',
            },
        });

        slider.dataset.mobile = 'true';
    }
    
    if (window.innerWidth > 768) {
        slider.dataset.mobile = 'false';
        
        if (swiperInstance) {
            swiperInstance.destroy(true, true);
            swiperInstance = null;
        }
    }
}

mobileSlider();
window.addEventListener('resize', () => mobileSlider());

let swiperSlide7 = document.querySelector('.swiper-slide:nth-child(7)');
let swiperSlide8 = document.querySelector('.swiper-slide:nth-child(8)');
let swiperSlide9 = document.querySelector('.swiper-slide:nth-child(9)');
let swiperSlide10 = document.querySelector('.swiper-slide:nth-child(10)');
let swiperSlide11 = document.querySelector('.swiper-slide:nth-child(11)');

if (window.innerWidth > 768) {
    swiperSlide7.classList.add('swiper-slide--none');
    swiperSlide8.classList.add('swiper-slide--none');
    swiperSlide9.classList.add('swiper-slide--none');
    swiperSlide10.classList.add('swiper-slide--none');
    swiperSlide11.classList.add('swiper-slide--none');
};

if (window.innerWidth >= 1120) {
    swiperSlide7.classList.remove('swiper-slide--none');
    swiperSlide8.classList.remove('swiper-slide--none');
};

let swiperButton = document.querySelector('.all-btn');
let infoArrows = swiperButton.querySelector('.info__arrows');
let btnText = swiperButton.querySelector('.text-all');
let swiperWrapper = document.querySelector('.swiper-wrapper');

swiperButton.addEventListener('click', function (evt) {
    evt.preventDefault();

    if (infoArrows.classList.contains('info__arrows--open')) {
        swiperButton.classList.remove('all-btn--open');

        infoArrows.classList.remove('info__arrows--open');

    btnText.textContent = 'Показать все';

    slider.classList.remove('swiper--open');
    swiperWrapper.classList.remove('swiper-wrapper--open');

    if (window.innerWidth < 1120) {
        swiperSlide7.classList.add('swiper-slide--none');
        swiperSlide8.classList.add('swiper-slide--none');
        swiperSlide9.classList.add('swiper-slide--none');
        swiperSlide10.classList.add('swiper-slide--none');
        swiperSlide11.classList.add('swiper-slide--none');
    } else {
        swiperSlide9.classList.add('swiper-slide--none');
        swiperSlide10.classList.add('swiper-slide--none');
        swiperSlide11.classList.add('swiper-slide--none');
    };
    } else {
    swiperButton.classList.add('all-btn--open');

    infoArrows.classList.add('info__arrows--open');

    btnText.textContent = 'Скрыть';

    slider.classList.add('swiper--open');
    swiperWrapper.classList.add('swiper-wrapper--open');

    if (window.innerWidth > 768 && window.innerWidth < 1120) {
        swiperSlide7.classList.remove('swiper-slide--none');
        swiperSlide8.classList.remove('swiper-slide--none');
        swiperSlide9.classList.remove('swiper-slide--none');
        swiperSlide10.classList.remove('swiper-slide--none');
        swiperSlide11.classList.remove('swiper-slide--none');
    } else {
        swiperSlide9.classList.remove('swiper-slide--none');
        swiperSlide10.classList.remove('swiper-slide--none');
        swiperSlide11.classList.remove('swiper-slide--none');
    }
    };
});

//swiperRepair

let repairSlide4 = document.querySelector('.swiper-slide-repair:nth-child(4)');
let repairSlide5 = document.querySelector('.swiper-slide-repair:nth-child(5)');
let repairSlide6 = document.querySelector('.swiper-slide-repair:nth-child(6)');
let repairSlide7 = document.querySelector('.swiper-slide-repair:nth-child(7)');
let repairSlide8 = document.querySelector('.swiper-slide-repair:nth-child(8)');
let repairSlide9 = document.querySelector('.swiper-slide-repair:nth-child(9)');

let repairButton = document.querySelector('.repair__btn-more');
let infoArrowsRepair = repairButton.querySelector('.info__arrows-repair');
let btnTextRepair = repairButton.querySelector('.text-all-repair');
let swiperRepairWrapper = document.querySelector('.swiper-repair-wrapper');
let swiperRepair = document.querySelector('.swiper-repair');

repairButton.addEventListener('click', function (evt) {
    evt.preventDefault();

    if (infoArrowsRepair.classList.contains('info__arrows--open')) {
        repairButton.classList.remove('all-btn--open');

        infoArrowsRepair.classList.remove('info__arrows--open');

    btnTextRepair.textContent = 'Показать все';

    swiperRepair.classList.remove('swiper-repair--open');
    swiperRepairWrapper.classList.remove('swiper-wrapper--open');

    if (window.innerWidth < 1120) {
        repairSlide4.classList.add('swiper-slide--none');
        repairSlide5.classList.add('swiper-slide--none');
        repairSlide6.classList.add('swiper-slide--none');
        repairSlide7.classList.add('swiper-slide--none');
        repairSlide8.classList.add('swiper-slide--none');
        repairSlide9.classList.add('swiper-slide--none');
    } else {
        repairSlide5.classList.add('swiper-slide--none');
        repairSlide6.classList.add('swiper-slide--none');
        repairSlide7.style.display = 'none';
        repairSlide8.style.display = 'none';
        // repairSlide7.classList.add('swiper-slide--none');
        // repairSlide8.classList.add('swiper-slide--none');
        repairSlide9.classList.add('swiper-slide--none');
    };
    } else {
    repairButton.classList.add('all-btn--open');

    infoArrowsRepair.classList.add('info__arrows--open');

    btnTextRepair.textContent = 'Скрыть';

    swiperRepair.classList.add('swiper-repair--open');
    swiperRepairWrapper.classList.add('swiper-wrapper--open');

    if (window.innerWidth > 768 && window.innerWidth < 1120) {
        repairSlide4.classList.remove('swiper-slide--none');
        repairSlide5.classList.remove('swiper-slide--none');
        repairSlide6.classList.remove('swiper-slide--none');
        repairSlide7.classList.remove('swiper-slide--none');
        repairSlide8.classList.remove('swiper-slide--none');
        repairSlide9.classList.remove('swiper-slide--none');
    } else {
        repairSlide5.classList.remove('swiper-slide--none');
        repairSlide6.classList.remove('swiper-slide--none');
        repairSlide7.style.display = 'flex';
        repairSlide8.style.display = 'flex';
        // repairSlide7.classList.remove('swiper-slide--none');
        // repairSlide8.classList.remove('swiper-slide--none');
        repairSlide9.classList.remove('swiper-slide--none');
    }
    };
});

// feedback
let messageBtn = document.querySelector('.menu-item__message');
let messageHeadBtn = document.querySelector('#header-top__message');
let feedbackMessage = document.querySelector('.feedback-message');
let feedbackMesClose = feedbackMessage.querySelector('.feedback__close');

feedbackMesClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    feedbackMessage.classList.remove('feeadback--open');
    burgerOverlay.classList.remove('burger-overlay--open');
    burgerOverlay.style.zIndex = '10';
    if (window.innerWidth >= 1120) {
        burgerOverlay.style.display = 'none';
    };
    if (!burgerAside.classList.contains('burger-aside--none')) {
        burgerAside.classList.add('burger-aside--none');
    };
})

messageBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    feedbackMessage.classList.add('feeadback--open');
    burgerOverlay.classList.add('burger-overlay--open');
    burgerOverlay.style.zIndex = '25';
    if (window.innerWidth >= 1120) {
        burgerOverlay.style.display = 'block';
    };
})

messageHeadBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    feedbackMessage.classList.add('feeadback--open');
    burgerOverlay.classList.add('burger-overlay--open');
    burgerOverlay.style.zIndex = '25';
    if (window.innerWidth >= 1120) {
        burgerOverlay.style.display = 'block';
    };
})

let callBtn = document.querySelector('#header-top__call')
let callHeadBtn = document.querySelector('.menu-item__call')
let feedbackCall = document.querySelector('.feedback-call')
let feedbackCallClose = feedbackCall.querySelector('.feedback__close');

feedbackCallClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    feedbackCall.classList.remove('feeadback--open');
    burgerOverlay.classList.remove('burger-overlay--open');
    burgerOverlay.style.zIndex = '10';
    if (window.innerWidth >= 1120) {
        burgerOverlay.style.display = 'none';
    };
    if (!burgerAside.classList.contains('burger-aside--none')) {
        burgerAside.classList.add('burger-aside--none');
    };
})

callBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    feedbackCall.classList.add('feeadback--open');
    burgerOverlay.classList.add('burger-overlay--open');
    burgerOverlay.style.zIndex = '25';
    if (window.innerWidth >= 1120) {
        burgerOverlay.style.display = 'block';
    };
})

callHeadBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    feedbackCall.classList.add('feeadback--open');
    burgerOverlay.classList.add('burger-overlay--open');
    burgerOverlay.style.zIndex = '25';
    if (window.innerWidth >= 1120) {
        burgerOverlay.style.display = 'block';
    };
})

burgerOverlay.addEventListener('click', function (evt) {
    evt.preventDefault();
    // burgerAside.classList.add('burger-aside--none');
    burgerOverlay.classList.remove('burger-overlay--open');
    if (window.innerWidth >= 1120) {
        burgerOverlay.style.display = 'none';
    };
    if (!burgerAside.classList.contains('burger-aside--none')) {
        burgerAside.classList.add('burger-aside--none');
    };
    if (feedbackCall.classList.contains('feeadback--open')) {
        feedbackCall.classList.remove('feeadback--open');
        burgerOverlay.style.zIndex = '10';
    };
    if (feedbackMessage.classList.contains('feeadback--open')) {
        feedbackMessage.classList.remove('feeadback--open');
        burgerOverlay.style.zIndex = '10';
    };
});

