function masuk () {
    var username = document.getElementById('username')
    var password = document.getElementById('password')     
    if(username.value == "admin" && password.value == "admin")
    {
        alert('Berhasil login !')
    } else {
        alert('Login gagal')
    }
}