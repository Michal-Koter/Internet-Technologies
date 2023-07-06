export class Auto {
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

export class Tablica {
    auta = [];
    length=parseInt("0");
    dodaj(auto) {
        if(auto.cena_koncowa > 10000) {
            this.auta.push(auto);
            this.length++;
            console.log("auto zostało dodane");
        }
    }

    odmlodz() {
        this.auta.forEach(p => p.rok++);
    }
}