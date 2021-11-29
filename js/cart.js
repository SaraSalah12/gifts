/*
  cart & fevorit
  */

var product = [
   {
      name: "product Name",
      tag: "product",
      price: 200,
      inCart: 0,
      src: "images/1.jpg"
   }
]


var allPro = document.querySelectorAll(".add-cart")

for (let i = 0; i < allPro.length; i++) {
   allPro[i].addEventListener("click", function () {

      cartNum();
      saveItem(product[0]);

      totalCost(product[0])


   })





}
function refresh() {
   let productNumber = localStorage.getItem("productNumber");
   if (productNumber != 0) {
      $(".numpro").text(productNumber)
      $(".numpro").removeClass("d-none")
   }
}


function cartNum() {

   let productNumber = localStorage.getItem("productNumber");

   productNumber = parseInt(productNumber);
   if (productNumber) {
      localStorage.setItem("productNumber", productNumber + 1)
      $(".numpro").text(productNumber + 1)
      $(".numpro").removeClass("d-none")

   }
   else {
      localStorage.setItem("productNumber", 1)
      $(".numpro").text(1)
      $(".numpro").removeClass("d-none")
   }
}
var products = []






function saveItem(product) {
   let cartItem = localStorage.getItem("product");
   cartItem = JSON.parse(cartItem);
   if (cartItem != null) {
      if (cartItem[product.tag] == undefined) {
         cartItem = {
            ...cartItem,
            [product.tag]: product
         }

      }
      cartItem[product.tag].inCart += 1

   } else {
      product.inCart = 1;
      cartItem = {
         [product.tag]: product
      }

   }


   localStorage.setItem("product", JSON.stringify(cartItem))
}


function totalCost(product) {
   let cost = localStorage.getItem("totalCost")

   if (cost != null) {
      cost = parseInt(cost);
      localStorage.setItem("totalCost", cost + product.price)
   } else {

      localStorage.setItem("totalCost", product.price)
   }
}



function display() {

   let cost = localStorage.getItem("totalCost")

   let localItem = localStorage.getItem("product")
   localItem = JSON.parse(localItem);
   let containr = document.getElementById("big");
   let Tcost = document.getElementById("cost");


   if (localItem && containr) {

      containr.innerHTML = ''
      Object.values(localItem).map(ele => {
         console.log(Object.values(localItem))

         containr.innerHTML +=

            ` 
       <tr id="ftr">
             <th></th>
           <th class="text-center">product</th>
           <th>price</th>
           <th>quantity</th>
           <th>total price</th>
         </tr>
       <tr class="border-bottom">
       <td> <i class="fas fa-times-circle cart-close-icon" onclick=' delet("${ele.tag}","${ele.inCart}","${ele.price}")'></i></td>
       <td><div class="text-center"> <img src=${ele.src} class="imgCart ">
       <p class="">${ele.name}</p></td>
       </div>
       <td> <span>${ele.price}</span>,00$</td>
       <td> <i class="fas fa-chevron-circle-left iconCart" onclick=' decrease("${ele.tag}","${ele.inCart}","${ele.price}")'></i>
       <span class="fs-5 p-2"> ${ele.inCart} </span>
       <i class="fas fa-chevron-circle-right iconCart" onclick='increas("${ele.tag}","${ele.price}","${ele.price}")'></i>
   </td>
       <td>  <span>${ele.price * ele.inCart}</span>,00$</td>
      
     </tr>`
         Tcost.innerHTML = `${cost},00$`

         /** 
         `
         
         <div class="row items pb-2 justify-content-lg-between">
               <div class="col-md-2 p-0">
   
                   <i class="fas fa-times-circle cart-close-icon" onclick=' delet("${ele.tag}","${ele.inCart}","${ele.price}")'></i>
               </div>
               <div class="col-md-2 p-0 text-center">
                   <img src=${ele.src} class="imgCart ">
                   <p class="">girle</p>
               </div>
               <div class="col-md-2 d-flex justify-content-center align-items-center">
                   <span>${ele.price}</span>,00$
               </div>
               <div class="col-md-2 d-flex justify-content-center align-items-center ">
                   <i class="fas fa-chevron-circle-left iconCart" onclick=' decrease("${ele.tag}","${ele.inCart}","${ele.price}")'></i>
                   <span class="fs-5 p-2"> ${ele.inCart} </span>
                   <i class="fas fa-chevron-circle-right iconCart" onclick='increas("${ele.tag}","${ele.price}","${ele.price}")'></i>
               </div>
               <div class="col-md-2 d-flex justify-content-center align-items-center">
                   <span>${ele.price*ele.inCart}</span>,00$
               </div>
              
           </div>
   
          
         `
   */
      })

   }



}




function delet(deletProduct, number, price) {
   console.log(deletProduct)
   let localItem = localStorage.getItem("product")
   localItem = JSON.parse(localItem);
   console.log(localItem)
   delete localItem[deletProduct];
   let productNumber = localStorage.getItem("productNumber");
   productNumber = parseInt(productNumber);
   productNumber = productNumber - number;


   $(".numpro").text(productNumber);

   localStorage.setItem("productNumber", productNumber)


   console.log(localItem)
   localStorage.setItem("product", JSON.stringify(localItem))
   let totalcost = number * price;
   totalcost = parseInt(totalcost)
   console.log(totalcost);
   let cost = localStorage.getItem("totalCost")
   cost = parseInt(cost);
   localStorage.setItem("totalCost", cost - totalcost)

   display();
}
function increas(updat, price) {
   let localItem = localStorage.getItem("product")
   localItem = JSON.parse(localItem);
   localItem[updat].inCart++;
   localStorage.setItem("product", JSON.stringify(localItem))
   totalcost = parseInt(price)
   console.log(totalcost);
   let cost = localStorage.getItem("totalCost")
   cost = parseInt(cost);
   localStorage.setItem("totalCost", cost + totalcost)

   display();
   cartNum()
}
function decrease(updat, number, price) {
   let localItem = localStorage.getItem("product")
   localItem = JSON.parse(localItem);
   localItem[updat].inCart--;
   let productNumber = localStorage.getItem("productNumber");
   productNumber = parseInt(productNumber);
   productNumber = productNumber - 1;
   if (localItem[updat].inCart <= 0) {
      delete localItem[updat];
      localStorage.setItem("product", JSON.stringify(localItem))
   }
   else {
      localStorage.setItem("product", JSON.stringify(localItem))
   }


   if (productNumber > 0) {
      localStorage.setItem("productNumber", productNumber)
      $(".numpro").text(productNumber)
      $(".numpro").removeClass("d-none")

   }
   else {
      localStorage.setItem("productNumber", 0)
      $(".numpro").addClass("d-none")

   }
   totalcost = parseInt(price)
   console.log(totalcost);
   let cost = localStorage.getItem("totalCost")
   cost = parseInt(cost);
   localStorage.setItem("totalCost", cost - totalcost)

   display();

}

refresh();
display();
