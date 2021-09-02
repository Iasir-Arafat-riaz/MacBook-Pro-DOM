//Update Price for all individual Product Component 
function isUpdate(id, value) {
  const productComponent = document.getElementById(id);
  productComponent.innerText = value;
}

//adding And updating total bol and value return
function addingTotalBlill (){
    const basePrice = document.getElementById("best-price").innerText;
    const raMemory = document.getElementById("memory").innerText;
    const storage = document.getElementById("storage").innerText;
    const deliveryCharge = document.getElementById("delivery").innerText;
    const totalPrice = document.getElementById("totalPrice")
    const footerTotal = document.getElementById("total")
    // totalPrice.innerText = 1299+ parseInt(raMemory) + parseInt(storage) + parseInt(deliveryCharge)
    totalPrice.innerText = parseInt(basePrice)+ parseInt(raMemory) + parseInt(storage) + parseInt(deliveryCharge)
    
    //for BONUS marks footer heading Total update with total bill 
    footerTotal.innerText = totalPrice.innerText
    return totalPrice
}



//for RAM upgrading
document.getElementById("eightGbMemory-btn").addEventListener("click", function () {
  isUpdate("memory", 0);
  addingTotalBlill ()
});

document
  .getElementById("sixteenGbMemory-btn")
  .addEventListener("click", function () {
    isUpdate("memory", 180);
    addingTotalBlill ()
  });


//for storage upgrading
document.getElementById("ssd256-btn").addEventListener("click", function () {
  isUpdate("storage", 0);
  addingTotalBlill ()
});
document.getElementById("ssd512-btn").addEventListener("click", function () {
  isUpdate("storage", 100);
  addingTotalBlill ()
});
document.getElementById("ssd1Tb-btn").addEventListener("click", function () {
  isUpdate("storage", 180);
  addingTotalBlill ()
});


// for Delivery Charge Update
document.getElementById("freeDelivery-btn").addEventListener("click", function () {
  isUpdate("delivery",0);
  addingTotalBlill ()
});
document.getElementById("notFreeDelivery-btn").addEventListener("click", function () {
  isUpdate("delivery", 20);
  addingTotalBlill ()
});


//For bonus Part----- Apply promoCode "stevekaku" ------ & trying Some extra work :)
document.getElementById("promo-apply-btn").addEventListener("click",function(){
    const errorMessage = document.getElementById("errorPromo")
    const totalPrice = document.getElementById("totalPrice")

    const totalBill = document.getElementById("total")
    const promoCodeField = document.getElementById("promoCodeInput")
    
    const promoCodeFieldValue = promoCodeField.value;

    const discount = totalPrice.innerText *.20
    console.log(discount)
    
    // apply promo code for 20% discount
    if(promoCodeFieldValue == "stevekaku"){
       totalBill.innerText = (totalPrice.innerText)-discount;
       promoCodeField.value =""
       errorMessage.style.display="none"
    }
    //trying some extra work for more organize
    else{
        errorMessage.style.display="block"
        promoCodeField.value =""
    }
})

//----- Thanks to you for your valuable time & support------ :)


