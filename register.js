function register() {
	

var username = document.getElementById("username").value;
var email = document.getElementById("email").value;
var password = document.getElementById("pass").value;
var repeatpassword = document.getElementById("repeatpass").value;

if ((username!="") && (email!="") && (password==repeatpassword) && (password!=""))  {
	localStorage.setItem("uporabnik", username);
	localStorage.setItem("email", email);
	window.location.href ="login.html";
  
}

else {
	toastr.error('You didnt fill the areas.', 'Try again.')
	username = "";
	email = "";
	password = "";
	repeatpassword = "";



}

}