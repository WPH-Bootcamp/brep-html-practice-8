// Destructuring adalah tugas untuk membongkar apapun yang sudah disusun

// 1. Array ([])
// Structuring -> Menyusun
let arr = [1, 2, 3, 10, 20, 30, 2, 4, 5, 6];
console.log(arr[0]);
console.log(arr[1]);

// Destructuring -> Membongkar
let [a, , b, c = 0, ...d] = arr;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

console.log([a, b, c]);

console.log("===============");
// 2. Object ({})
const user = { nama: "Dewi", umur: 28 };
const { nama: fullname, umur, role = "none" } = user;
console.log(fullname);
console.log(umur);
console.log(role);

console.log("===============");
const order = {
  produk: {
    nama: "Laptop",
    harga: 8500000,
  },
};

const {
  produk: { nama, harga },
} = order;

console.log(nama);
console.log(harga);

console.log("===============");

const userObj = {
  nama: "Ucup",
  umur: 20,
  alamat: "Jl juanda",
};

function tampilUser({ nama, umur, alamat = "jl untung jawa" }) {
  return `${nama} - ${umur} - ${alamat}`;
}

console.log(tampilUser(userObj));
