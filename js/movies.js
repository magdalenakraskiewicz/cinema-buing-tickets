//choose your movie
//'_self'
//_blank'

function choseMoviePoznan(title, time, city) {
    //alert(time + ": "+title);
    const encodedTime = encodeURIComponent(time);
    const encodedTitle = encodeURIComponent(title);
    const encodedCity = encodeURIComponent(city);
    window.open('../html/cinema_poznan_s1.html?title='+encodedTitle+"&time="+encodedTime+"&city="+encodedCity,'_self');
}

function choseMovieWroclaw(title, time, city) {
    const encodedTime = encodeURIComponent(time);
    const encodedTitle = encodeURIComponent(title);
    const encodedCity = encodeURIComponent(city);
    window.open('../html/cinema_wroclaw_s2.html?title='+encodedTitle+"&time="+encodedTime+"&city="+encodedCity,'_self');
}

function choseMovieGdansk(title, time, city) {
    const encodedTime = encodeURIComponent(time);
    const encodedTitle = encodeURIComponent(title);
    const encodedCity = encodeURIComponent(city);
    window.open('../html/cinema_gdansk_s3.html?title='+encodedTitle+"&time="+encodedTime+"&city="+encodedCity,'_self');
}



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







