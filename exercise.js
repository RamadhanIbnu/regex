// Soal No.1

// Buat sebuah program untuk mengecek apakah karakter pertama dalam sebuah string mengandung huruf
// besar atau tidak.

// Jika huruf pertama adalah huruf besar. Program akan menampilkan/console.log ‘Huruf pertama adalah huruf besar’

// Jika huruf pertama bukan huruf besar. Program akan menampilkan/console.log ‘Huruf pertama adalah huruf kecil’


function Besar(a) {
  regexp = /^[A-Z]/;
  if (regexp.test(a)) {
    alert("Huruf pertama adalah huruf BESAR");
  } else {
    alert("Huruf pertama adalah huruf KECIL");
  }
}

let input = prompt("masukan kata yang anda inginkan : ")
// console.log(Besar(input));


// Soal No.2

// Buat sebuah program untuk memvalidasi format nomor handphone

//     Nomor handphone minimum 10 digit dan maksimum 12 digit

//     Hanya menerima digit karakter


function validasi(b) {
  regexp = /^\d{10,12}$/;
  if (regexp.test(b)) {
    alert("format yang anda masukan benar");
  } else {
    alert("Maaf format yang anda masukan salah, minimum 10 digit dan maksimum 12 digit!");
  }
}

let num = parseInt(prompt("masukan nomer anda : "))
// validasi(num);


// Soal No.3

// Buat sebuah program yang menyediakan kalimat berikut sehingga user mendapatkan pencarian yang persis sama.

//     Bagaimana cara memulai usaha bisnis

//     Bootcamp impact byte

//     Status covid hari ini

function searchWord(c) {
    regexp = /^Bagaimana cara memulai usaha bisnis$|^Bootcamp Impact Byte$|^Status covid hari ini$/;
    if(regexp.test(c)) {
        alert("kata yang anda cari berhasil ditemukan");
    } else {
        alert("maaf kata yang anda cari tidak dapat ditemukan");
    }
}

let word = prompt("masukan kata : "); 
// searchWord(word);