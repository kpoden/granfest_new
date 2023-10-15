window.addEventListener('DOMContentLoaded', () => {

  
function bodyLock(con) {
  const scrollFix = window.innerWidth - document.body.clientWidth + "px";
  if (con === true) {
    document.body.classList.add("_lock");
    document.body.style.paddingRight = scrollFix;
  } else if (con === false) {
    document.body.classList.remove("_lock");
    document.body.style.paddingRight = 0;
  } else if (con === undefined) {
    if (!body.classList.contains("_lock")) {
      document.body.classList.add("_lock");
      document.body.style.paddingRight = scrollFix;
    } else {
      document.body.classList.remove("_lock");
      document.body.style.paddingRight = 0;
    }
  } else {
    console.error("Неопределенный аргумент у функции bodyLock()");
  }
}

    function cropText() {
        const elementsToCrop = document.querySelectorAll('[data-crop]');
        
        elementsToCrop.forEach(element => {
          const text = element.textContent,
                length = element.dataset.crop;
      
          if (text.length > length) {
            const croppedText = text.substring(0, length).trim() + '...';
            element.textContent = croppedText;
          }
        });
      }
      
      cropText()
    
    function sliderInit() {

        const mainSlider = new Swiper('.main-slider__inner', {
            slidesPerView: 1,
            spaceBetween: 110,
            freeMode: false,
            loop: false,
            // autoplay: {
            //     delay: 3000,
            //     disableOnInteraction: false
            //   },
            // speed: 1000,
            pagination: {
                el: ".swiper-pagination"
              }

          });
    }

    sliderInit()







function sortFilters() {

  if(document.querySelector('.catalog__sort-wrap')) {

  

  const sortFilter = document.querySelector('.catalog__sort-wrap'),
        currSort = document.querySelector('.curr-sort'),
        chooseWrap = document.querySelector('.catalog__choose-sorts'),
        chooseSorts = document.querySelectorAll('.catalog__choose-sort');

  
  sortFilter.addEventListener('click', () => {
    if(sortFilter.classList.contains('openedSorts')) {
      sortFilter.classList.remove('openedSorts')
    } else {
      sortFilter.classList.add('openedSorts')
    }
  })

  chooseSorts.forEach((el) => {
    el.addEventListener('click', () => {
      currSort.textContent = el.textContent;
    })
  })
}

}

sortFilters()




function itemMainSlidersInit() {
  if(document.querySelector('.item')) {

  
    const navSlider = new Swiper('.item__slider-nav', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: false,
      centeredSlides: false,
      slideToClickedSlide: true,
      direction: 'vertical',

    });

    const arrPrev = document.querySelector('.nav-slider-prev');
    const arrNext = document.querySelector('.nav-slider-next');

    arrNext.addEventListener('click', () => {
      navSlider.slidePrev();
    })
    
    arrPrev.addEventListener('click', () => {
      navSlider.slideNext();
    })

    const slideCount = document.querySelectorAll('.item__slider-nav .swiper-slide').length;
    if(slideCount < 4) {
      arrPrev.classList.add('hidden');
      arrNext.classList.add('hidden');
    }

    const mainSlider = new Swiper('.item__slider-main', {
      slidesPerView: 1,
      slideToClickedSlide: true,
      navigation: {
        nextEl: '.main-slider-next',
        prevEl: '.main-slider-prev'
      },
      thumbs: {
        swiper: navSlider,
      }
    });
  
    
  }
}

itemMainSlidersInit()


function additionalSlidersInit() {
  if(document.querySelector('.recommended')) {
    const recommendedSlider = new Swiper('.recommended .swiper', {
      slidesPerView: 4,
      slideToClickedSlide: false,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      speed: 500
    });

    const arrPrev = document.querySelector('.recommended .arr-l');
    const arrNext = document.querySelector('.recommended .arr-r');
  
    arrPrev.addEventListener('click', () => {
      recommendedSlider.slidePrev();
    })
    
    arrNext.addEventListener('click', () => {
      recommendedSlider.slideNext();
    })
  }
  if(document.querySelector('.related')) {
    const recommendedSlider = new Swiper('.related .swiper', {
      slidesPerView: 4,
      slideToClickedSlide: false,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      speed: 500
    });

    const arrPrev = document.querySelector('.related .arr-l');
    const arrNext = document.querySelector('.related .arr-r');
  
    arrPrev.addEventListener('click', () => {
      recommendedSlider.slidePrev();
    })
    
    arrNext.addEventListener('click', () => {
      recommendedSlider.slideNext();
    })
  }



}

additionalSlidersInit()


function tabsInit() {
  if(document.querySelector('.item__desc')) {

    const tabs = document.querySelectorAll('.item__tab'),
          blocks = document.querySelectorAll('.item__desc-block');

          tabs.forEach(tab=>{
            tab.addEventListener('click', () => {
              const tabName = tab.dataset.tab;

              tabs.forEach(el=>el.classList.remove('activeTab'));
              tab.classList.add('activeTab');


              blocks.forEach((block)=> {
                block.classList.remove('activeBlock');
                if(block.dataset.tab == tabName) {
                  block.classList.add('activeBlock');
                }
              })


            })
          })
  }
}

tabsInit()

function gsapAnimation() {
  

  document.querySelectorAll(".desc-link").forEach((el) => {
    el.addEventListener("click", () => {
      gsap.to(window, {
          duration: 1,
          scrollTo: {
              y: ".item__desc"
          }
      })
    })
  });


}

gsapAnimation()


function headerFiltersListen() {

  const openSearch = document.querySelector('.headerSearchBtn'),
        openFilters = document.querySelector('.openFilters'),
        closeSearch = document.querySelector('.header__search-close'),
        closeFilters = document.querySelector('.header__filters-close'),
        headerSearch = document.querySelector('.header__search-wrap'),
        headerFilters = document.querySelector('.header__filters-wrap'),
        headerBottom = document.querySelector('.header__bottom'),
        overlay = document.querySelector('.overlay');

        if(openSearch) {

        openSearch.addEventListener('click', ()=> {
          headerSearch.classList.add('activeSearchWrap');
          headerBottom.classList.add('activeWrap');
          bodyLock(true);
          overlay.classList.add('activeOverlay');

        })
      }

        closeSearch.addEventListener('click', ()=> {
          headerSearch.classList.remove('activeSearchWrap');
          headerBottom.classList.remove('activeWrap');
          bodyLock(false);
          overlay.classList.remove('activeOverlay');
        })

        if(openFilters) {
          openFilters.addEventListener('click', ()=> {
            headerFilters.classList.add('activeFiltersWrap');
            headerBottom.classList.add('activeWrap');
            overlay.classList.add('activeOverlay');
          })
        }


        closeFilters.addEventListener('click', ()=> {
          headerFilters.classList.remove('activeFiltersWrap');
          headerBottom.classList.remove('activeWrap');
          overlay.classList.remove('activeOverlay');
        })

        overlay.addEventListener('click', ()=> {
          headerSearch.classList.remove('activeSearchWrap');
          headerBottom.classList.remove('activeWrap');
          headerFilters.classList.remove('activeFiltersWrap');
          headerBottom.classList.remove('activeWrap');
          bodyLock(false);
          overlay.classList.remove('activeOverlay');
        })


}

headerFiltersListen()


function sidebarFix() {
  if(document.querySelector('.filters')) {
  const filters = document.querySelector('.filters'),
        filtersHeight = filters.offsetHeight;
  let   windowHeight = document.documentElement.clientHeight;

  const topPosition = windowHeight - filtersHeight - 50;

  if(topPosition < 0) {
    filters.style.top = topPosition + 'px';
  }

  window.addEventListener('resize', function(event) {
    const filters = document.querySelector('.filters'),
    filtersHeight = filters.offsetHeight;
    let   windowHeight = document.documentElement.clientHeight;

    const topPosition = windowHeight - filtersHeight - 50;

    if(topPosition < 0) {
    filters.style.top = topPosition + 'px';
    }
  });
}

}

sidebarFix()


function initCloseFilters() {
  if(document.querySelector('.filters'))  {
    const openFilters = document.querySelectorAll('.open-filter'),
          closeFilters = document.querySelectorAll('.close-filter');

    openFilters.forEach(el => el.classList.add('hidden'));

    openFilters.forEach(openBtn => {
      openBtn.addEventListener('click', ()=> {
        const filter = openBtn.closest('.filter');
        const filterWrap = filter.querySelector('.filter__wrap');
        const filterClose = filter.querySelector('.close-filter');

        filterWrap.classList.remove('closedFilter');
        openBtn.classList.add('hidden');
        filterClose.classList.remove('hidden');
      })
    })

    closeFilters.forEach(closeBtn => {
      closeBtn.addEventListener('click', ()=> {
        const filter = closeBtn.closest('.filter');
        const filterWrap = filter.querySelector('.filter__wrap');
        const filterOpen = filter.querySelector('.open-filter');

        filterWrap.classList.add('closedFilter');
        closeBtn.classList.add('hidden');
        filterOpen.classList.remove('hidden');
      })
    })
  }
  }
  

initCloseFilters()


function initColorTooltip() {
  const colors = document.querySelectorAll('.colorFilter');

  colors.forEach(color => {
    color.addEventListener('mouseover', ()=> {
      if(color.dataset.color != "") {
        const tooltip =  document.createElement('span');
        tooltip.classList.add('colorTooltip');
        tooltip.textContent = color.dataset.color;
        color.appendChild(tooltip);
      }
    })
  })

  colors.forEach(color => {
    color.addEventListener('mouseleave', ()=> {
      if(color.querySelector('.colorTooltip')) {
        tooltips = color.querySelectorAll('.colorTooltip');
        tooltips.forEach(el=> {
          color.removeChild(el);
        })
        
      }
    })
  })
}

initColorTooltip()


function priceRange() {
  const priceRange = document.querySelector('.filter__price');

  if(priceRange) {

      const minPrice = parseInt(priceRange.dataset.min);
      const maxPrice = parseInt(priceRange.dataset.max);

      noUiSlider.create(priceRange, {
          start: [minPrice, maxPrice],
          connect: true,
          range: {
              'min': minPrice,
              'max': maxPrice
          }
      });

      

    const snapValues = [
      document.querySelector('.priceMin'),
      document.querySelector('.priceMax')
    ];

    priceRange.noUiSlider.on('update', function (values, handle) {
      const roundedValue = Math.round(values[handle]);
      snapValues[handle].value = roundedValue;
    });
  }




}
priceRange()

function blogSliderInit() {

  if(window.innerWidth < 600) {
    const blogSlider = new Swiper('.main-blog__inner', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: false,
      autoplay: {
        delay: 3000,
      },
      speed: 500,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });


  }
}
blogSliderInit()


});