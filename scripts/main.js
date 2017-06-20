$(document).ready(function(){
  $(".open-button").click(function(){
    $(this).toggleClass("close-button");
    $(".header__navigation").toggleClass("menu-open",function(){
      $(this).show("slide", { direction: "right" }, 500);
    });
  });

});

$(document).ready(function(){
    $('a[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();

        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-10
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});


$(function(){

  $(".contact__form--wrap .input-group input").focusout(function(){

    var text_val = $(this).val();

    if(text_val === ""){
      $(this).removeClass("has-value");
    } else {
      $(this).addClass("has-value");
    }

  });

  $("#contact__form--message").focusout(function(){

    var text_val = $(this).val();

    if(text_val === ""){
      $(this).removeClass("has-value");
    } else {
      $(this).addClass("has-value");
    }
  });

});
