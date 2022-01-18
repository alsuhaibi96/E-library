/*Java script tha runs in the whole project*/



/*Displaying and navigating between slides in the category page*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

/*Displaying and hiding modals "Sign in Modal" and " Sign up modal"*/
const showloginModal=modal=>{
  document.getElementById("login-modal-container").style.display="block";
}
const hideloginModal=hide=>
{
  document.getElementById("login-modal-container").style.display="none";

}
const showSigninModal=modal=>{
  document.getElementById("login-modal-container").style.display="none";
  document.getElementById("signin-modal-container").style.display="block";
}
const hidesigninModal=hide=>
{
  document.getElementById("signin-modal-container").style.display="none";
  document.getElementById("login-modal-container").style.display="none";

}
const showloginModalAgain=showLogin=>{
  document.getElementById("signin-modal-container").style.display="none";
  document.getElementById("login-modal-container").style.display="block";
}