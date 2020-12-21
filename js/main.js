
var width = document.getElementById("img1").width ;
var height = document.getElementById("img1").height ;
var newwidth = document.getElementById("img1").width * 1.1;
var newheight = document.getElementById("img1").height * 1.1;

console.log(width, height , newheight , newwidth)


$(document).ready(function(){
  
    $("#img1").mouseenter(function(){
        document.getElementById("img1").style.maxWidth = "110%";
        $(this).css("cursor","pointer");
        $(this).animate({width: newwidth , height: newheight}, 500);
    });
    $("#img1").mouseleave(function(){
        
        $(this).animate({width: width, height: height}, 500);
    });
    
});


