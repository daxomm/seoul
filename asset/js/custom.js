$(function(){

  // 1. 언어선택

  $('.btn-go').click(function (e) {
    e.preventDefault(); /* e : event, preventDefault : 새로고침을 막음 */
    
    url = $('.lang-area select').val();

    console.logo(url);

    window.open(url); //window : 창 열기

  });

  // 2. 메인 비주얼 탭

  $('.sc-visual .title').click(function (e) {
    e.preventDefault();
    $(this).parent().addClass('active').siblings('.slide').removeClass('active');
  })

  
  // 3 배너 슬라이드

  //sc-visual
  var slide1 = new Swiper(".sc-visual .slide01 .swiper", {
    navigation: {
      nextEl: ".sc-visual .slide01 .next",
      prevEl: ".sc-visual .slide01 .prev",
    },

    slidesPerView: 1,
    spaceBetween: 0,

    pagination: {
      el: ".sc-visual .slide01 .fraction",
      type: "fraction",
    },

    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    
  });
  
  // slide02

  var slide2 = new Swiper(".sc-visual .slide02 .swiper", {
    navigation: {
      nextEl: ".sc-visual .slide02 .next",
      prevEl: ".sc-visual .slide02 .prev",
    },

    slidesPerView: 1,
    spaceBetween: 0,

    pagination: {
      el: ".sc-visual .slide02 .fraction",
      type: "fraction",
    },

    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    
  });


  

  // sc-slide
  var slide3 = new Swiper(".sc-slide .swiper", {
    navigation: {
      nextEl: ".sc-slide .next",
      prevEl: ".sc-slide .prev",
    },

    slidesPerView: 3,
    spaceBetween: 43,

    pagination: {
      el: ".sc-slide .fraction",
      type: "fraction",
    },

    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

  });

  // 스와이퍼 재생, 정지 버튼

  //slide01

  $(".slide01 .btn-start").on("click",function(e){
    e.preventDefault();
    $(this).css("display","none");
    $(".slide01 .btn-stop").css("display","block");
    slide1.autoplay.start();
  });

  $(".slide01 .btn-stop").on("click",function(e){
    e.preventDefault();
    $(this).css("display","none");
    $(".slide01 .btn-start").css("display","block");
    slide1.autoplay.stop();
  });

  //slide02

  $(".slide02 .btn-start").on("click",function(e){
    e.preventDefault();
    $(this).css("display","none");
    $(".slide02 .btn-stop").css("display","block");
    slide2.autoplay.start();
  });

  $(".slide02 .btn-stop").on("click",function(e){
    e.preventDefault();
    $(this).css("display","none");
    $(".slide02 .btn-start").css("display","block");
    slide2.autoplay.stop();
  });

  //sc-slide

  $(".sc-slide .btn-start").on("click",function(e){
    e.preventDefault();
    $(this).css("display","none");
    $(".sc-slide .btn-stop").css("display","block");
    slide3.autoplay.start();
  });

  $(".sc-slide .btn-stop").on("click",function(e){
    e.preventDefault();
    $(this).css("display","none");
    $(".sc-slide .btn-start").css("display","block");
    slide3.autoplay.stop();
  });


  // 4 연관 사이트

  $('.btn-site').click(function(e){
    e.preventDefault();
    
    if($(this).siblings('.site-sub').css('display') == 'block'){
      $('.site-sub').stop().slideUp()
      $('.btn-site').removeClass('on');
    }else{
      $('.site-sub').stop().slideUp()
      $(this).siblings('.site-sub').stop().slideDown()
      $('.btn-site').removeClass('on');
      $(this).addClass('on');
    }
  })

  /*  1. 그냥 클릭했을 때는
  $('.site-sub').stop().slideUp()
  $(this).siblings('.site-sub').stop().slideDown() */

  /*  2. 또 클릭 했을 때는
  $('.site-sub').stop().slideUp() */




  // 5 탑 버튼

  $('.btn-top').click(function(e){
    e.preventDefault();

    $('html,body').animate({'scrollTop':0},400)

  })


})