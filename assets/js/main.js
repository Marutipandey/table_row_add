let counter = 2;

function myfunction() {
    let name = prompt("Insert your name");
    let address = prompt("Insert your address");
    let templateRow = document.getElementById("rowadd").cloneNode(true);
    templateRow.querySelector(".new-id").innerHTML = counter++;
    templateRow.querySelector(".new-name").innerHTML = name;
    templateRow.querySelector(".new-address").innerHTML = address;
    document.querySelector("tbody").appendChild(templateRow);
}
