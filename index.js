function addEvent() {
    const id = document.getElementById("31");
    const p = document.createElement("p");
    const text = document.createTextNode("You have a new event here!");
    p.append(text);
    id.appendChild(p);
}