$(document).ready(function () {
 $(".mob-menu").click(function () {
  $(".mob-menu-overlay").toggleClass("mob-menu-overlay-active");
  $(".mob-menu").toggleClass("mob-menu-active");
  $(".mob-menu-wrap").toggleClass("mob-menu-wrap-active");
 });
});

$(document).ready(function () {
 $(".mob-menu-active").click(function () {
  $(".mob-menu-overlay").removeClass("mob-menu-overlay-active");
  $(".mob-menu").removeClass("mob-menu-active");
  $(".mob-menu-wrap").removeClass("mob-menu-wrap-active");
 });
 $(".card-main-descr-all").click(function () {
  $(".card-main-descr-text").toggleClass("card-main-descr-text-active");
  $(this).toggleClass("card-main-descr-all-active");
 });
});
$('.main-slider').slick({
 arrows: true,
 dots: true,
 slidesToShow: 1,
 slidesToScroll: 1,
 prevArrow: '<div class="slider-arrow slider-arrow_left slider-arrow-main"><img src="img/main-right.png" alt=""></div>',
 nextArrow: '<div class="slider-arrow slider-arrow_right slider-arrow-main"><img src="img/main-right.png" alt=""></div>'
});
$('.recomended-slider').slick({
 arrows: true,
 slidesToShow: 4,
 slidesToScroll: 1,
 prevArrow: '<div class="slider-arrow slider-arrow_left"><img src="img/left.png" alt=""></div>',
 nextArrow: '<div class="slider-arrow slider-arrow_right"><img src="img/right.png" alt=""></div>',
 responsive: [
  {
   breakpoint: 1300,
   settings: {
    slidesToShow: 3,
    slidesToScroll: 1
   }
  },
  {
   breakpoint: 800,
   settings: {
    slidesToShow: 2,
    slidesToScroll: 1
   }
  },
  {
   breakpoint: 576,
   settings: {
    slidesToShow: 1,
    slidesToScroll: 1
   }
  }
 ]
});
$('.card-left').slick({
 slidesToShow: 3,
 slidesToScroll: 1,
 arrows: true,
 vertical: true,
 prevArrow: '<div class="slider-arrow slider-arrow-card slider-arrow-card_left slider-arrow_left"><img src="img/card-top.png" alt=""></div>',
 nextArrow: '<div class="slider-arrow slider-arrow-card slider-arrow-card_right slider-arrow_right"><img src="img/card-bottom.png" alt=""></div>',
 asNavFor: '.card-slider'
});
$('.card-slider').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 fade: true,
 asNavFor: '.card-left',
 arrows: false,
 dots: false,
 responsive: [{
   breakpoint: 800,
   settings: {
    dots: true,
    fade: false
   }
  }
 ]
});
/* $("input").on("blur", function() {
 if ($(this).value.trim().length !== 0) {
  $(this).closest(".partners-form-block").find("label").addClass("active-label");
 }
 
}); */
ymaps.ready(function () {
 var myMap = new ymaps.Map('map', {
  center: [55.604020, 37.539473],
  zoom: 15
 }, {
   searchControlProvider: 'yandex#search'
  }),

  // Создаём макет содержимого.
  MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
   '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  ),

  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
   hintContent: 'Собственный значок метки',
   balloonContent: 'Это красивая метка'
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: 'images/myIcon.gif',
    // Размеры метки.
    iconImageSize: [30, 42],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-5, -38]
   }),

  myPlacemarkWithContent = new ymaps.Placemark([55.604020, 37.539473], {
   hintContent: 'Собственный значок метки с контентом',
   balloonContent: 'А эта — новогодняя',
   iconContent: '12'
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#imageWithContent',
    // Своё изображение иконки метки.
    iconImageHref: 'images/ball.png',
    // Размеры метки.
    iconImageSize: [48, 48],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-24, -24],
    // Смещение слоя с содержимым относительно слоя с картинкой.
    iconContentOffset: [15, 15],
    // Макет содержимого.
    iconContentLayout: MyIconContentLayout
   });

 myMap.geoObjects
  .add(myPlacemark)
  .add(myPlacemarkWithContent);
});