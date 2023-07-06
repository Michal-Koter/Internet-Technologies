class Ocena {
    przedmiot;
    srednia;

    constructor(przedmiot, srednia) {
        this.przedmiot = przedmiot;
        this.srednia = srednia;
    }
}

class Student {
    _oceny = [];
    srednia;
    imie;
    nazwisko;

    constructor(imie,nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
    }

    hello() {
        return `Witaj ${this.imie} ${this.nazwisko}, Twoja średnia ocen to: ${this.srednia}.`;
    }

    set setOceny(x) {
        if (x.constructor.name === "Ocena") {
            this._oceny.push(x);
        }
        let sum = 0;
        for (let i=0;i<this._oceny.length;i++) {
            sum += parseInt(this._oceny[i].srednia);
        }
        this.srednia = parseInt(sum) / parseInt(this._oceny.length);
    }

    get oceny() {
        let result = "";
        for(let i=0; i<this._oceny.length;i++) {
            result = result.concat(" ", `Przedmiot: ${this._oceny[i].przedmiot} - ocena ${this._oceny[i].srednia}.`)
        }
        return result;
    }
}

let student = new Student("Adam", "Nowak");


student.setOceny = new Ocena("PRI",4);
student.setOceny = new Ocena("SAD",2);
student.setOceny = new Ocena("ASD",3);

console.log(student.hello());
console.log(student.oceny);