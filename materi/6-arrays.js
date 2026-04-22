const buah = ["apel", "jeruk", "mangga", true, 20, 10, "Rudi Golden Boy"];
console.log(buah);
console.log(buah[2]);

for (let i = 0; i < buah.length; i++) {
  console.log(buah[i]);
}

console.log(buah.at(-1));

// Mutating Methods Array
let keranjang = ["Laptop", "Mouse", "Keyboard"];

/**
 * 1. push() -> menambahkan item array dari paling belakang
 * 2. unshift() -> menambahkan item array dari paling depan
 * 3. pop() => menghapus item array dari paling belakang
 * 4. shift() => menghapus irem array dari paling depan
 */

keranjang.push("Headset");
keranjang.unshift("Hoodie");
keranjang.pop();
keranjang.shift();

console.log(keranjang);
