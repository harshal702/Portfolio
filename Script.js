console.log("Portfolio Website Loaded");

// button click message
function showMessage(){
alert("Thank you for visiting my portfolio!");
}

// smooth scrolling
document.querySelectorAll("nav a").forEach(link=>{
link.addEventListener("click",function(e){
e.preventDefault();

const target=this.getAttribute("href");
document.querySelector(target).scrollIntoView({
behavior:"smooth"
});

});
});
