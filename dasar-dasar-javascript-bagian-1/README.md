# Dasar-dasar JavaScript

Proyek ini memperkenalkan konsep-konsep dasar JavaScript, bahasa pemrograman yang digunakan untuk membuat konten web menjadi interaktif. JavaScript sangat penting dalam pengembangan web modern, dan pemahaman dasar ini akan membantu Anda dalam menulis kode yang efektif.

## Menulis Kode Pertama dengan `console.log()`

`console.log()` adalah metode bawaan JavaScript yang digunakan untuk menampilkan pesan ke konsol. Ini sangat berguna untuk debugging dan melihat output dari kode yang Anda tulis.

```javascript
console.log("Hello, World!");
```

## Menulis Komentar pada JavaScript

Komentar digunakan untuk menjelaskan kode atau menonaktifkan bagian tertentu dari kode selama pengujian. Terdapat dua jenis komentar:

```javascript
Komentar Satu Baris: Menggunakan // di awal baris.
Komentar Banyak Baris: Menggunakan /* untuk membuka dan */ untuk menutup.
```

## Deklarasi Variabel

Variabel adalah tempat penyimpanan untuk data. Di JavaScript, variabel dapat dideklarasikan menggunakan `var`, `let`, atau `const`:

- `var`: Dapat digunakan di seluruh fungsi atau global scope. Penggunaannya kurang disarankan karena dapat menimbulkan masalah dengan scope.
- `let`: Dapat digunakan di dalam block scope dan merupakan cara yang lebih modern dan aman dibandingkan var.
- `const`: Sama seperti let, tetapi nilainya tidak bisa diubah setelah deklarasi.

```javascript
var gender = "Laki-laki";
const nama = "Deni";
let umur = 25;
```

## Tipe Data dalam JavaScript

JavaScript mendukung beberapa tipe data primitif yang sering digunakan dalam pemrograman:

- String: Representasi teks, seperti `"Hello, World!"`.
- Number: Semua jenis angka, seperti `42` atau `3.14`.
- Boolean: Nilai logika `true` atau `false`.
- Null: Menunjukkan tidak adanya nilai.
- Undefined: Variabel yang dideklarasikan tetapi belum diisi dengan nilai.
- Symbol: Nilai unik dan tidak dapat diubah, sering digunakan sebagai identifier.
- BigInt: Digunakan untuk menyimpan angka yang lebih besar dari `Number.MAX_SAFE_INTEGER`.
  Contoh penggunaan tipe data:

```javascript
const name = "Deni"; // String
const age = 25; // Number
const isMarried = true; // Boolean
const car = null; // Null

let job; // Undefined
let id = Symbol(); // Symbol
let bigInt = 1234567890123456789012345678901234567890n; // BigInt
```

## Operator dalam JavaScript

JavaScript mendukung berbagai operator, termasuk operator aritmatika, perbandingan, dan logika.

### Operator Aritmatika

Operator ini digunakan untuk operasi matematika dasar:

```javascript
let penjumlahan = 10 + 5;
let pengurangan = 10 - 5;
let perkalian = 10 * 5;
let pembagian = 10 / 5;
let pangkat = 10 ** 2; // Pangkat dua (10^2)
let sisaBagi = 10 % 3; // Sisa bagi
```

### Operator Perbandingan

Operator ini digunakan untuk membandingkan dua nilai:

```javascript
let lebih = 10 > 5;
let kurang = 10 < 5;
let lebihDariSama = 10 >= 5;
let kurangDariSama = 10 <= 5;
let sama = 10 == 5;
let tidakSama = 10 != 5;
```

### Operator Logika

Operator logika digunakan untuk operasi logika seperti AND (`&&`), OR (`||`), dan NOT (`!`).

```javascript
let AND = true && true;
let OR = true || false;
let NOT = !true;
```

## Menampilkan Hasil ke Konsol

Setelah operasi dilakukan, hasilnya dapat ditampilkan ke konsol menggunakan `console.log()` untuk melihat outputnya.

```javascript
console.log("Nama:", name);
console.log("Umur:", age);
console.log("Apakah sudah menikah?", isMarried);
console.log("Pekerjaan:", job); // Undefined karena belum diberi nilai
console.log("ID:", id.toString()); // Menampilkan symbol sebagai string
console.log("BigInt:", bigInt);
```

## Kesimpulan

Pemahaman dasar tentang JavaScript sangat penting dalam pengembangan web. Dengan menguasai konsep-konsep seperti variabel, tipe data, dan operator, Anda akan dapat menulis kode JavaScript yang lebih efektif dan efisien. Lanjutkan mempelajari JavaScript untuk memahami konsep-konsep yang lebih kompleks seperti fungsi, objek, dan pengendalian alur.
