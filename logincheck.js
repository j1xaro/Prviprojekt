function logincheck() {
	

var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

if ((username=="admin") && (password=="admin")) {
	window.location.href ="namizje.html";
  
}

else {
	toastr.error('Wrong password or username.', 'Try again.')
	username = "";
	password = "";



}

}
