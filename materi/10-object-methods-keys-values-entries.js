let dataSiswa = {
  nama: "Ucup",
  umur: 25,
};

console.log(dataSiswa);

// Object.keys()
console.log(Object.keys(dataSiswa));

// Object.values()
console.log(Object.values(dataSiswa));

// Object.entries()
console.log(Object.entries(dataSiswa));

// Looping dengan entries
for (const [key, values] of Object.entries(dataSiswa)) {
  console.log(`${key} : ${values}`);
}
