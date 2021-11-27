

// ==============================slider home=====================================
 $(document).ready(function() {
   $(".skitter-large").skitter({
        with_animations:["circlesRotate","directionRight","blind","block"],
        
         interval:1000,
       
    });
    
  });
/////Declaring variables///
var bestProduct=document.getElementById("bestProduct");
var saleProduct = document.getElementById("saleProduct");
var lastProduct=document.getElementById("lastProduct");
var searchInput=document.getElementById("searchInput");
var bstSction=document.getElementById("BstProduct");
/////////handling buttons event/////
 bestProduct.addEventListener("click",getBstProduct);
 lastProduct.addEventListener("click", getlastProduct);
  saleProduct.addEventListener("click", getSaleProduct);
//////////
  /*Best product function*/ 
 var BstProduct=["imges/image4.jpg","imges/image7.jpg","imges/image9.jpg","imges/image10.jpg","imges/image11.jpg","imges/image12.jpg"];
 function getBstProduct(){
    
     var col="";      
      for(var i=0;i<BstProduct.length;i++){
         col+=
       `
      <div class="col-md-4 py-4 ">
           <div class="card rounded birthday">
               <img src="${BstProduct[i]}" class="card-img-top w-100 "alt="BstProductGifts">
             <div class="card-body ">
                  <h6>name</h4>
                  <h6>price</h4>
                  <h6>rev</h4>
             </div>
            </div>
      </div>
          `
 }
       document.getElementById("rowData").innerHTML=col;
      
 }
//////////////
/*sale product function */
  var saleProduct=["imges/imge1.jpg","imges/image5.jpg","imges/image8.jpg","imges/image21.jpg","imges/25 (2).jpg","imges/27.jpg"];
  function getSaleProduct(){
         var col="";
      for(var i=0;i<saleProduct.length;i++){
         
          col+=

          `
            <div class="col-md-4 py-4 ">
           <div class="card rounded " >              
            <img src="${saleProduct[i]}" class="card-img-top w-100"alt="SaleProductgifts">
              <div class="card-body ">
                  <h6>name</h4>
                  <h6>price</h4>
                 <h6>rev</h4>
              
             </div>
             </div> 
     </div>           `
 
 
          
}
      document.getElementById("rowData").innerHTML=col;
     
  
 }
//last product function//
 var lastProduct=["imges/33.jpg","imges/image3.jpg","imges/image14.jpg","imges/image13.jpg","imges/image16.jpg","imges/image17.jpg"];
 function getlastProduct(){
     
    var col="";
      for(var i=0;i<lastProduct.length;i++){
         
          col+=`

          <div class="col-md-4 py-4 ">
          <div class="card rounded ">
              <img src="${lastProduct[i]}" class="card-img-top w-100"alt="lastProductGifts">
              <div class="card-body ">
                  <h6>name</h4>
                  <h6>price</h4>
                  <h6>rev</h4>
              
              </div>
            </div> 
      </div>
          ` 
        }
      document.getElementById("rowData").innerHTML=col;
      
    
 }

 getSaleProduct();
 getBstProduct();
 getlastProduct();
 //subImage section//
$(".sub-images").click(function(){
  let currentSrc=  $(this).attr("src");
  $(".main-image").attr("src",currentSrc);
})

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


// ==========================sign up && login====================================
// var usernameInput=document.getElementById("usernameInput");
// var emailInput=document.getElementById("emailInput");
// var passInput=document.getElementById("passInput");

// var userInfo;
// if(localStorage.getItem("users")==null){
//   userInfo=[];
// }else{
//   userInfo=JSON.parse(localStorage.getItem("users"));
// }

// function signUp(){
//   userInputValidation();
//   isExist();
// }


// if(userInputValidation()==true&&isExist==false){
//   var user={
//     name:usernameInput.value ,
//     email:emailInput.value ,
//     password:passInput.value
//   }
//   userInfo.push(user);
//   localStorage.setItem("users",JSON.stringify(userInfo));


//   var confirmMsg=document.getElementById("confirmMsg");
//   confirmMsg.classList.replace("d-none","d-block");
//   var signin=document.getElementById("signin");
//   signin.classList.replace("d-none","d-block");
// }


// function userNameValidation(){
//   var usernameAlert=document.getElementById("usernameAlert");
//   var regex=/^[A-Za-z]{3,10}$/;
//   if(regex.test(usernameInput.value)==true&& usernameInput.value!=""){
//     usernameInput.classList.add("is-valid");
//     usernameInput.classList.remove("is-invalid");
//     usernameAlert.classList.replace("d-block","d-none");
//     return true;
//   }else{
//     usernameInput.classList.add("is-invalid");
//     usernameInput.classList.remove("is-valid");
//     usernameAlert.classList.replace("d-none","d-block");
//     return false;
//   }
// }


// function userPasswordValidation(){
//   var passwordAlert=document.getElementById("passwordAlert");
//   var regex=/^.{5,15}$/;
//   if(regex.test(passInput.value)==true&& passInput.value!=""){
//     passInput.classList.add("is-valid");
//     passInput.classList.remove("is-invalid");
//     passwordAlert.classList.replace("d-block","d-none");
//     return true;
//   }else{
//     passInput.classList.add("is-invalid");
//     passInput.classList.remove("is-valid");
//     passwordAlert.classList.replace("d-none","d-block");
//     return false;
//   }
// }

// function userEmailValidation(){
//   var emailAlert=document.getElementById("emailAlert");
//   var regex=/@/;
//   if(regex.test(emailInput.value)==true&& emailInput.value!=""){
//     emailInput.classList.add("is-valid");
//     emailInput.classList.remove("is-invalid");
//     emailAlert.classList.replace("d-block","d-none");
//     return true;
//   }else{
//     emailInput.classList.add("is-invalid");
//     emailInput.classList.remove("is-valid");
//     emailAlert.classList.replace("d-none","d-block");
//     return false;
//   }
// }


// function userInputValidation(){
//   userNameValidation();
// userPasswordValidation();
// userEmailValidation();
// if(userNameValidation()==true&&userPasswordValidation()==true&&userEmailValidation()==true){
//   return true;

// }else{
//   return false;
// }
// }

// function isExist(){
//   var accountExistMsg=document.getElementById("accountExistMsg");
//   for(var i=0;i<userInfo.length;i++){
//     if(userInfo[i].name.toLowerCase()==usernameInput.value.toLowerCase()||
//     userInfo[i].email.toLowerCase()==emailInput.value.toLowerCase()){
//       usernameInput.classList.remove("is-valid");
//       emailInput.classList.remove("is-valid");
//       accountExistMsg.classList.replace("d-none","d-block");
//       return true;
//     }else {
//       return false;
//     }
//   }
// }

// function login(){
// var loginEmail=document.getElementById("loginEmail");
// var loginPassword=document.getElementById("loginPassword");
// // var loginBtn=document.getElementById("loginBtn");
// var wrongMsg=document.getElementById("wrongMsg");

// if(loginEmail.value==""||loginPassword.value==""){
//   var fillMsg=document.getElementById("fillMsg");
//   fillMsg.classList.replace("d-none","d-block");
//   return false;
// }
//   for (var i=0;i<userInfo.length;i++){
//     if(userInfo[i].email.toLowerCase()==loginEmail.value.toLowerCase()&&
//     userInfo[i].password.toLowerCase()==loginPassword.value.toLowerCase()){
// localStorage.setItem("sessionUserName",userInfo[i].name);
// // loginBtn.setAttribute("href","welcome.html");
// alert("hellow")
//     }
//     else{
//       wrongMsg.classList.replace("d-none","d-block");
//     }
//   }
// }

  