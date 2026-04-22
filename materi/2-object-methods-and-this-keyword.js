"use strict";

{
  function sapa() {
    return "Haiiiiii!!!";
  }
  console.log(sapa());

  const user = {
    nama: "Ucup",
    sapa: function () {
      return "Hello!";
    },
  };
  console.log(user.sapa());
}

{
  const user = {
    nama: "Ucup",
    sapa() {
      return `Hello, ${this.nama}`;
    },
  };

  const user2 = {
    nama: "Renday",
    sapa() {
      return `Hello, ${this.nama}`;
    },
  };

  const user3 = {
    nama: "Joko",
    sapa() {
      return `Hello, ${this.nama}`;
    },
  };

  console.log(user.sapa());
  console.log(user2.sapa());
  console.log(user3.sapa());
}

{
  const user = {
    nama: "Ucup",
    sapa() {
      return `Hello, ${this.nama}`;
    },
    perkenalan() {
      return `Saya adalah ${this.nama}`;
    },
  };
  console.log(user.sapa());
  console.log(user.perkenalan());

  const user2 = {
    nama: "Riki",
    sapa() {
      return `Hello, ${this.nama}`;
    },
    perkenalan() {
      return `Saya adalah ${this.nama}`;
    },
  };
  console.log(user2.sapa());
  console.log(user2.perkenalan());

  const user3 = {
    nama: "Joko",
    sapa() {
      return `Hello, ${this.nama}`;
    },
    perkenalan() {
      return `Saya adalah ${this.nama}`;
    },
  };
  console.log(user3.sapa());
  console.log(user3.perkenalan());
}
