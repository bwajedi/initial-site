
var formFld = document.getElementById("move-form"),
	nameFld = document.getElementById("name"),
	emailFld = document.getElementById("email"),
	submitBtn = document.getElementById("formSubmit"),
	errorMsg = document.querySelector(".error-message"),
	errorSpanEmail = document.getElementById("hidden-email-span");
	errorSpanName = document.getElementById("hidden-name-span");
	regEmail = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);

formFld.addEventListener("submit", function(e) {
	if (nameFld.value == "") {
		e.preventDefault();
		errorMsg.classList.add("show");
		nameFld.classList.add("error-border");
	}
	if (emailFld.value == "") {
		e.preventDefault();
		errorMsg.classList.add("show");
		emailFld.classList.add("error-border");
	}
});

emailFld.addEventListener("blur", function(e) {
	if ( !regEmail.test(emailFld.value) ) {
		emailFld.classList.add("error-border");
		errorSpanEmail.innerHTML = "Please enter a valid email address";
	}
});

nameFld.addEventListener("blur", function(e) {
	if ( nameFld.value == "" ) {
		nameFld.classList.add("error-border");
		errorSpanName.innerHTML = "Please enter your Full Name";
	}
});







emailFld.addEventListener("focus", function(e) {
	if ( (!errorSpanEmail.innerHTML == "") ||  (emailFld.classList == "error-border") ) {
		emailFld.classList.remove("error-border");
		errorSpanEmail.innerHTML = "";
	}
});

nameFld.addEventListener("focus", function(e) {
	if ( (!errorSpanName.innerHTML == "") ||  (nameFld.classList == "error-border") ) {
		nameFld.classList.remove("error-border");
		errorSpanName.innerHTML = "";
	}
});