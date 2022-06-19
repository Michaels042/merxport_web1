$(document).ready(() => {
    
    
    //Main Menu
    // $(".menu-btn").click(function(){
    //     $(this).toggleClass("is-active");
    //     $(".main-nav .nav-box .navigation-list").slideToggle();
    //     $("body").toggleClass("noScroll");
    //     $(".main-content").toggleClass("open");
    // });
    
    //Form
    $(".form-item input, .form-item textarea").focusin(function(){
        $(this).parent(".form-item").addClass("active");
    });
    
    $(".form-item input, .form-item textarea").focusout(function(){
        $(this).parent(".form-item").removeClass("active");
    });
    
    //Form Validation
    (function() {
      'use strict';
      window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('form');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
      }, false);
    })();

    //Remove Pre-loader
    $('.pre-loader').delay(500).fadeOut();
    
    //Wow JS
    //new WOW().init();
    
    //Swiper
    var swiper = new Swiper('.home-slider', {
        spaceBetween: 0,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        speed: 400,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        /*pagination: {
            el: '.swiper-pagination-home',
            clickable: true,
        },*/
    });
    
    
});