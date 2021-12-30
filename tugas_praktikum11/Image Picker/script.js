function cetakGambar(){
    const hewan = document.getElementById("animal");
    const gambar = document.getElementById("gambar");

    if(hewan.value === "dolphin"){
        gambar.src = "asset/img/lumba-lumba.jpg"
        alert("Yang akan di tampilan adalah gambar Lumba-lumba")
    }
    if(hewan.value === "cat"){
        gambar.src = "asset/img/kucing.jpg"
        alert("Yang akan di tampilan adalah gambar kucing")
    }
    if(hewan.value === "rabbit"){
        gambar.src = "asset/img/kelinci.jpg"
        alert("Yang akan di tampilan adalah gambar kelinci")
    }
    if(hewan.value === "tiger"){
        gambar.src = "asset/img/singa.jpg"
        alert("Yang akan di tampilan adalah gambar singa")
    }
    if(hewan.value === "deer"){
        gambar.src = "asset/img/rusa.jpg"
        alert("Yang akan di tampilan adalah gambar rusa")
    }
    if(hewan.value === "fish"){
        gambar.src = "asset/img/ikan.jpg"
        alert("Yang akan di tampilan adalah gambar ikan")
    }
}
