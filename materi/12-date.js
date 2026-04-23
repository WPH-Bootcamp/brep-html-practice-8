"use strict";
// 1. Membuat Date

// Waktu Sekarang
const now = new Date();
console.log(now);

// Dari String (ISO Format - Recommended)
const tgl1 = new Date("2026-04-20");
console.log(tgl1);

// Dari parameter (tahun, bulan, tanggal)
// Notes : Bulan januari start dari 0 sampai desember yaitu 11
// const bulan = [jan, feb, mar, apr, mei, jun, jul, aug, sept, okt, nov, des]
const tgl2 = new Date(2025, 0, 15);
console.log(tgl2);

// 2. Getter (Date)
const sekarang = new Date();

console.log(sekarang.getFullYear());
console.log(sekarang.getMonth());
console.log(sekarang.getDate());
console.log(sekarang.getDay());
console.log(sekarang.getHours());

// 3. Timestamp
const timestamp = Date.now();
console.log(timestamp);

// 4. Formatting
const tgl = new Date("2025-08-12");
console.log(tgl.toLocaleDateString("id-ID"));
console.log(tgl.toLocaleTimeString("id-ID"));
console.log(tgl.toISOString());
