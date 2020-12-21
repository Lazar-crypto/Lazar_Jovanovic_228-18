
$(document).ready(function(){
    $("#img1").mouseenter(function(){
        $(this).css("cursor","pointer");
        $(this).animate({width: "319px", height: "319px"}, 500);
    });
    $("#img1").mouseleave(function(){
        
        $(this).animate({width: "290px", height: "290px"}, 500);
    });
    
});


