$(document).ready(function(){
    $('.carousel__inner').slick({
        /*dots: true,  ставить точки і цифри по яким ми можемо переходити на слайди, є купа настроїк на їх сайті глянеш потім */
        speed: 900, /* швидкість переходу з слайду на слайд */
        adaptiveHeight: true, /* адаптує висоту картинки */
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/carousel/left.svg" alt="left"></button>',/* якщо щось не буде працювати то можна стерти чи добавити перед icons ../ */
        nextArrow: '<button type="button" class="slick-next"><img src="icons/carousel/right.svg" alt="right"></button>',
        responsive: [/* адаптуєм під телефони і тд */
            {
                breakpoint: 992,/* правила що задаєм будуть працювати від 0 до 992 пікселей */
                settings: {
                    dots: true,
                    arrows: false
            }
        }
        ]
      });
  });