function validasi() {
    var nama = document.forms["form-pendaftaran"]["name"].value;
    var email = document.forms["form-pendaftaran"]["email"].value;
    var jam = document.forms["form-pendaftaran"]["time_departure"].value;
    var tujuan = document.forms["form-pendaftaran"]["destination"].value;
    var jumlah = document.forms["form-pendaftaran"]["ticket"].value;


    var number = /^[0-9]+$/;
    if (nama == "") {
        document.getElementById("nam_error").innerHTML = "Data Tidak Valid";
        document.forms["form-pendaftaran"]["name"].focus();
        return false;
    }
    if (email == "") {
        document.getElementById("mail_error").innerHTML = "Data Tidak Valid";
        document.forms["form-pendaftaran"]["email"].focus();
        return false;
    }
    if (jam == "") {
        document.getElementById("time_error").innerHTML = "Data Tidak Valid";
        document.forms["form-pendaftaran"]["time_departure"].focus();
        return false;
    }
    if (tujuan == "") {
        document.getElementById("dest_error").innerHTML = "Data Tidak Valid";
        document.forms["form-pendaftaran"]["destination"].focus();
        return false;
    }
    if (jumlah == "" && !jumlah.match(number)) {
        document.getElementById("tick_error").innerHTML = "Data Tidak Valid";
        document.forms["form-pendaftaran"]["ticket"].focus();
        return false;
    } else {
        document.getElementById("g").innerHTML = document.forms["form-pendaftaran"]["name"].value;
        document.getElementById("g1").innerHTML = document.forms["form-pendaftaran"]["email"].value;
        document.getElementById("g2").innerHTML = document.forms["form-pendaftaran"]["time_departure"].value;
        document.getElementById("g3").innerHTML = document.forms["form-pendaftaran"]["destination"].value;
        document.getElementById("g4").innerHTML = document.forms["form-pendaftaran"]["ticket"].value;
        return false;
    }
}
function refreshF() {
    location.reload();
}