function loginData() {
	
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	localStorage.setItem('Username', username);
	localStorage.setItem('Password', password);
	
	document.getElementById("Username").value = "";
}