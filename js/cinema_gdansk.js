

///sala kinowa

for(var j=1; j<10; j++) {
    var para_parent = document.createElement("div");
    var node_parent = document.createTextNode(j);

    for(var i=1; i<8; i++) {
        var para = document.createElement("span");
        var node = document.createTextNode("rz:" +j + "m:" + i);

        para.appendChild(node);
        para_parent.appendChild(para);
    }

    var element = document.getElementById("div1");
    element.appendChild(para_parent);
}

var sum = 0;
var elements = document.querySelectorAll("div span");
elements.forEach(function(element){
    element.addEventListener ("click", function(){
        if (element.style.color=="red"){
            element.style.color="black";
            sum = sum - 15;
            document.getElementById("cena").innerHTML = sum + " zł";
        } 
        else {
            element.style.color="red";
            sum = sum + 15;
            document.getElementById("cena").innerHTML = sum + " zł";
        }

    })
})

function buyTickets() {
    window.open('../html/summary.html','_self');
}


function getMovieInfo(){
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
