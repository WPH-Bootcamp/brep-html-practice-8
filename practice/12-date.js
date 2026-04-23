// Contoh Studi Kasus Format Tanggal
const orderDate = new Date();

const formatted = orderDate.toLocaleDateString("id-ID", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

console.log("Order dibuat: ", formatted);
