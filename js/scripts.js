

$(document).ready(function () {
   //header fixed
   $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
         $("header").addClass("fixed");
         // Проверяем, есть ли класс "not-animated" у элемента
         if (!$(".bot_menu_block").hasClass("not-animated")) {
            $(".bot_menu_block").addClass("visible");
         }
         $("header").removeClass("hidden");
      } else {
         $("header").removeClass("fixed");
         // Проверяем, есть ли класс "not-animated" у элемента
         if (!$(".bot_menu_block").hasClass("not-animated")) {
            $(".bot_menu_block").removeClass("visible");
         }
      }
   });

   if($(window).width() < 768) {
      console.log('loh')
      $('.cat_items.mob .cat_item').each(function(index) {
         if((index + 1) % 7 === 0) {
            $(this).after('<div class="poloska"><p class="poloska__summ">3000₽</p><p class="poloska__descr">промокод на свадебное платье</p><a href="" class="poloska__link">Получить -></a></div>');
         }
      });
   }

   //filter btn in header
   $(window).scroll(function () {
      if ($(this).scrollTop() > 70) {
         $(".h_filter_btn").addClass("visible");
      } else {
         $(".h_filter_btn").removeClass("visible");
      }
   });

   $(window).scroll(function() {
      $('.catalog-video').each(function() {
         if ($(this).is(':in-viewport(50)')) {
            $(this)[0].play();
         } else {
            $(this)[0].pause();
         }
      });
   }).trigger('scroll');

   // Инициализация видео при загрузке
   $('.catalog-video').each(function() {
      // Добавляем постер для видео
      $(this).attr('poster', $(this).closest('.gs_content').find('img').attr('src'));

      // Запускаем видео только при видимости
      const observer = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
            if (entry.isIntersecting) {
               entry.target.play();
            } else {
               entry.target.pause();
            }
         });
      }, {threshold: 0.5});

      observer.observe(this);
   });


   //menu lev_2
   $(".lev_2").click(function () {
      $(this).children("ul").slideToggle();
      $(this).toggleClass('opened');
   });


   //mobile menu popup
   $(".burger").on('click', function() {
      $(".p_mask").css('transition', 'opacity 0.3s ease, background 0.3s ease');
      $(".burger_popup").addClass('opened');
      $("body").addClass('no_scroll');
      disableBodyScroll();
      setTimeout(() => {
         $(".p_mask").addClass('visible');
      }, 10);
   });

   $(".p_mask, .bp_close").on('click', function() {
      $(".p_mask").removeClass('visible');
      $(".burger_popup").removeClass('opened');
      enableBodyScroll();
      setTimeout(() => {
         $("body").removeClass('no_scroll');
      }, 300);
   });


   //search popup
   $(".h_search_btn").on('click', function() {
      $(".p_mask_2").css('transition', 'opacity 0.3s ease, background 0.3s ease');
      $(".search_popup").addClass('opened');
      $("body").addClass('no_scroll_2');
      disableBodyScroll();
      setTimeout(() => {
         $(".p_mask_2").addClass('visible');
      }, 10);
   });

   $(".p_mask_2, .sp_close").on('click', function() {
      $(".p_mask_2").removeClass('visible');
      $(".search_popup").removeClass('opened');
      enableBodyScroll();
      setTimeout(() => {
         $("body").removeClass('no_scroll_2');
      }, 300);
   });


   //filter popup
   $(".flt_btn").on('click', function() {
      $(".p_mask_3").css('transition', 'opacity 0.3s ease, background 0.3s ease');
      $(".filter_popup").addClass('opened');
      $("body").addClass('no_scroll_3');
      disableBodyScroll();
      setTimeout(() => {
         $(".p_mask_3").addClass('visible');
      }, 10);
   });

   $(".p_mask_3, .fp_close").on('click', function() {
      $(".p_mask_3").removeClass('visible');
      $(".filter_popup").removeClass('opened');
      enableBodyScroll();
      setTimeout(() => {
         $("body").removeClass('no_scroll_3');
      }, 300);
   });

   //text block popup
   $(".tb_see_more").click(function () {
      $(this).prev(".tb_popup").slideToggle();
      $(this).toggleClass('opened');
   });

   //fav heart
   $(".gs_heart").click(function (e) {
      $(this).toggleClass('selected');
      e.preventDefault()
   });

   //cat cart selected
   $(".gs_btn").click(function (e) {
      $(this).toggleClass('selected');
   });

   //filter fixed mobile
   $(window).scroll(function () {
      if ($(this).scrollTop() > 60) {
         $(".ct_head").addClass('hidden');
      } else {
         $(".ct_head").removeClass('hidden');
      }
   });

   function handleScroll() {
      if ($('.cat_items').length > 0) {
         var trigger = $('.cat_items').offset().top - 64;

         // Если trigger < 0, устанавливаем в 0
         if (trigger < 0) trigger = 0;

         if ($(window).scrollTop() > trigger) {
            $(".ct_head, .filter_popup").addClass('fixed');
         } else {
            $(".ct_head, .filter_popup").removeClass('fixed');
         }
      } else if ($('.cat_top').length > 0) {
         var trigger = $('.cat_top').offset().top + $('.cat_top').height();

         // Если trigger < 0, устанавливаем в 0
         if (trigger < 0) trigger = 0;

         if ($(window).scrollTop() > trigger) {
            $(".cat_f_fixed").addClass('visible');
         } else {
            $(".cat_f_fixed").removeClass('visible');
         }
      }
   }

   // Первичный вызов функции при загрузке страницы
   handleScroll();

   // Добавление обработчика события прокрутки в зависимости от размера экрана и наличия элементов
   $(window).scroll(function () {
      if ($('.cat_items').length > 0 || $('.cat_top').length > 0) {
         handleScroll();
      }
   });






   //f_menu_popups
   var fm = window.matchMedia('all and (max-width: 768px)');
   if (fm.matches) {
      $(".fbc_head").click(function (e) {
         $(this).siblings(".fbc_menu").slideToggle();
         $(this).toggleClass('opened');
         e.preventDefault();
      });
   } else { }


   //slider_2x_rollers
   var inputs,
      slider = $('.i2_slider').slider({
         range: true,
         min: 5000,
         max: 60000,
         values: [5000, 60000],
         slide: function (event, ui) {
            inputs.eq(ui.handleIndex).val(ui.value);
         }
      });
   inputs = $('.i2s_input').on('.i2s_input', function () {
      var values = inputs.map(function (i, el) {
         var v = +$(el).val();
         return isNaN(v) ? 0 : v;
      }).get();
      slider.slider('values', values);
   });



   //custom scrollbar off / filter block popup
   var fp = window.matchMedia('all and (max-width: 1024px)');
   if (fp.matches) {
      $(".fp_pop_btn").click(function () {
         $(this).parent(".fp_block").toggleClass('opened');
      });
      //custom scrollbar
      // $('.fbp_scroll').mCustomScrollbar({
      //     axis: "x",
      //     mouseWheel:{
      //         scrollAmount:'100%'
      //     }
      // });
   } else {
      $(".fp_pop_btn").click(function () {
         $(this).parent(".fp_block").toggleClass('opened');
      });
   }

   //selected filter
   $(".ct_item").click(function () {
      $(this).toggleClass('selected');
   });
   $(".fpb_item").click(function () {
      $(this).toggleClass('selected');
   });
   $(".fpb_item2").click(function () {
      $(".fpb_item2").removeClass('selected');
      $(this).addClass('selected');
   });
   $(".fph_reset").click(function () {
      $(".fpb_item, .fpb_item2").removeClass('selected');
      $(".fpb_item2:first-child").addClass('selected');
   });

   // $(_ => {
   //     $('.bond').on('click', 'div', function(){
   //         const i = $(this).parent().children().index(this)
   //         const os = $(`.bond > div:nth-child(${i + 1})`)
   //         if (os.hasClass('selected')) {
   //             os.remove()
   //         } else {
   //             $('.bond > .selected').removeClass('selected')
   //             os.addClass('selected')
   //         }
   //     })
   // })








   //owl sliders
   // Добавляем класс 'owl-carousel' и настраиваем слайдер для элементов с классом '.main_slider', если такие элементы существуют
   if ($('.main_slider').length) {
      $('.main_slider').addClass('owl-carousel');
      $('.main_slider').owlCarousel({
         center: false,
         items: 1,
         loop: true,
         autoWidth: false,
      });
   }

   // Добавляем класс 'owl-carousel' и настраиваем слайдер для элементов с классом '.hit_slider', если такие элементы существуют
   if ($('.hit_slider').length) {
      $('.hit_slider').addClass('owl-carousel');
      $('.hit_slider').owlCarousel({
         center: false,
         items: 5,
         loop: true,
         margin: 6,
         autoWidth: true,
         autoplay: true,
         autoplayTimeout: 3000,
         responsive: {
            0: {},
            1024: {
               margin: 28,
            }
         }
      });
   }
   // Добавляем класс 'owl-carousel' и настраиваем слайдер для элементов с классом '.top_slider', если такие элементы существуют
   if ($('.top_slider').length) {
      $('.top_slider').addClass('owl-carousel');
      $('.top_slider').owlCarousel({
         center: false,
         items: 6,
         loop: true,
         margin: 15,
         autoWidth: true,
         responsive: {
            0: {
               margin: 5,
            },
            1024: {
               margin: 6,
            }
         }
      });
   }

   // Добавляем класс 'owl-carousel' и настраиваем слайдер для элементов с классом '.discounts_slider', если такие элементы существуют
   if ($('.discounts_slider').length) {
      $('.discounts_slider').addClass('owl-carousel');
      $('.discounts_slider').owlCarousel({
         center: false,
         items: 4,
         loop: true,
         margin: 12,
         autoWidth: true,
      });
   }

   // Добавляем класс 'owl-carousel' и настраиваем слайдер для элементов с классом '.good_slider', если такие элементы существуют
   if ($('.good_slider').length) {
      $('.good_slider').addClass('owl-carousel');
      $('.good_slider').owlCarousel({
         center: false,
         items: 1,
         loop: true,
         margin: 0,
         autoWidth: false,
         // autoplay: true,
         // autoplayTimeout: 3000,
      });
   }



});



/*------------------------------BLOG slider---------------------------*/
const swiperElement = document.querySelector('.articles__swiper');

if (swiperElement) {
   const swiperArticles = new Swiper(swiperElement, {
      loop: true,
      navigation: {
         nextEl: '.articles-button-next',
         prevEl: '.articles-button-prev',
      },
      simulateTouch: true,
      touchRatio: 1,
      grabCursor: true,
      slideToClickedSlide: false,
      spaceBetween: 10,
      watchOverflow: true,
      freeMode: false,
      breakpoints: {
         320: {
            slidesPerView: 1.1,
         },
         650: {
            slidesPerView: 2.1,
         },
         768: {
            slidesPerView: 3,
            spaceBetween: 40,
         },
      },
   });
}


/*------------------------------share---------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const shareButtons = document.querySelectorAll(".header-share");

   shareButtons.forEach(button => {
      button.addEventListener("click", () => {
         shareArticle();
      });
   });
});

function shareArticle() {
   if (navigator.share) {
      navigator.share({
         title: document.title,
         text: "Read this article!",
         url: window.location.href
      })
         .then(() => console.log("Share success"))
         .catch((error) => console.log("Error: ", error));
   } else {
      navigator.clipboard.writeText(window.location.href).then(() => {
         alert("Link copied");
      }).catch((error) => {
         console.log("Error: ", error);
      });
   }
}



// Обработчик клика по промо-полоске
$(document).on('click', '.poloska__link', function(e) {
   e.preventDefault();

   // Создаем модальное окно
   var modal = $('<div class="promo-modal"><div class="promo-modal__content"><div class="promo-modal__close"></div><div class="promo-modal__title">Ваш промокод</div><div class="promo-modal__code">3000₽</div><div class="promo-modal__text">Используйте этот промокод при оформлении заказа</div></div></div>');

   // Добавляем в body
   $('body').append(modal);

   // Показываем модальное окно
   $('body').addClass('no_scroll');
   modal.fadeIn(300);

   // Обработчик закрытия
   $('.promo-modal__close, .promo-modal').on('click', function(e) {
      if($(e.target).hasClass('promo-modal') || $(e.target).hasClass('promo-modal__close')) {
         modal.fadeOut(300, function() {
            $(this).remove();
            $('body').removeClass('no_scroll');
         });
      }
   });
});

// Функция для показа промо-окна "2 платья в подарок"
function showGiftModal() {
   // Проверяем, нужно ли показывать окно
   const dressItems = $('.cat_items.mob .cat_item, .cat_items.mob .coll_2 .cat_item');
   const scrollPosition = $(window).scrollTop() + $(window).height();
   const documentHeight = $(document).height();

   // Показываем либо после 25 платьев, либо при приближении к концу
   if (dressItems.length >= 25 || scrollPosition >= documentHeight - 300) {
      // Проверяем, не показывали ли уже это окно
      if (!localStorage.getItem('giftModalShown')) {
         // Создаем модальное окно
         var modal = $(
             '<div class="gift-modal">' +
             '<div class="gift-modal__content">' +
             '<div class="gift-modal__close"></div>' +
             '<div class="gift-modal__title">Специальное предложение!</div>' +
             '<div class="gift-modal__image"><img src="images/gift-promo.jpg" alt="2 платья в подарок"></div>' +
             '<div class="gift-modal__text">При покупке от 3 платьев — получите 2 платья в подарок!</div>' +
             '<a href="discounts.html" class="gift-modal__button">Подробнее</a>' +
             '</div>' +
             '</div>'
         );

         // Добавляем в body
         $('body').append(modal);

         // Показываем модальное окно
         $('body').addClass('no_scroll');
         modal.fadeIn(300);

         // Запоминаем, что показали окно
         localStorage.setItem('giftModalShown', 'true');

         // Обработчик закрытия
         $(document).on('click', '.gift-modal__close, .gift-modal', function(e) {
            if($(e.target).hasClass('gift-modal') || $(e.target).hasClass('gift-modal__close')) {
               modal.fadeOut(300, function() {
                  $(this).remove();
                  $('body').removeClass('no_scroll');
                  $(document).off('click', '.gift-modal__close, .gift-modal');
               });
            }
         });
      }
   }
}

$(document).ready(function() {
   showGiftModal();
});

$(window).scroll(function() {
   showGiftModal();
});


// Инициализация слайдера с drag-эффектом
function initHoverSlider() {
   $('.good_slider').each(function() {
      const $slider = $(this);
      let isDown = false;
      let startX;
      let scrollLeft;
      const sensitivity = 3; // Чувствительность прокрутки

      // Инициализация Owl Carousel
      $slider.owlCarousel({
         items: 1,
         loop: true,
         mouseDrag: false,
         touchDrag: false,
         pullDrag: false,
         dots: true,
         dotsEach: true
      });

      const owl = $slider.data('owl.carousel');

      // Обработчики событий мыши
      $slider.on('mousedown', function(e) {
         isDown = true;
         startX = e.pageX - $slider.offset().left;
         scrollLeft = $slider.scrollLeft();
         $slider.addClass('dragging');
         e.preventDefault();
      });

      $(document).on('mouseup', function() {
         isDown = false;
         $slider.removeClass('dragging');
      });

      $(document).on('mousemove', function(e) {
         if(!isDown) return;
         e.preventDefault();
         const x = e.pageX - $slider.offset().left;
         const walk = (x - startX) * sensitivity;

         // Определяем направление движения
         if (walk > 20) {
            owl.prev();
            isDown = false;
         } else if (walk < -20) {
            owl.next();
            isDown = false;
         }
      });

      // Листание при простом движении мыши (без клика)
      let lastX = 0;
      let lastDirection = 0;

      $slider.on('mousemove', function(e) {
         if(isDown) return;

         const currentX = e.pageX - $slider.offset().left;
         const deltaX = currentX - lastX;
         lastX = currentX;

         // Определяем направление движения
         const direction = deltaX > 0 ? 1 : deltaX < 0 ? -1 : 0;

         if (direction !== 0 && direction !== lastDirection) {
            if (direction > 0) {
               owl.prev();
            } else {
               owl.next();
            }
            lastDirection = direction;
         }
      });

      // Сброс при выходе за пределы слайдера
      $slider.on('mouseleave', function() {
         lastDirection = 0;
      });
   });
}

// Инициализация только для ПК версии
$(document).ready(function() {
   if ($(window).width() >= 1024) {
      initHoverSlider();
   }
});

// Реинициализация при изменении размера окна
$(window).resize(function() {
   if ($(window).width() >= 1024) {
      $('.good_slider').trigger('destroy.owl.carousel');
      initHoverSlider();
   }
});

// Обработчик для "Смотреть все"
$('.ct_item.cti_1').on('click', function(e) {
   e.preventDefault();

   // Добавляем класс selected только к этому элементу
   $('.ct_item').removeClass('selected');
   $(this).addClass('selected');

   // Сбрасываем все фильтры
   $('.fpb_item, .fpb_item2').removeClass('selected');
   $('.fpb_item2:first-child').addClass('selected'); // Выбираем "По популярности"
   $('.i2_slider').slider('values', [5000, 60000]); // Сбрасываем цену
   $('.i2s_input').val(5000).eq(1).val(60000);

   // Показываем, что фильтры сброшены
   $('.cth_tag').remove();
   $('.cth_tags').append('<div class="cth_tag">Все платья<span></span></div>');
});

// Модифицируем открытие фильтра в мобильной версии
$(window).on('resize', function() {
   if ($(window).width() < 1024) {
      $('.filter_popup').addClass('mobile');
   } else {
      $('.filter_popup').removeClass('mobile');
   }
}).trigger('resize');

// Обновляем обработчик открытия фильтра
$('.flt_btn').on('click', function() {
   if ($(window).width() < 1024) {
      $('.filter_popup.mobile').addClass('opened');
      $('body').addClass('no_scroll_3');
      $('.p_mask_3').addClass('visible');
   }
});

// Закрытие фильтра
$(document).on('click', '.fp_close, .p_mask_3', function() {
   $('.filter_popup.mobile').removeClass('opened');
   $('body').removeClass('no_scroll_3');
   $('.p_mask_3').removeClass('visible');
});

// Инициализация свайпа в фильтре
function initFilterScroll() {
   $('.fbp_scroll').each(function() {
      const $scroll = $(this);
      let isDown = false;
      let startX;
      let scrollLeft;

      $scroll.on('mousedown', function(e) {
         isDown = true;
         startX = e.pageX - $scroll.offset().left;
         scrollLeft = $scroll.scrollLeft();
         $scroll.css('cursor', 'grabbing');
      });

      $scroll.on('mouseleave', function() {
         isDown = false;
         $scroll.css('cursor', 'grab');
      });

      $scroll.on('mouseup', function() {
         isDown = false;
         $scroll.css('cursor', 'grab');
      });

      $scroll.on('mousemove', function(e) {
         if(!isDown) return;
         e.preventDefault();
         const x = e.pageX - $scroll.offset().left;
         const walk = (x - startX) * 2;
         $scroll.scrollLeft(scrollLeft - walk);
      });

      // Для тач-устройств
      $scroll.on('touchstart', function(e) {
         isDown = true;
         startX = e.originalEvent.touches[0].pageX - $scroll.offset().left;
         scrollLeft = $scroll.scrollLeft();
      });

      $scroll.on('touchend', function() {
         isDown = false;
      });

      $scroll.on('touchmove', function(e) {
         if(!isDown) return;
         e.preventDefault();
         const x = e.originalEvent.touches[0].pageX - $scroll.offset().left;
         const walk = (x - startX) * 2;
         $scroll.scrollLeft(scrollLeft - walk);
      });
   });
}

// Инициализация при загрузке и ресайзе
$(document).ready(function() {
   initFilterScroll();
});

$(window).resize(function() {
   initFilterScroll();
});

// Функция для блокировки прокрутки
function disableBodyScroll() {
   const scrollY = window.scrollY;
   document.body.style.position = 'fixed';
   document.body.style.top = `-${scrollY}px`;
   document.body.style.width = '100%';

   // Для iOS
   if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent)) {
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.height = '100%';
   }
}

// Функция для разблокировки прокрутки
function enableBodyScroll() {
   const scrollY = document.body.style.top;
   document.body.style.position = '';
   document.body.style.top = '';
   document.body.style.width = '';

   // Для iOS
   if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent)) {
      document.documentElement.style.overflow = '';
      document.documentElement.style.height = '';
   }

   // Восстанавливаем позицию скролла
   window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

// Инициализация фильтров
function initFilters() {
   if ($(window).width() >= 1024) {
      // Для ПК - простые раскрывающиеся списки
      $('.fp_pop_btn').off('click').on('click', function() {
         $(this).parent('.fp_block').toggleClass('opened');
      });

      // Закрываем все фильтры по умолчанию
      $('.fp_block').removeClass('opened');
   } else {
      // Для мобильных - свайпаемые списки
      initMobileFilters();
   }
}

// Инициализация мобильных фильтров
function initMobileFilters() {
   $('.fp_pop_btn').off('click').on('click', function() {
      const $block = $(this).parent('.fp_block');
      $block.toggleClass('opened');

      if ($block.hasClass('opened')) {
         $block.find('.fbp_scroll').css('height', 'auto');
      }
   });

   // Инициализация свайпа
   $('.fbp_scroll').each(function() {
      const $scroll = $(this);
      let isDown = false;
      let startX;
      let scrollLeft;

      $scroll.on('mousedown touchstart', function(e) {
         isDown = true;
         startX = (e.pageX || e.originalEvent.touches[0].pageX) - $scroll.offset().left;
         scrollLeft = $scroll.scrollLeft();
         $scroll.css('cursor', 'grabbing');
      });

      $scroll.on('mouseleave touchend', function() {
         isDown = false;
         $scroll.css('cursor', 'grab');
      });

      $scroll.on('mousemove touchmove', function(e) {
         if(!isDown) return;
         e.preventDefault();
         const x = (e.pageX || e.originalEvent.touches[0].pageX) - $scroll.offset().left;
         const walk = (x - startX) * 2;
         $scroll.scrollLeft(scrollLeft - walk);
      });
   });
}

// Инициализация при загрузке и ресайзе
$(document).ready(function() {
   initFilters();
});

$(window).resize(function() {
   initFilters();
});

// Фиксация шапки и фильтров при скролле
let lastScrollTop = 0;
const headerHeight = $('.header').outerHeight();
const categoryHeight = $('.ct_head').outerHeight();

$(window).scroll(function() {
   const st = $(this).scrollTop();

   // Фиксация основной шапки
   if (st > headerHeight) {
      $('.header').addClass('fixed');
   } else {
      $('.header').removeClass('fixed');
   }

   // Фиксация плашки фильтров
   if (st > (headerHeight + categoryHeight)) {
      $('.ct_head').addClass('fixed');
   } else {
      $('.ct_head').removeClass('fixed');
   }

   lastScrollTop = st;
});

// Инициализация ползунка цены с круглыми ручками
function initPriceSlider() {
   $(".i2_slider").slider({
      range: true,
      min: 5000,
      max: 60000,
      values: [5000, 60000],
      slide: function(event, ui) {
         $(".i2s_input").eq(0).val(ui.values[0]);
         $(".i2s_input").eq(1).val(ui.values[1]);
      },
      create: function() {
         // Добавляем круглые края
         $('.ui-slider-handle').each(function() {
            $(this).append('<div class="slider-handle-circle"></div>');
         });
      }
   });
}

// Инициализация при загрузке
$(document).ready(function() {
   initPriceSlider();

   // Перемещаем иконку фильтра в шапку при фиксации
   $(window).scroll();
});