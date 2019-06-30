///sala kinowa

for (var j = 1; j < 10; j++) {
    var para_parent = document.createElement("div");
    var node_parent = document.createTextNode(j);

    for (var i = 1; i < 10; i++) {
        var para = document.createElement("span");
        var node = document.createTextNode("rz:" + j + "m:" + i);

        // /dodanie klas i wlaściwości do spanów
        para.classList.add("addedSpan");

        para.appendChild(node);
        para_parent.appendChild(para);
    }

    var element = document.getElementById("div1");
    element.appendChild(para_parent);
}


/// sumowanie
var sum = 0;
var elements = document.querySelectorAll("div span");
elements.forEach(function (element) {
    element.addEventListener("click", function () {
        if (element.className == "selectedSpan") {
            element.className = "addedSpan";
            sum = sum - 15;
            document.getElementById("cena").innerHTML = sum + " zł";
        }
        else {
            element.className = "selectedSpan";
            sum = sum + 15;
            document.getElementById("cena").innerHTML = sum + " zł";
        }
        hideWarning();
    })
})

function hideWarning() {
    document.getElementById("hideWarning").hidden = true;
}

///pobieranie danych o wybranym filmie
function getMovieInfo() {
    const url = new URL(document.location.href);
    const title = url.searchParams.get('title');
    const time = url.searchParams.get('time');
    const city = url.searchParams.get('city');
    return {
        "title": title,
        "time": time,
        "city": city
    };
}
const movieInfo = getMovieInfo();
document.getElementById("title").innerText = movieInfo.title;
document.getElementById("time").innerText = movieInfo.time;
document.getElementById("city").innerText = movieInfo.city;


/// summary generuje url z parametrami do nastepnej strony i go otwiera
function buyTickets() {
    const movieInfo = getMovieInfo();
    const encodedTime = encodeURIComponent(movieInfo.time);
    const encodedTitle = encodeURIComponent(movieInfo.title);
    const encodedCity = encodeURIComponent(movieInfo.city);
    const encodedSum = encodeURIComponent(sum);

    const tickets = document.querySelectorAll("div span.selectedSpan").length;
    const encodedTicketsAmount = encodeURIComponent(tickets);

    const seatsNodes = document.querySelectorAll("div span.selectedSpan");

    const seats = [];
    for (var i = 0; i < seatsNodes.length; i++) {
        seats[i] = seatsNodes[i].innerText;
    }
    const encodedSeats = encodeURIComponent(seats.join(', '));

    const url = '../html/summary.html'
        + '?title=' + encodedTitle
        + "&time=" + encodedTime
        + "&city=" + encodedCity
        + "&sum=" + encodedSum
        + "&seats=" + encodedSeats
        + "&tickets=" + encodedTicketsAmount;

    if (sum === 0) {
        document.getElementById("hideWarning").hidden = false;
    } else {
        window.open(url, '_self')
    }
}