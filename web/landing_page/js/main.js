$(document).ready(function () {
    /*-----------on/off video--------*/
    var url = $("#modal__video").attr("src");
    $('#myModal').on('hidden.bs.modal', function (e) {
        $("#modal__video").attr("src", "");
    });
    $('#myModal').on('show.bs.modal', function (e) {
        $("#modal__video").attr("src", url);
    });
    /*---------owl-carousel---------*/
    $('.owl-carousel').owlCarousel({
        items: 4,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: false,

        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    });
});
