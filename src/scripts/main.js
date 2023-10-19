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
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
              },
            speed: 1000,
            pagination: {
                el: ".swiper-pagination"
              }

          });
    }

    sliderInit()







function sortFilters() {

  if(document.querySelector('.catalog__sort-wrap')) {

  const sortFilters = document.querySelectorAll('.catalog__sort-wrap');

  sortFilters.forEach(el => {
      const sortFilter = el,
          currSort = el.querySelector('.curr-sort'),
          chooseWrap = el.querySelector('.catalog__choose-sorts'),
          chooseSorts = el.querySelectorAll('.catalog__choose-sort');

    document.body.addEventListener('click', (e)=> {
      if(!e.target.closest('.catalog__sort')) {
        sortFilter.classList.remove('openedSorts');
        console.log(e.target);
      }
      
    })
    
    sortFilter.addEventListener('click', () => {
      if(sortFilter.classList.contains('openedSorts')) {
        sortFilter.classList.remove('openedSorts');
      } else {
        sortFilter.classList.add('openedSorts');
      }
    })

    chooseSorts.forEach((el) => {
      el.addEventListener('click', () => {
        currSort.textContent = el.textContent;
      })
    })
  })

  
}

}

sortFilters()




function itemMainSlidersInit() {
  if(document.querySelector('.item')) {

  
    const navSlider = new Swiper('.item__slider-nav', {
      slidesPerView: 3,
      spaceBetween: 10,
      loop: false,
      centeredSlides: false,
      slideToClickedSlide: true,
      direction: 'horizontal',
      breakpoints: {
        800: {
          direction: 'vertical',
          spaceBetween: 30
        }
      }
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
      slidesPerView: 1.2,
      slideToClickedSlide: false,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      speed: 500,
      breakpoints: {
        800: {
          slidesPerView: 4,
        },
        600: {
          slidesPerView: 2,
        },
      }
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
      slidesPerView: 1.2,
      slideToClickedSlide: false,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      speed: 500,
      breakpoints: {
        800: {
          slidesPerView: 4,
        },
        600: {
          slidesPerView: 2,
        },
      }
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
        overlay = document.querySelector('.overlay'),
        container = document.querySelector('.container'),
        mmf = document.querySelector('.mob-menu-fixed');

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
            const headerFiltersHeight = headerFilters.getBoundingClientRect().height;
            container.style.height = headerFiltersHeight  + "px";
            container.style.overflow = "hidden";
            mmf.classList.add('hidden');

            headerBottom.classList.add('activeWrap');
            overlay.classList.add('activeOverlay');
          })
        }


        closeFilters.addEventListener('click', ()=> {
          headerFilters.classList.remove('activeFiltersWrap');
          headerBottom.classList.remove('activeWrap');
          overlay.classList.remove('activeOverlay');
          mmf.classList.remove('hidden');
          container.style.height = '';
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
  const priceRange = document.querySelectorAll('.filter__price');

  priceRange.forEach(el=> {

  

      const minPrice = parseInt(el.dataset.min);
      const maxPrice = parseInt(el.dataset.max);

      noUiSlider.create(el, {
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

    el.noUiSlider.on('update', function (values, handle) {
      const roundedValue = Math.round(values[handle]);
      snapValues[handle].value = roundedValue;
    });
  })

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


function mobSpoilers() {

  const mobBlocks = document.querySelectorAll('.item__desc-block');

  mobBlocks.forEach(el=> {

    el.style.display = "block";
    const blockHeight = el.getBoundingClientRect().height;
    el.style.display = "";

    const spoilerOpen = el.querySelector('.item__desc-spoiler.open');
    spoilerOpen.classList.add('hidden');
    const spoilerClose = el.querySelector('.item__desc-spoiler.close');
    spoilerClose.classList.add('hidden');

    if(blockHeight > 300) {
      el.style.height = "300px"
      spoilerOpen.classList.remove('hidden');
    }




    spoilerOpen.addEventListener('click', () => {
      el.style.height = "auto";
      spoilerClose.classList.remove('hidden');
      spoilerOpen.classList.add('hidden');
    })
    
    
    spoilerClose.addEventListener('click', () => {
      el.style.height = "300px";
      spoilerClose.classList.add('hidden');
      spoilerOpen.classList.remove('hidden');
    })

  })

}

mobSpoilers()


class MobFilters {
  constructor() {
    this.filterOpen = document.querySelector('.mobFilter');
    this.filterClose = document.querySelector('.close-mobTitle');
    this.filtersBlock = document.querySelector('.catalog .filters__wrap');
    this.catalogBlock = document.querySelector('.catalog .catalog__wrap');

    this.init();

  }

  listen() {
    this.filterOpen.addEventListener('click', () => {
      this.open();
    })

    this.filterClose.addEventListener('click', () => {
      this.close();
    })
  }

  open() {
    this.filtersBlock.classList.add('block');
    this.catalogBlock.classList.add('hidden');
  }

  close() {
    this.filtersBlock.classList.remove('block');
    this.catalogBlock.classList.remove('hidden');
  }

  init() {

    this.listen();
  }
}

if(document.querySelector('.mobFilter')) {
  const mobFilters = new MobFilters;
}






class MobMenu {
  constructor() {

    this.mob = document.querySelector('.mob-menu');
    this.burger = document.querySelector('.burger');
    this.closeBtn = document.querySelector('.close-mobMenu');
    this.sectionNames = document.querySelectorAll('.mob-menu__section-name');
    this.container = document.querySelector('.container');

    this.init();
  }

  listenSections() {
    this.sectionNames.forEach(el=>{
      el.addEventListener('click', () => {
        if(el.classList.contains('expanded-section')) {
          el.classList.remove('expanded-section')
        } else {
          el.classList.add('expanded-section')
        }
        
      })
    })
  }

  listen() {
    this.burger.addEventListener('click', ()=>{
      this.open();
    })

    this.closeBtn.addEventListener('click', ()=>{
      this.close();
    })
  }


  open() {
    this.mob.classList.add('opened');
    this.container.classList.add('hidden');

  }

  close() {
    this.mob.classList.remove('opened');
    this.container.classList.remove('hidden');
  }



  init() {
    this.listen();
    this.listenSections();
  }
}

const mobMenu = new MobMenu;



});