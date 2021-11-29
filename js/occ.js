//                          her/him carousel
$('.testimonial_carousel_section').owlCarousel({
    loop:true,
    margin:20,
    autoplay:true, 
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})

//                  Filter(price)

$("#less100").click(function(){
    $(".AllPhoto").addClass("d-none");
    $(".filterP100").removeClass("d-none");
    $(".filterP200").addClass("d-none");
    $(".filterP300").addClass("d-none");
    $(".filterP400").addClass("d-none");
    $(".filterP500").addClass("d-none");
    $(".filterP600").addClass("d-none");
    $(".filterP700").addClass("d-none");

});
$("#less200").click(function(){
    $(".AllPhoto").addClass("d-none");
    $(".filterP100").addClass("d-none");
    $(".filterP300").addClass("d-none");
    $(".filterP400").addClass("d-none");
    $(".filterP500").addClass("d-none");
    $(".filterP200").removeClass("d-none");
    $(".filterP600").addClass("d-none");
    $(".filterP700").addClass("d-none");

})
$("#less300").click(function(){
    $(".AllPhoto").addClass("d-none");
    $(".filterP100").addClass("d-none");
    $(".filterP200").addClass("d-none");
    $(".filterP400").addClass("d-none");
    $(".filterP500").addClass("d-none");
    $(".filterP600").addClass("d-none");
    $(".filterP700").addClass("d-none");
    $(".filterP300").removeClass("d-none");
})
$("#less400").click(function(){
    $(".AllPhoto").addClass("d-none");
    $(".filterP100").addClass("d-none");
    $(".filterP200").addClass("d-none");
    $(".filterP300").addClass("d-none");
    $(".filterP500").addClass("d-none");
    $(".filterP600").addClass("d-none");
    $(".filterP700").addClass("d-none");
    $(".filterP400").removeClass("d-none");
})
$("#less500").click(function(){
    $(".AllPhoto").addClass("d-none");
    $(".filterP100").addClass("d-none");
    $(".filterP200").addClass("d-none");
    $(".filterP300").addClass("d-none");
    $(".filterP400").addClass("d-none");
    $(".filterP500").removeClass("d-none");
    $(".filterP600").addClass("d-none");
    $(".filterP700").addClass("d-none");
})
$("#less600").click(function(){
    $(".AllPhoto").addClass("d-none");
    $(".filterP100").addClass("d-none");
    $(".filterP200").addClass("d-none");
    $(".filterP300").addClass("d-none");
    $(".filterP400").addClass("d-none");
    $(".filterP500").addClass("d-none");
    $(".filterP600").removeClass("d-none");
    $(".filterP700").addClass("d-none");
})
$("#less700").click(function(){
    $(".AllPhoto").addClass("d-none");
    $(".filterP100").addClass("d-none");
    $(".filterP200").addClass("d-none");
    $(".filterP300").addClass("d-none");
    $(".filterP400").addClass("d-none");
    $(".filterP500").addClass("d-none");
    $(".filterP600").addClass("d-none");
    $(".filterP700").removeClass("d-none");
})
$("#allPrice").click(function(){
    $(".filterP100").addClass("d-none");
    $(".filterP200").addClass("d-none");
    $(".filterP300").addClass("d-none");
    $(".filterP400").addClass("d-none");
    $(".filterP500").addClass("d-none");
    $(".filterP600").addClass("d-none");
    $(".filterP700").addClass("d-none");
    $(".AllPhoto").removeClass("d-none");
})

$(".filter-container .fa-heart ").click(function(){
    $(this).css("color","red")
})

$(".filter-container .fa-heart ").dblclick(function(){
    $(this).css("color","white")
})

//                    Occasion section (wedding-recommended)  
$("#moreBtn").click(function () {
    $(".more-imgs").slideToggle(100,function () {
        $("#moreBtn").css("display","none")
    });
})

$("#occasion .fa-heart ").click(function(){
    $(this).css("color","red")
})

$("#occasion .fa-heart ").dblclick(function(){
    $(this).css("color","white")
})