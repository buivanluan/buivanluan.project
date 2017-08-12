$(document).ready(function () {
    /*-------- call wow plugin---------*/
    new WOW().init();
    /*-------- change background menu when scroll ---------- */
    $(document).scroll(function () {
        if ($(this).scrollTop() < $("#portfolio").offset().top) {
            $(".navbar-right__item:nth-child(1)").addClass('active');
            $(".navbar-right__item:nth-child(2)").removeClass('active');
            $(".navbar-right__item:nth-child(3)").removeClass('active');
        }
        if ($(this).scrollTop() >= $("#portfolio").offset().top && $(this).scrollTop() < $("#contact").offset().top) {
            $(".navbar-right__item:nth-child(2)").addClass('active');
            $(".navbar-right__item:nth-child(1)").removeClass('active');
            $(".navbar-right__item:nth-child(3)").removeClass('active');
        }
        if ($(this).scrollTop() >= $("#contact").offset().top) {
            $(".navbar-right__item:nth-child(3)").addClass('active');
            $(".navbar-right__item:nth-child(1)").removeClass('active');
            $(".navbar-right__item:nth-child(2)").removeClass('active');
        }
    });
    /*---------- scroll to content when click to menu ---------*/
    $(".navbar-right__item:nth-child(1)").on("click", function () {
        $("html, body").animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    });
    $(".navbar-right__item:nth-child(2)").on("click", function () {
        $("html, body").animate({
            scrollTop: $("#portfolio").offset().top
        }, 1000);
    });
    $(".navbar-right__item:nth-child(3)").on("click", function () {
        $("html, body").animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });
    /*--------- show label when focus into form ---------*/
    $(".form-contact__item").keyup(function (event) {
        if ($(this).val()) {
            $("label").css("color", "#BCB1B1");
            $(this).prev("label").css("color", "#650707")
            $(this).prev("label").animate({
                opacity: 1,
                left: 20,
            }, 500);
        } else {
            $(this).prev("label").animate({
                opacity: 0,
                left: 100
            }, 500);
        }
    });
    /*-------- change color label when change focusing into other input----------*/
    $(".form-contact__item").focus(function (event) {
        $("label").css("color", "#BCB1B1");
        $(this).prev("label").css("color", "#650707")
    });
});
