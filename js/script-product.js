/*--------------------------------------------Открытие ФОТО МОБ---------------------------------------------*/
const gsBgImgSelector = ".product-card__slide img";
const sliderImgs = document.querySelectorAll(gsBgImgSelector);

if (sliderImgs.length > 0 && window.innerWidth < 1000) {
   const dynamicEl = [...sliderImgs].map((sliderImg) => {
      return {
         src: sliderImg.src,
         thumb: sliderImg.src,
      };
   });

   const dynamicGallery = document.querySelector(".dynamic-gallery-button");

   const popup = lightGallery(dynamicGallery, {
      plugins: [lgPager],
      dynamic: true,
      download: false,
      dynamicEl,
      mobileSettings: {
         showCloseIcon: true,
      },
      controls: false,
      fullscreen: true,
      counter: false,
      pager: true,
      pagerPlugin: '#lg-pager'
   });



   dynamicGallery.addEventListener("click", () => {
      popup.openGallery(0);
   });

   [...document.querySelectorAll(".product-card__slide")].map((slide, idx) => {
      slide.addEventListener("click", () => {
         // Проверяем, является ли текущий слайд видео
         const isVideoSlide = slide.querySelector('video');
         if (!isVideoSlide) {
            popup.openGallery(idx);
         }
      });
   });


   const lgInner = document.querySelector('.lg-inner');
   if (lgInner) {
      lgInner.addEventListener('click', (event) => {
         const clickedImage = event.target.closest('.lg-image');
         if (clickedImage) {
            popup.closeGallery();
         }
      });
   }
}


/*--------------------------------------------Слайдер МОБ---------------------------------------------*/

if (window.innerWidth < 1000) {
   var swiperContainer = document.querySelector('.product-card__swiper');
   var swiperWrapper = document.querySelector('.product-card__wrapper');
   var slides = document.querySelectorAll('.product-card__slide');

   if (swiperContainer && swiperWrapper && slides.length > 0) {
      swiperContainer.classList.add('swiper');
      swiperWrapper.classList.add('swiper-wrapper');
      slides.forEach(function (slide) {
         slide.classList.add('swiper-slide');
      });

      var swiper = new Swiper('.product-card__swiper', {
         direction: 'horizontal',
         loop: true,
         slidesPerView: 1,
         freeMode: false,
         speed: 200,
         watchOverflow: true,
         grabCursor: false,
         slideToClickedSlide: false,
         allowTouchMove: true,
         pagination: {
            el: '.swiper-pagination',
            clickable: true,
         },
         keyboard: {
            enabled: false,
         },
         mousewheel: false,
         spaceBetween: 0,
         centeredSlides: false,
         initialSlide: 0,
         breakpoints: {
            550: {
               slidesPerView: 2,
            },
            650: {
               slidesPerView: 3,
            },
         },
      });
   }
}


/*--------------------------------------------Перенос кнопок назад и избранное---------------------------------------------*/
window.onload = function () {
   var wishlistButton = document.querySelector('.add-to-wishlist');
   var infoProductLink = document.querySelector('.info-product__link');
   var productCardBody = document.querySelector('.product-card__body');
   var screenWidth = window.innerWidth;

   function moveElements() {
      if (screenWidth < 650 && wishlistButton && infoProductLink && productCardBody) {
         productCardBody.appendChild(wishlistButton);
         productCardBody.appendChild(infoProductLink);
      }
   }

   moveElements();

   window.addEventListener('resize', function () {
      screenWidth = window.innerWidth;
      moveElements();
   });
};

/*--------------------------------------------Перенос---------------------------------------------*/
window.addEventListener('resize', function () {
   var productCardInfo = document.querySelector('.product-card__info');
   var productCardMore = document.querySelector('.product-card__more');
   var productCard = document.querySelector('.product-card');

   if (window.innerWidth < 650 && productCardInfo && productCardMore) {
      productCardInfo.appendChild(productCardMore);
   } else if (productCard && productCardMore) {
      productCard.appendChild(productCardMore);
   }
});

window.dispatchEvent(new Event('resize'));

/*--------------------------------------------Имитация шторки---------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   const info = document.querySelector('.product-card__info');

   if (info) {
      let touchStartY;
      let isScrolling = false;
      const topGap = -5;

      info.addEventListener('touchstart', function (event) {
         touchStartY = event.touches[0].clientY;
         isScrolling = true;
      });

      info.addEventListener('touchmove', function (event) {
         if (isScrolling) {
            const touchEndY = event.changedTouches[0].clientY;
            const deltaY = touchEndY - touchStartY;

            if (this.scrollTop <= 0 && deltaY > 0) {
               event.preventDefault();
            }

            if (this.scrollTop + this.clientHeight >= this.scrollHeight && deltaY < 0) {
               event.preventDefault();
            }
         }
      });

      info.addEventListener('touchend', function (event) {
         const touchEndY = event.changedTouches[0].clientY;
         const deltaY = touchEndY - touchStartY;

         if (deltaY < -50 && this.scrollTop + topGap <= 0) {
            this.classList.add('active');
         }

         if (deltaY > 1 && this.classList.contains('active') && this.scrollTop === 0) {
            this.classList.remove('active');
         }

         isScrolling = false;
      });
   }
});

/*--------------------------------------------Ограничен текста О товаре---------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   var readMoreButton = document.getElementById('readMore');
   var productText = document.getElementById('productText');

   if (readMoreButton && productText) {
      readMoreButton.addEventListener('click', function () {
         productText.classList.toggle('show');
         if (productText.classList.contains('show')) {
            readMoreButton.style.display = 'none';
         } else {
            readMoreButton.innerText = 'Читать далее';
         }
      });
   }
});


/*-------------------------------------Ховер вместо клика на превью----------------------------------------------------*/
if (window.innerWidth > 1000) {
   var thumbItems = document.querySelectorAll('.lg-thumb-item');

   thumbItems.forEach(function (item) {
      item.addEventListener('mouseover', function () {
         var clickEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
         });
         item.dispatchEvent(clickEvent);
      });
   });
}


/*----------------------------------------Заливка сердца-------------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   const heartButtons = document.querySelectorAll('.heartButton');

   heartButtons.forEach(function (heartButton) {
      heartButton.addEventListener('click', function () {
         heartButton.classList.toggle('red-heart');
      });
   });
});


/*--------------------------------------------Кнопка В корзину---------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   var addCartButton = document.getElementById("addCart");
   var cartMessage = document.getElementById("cartMessage");

   if (addCartButton) {
      addCartButton.addEventListener("click", function () {
         var addToCartButton = this;

         if (addToCartButton.classList.contains("added")) {
            addToCartButton.classList.remove("added");
            addToCartButton.textContent = "В корзину";
            if (cartMessage) {
               cartMessage.classList.remove('show');
            }
         } else {
            addToCartButton.classList.add("added");
            addToCartButton.textContent = "В корзине";
            if (cartMessage) {
               cartMessage.classList.add('show');
            }
         }
      });
   }
});


function moveFooter() {
   var screenWidth = window.innerWidth;
   var footer = document.querySelector('footer');
   var productCardMore = document.querySelector('.product-card__more');

   if (footer && productCardMore) { // Проверка наличия footer и productCardMore
      if (screenWidth < 625) {
         productCardMore.appendChild(footer); // Переносим футер внутрь product-card__more
      } else {
         // Если ширина экрана больше 625px, возвращаем футер обратно в изначальное положение
         document.querySelector('.product-card').appendChild(footer);
      }
   }
}

// Вызываем функцию при загрузке страницы и изменении размера окна
window.onload = moveFooter;
window.onresize = moveFooter;


/*--------------------------------------------Слайдер в Корзине---------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   var swipers = document.querySelectorAll('.item-cart__swiper');

   swipers.forEach(function (swiperContainer) {
      var mySwiper = new Swiper(swiperContainer, {
         loop: true,

         pagination: {
            el: '.swiper-pagination',
            clickable: true,
         },
         //Включение/отключение перетаскивания на ПК
         simulateTouch: true,
         //Чувствительность свайпа
         touchRatio: 1,
         //Курсор перетаскивания
         grabCursor: true,
         //Переключение при клике на слайд
         slideToClickedSlide: false,


         //Управление колесом мыши
         mousewheel: false,
         //Автовысота (буллеты под картинкой)
         autoHeight: true,
         //Количество слайдов для показа
         slidesPerView: 1,
         //Отключение функционала если слайдов меньше чем нужно
         watchOverflow: true,
         //Свободный режим (перетаскивание без фиксированных позиций)
         freeMode: false,

         speed: 500,
         effect: 'fade',
         fadeEffect: {
            crossFade: true,
         },
      });
   });
});

/*--------------------------------------------Кастомный Инпут---------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   var inputs = document.querySelectorAll('.custom-input');
   var increaseButtons = document.querySelectorAll('.increase-button');
   var decreaseButtons = document.querySelectorAll('.decrease-button');

   for (var i = 0; i < inputs.length; i++) {
      increaseButtons[i].addEventListener('click', function () {
         increaseValue(this);
      });

      decreaseButtons[i].addEventListener('click', function () {
         decreaseValue(this);
      });
   }

   function increaseValue(button) {
      var input = button.previousElementSibling;
      var value = parseInt(input.value, 10);
      value = isNaN(value) ? 0 : value;
      value++;
      input.value = value;
   }

   function decreaseValue(button) {
      var input = button.nextElementSibling;
      var value = parseInt(input.value, 10);
      value = isNaN(value) ? 0 : value;
      value--;
      input.value = value;
   }
});

/*--------------------------------------------Заливка кнопки---------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   const heartButtons = document.querySelectorAll('#heartWishlistButton');

   heartButtons.forEach(function (heartButton) {
      heartButton.addEventListener('click', function () {
         heartButton.classList.toggle('red-heart');
      });
   });
});

/*--------------------------------------------Перенос кнопки купить в корзине---------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   // Получаем ссылку на оплату и кнопку информации о корзине
   const payLink = document.querySelector('.cart__pay-link');
   const infoButton = document.querySelector('.info-cart__button');

   // Функция для перемещения ссылки на оплату внутрь кнопки информации о корзине
   function movePayLink() {
      // Если элементы существуют
      if (payLink && infoButton) {
         // Если ширина окна меньше 800px
         if (window.innerWidth < 800) {
            // Перемещаем ссылку на оплату внутрь кнопки информации о корзине
            infoButton.appendChild(payLink);
         }
      }
   }

   // Вызываем функцию при загрузке страницы и при изменении размера окна
   window.addEventListener('load', movePayLink);
   window.addEventListener('resize', movePayLink);

   // Получаем ссылку "Вернуться назад" и заголовок сайта
   const goBackLink = document.querySelector('.cart__go-back');
   const header = document.querySelector('.header');

   // Функция для перемещения ссылки "Вернуться назад" в заголовок при малой ширине окна
   function moveGoBackLink() {
      // Если элементы существуют
      if (goBackLink && header) {
         // Если ширина окна меньше 800px
         if (window.innerWidth < 800) {
            // Перемещаем ссылку "Вернуться назад" в заголовок сайта
            header.appendChild(goBackLink);
         }
      }
   }

   // Вызываем функцию при загрузке страницы и при изменении размера окна
   window.addEventListener('load', moveGoBackLink);
   window.addEventListener('resize', moveGoBackLink);
});


/*--------------------------------------------Проверка корзины на пустоту---------------------------------------------*/
function checkCartItems() {
   var cartItems = document.querySelectorAll('.item-cart');
   var cart = document.querySelector('.cart');

   if (cart) { // Проверяем наличие элемента .cart
      if (cartItems.length > 0) {
         cart.classList.remove('empty');
      } else {
         cart.classList.add('empty');
      }
   }
}

checkCartItems();


/*--------------------------------------------Удаление товара из корзины---------------------------------------------*/
// Находим все кнопки удаления
var removeButtons = document.querySelectorAll('#cartRemove');
// Добавляем обработчик события клика для каждой кнопки удаления
removeButtons.forEach(function (button) {
   button.addEventListener('click', function () {
      // Всегда добавляем класс removed
      var cartItem = this.closest('.cart__item');
      cartItem.classList.add('removed');
      checkCartItems();
   });
});


/*--------------------------------------------Согласие с политикой---------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   const checkboxes = document.querySelectorAll('.policyjs1 input[type="checkbox"]');
   const submitButtons = document.querySelectorAll('.submit-btn');

   checkboxes.forEach(function (checkbox, index) {
      checkbox.addEventListener('change', function () {
         const isChecked = checkbox.checked;
         submitButtons[index].disabled = !isChecked;
      });
   });
});

document.addEventListener('DOMContentLoaded', function () {
   const policyCheckbox = document.getElementById('policyCheckbox');
   const submitButton = document.querySelector('.submit-btn');

   if (policyCheckbox && submitButton) {
      policyCheckbox.addEventListener('change', function () {
         submitButton.disabled = !policyCheckbox.checked;
      });
   }
});

document.addEventListener('DOMContentLoaded', function () {
   const checkboxes = document.querySelectorAll('.policyjs2 input[type="checkbox"]');
   const submitButtons = document.querySelectorAll('.submit-btn');

   checkboxes.forEach(function (checkbox, index) {
      checkbox.addEventListener('change', function () {
         const isChecked = checkbox.checked;
         submitButtons[index].disabled = !isChecked;
      });
   });
});

document.addEventListener('DOMContentLoaded', function () {
   const policyCheckbox = document.getElementById('policyCheckbox2');
   const submitButton = document.querySelector('.submit-btn2');

   if (policyCheckbox && submitButton) {
      policyCheckbox.addEventListener('change', function () {
         submitButton.disabled = !policyCheckbox.checked;
      });
   }
});
/*--------------------------------------------Удаление товара из избранного---------------------------------------------*/
// Находим все кнопки удаления
var removeButtons = document.querySelectorAll('#cartRemove2');

// Добавляем обработчик события клика для каждой кнопки удаления
removeButtons.forEach(function (button) {
   button.addEventListener('click', function () {
      var cartItem = this.closest('.cart__item');
      if (window.innerWidth > 800) {
         // Если разрешение больше 800px, удаляем полностью
         cartItem.classList.add('removed');
      } else {
         // Если разрешение меньше или равно 800px, добавляем класс
         cartItem.classList.add('removed');
      }
      checkCartItems();
   });
});


/*--------------------------------------------Записаться попап---------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   var openTryOnButton = document.getElementById('openTryOn');
   var dressBookingPopup = document.querySelector('.dress-booking-popup');
   var cartItems = document.querySelector('.cart__items');
   var cartDetails = document.querySelector('.cart__details');
   var closePopupButton = document.querySelector('.close-dress-booking-popup');
   var body = document.body;
   var cartGoBackButton = document.querySelector('.cart__go-back');
   var mainWrapper = document.querySelector('.top_wrapper');
   var completeMessage = document.querySelector('.dress-booking-complete');

   function openPopup() {
      if (dressBookingPopup && cartItems && cartDetails && body) {
         dressBookingPopup.classList.add('show');
         cartItems.classList.add('_popup');
         cartDetails.classList.add('_popup');
         body.classList.add('_popup1');
         window.location.hash = 'dress-booking';
         mainWrapper.classList.add('wrapper-open-popup');
      }
   }

   function closePopup() {
      if (dressBookingPopup && cartItems && cartDetails && body) {
         dressBookingPopup.classList.remove('show');
         cartItems.classList.remove('_popup');
         cartDetails.classList.remove('_popup');
         body.classList.remove('_popup1');
         history.pushState("", document.title, window.location.pathname + window.location.search);
         mainWrapper.classList.remove('wrapper-open-popup');
         completeMessage.style.display = 'none';
      }
   }

   function isClickInsidePopup(event) {
      return dressBookingPopup.contains(event.target) || openTryOnButton.contains(event.target);
   }

   document.addEventListener('click', function (event) {
      if (!isClickInsidePopup(event)) {
         closePopup();
      }
   });

   if (openTryOnButton) {
      openTryOnButton.addEventListener('click', openPopup);
   }

   if (closePopupButton) {
      closePopupButton.addEventListener('click', closePopup);
   }

   if (cartGoBackButton) {
      cartGoBackButton.addEventListener('click', function () {
         if (window.innerWidth < 800) {
            closePopup();
         }
      });
   }
});


/*--------------------------------------------Оплатить попап---------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   var openPayOnButton = document.getElementById('open-pay-popup');
   var payPopup = document.querySelector('.buy-online-popup');
   var cartDetails = document.querySelector('.cart__details');
   var cartItems = document.querySelector('.cart__items');
   var closePopupButton = document.querySelector('.close-dress-booking-popup');
   var body = document.body;
   var cartGoBackButton = document.querySelector('.cart__go-back');
   var completeMessage = document.getElementById('pay-complete');

   function openPopup() {
      if (payPopup && cartItems && cartDetails && body) {
         payPopup.classList.add('show');
         cartItems.classList.add('_popup2');
         cartDetails.classList.add('_popup2');
         body.classList.add('_popup2');
         window.location.hash = 'dress-booking';
         // Добавляем обработчик события для закрытия попапа при клике вне его области
         document.addEventListener('click', outsideClickListener);
      }
   }

   function closePopup() {
      if (payPopup && cartItems && cartDetails && body) {
         payPopup.classList.remove('show');
         cartItems.classList.remove('_popup2');
         cartDetails.classList.remove('_popup2');
         body.classList.remove('_popup2');
         history.pushState("", document.title, window.location.pathname + window.location.search);
         completeMessage.style.display = 'none';
         // Удаляем обработчик события, чтобы избежать закрытия попапа при клике вне его области
         document.removeEventListener('click', outsideClickListener);
      }
   }

   // Функция для определения, был ли клик вне попапа
   function outsideClickListener(event) {
      if (!payPopup.contains(event.target) && !openPayOnButton.contains(event.target)) {
         closePopup();
      }
   }

   if (openPayOnButton) {
      openPayOnButton.addEventListener('click', openPopup);
   }

   if (closePopupButton) {
      closePopupButton.addEventListener('click', closePopup);
   }

   if (cartGoBackButton) {
      cartGoBackButton.addEventListener('click', function () {
         if (window.innerWidth < 800) {
            closePopup();
         }
      });
   }
});


/*--------------------------------------------ВЫБОР даты---------------------------------------------*/
// Проверяем наличие элемента с id "datepicker"
if (document.getElementById('datepicker')) {
   new AirDatepicker('#datepicker', {
      inline: true,
      minDate: new Date(),
      altField: '#altDateField',
      altFieldDateFormat: 'dd MMMM yyyy',
   });
}

if (document.getElementById('altDateField')) {
}

/*--------------------------------------------Инпут радио---------------------------------------------*/
const radioButtons = document.querySelectorAll('input[name="customRadio"]');

radioButtons.forEach(radioButton => {
   radioButton.addEventListener('click', function () {
      const parent = this.parentElement;
      const isActive = parent.classList.contains('active');

      // Удаляем класс active у всех радиокнопок
      radioButtons.forEach(rb => {
         rb.parentElement.classList.remove('active');
      });

      // Если текущая радиокнопка не активна, добавляем класс active
      if (!isActive) {
         parent.classList.add('active');
      }
   });
});


/*--------------------------------------------Валидация формы---------------------------------------------*/
/* function checkForm(event) {
   event.preventDefault(); // Предотвращаем отправку формы по умолчанию
   var form = document.querySelector('.dress-booking__form');
   var name = form.querySelector('input[type="name"]').value.trim();
   var phone = form.querySelector('input[type="tel"]').value.trim();
   var date = form.querySelector('#datepicker').value.trim();
   var time = form.querySelector('input[name="customRadio"]:checked').value.trim();
   var policyCheckbox = form.querySelector('#policyCheckbox').checked;
   var submitButton = form.querySelector('button[type="submit"]');

   // Проверяем, все ли поля заполнены и поле согласия отмечено
   if (name !== '' && phone !== '' && date !== '' && time !== '' && policyCheckbox) {
      // Если все в порядке, можно отправить форму или выполнить другие действия
      submitButton.disabled = false; // Убираем атрибут disabled с кнопки
   } else {
      // Если не все обязательные поля заполнены, устанавливаем атрибут disabled на кнопке
      submitButton.disabled = true;
   }
}

// Вызываем функцию проверки при изменении любого из полей формы
var form = document.querySelector('.dress-booking__form');
form.querySelectorAll('input, #datepicker').forEach(function (input) {
   input.addEventListener('input', checkForm);
});
form.querySelectorAll('input[type="radio"]').forEach(function (radio) {
   radio.addEventListener('change', checkForm);
});
form.querySelector('#policyCheckbox').addEventListener('change', checkForm);

 */
/*--------------------------------------------Табы доставка---------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   const tabs = document.querySelectorAll('.delivery-tab');

   tabs.forEach(tab => {
      tab.addEventListener('click', function () {
         const tabNumber = this.getAttribute('data-tab');

         document.querySelectorAll('.buy-online-popup__form-delivery-tab-contents > div').forEach(tabContent => {
            tabContent.classList.add('inactive-tab');
         });

         document.querySelectorAll('.buy-online-popup__form-delivery-tabs > div').forEach(tab => {
            tab.classList.remove('active-tab');
         });

         document.getElementById('deliveryContent' + tabNumber).classList.remove('inactive-tab');
         document.getElementById('deliveryContent' + tabNumber).classList.add('active-tab');

         this.classList.add('active-tab');

         if (tabNumber === '1') {
            // For Самовывоз tab
            document.getElementById('lastnameInput').style.display = 'none';
            document.getElementById('mailInput').style.display = 'none';
            document.getElementById('commentaries').style.display = 'block';
         } else {
            document.getElementById('lastnameInput').style.display = 'block';
            document.getElementById('mailInput').style.display = 'block';
            document.getElementById('commentaries').style.display = 'none';
         }
      });
   });
});

// Получаем все элементы с классом "pay-method"
const payMethods = document.querySelectorAll('.pay-method');

// Добавляем обработчик события на каждый элемент
payMethods.forEach(function (method) {
   method.addEventListener('click', function () {
      // Удаляем класс "active" у всех методов оплаты
      payMethods.forEach(function (method) {
         method.classList.remove('active');
      });

      // Добавляем класс "active" к выбранному методу оплаты
      this.classList.add('active');
   });
});


/*--------------------------------------------Добавление из избранного в корзину ---------------------------------------------*/
var buttons = document.querySelectorAll('.wishlist-to-cart');
if (buttons.length > 0) {
   buttons.forEach(function (button) {
      button.addEventListener('click', function () {
         button.classList.toggle('added');
         if (button.classList.contains('added')) {
            button.textContent = 'В корзине';
         } else {
            button.textContent = 'В корзину';
         }
      });
   });
}


document.addEventListener('DOMContentLoaded', function () {
   // Проверяем наличие элемента с классом '.submit-btn'
   var submitBtn1 = document.querySelector('.submit-btn');
   if (submitBtn1) {
      // Если элемент найден, добавляем обработчик события на клик по кнопке "Записаться"
      submitBtn1.addEventListener('click', function (event) {
         event.preventDefault(); // Предотвращаем стандартное поведение кнопки

         // Показываем блок после успешной записи
         var dressBookingComplete = document.querySelector('.dress-booking-complete');
         if (dressBookingComplete) {
            dressBookingComplete.style.display = 'block';
         }
      });
   }

   // Проверяем наличие элемента с классом '.submit-btn2'
   var submitBtn2 = document.querySelector('.submit-btn2');
   if (submitBtn2) {
      // Если элемент найден, добавляем обработчик события на клик по кнопке "Записаться"
      submitBtn2.addEventListener('click', function (event) {
         event.preventDefault(); // Предотвращаем стандартное поведение кнопки

         // Показываем блок после успешной записи
         var payComplete = document.getElementById('pay-complete');
         if (payComplete) {
            payComplete.style.display = 'block';
         }
      });
   }
});

