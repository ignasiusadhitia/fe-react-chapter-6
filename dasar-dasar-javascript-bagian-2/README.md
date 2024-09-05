# Dasar-dasar JavaScript Bagian 2

Proyek ini mencakup konsep-konsep penting dalam JavaScript seperti pengkondisian dan perulangan. Materi ini sangat penting untuk memahami bagaimana alur logika dan pengulangan bekerja dalam pemrograman.

## Pengkondisian dalam JavaScript

### if-else

Pengkondisian `if-else` digunakan untuk menjalankan blok kode berdasarkan kondisi tertentu. Jika kondisi terpenuhi (`true`), maka blok kode dalam `if` akan dieksekusi. Jika tidak, maka akan memeriksa `else if` atau langsung ke `else`.

```javascript
const age = 16;

if (age >= 18) {
  console.log("Umur anda sudah dewasa");
} else if (age < 18) {
  console.log("Umur anda belum dewasa");
} else {
  console.log("Anda belum memiliki usia");
}
```

### switch-case

Pengkondisian `switch-case` digunakan untuk membandingkan satu nilai terhadap beberapa nilai lainnya. Jika nilai cocok dengan salah satu case, blok kode terkait akan dieksekusi. Jika tidak ada yang cocok, blok default akan dijalankan.

```javascript
switch (age) {
  case 16:
    console.log("Anak-anak");
    break;
  case 17:
    console.log("Remaja");
    break;
  case 18:
    console.log("Dewasa");
    break;
  default:
    console.log("Lainnya");
    break;
}
```

## Perulangan dalam JavaScript

### for

Perulangan `for` digunakan untuk mengulang eksekusi blok kode tertentu sejumlah tertentu. Biasanya digunakan ketika Anda mengetahui berapa kali perulangan harus dijalankan.

```javascript
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

### while

Perulangan `while` terus berjalan selama kondisi yang diberikan `true`. Perulangan ini lebih fleksibel tetapi harus hati-hati untuk menghindari perulangan tak terbatas.

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

### do-while

Perulangan `do...while` mirip dengan `while`, tetapi perbedaannya adalah bahwa blok kode dalam `do` akan selalu dieksekusi setidaknya sekali, bahkan jika kondisi while tidak terpenuhi.

```javascript
i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

### for...of

Perulangan `for...of` digunakan untuk mengulangi elemen dari objek yang dapat diiterasi (seperti array). Ini memudahkan untuk mengakses setiap elemen tanpa harus menggunakan indeks.\

```javascript
let numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
  console.log(number);
}
```

## Kesimpulan

Pemahaman tentang pengkondisian dan perulangan dalam JavaScript sangat penting untuk menulis kode yang efisien dan dinamis. Dengan menguasai konsep-konsep ini, Anda dapat membuat logika yang lebih kompleks dan mengelola alur eksekusi kode dengan lebih baik.
