// 1. Mengubah Object Menjadi JSON
let dataUser = {
  nama: "ucup",
  umur: 25,
};

console.log(typeof dataUser);
console.log(dataUser);

let dataUserJSON = JSON.stringify(dataUser, null, 2);
console.log(typeof dataUserJSON);
console.log(dataUserJSON);

// 2. Mengubah JSON Menjadi Object
let dataUserObject = JSON.parse(dataUserJSON);
console.log(dataUserObject);
