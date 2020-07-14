var css= document.querySelector("h3");
var c1= document.querySelector(".c1");
var c2= document.querySelector(".c2"); 
var body = document.getElementById("g"); 



function SetGradient() {
	body.style.background =
	"linear-gradient(to right, " 
	+ c1.value  
	+ ", "
	+ c2.value
	+ ")";
}


c1.addEventListener("input",SetGradient );

c2.addEventListener("input",SetGradient);
