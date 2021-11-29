var likes1 = 140;
var likes2 = 145;
var likes3 = 87;
var likes4 = 68;
var likes5 = 109;
var likes6 = 278;
$("#likes1").text(`${likes1} like`)
$("#likes2").text(`${likes2} like`)
$("#likes3").text(`${likes3} like`)
$("#likes4").text(`${likes4} like`)
$("#likes5").text(`${likes5} like`)
$("#likes6").text(`${likes6} like`)
$(".icon1").click(function () {


    $(this).siblings("#likes1").text(`${likes1 + 1} like`)

    $(this).siblings("#likes2").text(`${likes2 + 1} like`)

    $(this).siblings("#likes3").text(`${likes3 + 1} like`)
    $(this).siblings("#likes4").text(`${likes4 + 1} like`)

    $(this).siblings("#likes5").text(`${likes5 + 1} like`)

    $(this).siblings("#likes6").text(`${likes6 + 1} like`)
    $(this).addClass("d-none")
    $(this).siblings().removeClass("d-none")

})
$(".icon2").click(function () {

    $(this).siblings("#likes1").text(`${likes1} like`)

    $(this).siblings("#likes2").text(`${likes2} like`)

    $(this).siblings("#likes3").text(`${likes3} like`)
    $(this).siblings("#likes4").text(`${likes4} like`)

    $(this).siblings("#likes5").text(`${likes5} like`)

    $(this).siblings("#likes6").text(`${likes6} like`)


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
        imgSource = "imges/12.jpg"
        title =" Creative ways to give gifts:"
        blog = `  <span class="fw-bold text-danger ">*Fun Tricks:</span> <br> Part of the fun of getting an unwrapping gift, you can keep up the fun by putting your gift inside a bigger box, wrapping the bigger box nicely, then putting the box inside a bigger box, and so on several times with three or four boxes. 
        <br> <span class="fw-bold text-danger">*Inside a book:</span> <br> If the gift is flat or paper, you can put it inside a book, then wrap the book well. 
        <br> <span class="fw-bold text-danger">*Inside a Cake:</span> <br> Most occasions require a cake to celebrate, if you are giving something small like a ring, you can gently place the gift on top of the cake before serving it to her. 
        <br> <span class="fw-bold text-danger">*good packaging:</span> <br> Choose the appropriate packaging for the gift according to the occasion, for example, wrap the Valentine's Day gift with red ribbons and present it with roses and red balloons, and for the wedding anniversary, wrap it in white and make sure to coordinate all the details in one color </p>
`

    }
    else if (btnNum == "btn2") {
        imgSource = "imges/14.jpg"
        title = "Tips when choosing gifts Choosing the right gift:-"
        blog = `<p>
        is a difficult and important matter, and this can be done by following the following tips:
        <br> A person must know the budget he has before choosing a gift; Then he chooses a gift that fits his budget.
        <br> Determine the nature of the occasion, and choose the gift that suits it, as it may be for a birthday, wedding anniversary, or other many and varied occasions.
      <br>  Taking into account the age of the recipient, choosing the perfect gift that suits him, and knowing good gifts for children, adults, or the elderly.
      <br> Knowing and understanding the recipient's personality, they may have an elegant or traditional personality, or a capricious personality.
      <br> Determine the recipient's interests and hobbies, he may be a football lover, or interested in reading books, or other different hobbies.
      <br> The nature of the gift that can be given to a man is different from that of a woman, although there is some overlap between what either of them wants in a number of gifts.
      </p>`

    }
    else if (btnNum == "btn3") {
        imgSource = "imges/11.jpg"
        title = "Gifts"
        blog = `<p>
        Choosing the right gift for people in their various relationships is not an easy thing, as it constitutes a great confusion for the person who wants to give the gift often, and in order for the gift to achieve all the desired goals of presenting it, there are some tips that may be useful in determining the appropriate gift, including the following: <br>
         Determining the desired message of the gift, before starting to think about the quality and choice of the gift, it is necessary to determine the nature of the relationship between the two parties, the Mahdi and the gifted to him, and what is the message that the first party wants to convey to the second party, for example if someone wants to gift a gift to his colleague at work He wishes to express feelings of appreciation for his efforts at work and his cooperation with him, and if a person wishes to present a gift to his neighbor, he wishes to express his gratitude for his good neighborliness, and this may greatly help in limiting the quality of gifts and excluding inappropriate gifts. <br>
          Studying the other party The choice of the gift depends on important matters such as gender. <br>
           A gift given to a female is different from a gift given to a male; Because each of them has its own composition, and its different nature, and the interests of women usually differ from the interests of men, a man may be happy when giving him the shirt of his favorite football player, while the female may not prefer such a gift, and the things that attract the female are different from the things that attract the man, so is the age One of the things that must be taken into account when choosing a gift, human interests change with age, children usually love games and things related to animation, while young people prefer everything new in the world of fashion and fashion.
      <br>Hobbies of the other party The different human relationships and coexistence with the people around him allow him to get close to them and know some of their personal matters, such as: their favorite hobbies, interests, and matters that attract their attention, and this knowledge depends on the depth of the relationship of the two parties, and it may be distinctive to choose a gift based on hobbies The other party, for example, can give a book to someone who loves to read, or a special set of pens can be gifted to a person who loves to write. <br>
       Asking about the gift he prefers In most cases, the relationship between the two parties is a fraternal relationship and there are no barriers, then there is no objection to asking in a friendly and gentle manner about the gift that the second party desires, as he may need something specific and feel embarrassed to ask for it, then the gift is appropriate It achieved the goal of its gift and fulfilled the recipient's need. Choosing a Charitable Gift Many people are interested in charitable work and have a passion to help everyone, and a charitable gift may make them more happy than any other gift, such as: an invitation card to a seminar related to something he cares about, or a donation to a charitable organization with which he sympathizes and adopts its ideas. </p>`

    }
    /** 
    else if (btnNum == "btn4") {
        video = "imges/15.mp4"
        title = "Why do people give gifts?"
        blog = "There are all sorts of reasons why we give gifts. But the common factor in giving a gift is that it’s influenced by emotion. The motivation behind giving gifts is the positive feelings it creates in us and the recipients.To understand the custom of giving gifts we need to take a look at humans as a species. We’re social creatures and we’ve been shaped by millions of years of living and working together. Our species thrives when we cooperate with each other rather than living in silos. The positive, emotional feelings we experience when we share gifts are the result of our evolution.The social value of giving has been recognised throughout human history. And there have been many studies on human behaviour and gift giving, from psychologists, economists and marketers. Giving gifts is a complex and intricate part of how we humans interact with each other. In simple terms, it allows us to connect. Connecting with our loved ones gives us a sense of purpose and a feeling of satisfaction. "


    }
    
    else if (btnNum == "btn5") {
        video = "imges/16.mp4"
        title = "Unique gift wrapping ideas:"
        blog = ` <p class="card-text text-center "> Gift wrapping in the form of the recipient's favorite types of delicious fruits, such as pineapple, strawberry, and kiwi, for example, either by using fruit-colored wrapping paper and drawing on it</p>
        `
     } */


    else if (btnNum == "btn6") {
        imgSource="imges/elD.gif"
        title = "Unique gift wrapping ideas:"
        blog = ` <p>
        Gift wrapping in the form of the recipient's favorite types of delicious fruits, such as pineapple, strawberry, and kiwi, for example, either by using fruit-colored wrapping paper and drawing on it, and adding elements that make it resemble the chosen fruit, or by printing the shape and details of the fruit on the paper and packing it. Wrapping the gift with plain paper, and giving it an elegant character, by drawing the gift giver carefully selected hand shapes and designs, based on his good knowledge of the person presented to him and what he loves, a way that indicates great interest in making him happy and satisfied with his friend's own efforts. Printing distinctive words belonging to the person to whom the gift is to be presented on the used gift wrapping paper, as his name, or a distinguished date to him, and wrapping the gift with it in the previously mentioned way and presenting it with love. Use plain, colored wrapping paper that does not contain any designs, then write phrases on it or create a distinctive design using melted crayons, and wrap the gift with it. Gift wrapping with custom wrapping paper, then decorating them with colorful scraps of yarn, and they can be woven together in an attractive way in consistent colors and decorate the gift with them.
       </p>`


    }
  

    displayModel()
})
function displayModel() {
    $("#modelImg").removeClass("d-none")
    $("#exampleModalLabel").text(title);
    $("#DitailsBog").html(blog);
    $("#modelImg").attr("src", imgSource)
   


}