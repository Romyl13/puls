$(document).ready(function(){
    $('.carousel__inner').slick({
        /*dots: true,  ставить точки і цифри по яким ми можемо переходити на слайди, є купа настроїк на їх сайті глянеш потім */
        speed: 1300, /* швидкість переходу з слайду на слайд */
        adaptiveHeight: true, /* адаптує висоту картинки */
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/carousel/left.svg" alt="left"></button>',/* якщо щось не буде працювати то можна стерти чи добавити перед icons ../ */
        nextArrow: '<button type="button" class="slick-next"><img src="icons/carousel/right.svg" alt="right"></button>',
        responsive: [/* адаптуєм під телефони і тд */
            {
                breakpoint: 992,/* правила що задаєм будуть працювати від 0 до 992 пікселей */
                settings: {
                    adaptiveHeight: true,
                    dots: true,
                    arrows: false,
                    mobileFirst: true,
            }
        }
        ]
      });

      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
 function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
});