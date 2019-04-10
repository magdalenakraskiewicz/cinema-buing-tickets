//choose your movie
//'_self'
//_blank'

function choseAvatar() {
    window.open('../html/cinema_poznan_s1.html','_self');
}
function choseAmelia() {
    window.open('../html/cinema_poznan_s2.html','_self');
}
function choseSolaris() {
    window.open('../html/cinema_poznan_s3.html','_self');
}


//lasted hours in gray and nonactive
// var actualHour = new Date().getHours();
// let avatar1Time = document.getElementById("HourBtn").innerHTML;
// let avatar1Hour = parseInt(avatar1Time.split(':')[0]);
// if (avatar1Hour < actualHour) {
//     document.getElementById("HourBtn").classList.remove("activeButton");
//     document.getElementById("HourBtn").classList.add("nonactiveButton");
//     document.getElementById("HourBtn").onclick=undefined;

// };

//lasted hours in gray and nonactive
let actualHour = new Date().getHours();
let actualMinutes = new Date().getMinutes();
let buttonList = document.querySelectorAll('.HourBtn button');

for (let i=0; i<buttonList.length; i++) {
    let buttonHour = parseInt(buttonList[i].innerHTML.split(':')[0]);
    let buttonMinute = parseInt(buttonList[i].innerHTML.split(':')[1]);
    if (buttonHour < actualHour || (buttonHour === actualHour && buttonMinute < actualMinutes)){
        buttonList[i].classList.remove("activeButton");
        buttonList[i].classList.add("nonactiveButton");
        buttonList[i].onclick=undefined;
    }
}







