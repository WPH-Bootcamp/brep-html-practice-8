// Function Constructor
function Person(nama, umur) {
  this.nama = nama;
  this.umur = umur;
}

Person.prototype.sapa = function () {
  return `Hello, ${this.nama}`;
};

const p1 = new Person("Ucup", 20);
console.log(p1.nama);
console.log(p1.sapa());

const p2 = new Person("Renday", 25);
console.log(p2.nama);
const p3 = new Person("Joko", 35);
console.log(p3.nama);

console.log(p1 instanceof Person);

const ucup = new Person("Siapa kek", 300);
console.log(ucup.umur);
