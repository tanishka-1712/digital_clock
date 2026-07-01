function updateClock() { 
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;

    hours = hours.toString().padStart(2,'0');
    minutes = minutes.toString().padStart(2,'0');
    seconds = seconds.toString().padStart(2, '0');

    let timestr = `${hours}:${minutes}:${seconds} ${ampm}`;

    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let dateStr = now.toLocaleDateString(undefined, options);

    document.getElementById("time").innerHTML = timestr;
    document.getElementById("date").innerHTML = dateStr;
}

setInterval(updateClock, 1000);

updateClock();