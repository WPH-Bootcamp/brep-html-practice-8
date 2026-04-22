{
  const user = { nama: "Budi", skor: 80 };
  const userRef = user;

  console.log(user);
  console.log(userRef);

  userRef.skor = 100;

  console.log(user);
  console.log(userRef);

  console.log("===========");
}

// Shallow Copy
{
  const user = { nama: "Budi", skor: 80 };
  const userRef = { ...user };

  console.log(user);
  console.log(userRef);

  userRef.skor = 100;
  userRef.nama = "Ucup";
  console.log(user);
  console.log(userRef);
}

console.log("===========");

// Contoh Bug Shallow Copy
{
  const profil = {
    nama: "Dewi",
    alamat: { kota: "Bandung" },
  };

  const profilCopy = { ...profil };
  console.log(profil);
  console.log(profilCopy);

  profilCopy.nama = "Sandra";
  profilCopy.alamat.kota = "Jakarta";
  console.log(profil);
  console.log(profilCopy);
}

console.log("===========");

// Deep Copy
{
  const profil = {
    nama: "Dewi",
    alamat: { kota: "Bandung" },
  };

  const profilCopy = structuredClone(profil);
  console.log(profil);
  console.log(profilCopy);

  profilCopy.nama = "Nurziza";
  profilCopy.alamat.kota = "Lembang";

  console.log(profil);
  console.log(profilCopy);
}
