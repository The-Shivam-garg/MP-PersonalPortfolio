$(document).ready(function(){
    $(".sidemenu-toggler").click(function(){
        $(".sidemenu").addClass("active");
    });
    $(".close").click(function(){
        $(".sidemenu").removeClass("active");
    });

   $(window).scroll(function(){
        var sc = $(window).scrollTop();
        if (sc > 150){
            $(".header").addClass("sticky");
        }else{
            $(".header").removeClass("stidky");
        }

   }); 
   
   });

