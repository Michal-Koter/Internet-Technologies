

function addDiv() {
    let container = document.getElementById("container");
    let newDiv = document.createElement("div");
    newDiv.className = "box";
    container.append(newDiv);
}

function removeDiv() {
    let container = document.getElementById("container")
    let divs = document.getElementsByClassName("box");
    if (divs.length > 0) {
        container.removeChild(divs[0]);
    }
}

function colorDiv() {
    let divs = document.getElementsByClassName("box");
    if (divs.length > 2) {
        divs[2].style.backgroundColor = "pink";
    }
}

function textDiv() {
    let divs = document.getElementsByClassName("box");
    for (let i=0; i<divs.length;i++) {
        divs[i].textContent = "nowy tekst";
    }
}