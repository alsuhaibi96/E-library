let index=0;

let circeles=document.querySelectorAll(".circle");
let payment_continer=document.querySelector(".payment-personal-info-container");
document.querySelector('.next-btn').addEventListener("click",
()=>{
    if(index===0){
        index++;
        payment_continer.classList.remove("hidePaymentclass");
    }
    payment_continer.classList.add("hidePaymentclass");
    circeles[index].classList.add("is-active");
    index=index>=circeles.length-1?index:++index;
});



document.querySelector('.previous-btn').addEventListener('click',
()=>{
    if(index!==0||index<0){
        circeles[index].classList.remove('is-active');

    }
    index=index<=0?0:--index;    
});