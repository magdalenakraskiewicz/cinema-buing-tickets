
function validateForm(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let successful = false;
    for (let i=0; i<logincandidates.length; i++) {
        let person = logincandidates[i];
        if (person.email == email && person.password == password) {
            successful=true;
            break;
        }
    }
    if(successful===true){
        // window.open('../html/whatison.html','_blank');
        window.open('../index.html','_blank');
        document.getElementById("wrong").hidden=true;

    } else {
        // alert ("blad");
        document.getElementById("wrong").hidden=false;
    }
}

