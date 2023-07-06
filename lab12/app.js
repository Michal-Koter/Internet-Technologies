var firms = document.getElementsByClassName("firma");
var news = document.getElementById("new");

async function getData() {
    let response = await fetch("http://szuflandia.pjwstk.edu.pl/~ppisarski/zad8/dane.php");
    let jsonData = await response.json();
    update(jsonData);
}

function update(data) {
    let stock = Object.values(data.stock);
    for(let i=0; i<4;i++) {
        let kurs = firms[i].getElementsByClassName("kurs");
        let currentKurs = parseInt(kurs.item(0).innerHTML);
        let newKurs = parseInt(stock[i]);
        if (currentKurs !== newKurs) {
            if (currentKurs > newKurs) {
                firms[i].style.backgroundColor = "indianred";
            } else {
                firms[i].style.backgroundColor = "lightgreen";
            }
            kurs.item(0).innerHTML = newKurs;
        } else {
            firms[i].style.backgroundColor = "none";
        }
    }

    let info = document.createElement("div");
    info.classList.add("info");
    info.innerHTML = data.news;

    news.appendChild(info);

    if(news.children.length > 4) {
        let divs = news.getElementsByClassName("info")
        news.removeChild(divs[0]);
    }
}

getData()
setInterval(getData, 2500);

