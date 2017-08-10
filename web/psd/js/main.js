
$(document).ready(function(){
    //======= menu hover =======
    $(".logo-drop").hover(function(){
        $(this).children(".drop-list").css("display","block");
    },function(){
        $(".drop-list").css("display","none");
    });
    //set height for .sidebar
    var containerHeight = $(".container").height();
    $(".sidebar").css("height",containerHeight);
});