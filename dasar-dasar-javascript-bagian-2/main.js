// Pengkondisian dengan if-else
const age = 16;

if (age >= 18) {
    console.log("Umur anda sudah dewasa");
} else if (age < 18) {
    console.log("Umur anda belum dewasa");
} else {
    console.log("Anda belum memiliki usia");
}

// Pengkondisian dengan switch-case
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

// Perulangan dengan for
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Perulangan dengan while
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// Perulangan dengan do...while
i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);

// Perulangan dengan for...of
let numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
    console.log(number);
}
