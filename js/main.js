// ==============================slider home=====================================
// $(document).ready(function() {
//     $(".skitter-large").skitter({
//         with_animations:["circlesRotate","directionRight","blind","block"],
        
//         interval:1000,
       
//     });
    
//   });


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

  