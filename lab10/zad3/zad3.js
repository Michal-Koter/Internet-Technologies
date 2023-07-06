import {Auto, Tablica} from "./auto.js";

let auto1 = new Auto(2018,50000,50000,45000);
let auto2 = new Auto(2017,70000,60000,55000);
let auto3 = new Auto(2019,60000,55000,50000);
let auto4 = new Auto(2020,40000,44000,42000);
let auto5 = new Auto(2021,30000,65000,60000);
let tablica = new Tablica();
tablica.dodaj(auto1);
tablica.dodaj(auto2);
tablica.dodaj(auto3);
tablica.dodaj(auto4);
tablica.dodaj(auto5);

let container = document.getElementById("container");
let table = document.createElement("table");

let thead = document.createElement("thead");
let hrow = document.createElement('tr');
let headers = [];

let properties = Object.getOwnPropertyNames(auto1);
properties.forEach(
    p => {
        let komorka = document.createElement("th");
        komorka.innerText = p;
        hrow.appendChild(komorka)
    }
)
thead.appendChild(hrow);
table.appendChild(thead);

let tbody = document.createElement('tbody');

tablica.auta.forEach(
    p => {
        let row = document.createElement("tr");
        let rok = document.createElement("td");
        rok.innerText = p.rok;
        row.appendChild(rok);

        let przebieg = document.createElement("td");
        przebieg.innerText = p.przebieg;
        row.appendChild(przebieg);

        let cena_w = document.createElement("td");
        cena_w.innerText = p.cena_wyjsciowa;
        row.appendChild(cena_w);

        let cena_k = document.createElement("td");
        cena_k.innerText = p.cena_koncowa;
        row.appendChild(cena_k);

        tbody.appendChild(row);
    }
)
table.appendChild(tbody);
container.appendChild(table);
