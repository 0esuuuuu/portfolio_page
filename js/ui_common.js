$(function () {
  // gnb버튼

  var aboutLocation = document.querySelector('.main_about_wrap .main_tit').offsetTop;
  var portfolioLocation = document.querySelector('.main_portfolio_wrap .main_tit').offsetTop;
  var contactLocation = document.querySelector('.main_contact_wrap .main_tit').offsetTop;

  $('#header .btn_about').on('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: aboutLocation, behavior: 'smooth' });
  });

  $('#header .btn_portfolio').on('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: portfolioLocation, behavior: 'smooth' });
  });

  $('#header .btn_contact').on('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: contactLocation, behavior: 'smooth' });
  });

  // m_gnb버튼
  $('#header .btn_toggle').on('click', function () {
    $('body').toggleClass('on');
    $('#header .m_gnb_wrap').toggleClass('on');
    $('#header .btn_toggle .x_bar').toggleClass('on');
    $('#header .btn_toggle').toggleClass('on');

    $('#header .m_gnb a').on('click', function () {
      $('body').removeClass('on');
      $('#header .m_gnb_wrap').removeClass('on');
      $('#header .btn_toggle .x_bar').removeClass('on');
      $('#header .btn_toggle').removeClass('on');
    });
  });

  // 메인 비주얼
  $(function () {
    function count() {
      var dday = new Date('2022/8/22/9:30').getTime();
      var date = new Date();
      var difference = date - dday;

      var day = Math.floor(difference / (1000 * 60 * 60 * 24));
      var hour = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var min = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      var sec = Math.floor((difference % (1000 * 60)) / 1000);

      function digit(num) {
        return num < 10 ? '0' + num : num;
      }

      document.querySelector('.main_visual_wrap .day').innerHTML = digit(day) + 'D';
      document.querySelector('.main_visual_wrap .hour').innerHTML = digit(hour) + 'H';
      document.querySelector('.main_visual_wrap .min').innerHTML = digit(min) + 'M';
      document.querySelector('.main_visual_wrap .sec').innerHTML = digit(sec) + 'S';
    }
    count();
    setInterval(count, 100);
  });

  // 포트폴리오 슬라이더
  var portfolioSlider = new Swiper('.portfolio_slider', {
    // loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $('.main_portfolio_wrap .btn_wrap').hide();
  $('.main_portfolio_wrap .img_wrap').on('mouseenter', function () {
    $(this).find('.btn_wrap').stop().fadeIn();
  });

  $('.main_portfolio_wrap .img_wrap').on('mouseleave', function () {
    $(this).find('.btn_wrap').fadeOut(200);
  });

  $('.main_portfolio_wrap .portfolio_slider .btn_more').on('click', function (e) {
    var idx = $(this).closest('.swiper-slide').index();
    console.log(idx);

    $('body').addClass('on');
    $('.main_portfolio_wrap .modal').eq(idx).fadeIn();
    e.preventDefault();
  });

  $('.main_portfolio_wrap .modal_wrap .btn_close').on('click', function () {
    $('body').removeClass('on');
    $('.main_portfolio_wrap .modal').hide();
  });
});
