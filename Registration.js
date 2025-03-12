function storeDataFunc(event) {
	event.preventDefault()

	var first_name = document.getElementById("fname");
	var middle_name = document.getElementById("mname");
	var last_name = document.getElementById("lname");
	var date = document.getElementById("dob");
	var course = document.getElementById("courseValue");
	var selgender = document.getElementById("gender");
	// var checkbox1 = document.getElementById("cb1");
	// var checkbox2 = document.getElementById("cb2");
	// var checkbox3 = document.getElementById("cb3");
	var code = document.getElementById("con_code");
	var phone = document.getElementById("phone_no");
	var address = document.getElementById("address");
	var email = document.getElementById("email");
	var password = document.getElementById("pass");
	
	selgender.checked ? gender = "Male" : gender = "Female";

	localStorage.setItem('Is_first_name', first_name.value);
	localStorage.setItem('Is_middle_name', middle_name.value);
	localStorage.setItem('Is_last_name', last_name.value);
	localStorage.setItem('Is_dob', date.value);
	localStorage.setItem('Is_course', course.value);
	// localStorage.setItem('Is_cb1', checkbox1.value);
	// localStorage.setItem('Is_cb2', checkbox2.value);
	// localStorage.setItem('Is_cb3', checkbox3.value);
	localStorage.setItem('Is_gender', gender);
	localStorage.setItem('Is_code', code.value);
	localStorage.setItem('Is_phone', phone.value);
	localStorage.setItem('Is_address', address.value);
	localStorage.setItem('Is_email', email.value);
	localStorage.setItem('Is_password', password.value);
	
	document.getElementById("regForm").reset();
}

function readDataFunc() {
	
	firstName.innerHTML = localStorage.getItem('Is_first_name');
	middleName.innerHTML = localStorage.getItem('Is_middle_name');
	lastName.innerHTML = localStorage.getItem('Is_last_name');
	selectedCourse.innerHTML = localStorage.getItem('Is_course');
	selgender.innerHTML = localStorage.getItem('Is_gender');
	code.innerHTML = localStorage.getItem('Is_code');
	phone.innerHTML = localStorage.getItem('Is_phone');
	address.innerHTML = localStorage.getItem('Is_address');
	emailID.innerHTML = localStorage.getItem('Is_email');
	password.innerHTML = localStorage.getItem('Is_password');

}