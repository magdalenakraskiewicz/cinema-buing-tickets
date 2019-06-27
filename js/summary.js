///pobieranie danych o wybranym filmie
function finalSummary() {
    const url = new URL(document.location.href);
    const city = url.searchParams.get('city');
    const title = url.searchParams.get('title');
    const time = url.searchParams.get('time');
    const tickets = url.searchParams.get('tickets');
    const seats = url.searchParams.get('seats');
    const total = url.searchParams.get('sum');


    return {
        "city": city,
        "title": title,
        "time": time,
        "tickets": tickets,
        "seats": seats,
        "sum": total,
    };
  }

////podmiana danych w html
const summary = finalSummary();
document.getElementById("city").innerText = summary.city;
document.getElementById("title").innerText = summary.title;
document.getElementById("time").innerText = summary.time;
document.getElementById("ticketsAmount").innerText = summary.tickets;
document.getElementById("seats").innerText = summary.seats;
document.getElementById("total").innerText = summary.sum + " zł";



///kupuję
function imBuiyng() {
  window.open('../html/confirmation.html','_blank');
}

