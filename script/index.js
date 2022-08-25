

var nav_bar = document.querySelector(".nav");
var header_part = document.querySelector(".firstDesc");
var div_img = document.querySelector("#logo");
window.addEventListener("scroll", checkscroll);
var animationDone = false;


function checkscroll() {

  var coordinates_nav = nav_bar.getBoundingClientRect();
  var coordinates_header = header_part.getBoundingClientRect();
  if (!animationDone && coordinates_nav.top >= coordinates_header.top) {
    animationDone = false;
    nav_bar.classList.remove("nav_color1");
    nav_bar.classList.add("nav_color2");
    div_img.classList.remove("logo_cont");
    div_img.classList.add("logo_cont1");
  }

  if (!animationDone && coordinates_nav.top <= coordinates_header.top) {
    nav_bar.classList.add("nav_color1");
    nav_bar.classList.remove("nav_color2");
    div_img.classList.add("logo_cont");
    div_img.classList.remove("logo_cont1");
    animationDone;
  }
}

// signup code here
var form = document.querySelector("form");

form.addEventListener("submit" ,signup);

let data =JSON.parse(localStorage.getItem("signup"))||[];
function signup() {
    event.preventDefault();
   let email = document.getElementById("email").value;
   let name = document.getElementById("name").value;
   let surname = document.getElementById("surname").value;
   let password = document.getElementById("password").value;
   let  details ={
    email : email,
    name: name,
    surname : surname,
   password: password,

}
let x=false;
data.map((elem)=>{
    if(elem.email==email){
       x=true;
       }     
     
});
if(x==true){
    alert("This email already exist!");
}else{
  alert("signup sucessfully!");
    data.push(details);
    localStorage.setItem("signup",JSON.stringify(data));
    window.location.href="/html/valid.html";
}
   
}
   
   



// login code here
var loginData= JSON.parse(localStorage.getItem("signup"))||[];
   
var form = document.querySelector("form");
form.addEventListener("submit",login);
function login(){
    event.preventDefault();
   let email = document.getElementById("email").value ;
   let password = document.getElementById("password").value ;
 
   loginData.map((elem)=>{
    if(email==elem.email&&password==elem.password){
        alert("login successfully");
        window.location.href="/html/exercise.html";
    }
   
   });

}

