// Buat sebuah program untuk mengecek apakah karakter pertama dalam sebuah string mengandung huruf
// besar atau tidak.

// Jika huruf pertama adalah huruf besar. Program akan menampilkan/console.log ‘Huruf pertama adalah huruf besar’

// Jika huruf pertama bukan huruf besar. Program akan menampilkan/console.log ‘Huruf pertama adalah huruf kecil’

function Besar(a) {
  regexp = /^[A-Z]/;
  if (regexp.test(a)) {
    console.log("Huruf pertama adalah huruf besar");
  } else {
    console.log("Huruf pertama adalah huruf kecil");
  }
}
Besar("bcd");


// SOAL No.2
// Buat sebuah program untuk memvalidasi format nomor handphone
//     Nomor handphone minimum o10 digit dan maksimum 12 digit
//     Hanya menerima digit karakter


function vadidasi(a) {
  regexp = /^\d{10,12}$/;
  if (regexp.test(a)) {
    console.log("yes benar");
  } else {
    console.log("Harus number minimal 10 maksimal 12 digit");
  }
}

validasi(123244923847);


// SOAL 3 :
