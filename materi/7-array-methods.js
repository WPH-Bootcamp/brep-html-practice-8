"use strict";
{
  const arr = [1, 2, 3];
  const hasil = [];

  for (let i = 0; i < arr.length; i++) {
    hasil.push(arr[i] * 2);
  }

  console.log(hasil);
}

{
  const arr = [1, 2, 3];
  const hasil = [];

  arr.map((angka) => hasil.push(angka * 2));
  console.log(hasil);
}

{
  const arr = [1, 2, 3, 4, 5, 6, 7, 7, 3, 2, 5, 1, 6, 7, 8];
  const genap = arr.filter((angkaGenap) => angkaGenap % 2 === 0);
  const ganjil = arr.filter((angkaGanjil) => angkaGanjil % 2 === 1);
  const total = arr.reduce((a, b) => a + b);
  const angkaDiatasDelapan = arr.find((angka) => angka > 3);

  console.log(genap);
  console.log(ganjil);
  console.log(total);
  console.log(angkaDiatasDelapan ?? "Tidak ada");
}
