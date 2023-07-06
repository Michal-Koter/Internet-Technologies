class Auto {
    rok;
    przebieg;
    cena_wyjsciowa;
    cena_koncowa;

    constructor(rok,przebieg,cena_wyjsciowa,cena_koncowa) {
        this.rok = rok;
        this.przebieg = przebieg;
        this.cena_wyjsciowa = cena_wyjsciowa;
        this.cena_koncowa = cena_koncowa;
    }

    zwieksz_cene_wyjsciowa() {
        this.cena_wyjsciowa += 1000;
    }

    zmniejsz_cene_koncowa_wiek() {
        let obecny_rok = new Date().getFullYear();
        this.cena_koncowa = parseInt(this.cena_wyjsciowa) - ((parseInt(obecny_rok)-parseInt(this.rok)) * 1000);
    }

    zmniejsz_cene_koncowa_przebieg() {
        this.cena_koncowa = parseInt(this.cena_koncowa) - (Math.floor(parseInt(this.przebieg) / 100000) * 10000);
    }

    aktualizuj(rok, przebieg) {
        this.rok += rok;
        this.przebieg += przebieg;
        this.zmniejsz_cene_koncowa_wiek();
        this.zmniejsz_cene_koncowa_przebieg();
    }
}

class Tablica {
    auta = [];

    dodaj(auto) {
        if(auto.cena_koncowa > 10000) {
            this.auta.push(auto);
            console.log("auto zostało dodane");
        }
    }

    odmlodz() {
        this.auta.forEach(p => p.rok++);
    }
}

let auto1 = new Auto(2000,120000,500000,25000);
console.log(auto1);
let auto2 = new Auto(2010,200000,600000,12000);
let auto3 = new Auto(2008, 100000,400000,8000);

let auta = new Tablica();
auta.dodaj(auto1);
auta.dodaj(auto2);
auta.dodaj(auto3);

auta.odmlodz();
console.log(auto1);

console.log(auto2);
auto2.zwieksz_cene_wyjsciowa();
console.log(auto2);
auto2.aktualizuj(2, 1000);
console.log(auto2);