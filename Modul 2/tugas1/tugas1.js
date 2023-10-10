// Referensi ke elemen-elemen HTML
var bilangan1Input = document.getElementById("bilangan1");
var bilangan2Input = document.getElementById("bilangan2");
var btnJumlahkan = document.getElementById("btnJumlahkan");
var btnUlang = document.getElementById("btnUlang");

// Fungsi untuk melakukan penjumlahan
function jumlahkan() {
    var bilangan1 = parseFloat(bilangan1Input.value);
    var bilangan2 = parseFloat(bilangan2Input.value);
    var hasil = bilangan1 + bilangan2;
    alert("Hasil Penjumlahan: " + hasil);
}

// Fungsi untuk mengosongkan kotak input
function ulang() {
    bilangan1Input.value = "";
    bilangan2Input.value = "";
}

// Menambahkan event listener untuk tombol "Jumlahkan" dan "Ulang"
btnJumlahkan.addEventListener("click", jumlahkan);
btnUlang.addEventListener("click", ulang);