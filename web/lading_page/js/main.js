$(document).ready(function () {
    var url = $("#modal__video").attr("src");
    $('#myModal').on('hidden.bs.modal', function (e) {
      $("#modal__video").attr("src","");
    });
    $('#myModal').on('show.bs.modal', function (e) {
      $("#modal__video").attr("src",url);
    });
});
