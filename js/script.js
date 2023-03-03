$(window).on('load resize', function () {
    var window_height = window.innerHeight ? window.innerHeight : $(window).innerHeight();
    var window_width = window.innerWidth ? window.innerWidth : $(window).width();
    if (window_width <= 768) {
        $('.main-visual').css('height', window_height + 'px');
        $('.mv').css('height', window_height + 'px');
    } else {
        $('.main-visual').css('height', '96vh');
        $('.mv').css('height', '96vh');
    }
});

$(function () {
    var pagetop = $('.backTop');
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500); //0.5秒かけてトップへ移動
        return false;
    });
});

$(function(){
    $(".mv-ul li").css({"position":"relative","overflow":"hidden"});
    $(".mv-ul li").hide().css({"position":"absolute","top":0,"left":0});
    $(".mv-ul li:first").addClass("fade").show();
    setInterval(function(){
      var $active = $(".mv-ul li.fade");
      var $next = $active.next("li").length?$active.next("li"):$(".mv-ul li:first");
      $active.fadeOut(2000).removeClass("fade");
      $next.fadeIn(2000).addClass("fade");
    },4000);
  });


  $(function() {
    const hum = $('#hamburger, .close')
    const nav = $('.sp-nav')
    hum.on('click', function(){
       nav.toggleClass('toggle');
       $(this).toggleClass('active');
       return false;
    });
 });