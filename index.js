function addEvent(number) {
    const id = document.getElementById(number);
    const p = document.createElement("p");
    var event = prompt("Enter name of event:");
    var time = prompt("Enter time of event:");
    const text = document.createTextNode("\"" + event + "\" at " + time);
    p.append(text);
    id.appendChild(p);
}