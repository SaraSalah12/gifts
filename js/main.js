// ==============================slider home=====================================
$(document).ready(function () {
    $(".skitter-large").skitter({
        with_animations: ["circlesRotate", "directionRight", "blind", "block"],

        interval: 1000,

    });

});
/**section Deal of week */
$('.count').countdown({
    date: '12/24/2021 23:59:59'
})


/**
* section of blog
*/
var likes1 = 200;
var likes2 = 300;
var likes3 = 800;
$("#likes1").text(`${likes1} like`)
$("#likes2").text(`${likes2} like`)
$("#likes3").text(`${likes3} like`)

$(".icon1").click(function () {


    $(this).siblings("#likes1").text(`${likes1 + 1} like`)

    $(this).siblings("#likes2").text(`${likes2 + 1} like`)

    $(this).siblings("#likes3").text(`${likes3 + 1} like`)

    $(this).addClass("d-none")
    $(this).siblings().removeClass("d-none")

})
$(".icon2").click(function () {

    $(this).siblings("#likes1").text(`${likes1} like`)

    $(this).siblings("#likes2").text(`${likes2} like`)

    $(this).siblings("#likes3").text(`${likes3} like`)

    $(this).addClass("d-none")
    $(this).siblings().removeClass("d-none")


})

/**document.getElementsByClassName.classList.add("d-none");
  document.getElementsByClassName(".icon2").classList.remove("d-none");
*/
/* var modelBtn= document.getElementsByClassName(".ancoreModel");
 modelBtn.addEventListener("click",function(e)
 {
console.log(e)

 })
 */
var imgSource;
var title;
var blog;
$(".ancoreModel").click(function (e) {
    var btnNum = e.target.id;

    if (btnNum == "btn1") {
        imgSource = "imges/elD.gif"
        title = "What is the ‘Art of Gifting’?"
        blog = "we create 'the art of gifting' with every gift or collection we send out. Every recipient receives a personal hand gifted box, tailored with custom printed packaging,beautiful ribbons and a lavishly embellished gift card and gift tag.Gift giving is not simply a task that needs to be ticked off. We ensure that every elegant package leaves an impression to the gift recipient. It is about evoking the right emotion to the gift recipient and ensuring your gift has touched the very essence of your relationship. Every relationship is important, whether it is a corporate client, your partner, a special occasion such as a birthday or a simple 'I am thinking of you'. All of these are special feelings that can't always be expressed with words. They say a picture expresses a thousand words, at our shope we believe a gift does the same.Giving a gift is giving your individual stamp to someone. Gift giving is not always about fulfilling a need, but rather evoking an emotion. This is what the 'art of gifting' is all about. It's about how you make that special person in your life look, feel, think and do once they receive a gift. Here are some examples of 'the art of gifting' "

    }
    else if (btnNum == "btn2") {
        imgSource = "imges/gifts.gif"
        title = "IMPORTANCE OF GIFT WRAPPING"
        blog = "Wrapping a gift is about so much more than ensuring the element of surprise for the recipientGift wrap adds a beautiful personal touch to Gift wrap adds a beautiful personal touch to the art of gift-giving—one that tells a dear friend or loved one that you put your heart into every step of the process.What is the importance of learning the skills in gift wrapping to your family?Gift wrapping is not only to give to your family and friends. Gift wrapping is also shows that you care about them and that you effort to make a present to your family and friends. Learning the skills in gift wrapping is very important because you can save your money for buying decorative gift boxes.";

    }
    else if (btnNum == "btn3") {
        imgSource = "imges/1vmm.gif"
        title = "Why do people give gifts?"
        blog = "There are all sorts of reasons why we give gifts. But the common factor in giving a gift is that it’s influenced by emotion. The motivation behind giving gifts is the positive feelings it creates in us and the recipients.To understand the custom of giving gifts we need to take a look at humans as a species. We’re social creatures and we’ve been shaped by millions of years of living and working together. Our species thrives when we cooperate with each other rather than living in silos. The positive, emotional feelings we experience when we share gifts are the result of our evolution.The social value of giving has been recognised throughout human history. And there have been many studies on human behaviour and gift giving, from psychologists, economists and marketers. Giving gifts is a complex and intricate part of how we humans interact with each other. In simple terms, it allows us to connect. Connecting with our loved ones gives us a sense of purpose and a feeling of satisfaction. "


    }

    displayModel()
})
function displayModel() {

    $("#exampleModalLabel").text(title);
    $("#DitailsBog").text(blog);
    $("#modelImg").attr("src", imgSource)


}
//section of feedback
$(function () {

    let i = 0;
    function change() {
        ++i;
        $($("main div")[i - 1]).animate({ width: "10%" }, 0.01).removeClass("a");
        $($('.slide li')[i - 1]).removeClass("b");
        if (i == 5) {
            i = 0;
        }
        $($("main div")[i]).animate({ width: "50%" }).addClass("a");
        $($('.slide li')[i]).addClass("b");
    }
    var a = setInterval(change, 2000);

    let j = 0;
    $('main div').click(function () {
        clearInterval(a);
        j = $(this).index();
        if (j != 0 || j != 4) {
            $('span').removeClass('c');
        }
        if ($(this).hasClass("a")) { }
        else {
            $('main div').animate({ width: "10%" }, 0.5).removeClass('a');
            $('.slide li').removeClass('b');
            $(this).animate({ width: "50%" }, 200).addClass('a');
            $($('.slide li')[$(this).index()]).addClass('b');
        }
    });

    $('span').click(function () {
        clearInterval(a);
        j = $('.a').index();
        if (j == 0 && $(this).hasClass('prev')) {
            $($('main div')[0]).animate({ width: "10%" }, 0.01).removeClass("a")
           
            $($('.slide li')[0]).removeClass("b");
            $($('main div')[4]).animate({ width: "50%" }, 200).addClass("a")
            $($('.slide li')[4]).addClass("b");
        }
        else if (j == 4 && $(this).hasClass('next')) {
            $($('main div')[4]).animate({ width: "10%" }, 0.01).removeClass("a")
            $($('.slide li')[4]).removeClass("b");
            $($('main div')[0]).animate({ width: "50%" }, 200).addClass("a")
            $($('.slide li')[0]).addClass("b");
        }
        else {
            if ($(this).hasClass("prev")) {
                $($('main div')[j]).animate({ width: "10%" }, 0.01).removeClass("a")
                $($('.slide li')[j]).removeClass("b");
                $($('main div')[j - 1]).animate({ width: "50%" }, 200).addClass("a")
                $($('.slide li')[j - 1]).addClass("b");
            }
            else {
                $($('main div')[j]).animate({ width: "10%" }, 0.01).removeClass("a")
                $($('.slide li')[j]).removeClass("b");
                $($('main div')[j + 1]).animate({ width: "50%" }, 200).addClass("a")
                $($('.slide li')[j + 1]).addClass("b");
            }
        }

    });

});

     
     
 
 
    
  


// ===============owl carosule(her)=================================================================


// $(document).ready(function(){
//     $('.owl-carousel').owlCarousel({
//         margin:5,
//         loop:true,
//         autoplayTimeout:1000,
//         autoplay:true,


//     });
//   });

// =========================our prands====================================================

// $(document).ready(function(){
//     $('.owl-carousel').owlCarousel({

//         loop:true,
//         dots:false,
//        margin:2,


//     });
//   });


