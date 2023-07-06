function calculate() {
    let first = parseFloat(document.getElementById("first").value);
    let second = parseFloat(document.getElementById("second").value);
    let operation = document.getElementById("operation").value;
    let result;
    switch (operation) {
        case 'add':
            result = first + second;
            break;
        case 'odd':
            result = first - second;
            break;
        case 'mul':
            result = first * second;
            break;
        case 'div':
            if (second !== 0) {
                result = first / second;
            } else {
                result = "err";
            }
            break;
        default:
            result = "err";
    }
    let out = document.getElementById("result");
    out.classList.remove("hidden");
    out.innerHTML = result;
}