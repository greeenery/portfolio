function SliderBox1__init() {
  const swiper = new Swiper('.main-slider .swiper', {
    loop: true,
    autoplay:true,
    effect:'fade',
    // If we need pagination
    pagination: {
      el: '.main-slider .swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.main-slider .swiper-button-next',
      prevEl: '.main-slider .swiper-button-prev',
    },
  });
}


function SliderBox2__init() {
  const swiper = new Swiper('.new-prod-slider .swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 48,
    // Navigation arrows
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
  });
}

SliderBox1__init();
SliderBox2__init();

function Category__init(){
  $(".btn-category").click(function(){
    if($(".category-box").hasClass("active")){
      $(".category-box").removeClass("active");
      $(".hamburger").removeClass("active"); 
    }
    else {
      $(".category-box").addClass("active");
      $(".hamburger").addClass("active"); 
    }
  });
}

Category__init();

function FloatingMenu__init(){
  $(".btn-top").click(function(){
    $("html, body").animate({scrollTop:"0"},300);
  });
}

FloatingMenu__init();