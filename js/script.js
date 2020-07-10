(function ($) {
  $(function () {
  //инициализация табов 
    $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

  });
  //Логика слайдера
  $('.views__inner').slick({
    centerMode: true,
    centerPadding: '200px',
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 1400,
    dots: true,
    arrows: false,
    responsive: [{
        breakpoint: 1200,
        settings: {
          dots: true,
          arrows: false,
          centerMode: true,
          centerPadding: '120px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 991,
        settings: {
          dots: false,
          arrows: false,
          centerMode: true,
          centerPadding: '150px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '30px',
          slidesToShow: 1
        }
      }
    ]
  });
  $('.views__inner_phone').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 1400,
    dots: true,
    arrows: false,
    responsive: [{
        breakpoint: 1200,
        settings: {
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: '45px',
          slidesToShow: 5
        }
      },
      {
        breakpoint: 991,
        settings: {
          dots: false,
          arrows: false,
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  //плавный скрол
  $("a[href^='#']").click(function () {
    const _href = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(_href).offset().top + "px"
    });
    return false;
  });
//логика анимаций
  new WOW().init();

  /**
   * Menu
   */
  let burgerMenu = $('.burger-menu'),
    menu = $('.menu');
    //по клику добавляяем/убираем класс активности
  $(burgerMenu).on('click', function () {
    burgerMenu.toggleClass('active');
    menu.toggleClass('active');
  });


  $(window).on('scroll', function () {
    burgerMenu.removeClass('active');
    menu.removeClass('active');
  });

  /**
   * Anchor
   */
  //плавность анимации для перехода по ссылкам
  $(".anchor-link").on("click", function (event) {
    event.preventDefault();
    let id = $(this).attr('href');
    if (id.length > 1) {
      let top = $(id).offset().top;

      $('body,html').animate({
        scrollTop: top
      }, 1500);
    }
    burgerMenu.removeClass('active');
    menu.removeClass('active');
  });


  /**
   * Modal
   */

   //переменные лоя работы с модалками
  let modal1 = $('.custom-modal-1'),
    modal2 = $('.custom-modal-2'),
    modal3 = $('.custom-modal-3'),
    closeModal = $('.close-modal'),
    modalMask = $('.modal-mask');
//описываем работу модакли(при клике на функцию, запрещаем ссылке ее стандартное поведение и добавляем класс активности)
  $('.open-modal-1').on('click', function (e) {
    e.preventDefault();
    $(modal1).addClass('active');
    $(modalMask).addClass('active');
  });

  $('.open-modal-2').on('click', function (e) {
    e.preventDefault();
    $(modal2).addClass('active');
    $(modalMask).addClass('active');
  });

  $('.open-modal-3').on('click', function (e) {
    e.preventDefault();
    $(modal3).addClass('active');
    $(modalMask).addClass('active');
  });
  //забираем класс активности и тем самым закрываем модалку 
  $(closeModal).on('click', function () {
    $(modal1).removeClass('active');
    $(modal2).removeClass('active');
    $(modal3).removeClass('active');
    $(modalMask).removeClass('active');
  });

  $(modalMask).on('click', function () {
    $(modal1).removeClass('active');
    $(modal2).removeClass('active');
    $(modal3).removeClass('active');
    $(modalMask).removeClass('active');
  });
})(jQuery);