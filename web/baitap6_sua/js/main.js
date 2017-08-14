$(document).ready(function () {
    /*-----------on/off video--------*/
    var url = $("#modal__video").attr("src");
    $('#myModal').on('hidden.bs.modal', function (e) {
        $("#modal__video").attr("src", "");
    });
    $('#myModal').on('show.bs.modal', function (e) {
        $("#modal__video").attr("src", url);
    });
    /*---------layer-slider---------*/
    $('#layerslider').layerSlider({
        autoStart: true,
        firstLayer: 1,
        skin: 'fullwidth',
        skinsPath: '../../skins/',
        responsiveUnder: 960,
        responsive: false,
    });
    /*---------owl-carousel---------*/
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
});
