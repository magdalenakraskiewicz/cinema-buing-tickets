///repertuar dla Poznań

//cwiczenie
// function myCities() {
//     let x = document.getElementById("cityNameSelect").value;
//     document.getElementById("yourChoice").innerHTML = "You selected: " + x;
//   }


//początek dla utworzenia strony z filmami po wyborze miasta
// function myCities() {
//     let cityName = document.getElementById("cityNameSelect").value;
//     let chosenCity = getCityByName(cityName);
//     alert (chosenCity.address);

// }

// function getCityByName(cityName) {
//     for (let i=0; i<cinemas.length; i++) {
//         let cinema = cinemas[i];
//         if (cinema.city == cityName) {
//             return cinema;
//         }
//     }

// }




//pierwszy sposob  - value dla option trzeba ustawic na "poznan", "wroclaw", "gdansk" tak jak w linkach
// function myCities() {
//     let cityName = document.getElementById("cityNameSelect").value;
//     window.open('../html/movies_'+cityName+'.html','_blank');
// }

//drugi sposob - value dla option trzeba ustawic na "0", "1", "2"
function myCities() {
    let cityCode = document.getElementById("cityNameSelect").value;

    let linki = [
                    '../html/movies_poznan.html',
                    '../html/movies_wroclaw.html',
                    '../html/movies_gdansk.html'
    ];
    
    
    function openTimeTable() {
        window.open(linki[cityCode],'_blank');
        
    }

    if (cityCode === "0" || cityCode === "1" || cityCode === "2") {
        setTimeout(openTimeTable, 300);
    }
    
}

