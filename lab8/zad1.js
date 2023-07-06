function zad1(a, b, c) {
    let powA = Math.pow(a,2);
    let powB = Math.pow(b,2);
    let powC = Math.pow(c,2);

    if(powA + powB == powC || powA + powC == powB || powB + powC == powA) {
        console.log("Trojkat jest pitagorejski");
    } else {
        console.log("Trojkat nie jest pitagorejski");
    }
}

console.log("Zadanie 1:");
zad1(3,4,5);


function zad2(a, b, c) {
    for (let i=a; i<=b ;i++) {
        if(i%c==0) {
            console.log(i);
        }
    }
}

console.log("Zadanie 2:");
zad2(5,20, 4);


function zad3(num) {
    for(let i=1; i<=num; i++){
        let arr = [];
        for(let j=1;j<=num;j++){
            arr[j-1] = i*j;
        }
        console.log(...arr);
    }
}

console.log("Zadanie 3:");
zad3(3);


function zad4(len) {
    let arr = [];
    if(len > 0) {
        arr.push(1);
        len--;
    }
    if(len > 0) {
        arr.push(1);
        len--;
    }
    for(let i=0;i<len;i++){
        arr.push(arr[i+1] + arr[i]);
    }
    console.log(...arr);
}

console.log("Zadanie 4:");
zad4(10);


function zad5(h) {
    let arr = [];
    for (let i=0;i<h;i++) {
        arr.push("*");
        console.log(...arr);
    }
}

console.log("Zadanie 5:");
zad5(5);


function zad6(h) {
    let arr = [];
    for(let i=0;i<h*2+1;i++) {
        arr.push("*");
    }
    console.log(...arr);

    for(let i=1;i<h;i++) {
        arr = [];
        for(let j=0;j<h-i+1;j++) {
            arr.push("*");
        }
        for(let j=0;j<i*2-1;j++) {
            arr.push(" ");
        }
        for(let j=0;j<h-i+1;j++) {
            arr.push("*");
        }
        console.log(...arr);
    }

    arr = [];
    for(let i=0;i<h*2+1;i++) {
        arr.push("*");
    }
    console.log(...arr);
}

console.log("Zadanie 6:");
zad6(5);


function zad7(dzialanie, ...args) {
    switch (dzialanie) {
        case 0: // trójkąt
            console.log(args[0]*args[1]/2);
            break;
        case 1: //kwadrat
            console.log(args[0]*args[0]);
            break;
        case 2: // prostokąt
            console.log(args[0]*args[1])
            break;
        case 3: // równoległobok
            console.log(args[0]*args[1])
            break;
        default:
            console.log("Funkcja nie obsługuje figury o podanym numerze!")
    }
}

console.log("Zadanie 7:");
zad7(3, 5,4);


const triangle = function(...args) {
    return args[0]*args[1]/2;
}

const square = function(args) {
    return args[0]*args[0];
}

const rectangle = function(...args) {
    return args[0]*args[1];
}

const parallelogram = function(...args) {
    return args[0]*args[1];
}

function zad8(dzialanie, ...args){
    return dzialanie(...args);
}

console.log("Zadanie 8:");
console.log(zad8(rectangle,5,6));


function zad9(h) {
    let current = [];
    let prev = [];
    for(let i=0;i<h;i++) {
        for(let j=0;j<=i;j++) {
            if(j===0 || j===i) {
                current.push(1);
            } else {
                current.push(parseInt(prev[j-1]) + parseInt(prev[j]));
            }
        }
        console.log(...current);
        prev = current;
        current = [];
    }
}

console.log("Zadanie 9:");
zad9(6);


function zad10(baned, text) {
    for(let i=0; i<baned.length;i++) {
        text = text.replaceAll(baned[i], "*")
    }
    return text;
}

console.log("Zadanie 10:");
console.log(
    zad10(["Ala", "kot"], "Ala ma kota i psa")
);
