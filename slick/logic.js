$('.center').slick({
  centerMode: true,
  centerPadding: '20px',
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  dots: false,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        autoplay: true, 
        slidesToShow: 1, 
        dots: true
      }
    }
  ]
});