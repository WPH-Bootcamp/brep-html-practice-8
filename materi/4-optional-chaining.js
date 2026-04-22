const user = {};

console.log(user?.nama ?? "Guest");
console.log(user?.alamat?.kota ?? "alamat belum diisi");

// Contoh Soal 1
const obj = null;

console.log(obj?.a?.b);
