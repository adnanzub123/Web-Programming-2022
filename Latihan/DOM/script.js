// Memanggil id
const title = document.getElementById("title");
const subTitle = document.getElementById("subtitle");

// memberikan nilai ulang pada tag h1
title.innerHTML = "Praktikum web";
// Memberikan warna latar belakarang
title.style.backgroundColor = "blue";
// Memberikan warna tulisan
title.style.color = "yellow";

// memberikan nilai ulang pada subTitle
subTitle.innerHTML = 'Belajar Web';
// memberikan color pada subTitle
subTitle.style.color = 'green';

// memanggil selector class
const conten = document.getElementsByClassName('content');

// memberikan color pada element p pertama
conten[0].style.color = "blue";