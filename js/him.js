                //subImage section//
$(".sub-images").click(function () {
    let currentSrc = $(this).attr("src");
    $(".main-image").attr("src", currentSrc);
})