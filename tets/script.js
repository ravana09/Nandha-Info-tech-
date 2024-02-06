var nameError = document.getElementById("nameError");
var LastNameError = document.getElementById("last-name-error");
var emailError = document.getElementById("Email-error");
var phoneError = document.getElementById("phone-error");
var userIdError = document.getElementById("user-error");
var passwordError = document.getElementById("Password-error");
var genderError = document.getElementById("Gender-error");
var submitError = document.getElementById("submiteError")



function validationName() {
    var firstName = document.getElementById("firstName").value;
    if (firstName.length == 0) {
        nameError.innerHTML = "Enter a valide Name";
        return false;
    }
    if (!firstName.match(/^[a-zA-Z]*$/)) {
        nameError.innerHTML = "Name consist of only alphabet";
        return false;
    }
    nameError.innerHTML = " ";
    return true;
};

function lastvalidationName() {
    var lastname = document.getElementById("lastName").value;
    if (lastname.length == 0) {
        LastNameError.innerHTML = "Enter a Name";
        return false;
    }
    if (!lastname.match(/^[a-zA-Z]*$/)) {
        LastNameError.innerHTML = "Name consist of only alphabet";
        return false;
    }
    LastNameError.innerHTML = " ";
    return true;
};


function emailValidation() {
    var email = document.getElementById("email").value;
    if (email.length === 0) {
        emailError.innerHTML = 'Enter a email id ';
        return false;
    }
    if (!email.match(/^[a-z0-9]+@[a-z]+.[a-z]{2,4}$/)) {
        emailError.innerHTML = "Enter a valid email id ";
        return false;

    }
    emailError.innerHTML = " ";
    return true;



};


function phonevalidation() {
    var phoneNumber = document.getElementById("phoneNumber").value;

    if (phoneNumber.length === 0) {
        phoneError.innerHTML = "Enter phone number ";
        return false;

    }
    if (phoneNumber.length != 10) {
        phoneError.innerHTML = "Phone number should be only 10  ";
        return false;

    }

    if (!phoneNumber.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "only digits ";
        return false;

    }
    phoneError.innerHTML = " ";
    return true
};

function useridvalidation() {
    var userId = document.getElementById("userId").value;
    var userIdError = document.getElementById("user-error");

    if (userId.length === 0) {
        userIdError.innerHTML = "Enter a user id ";
        return false;
    }

    if (!userId.match(/^[a-zA-Z@]*$/)) {
        userIdError.innerHTML = "Enter a valid user id ";
        return false;
    }

    userIdError.innerHTML = " ";
    return true;  // Return true if validation is successful
}


// function useridvalidation() {
//     var userId = document.getElementById("userId").value;
//     if (userId.length === 0) {
//         userIdError.innerHTML = "Enter a user id ";
//         return false;

//     }
//     if (!userId.match(/^[a-zA-Z@]*$/)) {
//         userIdError.innerHTML = "Enter a valid user id ";
//         return false;

//     }
//     userIdError.innerHTML = " ";
//     return false;

// }

function passwordvalidation() {
    var password = document.getElementById("password").value;
    if (password.length === 0) {
        passwordError.innerHTML = "Enter a password";
        return false;

    }
    if (password.length < 8) {
        passwordError.innerHTML = "more than 8  chacters are allowed";
        return false;

    }

    if (password.length > 12) {
        passwordError.innerHTML = "Only 12 chacters are allowed";
        return false;

    }
    var passwordMatcheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/;
    if (!password.match(passwordMatcheck)) {
        passwordError.innerHTML = "password must consist capital letters, numbers and special character";
        return false;

    }
    passwordError.innerHTML = " ";
    return true;




};

function genderValidation() {
    var male = document.getElementById('male');
    var female = document.getElementById("female")
    if (!male.checked && !female.checked) {
        genderError.innerHTML = "choose the gender";
        return false;

    }
    genderError.innerHTML = " ";
    return true;

};

function validationForm() {
    var isValid = validationName() && lastvalidationName() && emailValidation() &&
        phonevalidation() && useridvalidation() && passwordvalidation() && genderValidation();

    var submitError = document.getElementById("submiteError");

    if (!isValid) {
        submitError.style.display = "block";
        submitError.innerHTML = "Fill the form correctly";
        setTimeout(function () {
            submitError.style.display = "none";
        }, 2000);
    } else {
        // alert("form has submitted succesfully");

        submitError.style.display = "block";
        submitError.innerHTML = "Form has submitted successfully";
        setTimeout(function () {
            submitError.style.display = "none";
        }, 2000);
        //Optionally, you can submit the form or perform additional actions here.
    }

    return false; // Prevents the form from actually submitting.
}


// function validationForm() {

//     if (!validationName() || !lastvalidationName() || !emailValidation()
//         || !phonevalidation() || !useridvalidation() || !passwordvalidation() || !genderValidation()) {
//         submitError.style.display = "block";
//         submitError.innerHTML = "Fill the form completely ";
//         setTimeout(function () { submitError.style.display = "none"; }, 2000);
//         return false;
//     } else {
//         submitError.innerHTML = "Fill has submited sucesfully  ";
//         return true
//     }


// }
// alert("Form submitted successfully!");
// return true;






// function validationForm() {
//     var firstName = document.getElementById("firstName").value;
//     var lastName = document.getElementById("lastName").value;
//     var email = document.getElementById("email").value;
//     var phoneNumber = document.getElementById("phoneNumber").value;
//     var userId = document.getElementById("userId").value;
//     var password = document.getElementById("password").value;
//     var gender = document.querySelector('input[name="gender"]:checked');

//     // Check if required fields are filled
//     if (firstName === ""){
//     // || lastName === "" || email === "" || phoneNumber === "" || userId === "" || password === "" || gender === null) {
//         alert("Please fill in all required fields.");
//         return false;
//     }
//     // Validate Name doex not contain numbers
//     var namecheck = /^[a-zA-Z]$/;

//     for(const element of firstName){
//         console.log(element==namecheck)
//     }
//     if (!firstName.match(namecheck)) {
//         alert("Please provide a valide name(The Name should contain only alphabet )");
//         return false ;

//     }

//     if (!isNaN(firstName) || !isNaN(lastName)) {
//         alert("Number are not allowed in the name ");
//         return false;
//     }

//     // Validate phone number (simple check for 10 digits)
//     if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
//         alert("Phone number must have exactly 10 digits.");
//         return false;
//     }

//     //validation of email
//     var emailPattern = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
//     if (!email.match(emailPattern)) {
//         alert("Enter a valide Email Required ");
//         return false;
//     }

//     //validation of user id
//     var userIdPattern = /^[a-zA-Z._-]+@[0-9.-]{2,4}$/;
//     if (!userId.match(userIdPattern)) {
//         alert("Enter a valide user-id ");
//         return false;

//     }

//     // Validate password
//     var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/;
//     if (!password.match(passwordPattern)) {
//         alert("Password must contain at least one number, one uppercase and lowercase letter, and be 8-12 characters long.");
//         return false;
//     }

//     // If all checks pass, the form is considered valid
//     alert("Form submitted successfully!");
//     return true;
// }
