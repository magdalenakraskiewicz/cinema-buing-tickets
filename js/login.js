
// function validateForm(){
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;

//     let successful = false;
//     for (let i=0; i<logincandidates.length; i++) {
//         let person = logincandidates[i];
//         if (person.email == email && person.password == password) {
//             successful=true;
//             break;
//         }
//     }
//     if(successful===true){
//         window.open('../html/whatison.html','_blank');
//         // window.open('../index.html','_blank');
//         document.getElementById("wrong").hidden=true;

//     } else {
//         // alert ("blad");
//         document.getElementById("wrong").hidden=false;
//     }
// }

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

    var passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
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
        window.open('../html/whatison.html','_self');
        document.getElementById("wrong").hidden=true;

    } else {
        document.getElementById("wrong").hidden=false;
    }

}

// Minimum eight characters, at least one uppercase letter, 
// one lowercase letter, one number and one special character:

// "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"

// /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/

// Minimum eight characters, at least one uppercase letter, 
// one number and one special character:

// "^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"

// /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/

