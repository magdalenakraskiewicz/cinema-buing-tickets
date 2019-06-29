function emailAndPasswordFound(email, password) {
    for (let i=0; i<logincandidates.length; i++) {
        let person = logincandidates[i];
        if (person.email == email && person.password == password) {
           return true
        } 
    }
    return false;
}

function validation(email, password) {

    var emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var emailValid = email.match(emailRegex);

    var passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&].{8,}$/;
    var passwordValid = password.match(passwordRegex);

    if (emailValid === null || passwordValid === null) {
        return false
    }
    return true;

}

function validateForm() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (emailAndPasswordFound(email, password) === true ||
        validation (email, password) === true) {
        window.open('../html/login_successful.html','_self');
        document.getElementById("wrong").hidden=true;

    } else {
        document.getElementById("wrong").hidden=false;
    }
}

function registerForm() {
    window.open('../html/register.html','_self');
  }


