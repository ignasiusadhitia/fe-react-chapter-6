// Menampilkan pesan ke konsol
console.log('Hello, World!');

// Komentar satu baris
// Ini adalah komentar satu baris

/*
Komentar banyak baris
Ini adalah contoh komentar yang lebih panjang
dengan beberapa baris.
*/

// Deklarasi variabel
var gender = "Laki-laki"; // Menggunakan var
const nama = "Deni"; // Menggunakan const
let umur = 25; // Menggunakan let

// Tipe Data Primitif
const name = "Deni"; // String
const age = 25; // Number
const isMarried = true; // Boolean
const car = null; // Null

// Tipe Data Primitif Lainnya
let job; // Undefined
let id = Symbol(); // Symbol
let bigInt = 1234567890123456789012345678901234567890n; // BigInt

// Operator Aritmatika
let penjumlahan = 10 + 5;
let pengurangan = 10 - 5;
let perkalian = 10 * 5;
let pembagian = 10 / 5;
let pangkat = 10 ** 2;
let sisaBagi = 10 % 3;

// Operator Perbandingan
let lebih = 10 > 5;
let kurang = 10 < 5;
let lebihDariSama = 10 >= 5;
let kurangDariSama = 10 <= 5;
let sama = 10 == 5;
let tidakSama = 10 != 5;

// Operator Logika
let AND = true && true;
let OR = true || false;
let NOT = !true;

// Menampilkan hasil ke konsol
console.log("Nama:", name);
console.log("Umur:", age);
console.log("Apakah sudah menikah?", isMarried);
console.log("Pekerjaan:", job); // Undefined karena belum diberi nilai
console.log("ID:", id.toString()); // Menampilkan symbol sebagai string
console.log("BigInt:", bigInt);

// Menampilkan hasil operasi aritmatika
console.log("Penjumlahan:", penjumlahan);
console.log("Pengurangan:", pengurangan);
console.log("Perkalian:", perkalian);
console.log("Pembagian:", pembagian);
console.log("Pangkat:", pangkat);
console.log("Sisa Bagi:", sisaBagi);

// Menampilkan hasil operasi perbandingan
console.log("Lebih besar:", lebih);
console.log("Lebih kecil:", kurang);
console.log("Lebih besar atau sama dengan:", lebihDariSama);
console.log("Lebih kecil atau sama dengan:", kurangDariSama);
console.log("Sama dengan:", sama);
console.log("Tidak sama dengan:", tidakSama);

// Menampilkan hasil operasi logika
console.log("AND:", AND);
console.log("OR:", OR);
console.log("NOT:", NOT);
