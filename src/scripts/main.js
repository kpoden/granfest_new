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
            if (window.innerWidth < 800) {
              container.style.height = headerFiltersHeight  + "px";
              container.style.overflow = "hidden";
              mmf.classList.add('hidden');
            }
            
            // bodyLock(true);

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
          container.style.overflow = "";

          
          bodyLock(false);
          
        })

        overlay.addEventListener('click', ()=> {
          headerSearch.classList.remove('activeSearchWrap');
          headerBottom.classList.remove('activeWrap');
          headerFilters.classList.remove('activeFiltersWrap');
          headerBottom.classList.remove('activeWrap');
          mmf.classList.remove('hidden');
          container.style.height = '';
          container.style.overflow = "";
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


class ContactsMenu {
  constructor() {

    this.sectionNames = document.querySelectorAll('.contacts__mob-section-name');

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



  init() {
    this.listenSections();
  }
}

const contactsMenu = new ContactsMenu;





class Basket {
  constructor() {

    this.basket = document.querySelector('.basket');
    this.mobArr = document.querySelector('.mobBack');

    this.productQuant = document.querySelectorAll('.basket__item').length;

    this.errWrap = document.querySelector('.err-wrap');
    this.errWrapText = document.querySelector('.err-wrap .inner-err');

    this.inputs = document.querySelectorAll('.inp');

    this.basketFirstBtn = document.querySelector('.basket__total-checkout.first-step-btn');
    this.basketSecondBtn = document.querySelector('.basket__total-checkout.second-step-btn');
    this.basketThirdBtn = document.querySelector('.basket__total-checkout.third-step-btn');

    this.tabs = document.querySelectorAll('.basket__tab');
    this.blocks = document.querySelectorAll('.basket__block');
    this.contactTabs = document.querySelectorAll('.basket__contacts-tab');
    this.contactBlock = document.querySelectorAll('.basket__contacts-block');
    this.addressTabs = document.querySelectorAll('.basket__address-tab');
    this.addressBlock = document.querySelectorAll('.basket__address-block');

    this.listTab = document.querySelector('.listTab');
    this.contactTab = document.querySelector('.contactTab');
    this.addressTab = document.querySelector('.addressTab');

    this.firstBlock = document.querySelector('.basket__list');
    this.secondBlock = document.querySelector('.basket__contacts');
    this.thirdBlock = document.querySelector('.basket__address');

    this.currStep="";

    this.init()
  }

  initMobArr() {
    this.mobArr.addEventListener('click', (e)=>{
      e.preventDefault();

      if(this.currStep === "1") {
        window.location.href = "/catalog.html";
      } else if( this.currStep ==="2") {
        this.initFirstStep();
      }
       else if(this.currStep === "3") {
        this.initSecondStep();
      }
    })
  }

  createErr(text, els) {
    this.errWrap.classList.remove('hidden');
    this.errWrapText.textContent = text;
    els.forEach(el=>el.classList.add('_err-inp'));

  }

  deleteErr() {

    this.inputs.forEach(el=>el.classList.remove('_err-inp'));
    this.errWrap.classList.add('hidden');
    this.errWrapText.textContent = '';
  }

  listenProceedToPay() {

    this.basketThirdBtn.addEventListener('click', ()=> {
      if(!this.validateThirdStep()) {
        return;
      }
      console.log('pay');

    })

  }

  validateThirdStep() {

    const thirdStepRadios = this.thirdBlock.querySelectorAll('.basket__address-block.activeBlock input[type="radio"]');

    const noRadioChecked = Array.from(thirdStepRadios).every(radio => !radio.checked);

    this.deleteErr();
    if (noRadioChecked) {

      this.createErr('Выберите тип доставки.', []);
      return false; 
    }

    let errArr = [];
    const currAddressBlock = document.querySelector('.basket__address-block.activeBlock');
    const currAddressInputs = currAddressBlock.querySelectorAll('input[data-required]');

    currAddressInputs.forEach(el=>{
      if(el.value === "") {
        errArr.push(el);
      }
    })

    if(errArr.length > 0) {
      this.initThirdStep();
      this.createErr('Заполните обязательные поля.', errArr)
      return false;
    } else {
      return true;
    }

  }

  validateSecondStep() {
    
    this.deleteErr();
    let errArr = [];
    const currContactsBlock = document.querySelector('.basket__contacts-block.activeBlock');
    const currContactsInputs = currContactsBlock.querySelectorAll('input[data-required]');

    currContactsInputs.forEach(el=>{
      if(el.value === "") {
        errArr.push(el);
      }
    })

    if(errArr.length > 0) {
      this.initSecondStep();
      this.createErr('Заполните обязательные поля.', errArr)
      return false;
    } else {
      return true;
    }
  }



  removeActiveClasses() {
    this.tabs.forEach(el=>{el.classList.remove('activeTab')});
    this.blocks.forEach(el=>{el.classList.remove('activeBlock')});
  }

  initSecondStep() {

    this.currStep="2";
    this.basket.classList.remove('thirdStep');
    this.basket.classList.remove('firstStep');
    this.basket.classList.add('secondStep')
    this.removeActiveClasses();
    this.contactTab.classList.add('activeTab');
    this.secondBlock.classList.add('activeBlock');
    this.basketFirstBtn.classList.add('hidden');
    this.basketSecondBtn.classList.remove('hidden');
    this.basketThirdBtn.classList.add('hidden');
  }

  initThirdStep() {

    if(!this.validateSecondStep()) {
      return;
    }

    this.basket.classList.add('thirdStep');
    this.basket.classList.remove('firstStep');
    this.basket.classList.remove('secondStep')


    this.removeActiveClasses();
    this.addressTab.classList.add('activeTab');
    this.thirdBlock.classList.add('activeBlock');
    this.basketFirstBtn.classList.add('hidden');
    this.basketSecondBtn.classList.add('hidden');
    this.basketThirdBtn.classList.remove('hidden');
    this.currStep="3";
  }

  initFirstStep() {
    this.currStep="1";
    this.listTab.click();
  }


  listenBasketTab() {
    this.listTab.addEventListener('click', ()=>{
      this.removeActiveClasses();
      this.basket.classList.remove('secondStep');
      this.basket.classList.remove('thirdStep');
      this.basket.classList.add('firstStep');

      this.listTab.classList.add('activeTab');
      this.firstBlock.classList.add('activeBlock');
      this.basketFirstBtn.classList.remove('hidden');
      this.basketSecondBtn.classList.add('hidden');
      this.basketThirdBtn.classList.add('hidden');
    })
  }

  listenAddressTab() {
      if(this.productQuant > 0) {
      this.addressTab.addEventListener('click', ()=>{
        this.initThirdStep();
      })

      this.basketSecondBtn.addEventListener('click', ()=>{
        this.initThirdStep();
      })
    }
  }



  listenContactTab() {
    if(this.productQuant > 0) {
      this.contactTab.addEventListener('click', ()=>{
        this.initSecondStep();
      })
      this.basketFirstBtn.addEventListener('click', ()=>{
        this.initSecondStep();
      })
    }
  }

  listenTabs() {
    this.listenBasketTab();
    this.listenContactTab();
    this.listenAddressTab();
  }

  listenContactsTabs() {
    this.contactTabs.forEach(el=>{
      el.addEventListener('click', (tab)=>{
        tab = tab.target;
        this.contactTabs.forEach(el=>el.classList.remove('activeTab'));
        tab.classList.add('activeTab');

        const tabName = tab.dataset.tab;

        this.contactBlock.forEach(block=>{
          block.classList.remove('activeBlock');
          if(tabName == block.dataset.tab) {
            block.classList.add('activeBlock');
            
          }
        })
      })
    })
  }

  listenAddressTabs() {
    this.addressTabs.forEach(el=>{
      el.addEventListener('click', (tab)=>{
        tab = tab.target;
        this.addressTabs.forEach(el=>el.classList.remove('activeTab'));
        tab.classList.add('activeTab');

        const tabName = tab.dataset.tab;

        this.addressBlock.forEach(block=>{
          block.classList.remove('activeBlock');
          if(tabName == block.dataset.tab) {
            block.classList.add('activeBlock');
            
          }
        })
      })
    })
  }

  
  maskInit() {
    if(this.basket.querySelector('input[name=phone]')) {
    
    const phoneInput = this.basket.querySelectorAll('input[name=phone]');
    phoneInput.forEach(el=>{
      const maskOptions = {
        mask: '+{7}(000) 000-00-00'
      };
      const mask = IMask(el, maskOptions);
    })
    
    }
}


  init() {
    this.listenContactsTabs();
    this.listenAddressTabs();
    this.listenProceedToPay();
    this.listenTabs();
    this.initFirstStep();
    this.maskInit();
    this.initMobArr();
  }
}

if(document.querySelector('.basket')) {
  const basket = new Basket;
}



function quantInput() {
  if(document.querySelector('.basket__item-count')) {

    const quantInputWraps = document.querySelectorAll('.basket__item-count');


    quantInputWraps.forEach((el)=>{
      const minusBtn = el.querySelector('.basket__item-count-minus');
      const plusBtn = el.querySelector('.basket__item-count-plus');
      const quantInput = el.querySelector('.basket__item-count-num');

      minusBtn.addEventListener('click', () => {
        let count = parseInt(quantInput.value) - 1;
        count = count < 1 ? 1 : count;
        quantInput.value = count;
        quantInput.setAttribute('value', count);
      });
  
      
      plusBtn.addEventListener('click', () => {
        let count = parseInt(quantInput.value) + 1;
        count = count > parseInt(quantInput.getAttribute('data-max-count')) ? parseInt(quantInput.getAttribute('data-max-count')) : count;
        quantInput.value = count;
        quantInput.setAttribute('value', count);
      });
  
      quantInput.addEventListener("change", function() {
            if (this.value.match(/[^0-9]/g)) {
                this.value = this.value.replace(/[^0-9]/g, '');
            }
            if (this.value == "") {
                this.value = 1;
                quantInput.setAttribute('value', 1);
            }
            if (this.value > parseInt(this.getAttribute('data-max-count'))) {
                this.value = parseInt(this.getAttribute('data-max-count'));
            }
        });
  
      quantInput.addEventListener("keyup", function() {
            if (this.value.match(/[^0-9]/g)) {
                this.value = this.value.replace(/[^0-9]/g, '');
            }
        });
  
      quantInput.addEventListener("input", function() {
            if (this.value.match(/[^0-9]/g)) {
                this.value = this.value.replace(/[^0-9]/g, '');
            }
        });
  
      quantInput.addEventListener("click", function() {
            if (this.value.match(/[^0-9]/g)) {
                this.value = this.value.replace(/[^0-9]/g, '');
            }
        }); 


    });
  }
}

quantInput()


function legalSpoilers() {
  const openSpoilers = document.querySelectorAll('.legal__spoiler.open');
  const closeSpoilers = document.querySelectorAll('.legal__spoiler.close');

  openSpoilers.forEach(spoiler=>{
    spoiler.addEventListener('click', ()=>{
      spoiler.closest('.legal__block').classList.add('expanded');
    })
  })

  closeSpoilers.forEach(spoiler=>{
    spoiler.addEventListener('click', ()=>{
      spoiler.closest('.legal__block').classList.remove('expanded');
    })
  })


}
legalSpoilers()



class Modal {
  constructor(template = "") {
      this.modal = document.querySelector('.modal');
      this.template = template;
      this.container = document.querySelector('.modal__content-inner');
      this.init();
  }


  listenOpenTriggers() {
      this.triggers = document.querySelectorAll('[data-modal]');
      this.triggers.forEach((trigger)=>{
          trigger.addEventListener('click', () => {
              this.templateName = trigger.dataset.modal;
              
              this.openModal();
          });
      });
  }

  listenOpenTriggersModal() {
      this.triggers = this.modal.querySelectorAll('[data-modal]');
      this.triggers.forEach((trigger)=>{
        
          trigger.addEventListener('click', (e) => {
              e.preventDefault();
              this.templateName = trigger.dataset.modal;
              
              this.openModal();
          });
      });
  }

  listenCloseTriggers() {
      this.close = document.querySelectorAll('.modal__close');
      this.close.forEach((close) => {
          close.addEventListener('click', () => {
              this.closeModal();
          });
        });

        this.modal.addEventListener("click", (e) => {
          e = e.target;
          if(e.classList.contains('modal')) {
              this.closeModal()
          }
        });
  }

  initTemplate() {
      if(document.querySelector('.'+this.templateName)) {
          this.template = document.querySelector('.'+this.templateName);
          this.container.innerHTML = this.template.innerHTML;
          if(this.container.querySelector('input[type=file]')) {
            formAttach();
          }
      }

      
  }

  initForms() {
      if(this.modal.querySelector('form')) {
          const form = this.modal.querySelector('form').id;
          const formInit = new Form(form);
      }
  }

  openModal() {
      this.modal.classList.add('opened');
      bodyLock(true);
      this.initTemplate();
      this.initForms();
      this.listenCloseTriggers();
      this.listenOpenTriggersModal();
  }

  closeModal() {
      this.modal.classList.remove('opened');
      bodyLock(false);
  }




  init() {
      this.listenOpenTriggers();
      this.listenCloseTriggers()
      
  }
}




const modal = new Modal();





class Form {
  constructor(form) {

      this.form = document.getElementById(form);

      this.init()

  }

  deleteErrors() {
      const errors = this.form.querySelectorAll('._error-txt');
      errors.forEach((el) => {
        const parent = el.parentNode;
        parent.removeChild(el);
      });
  
  
      const inputs = this.form.querySelectorAll('input[type=text], input[type=tel], input[type=password], textarea');
      inputs.forEach((input) => {
        input.classList.remove('_error-input');
      });

      if(this.form.querySelector('.error-wrap')) {
          this.form.querySelectorAll('.error-wrap').forEach(el=>el.textContent="");
      }
 
  }

  createError(err) {

      if(this.form.id == "callback-form" || 1) {
     
          let errorName = "Обязательное поле";
      
          err.forEach((el) => {
              const inputWrap = el.closest('.input-wrap');
              let errorEl = document.createElement('span');
              errorEl.textContent = errorName;
              errorEl.classList.add('_error-txt');
              el.classList.add('_error-input');
              inputWrap.appendChild(errorEl);
      
          });
    } 
  }


  validateForm() {
      const requiredInputs = this.form.querySelectorAll('[data-required]');
      
      let errorArr = [];
      this.deleteErrors();

      requiredInputs.forEach(el => {
          const value = el.value.trim();
          if(value === "") {
              errorArr.push(el);
          }
      })
      console.log(errorArr);

      if(errorArr.length > 0) {
        this.createError(errorArr);
      
        return false;
      } else {
        this.deleteErrors();
        return true;
      }

  }


  policyChecked() {

      const check = this.form.querySelector('.policy__checkbox-input');
      const chechErr = this.form.querySelector('.policy-err');
      if(!check.checked) {
          let errorName = "Ознакомьтесь с политикой конфиденциальности";
          let errorEl = document.createElement('span');
          errorEl.textContent = errorName;
          errorEl.classList.add('_error-txt');
          chechErr.appendChild(errorEl);

          return false
      } else {
          return true
      }
  }

  validateEmail() {
      const emailInput = this.form.querySelector('input[name="email"][data-required]');
      if(emailInput) {
      const email = emailInput.value;
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      let validEmail = emailPattern.test(email);
      if(!validEmail) {
          console.log('email not val');
          const errorName = "Введите верный Email";
          const inputWrap = emailInput.closest('.input-wrap');
          let errorEl = document.createElement('span');
          errorEl.textContent = errorName;
          errorEl.classList.add('_error-txt');
          emailInput.classList.add('_error-input');
          inputWrap.appendChild(errorEl);
          return false;
      } else {
          return true;
      }
    } else {
      return true;
    }
  }

  createSuccsessMsg() {

      if(this.form.id == 'order-form') {
          document.querySelector('.thanksOrderLink').click();
      } 
      
      if(this.form.id == 'ask-form') {
          document.querySelector('.thanksCallbackLink').click();
      } 

      if(this.form.id == 'ask-form-mob') {
        document.querySelector('.thanksCallbackLink').click();
    } 
      
      if(this.form.id == 'subscribe-form') {
          document.querySelector('.thanksSubscribeLink').click();
      }
  }


  listenSubmit() {

      this.form.addEventListener('submit', (e) => {
          e.preventDefault();

          if(!this.validateForm()) {
              return;
            }

          if(this.form.id !=='subscribe-form' && this.form.id !=='ask-form' && this.form.id !=='ask-form-mob'){

            if(!this.policyChecked()) {
              return;
            }
          } else {
            
            if(!this.validateEmail()) {
              return;
            }
          }
          



          const xhr = new XMLHttpRequest();
          let formData = new FormData(this.form);
          console.log(formData);
          console.log('send form data');
  
          if(this.form.id == 'vacancy-form') {
              xhr.open('POST', 'local/ajax/vacancy.php');
          
          } else if(this.form.id =='callback-form') {

              xhr.open('POST', '/local/ajax/callback.php');

          }  else {
            xhr.open('POST', '/local/ajax/callback.php');
          }
            
          xhr.onload = () => {
              if (xhr.status === 200) {
                  console.log(xhr.responseText);
              } else {
                  this.createSuccsessMsg();
                  console.log(xhr.responseText);
              }
          };

          xhr.send(formData);
          this.form.classList.add('sent');
          this.form.reset();

      });
  }

  maskInit() {
      if(this.form.querySelector('input[name=phone]')) {
      
      const phoneInput = this.form.querySelector('input[name=phone]');
      const maskOptions = {
        mask: '+{7}(000) 000-00-00'
      };
      const mask = IMask(phoneInput, maskOptions);
      }
  }

  init() {
      this.listenSubmit();
      this.maskInit();
  }
}

function  formsInit() {
  const forms = document.querySelectorAll('form');

  forms.forEach(el=>{
    if(el.hasAttribute('id')) {
      const form = new Form(el.id);
    }
  })
}
formsInit()

function subscribeHandle() {
  const subscribeBtns = document.querySelectorAll('.footer__subscribe-btn');

  subscribeBtns.forEach(subBtn=>{
    const currForm = subBtn.closest('form');
    const subscribeForm = new Form(currForm.id);

  })
}

subscribeHandle()



function searchInputsInit() {
  const searchInputs = document.querySelectorAll('.search-input');

  searchInputs.forEach(input => {
    const searchWrap = input.parentNode.parentNode;
    const searchResults = searchWrap.querySelector('.search-results');

    input.addEventListener('focus', ()=>{
      searchResults.style.display = "block";
    })

    input.addEventListener('blur', ()=>{
      searchResults.style.display = "none";
    })
  })

}

searchInputsInit()


});