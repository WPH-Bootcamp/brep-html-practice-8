const set = new Set([1, 2, 3, 4, 5]);
console.log(set);

set.add("A");
set.add("B");
set.add("A");
set.add("a");
set.delete(2);
set.delete("A");
set.clear();
console.log(set.size);

console.log(set.has("A"));
console.log(set);

// Contoh studi kasus
const nilai = [70, 80, 90, 70, 20, 80, 90];
console.log(nilai);
const nilaiTanpaDuplikat = [...new Set(nilai)];
console.log(nilaiTanpaDuplikat);
