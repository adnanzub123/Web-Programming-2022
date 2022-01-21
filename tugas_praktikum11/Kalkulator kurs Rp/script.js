let kurs = 9915;
let nilai = 0;

function changeValas() {
    let valas = document.getElementById("valas").value;
    if (valas == "USD") {
        kurs = 9915;
    } else if (valas == "SGD") {
        kurs = 13472;
    } else if (valas == "MYR") {
        kurs = 874;
    } else if (valas == "JPY") {
        kurs = 120;
    } else if (valas == "EUR") {
        kurs = 15888;
    } else if (valas == "SAR") {
        kurs = 3592;
    }
    convert();
}

function convert() {
    let nilai = Number(document.getElementById("value").value);
    let rupiah = nilai * kurs;
    let hasil = document.getElementById("hasil").value=rupiah;
}